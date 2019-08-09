import React, { Component } from 'react';
import UserInfo from './UserInfo';


class Comment extends Component {

	constructor (props) {
		super(props);
		console.log('contructor');
		this.state = {name: "Hello"};
		// this.handleClick = this.handleClick.bind(this);
	}


	componentDidMount () {
		console.log('componentDidMount');
		this.setState({name: "Hello2", msg: "Hello"});
		// this.state = {name: "hello2"};
		
		fetch('http://example.com/movies.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log(JSON.stringify(myJson));
		});
	}	


	componentDidUpdate () {
		console.log('componentDidUpdate');
	}	
	
	handleClick(e) {
		e.preventDefault();
		console.log(e);
		console.log('The link was clicked.');
		this.clickAfterHandleClick();
	}

	clickAfterHandleClick() {
		console.log(this);
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
				<a href="#" onClick={(c) => this.handleClick(c, 'event')}>
					Click me
				</a>
			</div>
		)
	}
}

function formatDate(date) {
  return date.toLocaleDateString();
}

export default Comment;