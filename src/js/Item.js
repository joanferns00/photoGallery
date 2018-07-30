import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Item extends Component {
	constructor(props){
		super(props)
	}

	render(){
  		const { url, caption } = this.props		
  		return(<div>
                <img src={url} alt={caption}/>
                <div style={{position: 'relative', bottom: '50px'}}>{caption}</div>
  			</div>)
	}
}