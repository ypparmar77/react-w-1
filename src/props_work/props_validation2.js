import React from 'react'
import PropTypes from 'prop-types'

export default function Props_validation2(props) {
  return (
    <>
    <h1>This is a {props.text}</h1>
    <p>Date : {props.date}</p>
    </>
  );
}

Props_validation2.propTypes ={
    text : PropTypes.string.isRequired,
    date : PropTypes.number.isRequired
}

