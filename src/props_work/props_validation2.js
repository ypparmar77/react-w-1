import React from 'react'
import PropTypes from 'prop-types'

export default function Props_validation2(props) {
  return (
    <>
    <h3>this is a {props.name} best</h3>
    <h1>ya ya {props.title}</h1>
    </>
    
  )
}


Props_validation2.propTypes = {
    name : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired


}