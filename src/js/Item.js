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
                <div className="caption" style={{bottom: order === 1 ? '35px' : '0px',}}>{caption}</div>
  			</div>)
	}
}