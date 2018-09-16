import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Done from '@material-ui/icons/Done';
import * as React from 'react';


const StyledButton = withStyles({
    root: {
        background: 'rgb(53, 55, 180)',
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 50,
        padding: '0 100px',
        top: 150,
        fontSize: 25,
        fontFamily: 'Roboto'
    }
})(Button);

const IconLabel = withStyles({
    root: {
        position: 'absolute',
        left: 20,
        
        fontSize: 30,
        color: 'white',
    }
})(Done)

const Input = (props: any) => (
    <form onSubmit={props.getWeather}>
        <h1 className='countryText'>Enter country name</h1>
        <input className='countryInput' type='text' name='country' placeholder='Country name...' />
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
        <h1 className='cityText'>Enter city name</h1>
        <input className='cityInput' type='text' name='city' placeholder='City name...' />
        <div className='stylebutton'><StyledButton type='submit'><IconLabel className='icon' />Submit</StyledButton></div>
    </form>
);

export default Input;