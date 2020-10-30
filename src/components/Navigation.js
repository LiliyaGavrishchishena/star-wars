import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({navigation, fetchPlanets}) => {
  return (
    <div className="navigation">
    {navigation.prevUrl && <button className="waves-effect waves-light btn-large blue-grey darken-1" onClick={()=>fetchPlanets(navigation.prevUrl)}>Prev
    </button>}

    {navigation.nextUrl && <button className="waves-effect waves-light btn-large blue-grey darken-1" onClick={()=>fetchPlanets(navigation.nextUrl)}>Next</button>}
   </div>
  )
};

Navigation.propTypes = {
  navigation:PropTypes.object,
  fetchPlanets:PropTypes.func,
}

export default Navigation;
