import React from 'react';

const Navigation = ({navigation, fetchPlanets}) => {
  return (
    <div className="navigation" >
    {navigation.prevUrl && <div className="waves-effect waves-light btn-large blue-grey darken-1" onClick={()=>fetchPlanets(navigation.prevUrl)}>Prev</div>}
    {navigation.nextUrl && <div className="waves-effect waves-light btn-large blue-grey darken-1" onClick={()=>fetchPlanets(navigation.nextUrl)}>Next</div>}
   </div>
  )
};

export default Navigation;
