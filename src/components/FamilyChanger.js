import React from 'react';
import PropTypes from 'prop-types';
export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" value={props.updateFamily}
    onChange={event=>props.update(event.target.value)}
    disabled={!props.allowEdit}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}
FamilyChanger.propTypes = {
  fontFamily:PropTypes.string.isRequired,
  update:PropTypes.func.isRequired,
  allowEdit:PropTypes.bool.isRequired,
  };