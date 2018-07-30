import React, { PropTypes, Component } from 'react';
import Item from './Item'

class Carousel extends Component {

constructor(props){
  super(props)
}

  render() {
    const { title, children } = this.props
  
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>{ title }</h2>
              { children.map((child, index) => (
                  <Item url={child.url} caption={child.caption} key={index}/>
              )) }         
        </div>
    )
  }
}
export default Carousel;