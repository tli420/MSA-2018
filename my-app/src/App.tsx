import Button from '@material-ui/core/Button';
import * as React from 'react';
import { Fragment } from 'react';
import './App.css';
import Input from "./components/Input";
import { ThemeContext, themes } from './components/theme';
import Weather from "./components/Weather";

interface IState {
  color: any,
  theme: any,
  toggleTheme: any,
  temp: any,
  country: any,
  city: any,
  humidity: any,
  weatherDesc: any,
  windSpeed: any,
  error: any
}

const colors = ['rgb(179, 68, 68)', 'rgba(179, 68, 68, 0.9)'];

const API_KEY = 'b3271e82703f28ae14b3488d4753a03a';

export default class App extends React.Component<{}, IState, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      color: 'rgb(179, 68, 68)',
      theme: themes.dark,
      toggleTheme: this.toggleTheme(),
      temp: '',
      country: '',
      city: '',
      humidity: '',
      weatherDesc: '',
      windSpeed: '',
      error: ''
    };
  }

  public getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await API_CALL.json();
    if (city && country) {
      this.setState({
        temp: data.main.temp,
        country: data.sys.country,
        city: data.name,
        humidity: data.main.humidity,
        weatherDesc: data.weather[0].description,
        windSpeed: data.wind.speed,
        error: ""
      });
    } else {
      this.setState({
        temp: '',
        country: '',
        city: '',
        humidity: '',
        weatherDesc: '',
        windSpeed: '',
        error: 'Enter a valid country and city combination'
      });
    }
  }

  public toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.blue
          ? themes.dark
          : themes.blue,
    }));
  };

  public componentDidMount() {
    let colorPos = 0;
    setInterval(() => {
      if (colors.length - 1 > colorPos) {
        this.setState({
          color: colors[colorPos]
        });
        colorPos++;
      }
      else {
        this.setState({
          color: colors[colorPos]
        });
        colorPos = 0;
      }
    }, 500)
  }

  public changeColor(e: any) {
    this.setState({
      color: e.target.value.bind(this)
    })
  }

  public render() {

    const mainColor = {
      background: this.state.color
    };

    return <div className="container-fluid" >
      <ThemeContext.Provider value={this.state}>
        <ThemeContext.Consumer>
          {theme => (
            <div className="centreText" style={{ backgroundColor: theme.theme.background }}>

              <Fragment>
                <div className="inputArea">

                  <Input getWeather={this.getWeather} />
                </div>
                <div className="outputArea" style={mainColor}>
                  <Weather
                    temp={this.state.temp}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    weatherDesc={this.state.weatherDesc}
                    windSpeed={this.state.windSpeed}
                    error={this.state.error}
                  />


                </div>
              </Fragment>

            </div>
          )}
        </ThemeContext.Consumer>

        <div className="button">
          <Button onClick={this.toggleTheme} style={mainColor} size={'large'}>Change Theme</Button>
        </div>

      </ThemeContext.Provider>
    </div>

  }

}



