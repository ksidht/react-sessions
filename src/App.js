import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

class App extends Component {
  render () {
    console.log(this);
    return (
      <div>
        <Comment 
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
      </div>
    );
  } 

}


export default App;
