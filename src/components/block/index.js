import React from 'react'

import './block.scss'

const Block = React.createClass({
  render: function () {
    return (
      <div style={{width: this.props.width, height: this.props.height}} className='info' />
     )
  }
})

export {Block}
