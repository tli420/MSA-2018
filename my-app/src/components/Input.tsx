import * as React from 'react';

const Input = (props: any) => (
    <form onClick={props.getWeather}>
        <h1 className="countryText">Enter country name</h1>
        <input type="text" name="country" placeholder="Country name..." />
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
        <input type="text" name="city" placeholder="City name..." />
        <button className="submit">Submit</button>
    </form>
);

export default Input;