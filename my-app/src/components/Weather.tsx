import * as React from 'react';
import { Fragment } from 'react';
import logo1 from '../img/1.png';
import logo2 from '../img/2.png';
import logo3 from '../img/3.png';
import logo4 from '../img/4.png';
import logo5 from '../img/5.png';
import logo6 from '../img/6.png';
import logo7 from '../img/7.png';

const Weather = (props: any) => (<Fragment>

	<div className='weatherOutput'>
		{
			props.country && <p> Country:
	 		<span className='weatherData'> {props.country}</span>
			</p>
		}
		{
			props.city && <p> City:
	 		<span className='weatherData'> {props.city}</span>
			</p>
		}
		{
			props.weatherID === 800 && <p> Conditions:
	 		<span className='weatherData'> {props.weatherDesc.charAt(0).toUpperCase() + props.weatherDesc.substring(1, props.weatherDesc.length)} <div className='logoClass'>
			<img src={logo1} height='275' />
		  </div></span>
			</p> 
		}
		{
			props.weatherID >= 801 && props.weatherID <= 804 && <p> Conditions:
	 		<span className='weatherData'> {props.weatherDesc.charAt(0).toUpperCase() + props.weatherDesc.substring(1, props.weatherDesc.length)} <div className='logoClass'>
			<img src={logo2} height='275' />
		  </div></span>
			</p> 
		}
		{
			props.weatherID >= 200 && props.weatherID <= 232 && <p> Conditions:
	 		<span className='weatherData'> {props.weatherDesc.charAt(0).toUpperCase() + props.weatherDesc.substring(1, props.weatherDesc.length)} <div className='logoClass'>
			<img src={logo3} height='275' />
		  </div></span>
			</p> 
		}
		{
			props.weatherID >= 300 && props.weatherID <= 321 && <p> Conditions:
	 		<span className='weatherData'> {props.weatherDesc.charAt(0).toUpperCase() + props.weatherDesc.substring(1, props.weatherDesc.length)} <div className='logoClass'>
			<img src={logo4} height='275' />
		  </div></span>
			</p> 
		}
		{
			props.weatherID >= 500 && props.weatherID <= 531 && <p> Conditions:
	 		<span className='weatherData'> {props.weatherDesc.charAt(0).toUpperCase() + props.weatherDesc.substring(1, props.weatherDesc.length)} <div className='logoClass'>
			<img src={logo5} height='275' />
		  </div></span>
			</p> 
		}
		{
			props.weatherID >= 600 && props.weatherID <= 622 && <p> Conditions:
	 		<span className='weatherData'> {props.weatherDesc.charAt(0).toUpperCase() + props.weatherDesc.substring(1, props.weatherDesc.length)}<div className='logoClass'>
			<img src={logo6} height='275' />
		  </div></span>
			</p> 
		}
		{
			props.weatherID >= 701 && props.weatherID <= 781 && <p> Conditions:
	 		<span className='weatherData'> {props.weatherDesc.charAt(0).toUpperCase() + props.weatherDesc.substring(1, props.weatherDesc.length)} <div className='logoClass'>
			<img src={logo7} height='275' />
		  </div></span>
			</p> 
		}
		{
			props.temp && <p> Temperature:
	 		<span className='weatherData'> {props.temp} ºC</span>
			</p>
		}
		{
			props.humidity && <p> Humidity:
	 		<span className='weatherData'> {props.humidity}% </span>
			</p>
		}
		{
			props.windSpeed !== 1 && props.windSpeed !== '' && <p> Wind Speed:
	 		<span className='weatherData'> {props.windSpeed} meters/sec </span>
			</p>
		}
		{
			props.windSpeed === 1 && <p> Wind Speed:
			<span className='weatherData'> {props.windSpeed} meter/sec </span>
			</p>
		}
	</div>
	<div>
		{
			props.error && <p className='outputError'>{props.error}</p>
		}
	</div>
</Fragment>
);

export default Weather;