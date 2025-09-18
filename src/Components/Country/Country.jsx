import React, { useState } from 'react';
import './Country.css'

const Country = ({ country,handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false)
    // console.log(country.population.population);
    const handleVisited = () => {
        // 1st system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // 2nd system
        // setVisited(visited ? false : true)

        // 3rd system
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        // <div className={`country ${visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h4>Capital: {country.capital.capital[0]}</h4>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area}{
                country.area.area > 300000 ? "Big country" : "Small country"}</p>
            <h4>Population: {country.population.population}</h4>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

        </div>
    );
};

export default Country;