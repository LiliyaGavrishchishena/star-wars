import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({navigation, fetchPlanets}) => {
  return (
    <div className="navigation" >
    {navigation.prevUrl && <div className="waves-effect waves-light btn-large blue-grey darken-1" onClick={()=>fetchPlanets(navigation.prevUrl)}>Prev</div>}
    {navigation.nextUrl && <div className="waves-effect waves-light btn-large blue-grey darken-1" onClick={()=>fetchPlanets(navigation.nextUrl)}>Next</div>}
   </div>
  )
};

Navigation.propTypes = {
  navigation:PropTypes.object,
  fetchPlanets:PropTypes.func,
}

export default Navigation;
