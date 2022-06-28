import React, { Component } from 'react'
import UpdatedComp from './HOC'


 class Hover extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
        <div className='HOC'>
      <h2 onMouseOver={incrementCount}> Example :  Hover {count}</h2>
      </div>
    )
  }
}

export default UpdatedComp (Hover)