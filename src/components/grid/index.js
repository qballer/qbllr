import React from 'react'
import {Block} from '../block'

import './grid.scss'

const GridBlock = React.createClass({
  render: function () {
    return (<span className='gallery'>
      <Block className='gallery__item' />
      <Block className='gallery__item' />
      <Block className='gallery__item' />
      <Block className='gallery__item' />
      <Block className='gallery__item' />
      <Block className='gallery__item' />
    </span>)
  }
})

export {GridBlock}
