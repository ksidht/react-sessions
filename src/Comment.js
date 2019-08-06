import React, { Component } from 'react';
import UserInfo from './UserInfo';


class Comment extends Component {

	constructor (props) {
		super(props);
		console.log('contructor');
		this.state = {name: "Hello"};
	}


	componentDidMount () {
		console.log('componentDidMount');
		this.setState({name: "Hello2", msg: "Hello"});
		// this.state = {name: "hello2"};
	}	


	componentDidUpdate () {
		console.log('componentDidUpdate');
	}	

	render() {
		console.log('render');
		// console.log(this);
		return (
			<div className="Comment">
				<UserInfo user={this.props.author}/>
				<div className="Comment-text">{this.state.name}</div>
				<div className="Comment-date">
					{formatDate(this.props.date)}
				</div>
			</div>
		)
	}
}

function formatDate(date) {
  return date.toLocaleDateString();
}

export default Comment;