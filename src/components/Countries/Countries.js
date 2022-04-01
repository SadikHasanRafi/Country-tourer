import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import CountryChoice from '../CountryChoice/CountryChoice';

const Countries = () => {
    
    
    const [countries,setCountry]=useState([])
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(data=>setCountry(data.data))
        // fetch('./Countries.json')
        // .then(res=>res.json())
        // .then(data=>setCountry(data))
    },[])
    
    
    return (
        <div className='flex'>
            <div className='w-9/12'>
                <div className='grid grid-cols-3'>
                    {
                        countries.map(country=><Country 
                            country={country}
                            key={country.name.common}
                            ></Country>
                        )
                    }

                </div>            
            </div>
            <div className='rafi w-3/12'>
                <CountryChoice></CountryChoice>
            </div>
        </div>
    );
};

export default Countries