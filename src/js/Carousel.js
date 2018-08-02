import React, { PropTypes, Component } from 'react';
import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'
import Item from './Item'

class Carousel extends Component {

constructor(props){
  super(props)
  this.state = {
    position: 0,
    direction: props.children.length === 2 ? 'prev' : 'next',
    sliding: false,
    firstTime: true
  }  
}


getOrder(itemIndex) {
  const { position } = this.state
  const { children } = this.props
  const numItems = children.length || 1
  if (itemIndex - position < 0) {
    return numItems - Math.abs(itemIndex - position)
  }
  return itemIndex - position
}

  render() {
const { title, children } = this.props
    const { sliding, direction, position, firstTime} = this.state  
  
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>{ title }</h2>
        <Wrapper>
            <CarouselContainer
                sliding={ sliding }
                direction={ direction }
                firstTime={ firstTime }>
              { children.map((child, index) => (
                <CarouselSlot
                  key={ index }
                  order={ this.getOrder(index) }>
                  <Item url={child.url} caption={child.caption} order={ this.getOrder(index) }/>
                </CarouselSlot>
              )) }
            </CarouselContainer>      
        </Wrapper>      
        </div>
    )
  }
}
export default Carousel;