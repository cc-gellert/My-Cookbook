import React, { Component } from 'react';
import homeimage from './homeimage.jpg';
import './Home.css';

class Home extends Component {
  render(){
    return (
      <div className='Home'>
        <h1>Welcome to My Cookbook!</h1>
        <h3>An app for collecting recipes, menu planning, and grocery list making, built with React</h3>
        <img src={homeimage} alt='Cook stirring vegetables in a hot pan' />
        <p>Photo by <a href='https://unsplash.com/@kevinmccutcheon'>Kevin McCutcheon</a> on Unsplash</p>
      </div>
    );
  }
};

export default Home;
