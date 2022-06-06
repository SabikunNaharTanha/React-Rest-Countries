import React from 'react';
import './Country.css'
const Country = (props) => {
    const { area, population, region, name, flags } = props.country;
    return (
        <div className='Country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Country Population: {population}</h4>
            <p>Country Area: {area}</p>
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;