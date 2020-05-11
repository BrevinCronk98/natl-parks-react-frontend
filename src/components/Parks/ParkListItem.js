import React from "react";
import PropTypes from 'prop-types';

function ParkListItem(props) {

  const {name, type, description, location, state, id, whenParkClicked }= props;

  return (
    <React.Fragment>
      <div onClick = {() => whenParkClicked(id)}>
        <h3>{name}</h3>
        <h4>Type: {type}</h4>
        <h4>Location: {location} | {state}</h4>
        <p>{description}</p>
        <hr />
      </div>
    </React.Fragment>
  )
}

ParkListItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  state: PropTypes.string,
  id: PropTypes.number,
  whenParkClicked: PropTypes.func
}
export default ParkListItem;