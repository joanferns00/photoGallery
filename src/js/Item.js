import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Item extends Component {
	constructor(props){
		super(props)
	}

	render(){
  		const { url, caption, order } = this.props		
  		return(<div>
                <img style={{width: '100%'}} src={url} alt={caption}/>
                <div style={{padding: '30px 0px', position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.5)', lineHeight: '25px', bottom: order === 1 ? '90px' : '0px', transition: 'bottom 1000ms ease-in'}}>{caption}</div>
  			</div>)
	}
}