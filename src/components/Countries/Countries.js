import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    
    
    const [countries,setCountry]=useState([])
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(data=>setCountry(data.data))
    },[])
    
    
    return (
        <div>
            {
                countries.map(country=><Country 
                    country={country}
                    ></Country>
                )
            }
        </div>
    );
};

export default Countries