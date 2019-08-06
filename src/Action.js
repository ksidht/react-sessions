import React from 'react';

export default function Action() {
    function handleClick(e) {
      e.preventDefault();
      console.log(e);
      console.log('The link was clicked.');
    }
  
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  }