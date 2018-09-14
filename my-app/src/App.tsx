import Button from '@material-ui/core/Button';
import * as React from 'react';
import { Fragment } from 'react';
import './App.css';
import { ThemeContext, themes } from './components/theme';

interface IState {
  color: any,
  theme: any,
  toggleTheme: any
}

const colors = ['rgb(179, 68, 68)', 'rgba(179, 68, 68, 0.9)'];

export default class App extends React.Component<{}, IState, any> {


  constructor(props: any) {
    super(props);
    this.state = {
      color: 'rgb(179, 68, 68)',
      theme: themes.dark,
      toggleTheme: this.toggleTheme(),
    };
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
            <div className="centreText" style={{ backgroundColor: theme.theme.background}}>

              <Fragment>
                <div className="inputArea">

                  <h1 className="countryText">Enter country name</h1>
                  <form>
                    <label>
                      <input type="text" />
                    </label>
                    <input className="submit" type="submit" value="Get weather" />
                  </form>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <h1 className="cityText">Enter city name</h1>
                  <form>
                    <label>
                      <input type="text" />
                    </label>
                    <input className="submit" type="submit" value="Get weather" />
                  </form>

                </div>

                <div className="outputArea" style={mainColor} />
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
// https://www.youtube.com/watch?v=204C9yNeOYI got up to 12:32
