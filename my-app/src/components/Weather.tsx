import * as React from "react";
import {Fragment} from 'react';

const Weather = (props: any) => (<Fragment>
	<div className="weatherOutput">
		{
			props.country && <p> Country:
	 		<span className="weatherData"> {props.country}</span>
			</p>
		}
		{
			props.city && <p> City:
	 		<span className="weatherData"> {props.city}</span>
			</p>
		}
		{
			props.weatherDesc && <p> Conditions:
	 		<span className="weatherData"> {props.weatherDesc.charAt(0).toUpperCase() + props.weatherDesc.substring(1, props.weatherDesc.length)} </span>
			</p>
		}
		{
			props.temp && <p> Temperature:
	 		<span className="weatherData"> {props.temp} ºC</span>
			</p>
		}
		{
			props.humidity && <p> Humidity:
	 		<span className="weatherData"> {props.humidity}% </span>
			</p>
		}
		{
			props.windSpeed && <p> Wind Speed:
	 		<span className="weatherData"> {props.windSpeed} meters/sec </span>
			</p>
		}
		
	</div>
	<div>
	{
			props.error && <p className="outputError">{props.error}</p>
		}
	</div>
</Fragment>
);

export default Weather;