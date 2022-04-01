import React from "react";

const Country = (props) => {
  const id = props.key;
  const {
    name,
    unMember,
    maps,
    coatOfArms,
    area,
    population,
    capital,
    continents,
    flags,
    independent
  } = props.country;
  const { common, official } = name;
  const { googleMaps } = maps;

  let flagPNG = flags.png;
  let coatOfArmsPNG = coatOfArms.png;

  function boolCheck (boolValue){
    if(boolValue == true){
        boolValue = 'Yes';
    }
    else{
        boolValue = 'No'
    }
    return boolValue;
  }



  return (
    <div>
        <div className="rafi p-8 w-72 m-10 rounded-2xl h-70">
          <p>Country Common name: {common}</p>
          <p>Country Official name: {official}</p>
          <p>UN member: {boolCheck(unMember)}</p>
          <p>Area: {area}</p>
          <p>Continents: {continents}</p>
          <p>Population: {population}</p>
          <p>Independent: {boolCheck(independent)}</p>
          <a target="_blank" href={googleMaps}> Maps </a>
          <p>Capital: {capital}</p>
          {/* <img src={flagPNG} alt="" />
          <img src={coatOfArmsPNG} alt="" /> */}
        <button>Add to choice</button>
      </div>
    </div>
  );
};

export default Country;
