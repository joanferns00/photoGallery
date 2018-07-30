import React, {Component} from 'react';
import {render} from 'react-dom';

import Carousel from './Carousel'

const imageArray = [
{  url     : 'http://via.placeholder.com/400x250/FF0000/000000',
   caption : 'Caption 1'},
{  url     : 'http://via.placeholder.com/400x250/00FF00/000000',
   caption : 'Caption 2'},   
{  url     : 'http://via.placeholder.com/400x250/0000FF/000000',
   caption : 'Caption 3'},
{  url     : 'http://via.placeholder.com/400x250/FF00FF/000000',
   caption : 'Caption 4'},
{  url     : 'http://via.placeholder.com/400x250/008080/000000',
   caption : 'Caption 5'},   
{  url     : 'http://via.placeholder.com/400x250/00FFFF/000000',
   caption : 'Caption 6'},   
]

export default class MyGallery extends Component{
  render(){
    return (
        <Carousel title={"My gallery"} children={imageArray}/>
      )
  }
}

render(<MyGallery/>, document.getElementById('app'));