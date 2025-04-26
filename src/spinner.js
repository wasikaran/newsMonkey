import React, { Component } from 'react'
import spimmer from './spimmer.gif';

export class spinner extends Component {
  render() {
    return (
      <div classNmae='text-center justify-content-center d-flex'>
        <img classNmae="my-3 text-center" src={spimmer} alt="spinner" />
      </div>
    )
  }
}

export default spinner
