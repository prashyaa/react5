import React, { Component } from 'react'
import UpdatedComp from './HOC'

 class ClickCount extends Component {
  
  render() {
    const {count,incrementCount} = this.props
    return (
        <div className='HOC'>
        <span>Click Counter :  </span>
      <button onClick={incrementCount}>ClickCount {count}</button>
      </div>
    )
  }
}

export default UpdatedComp (ClickCount)