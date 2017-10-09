// Code Product Component Here
import React from "react";
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return(
      <div>
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.propTypes = {
  producer: PropTypes.bool,
  name: PropTypes.string.isRequired,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error("You need a value");
    }
    else if (isNaN(weight)) {
      return new Error("You need to type in a number");
    }
    else if (weight < 80 || weight > 300){
      return new Error("You are out of range of 80-300");
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}
