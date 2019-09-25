import React, { Component } from 'react';
import homeimage from './homeimage.jpg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1 className="display-4">Welcome to My Cookbook!</h1>
      <p className="lead">An app for collecting recipes, menu planning, and grocery list making, built with React</p>
      <img src={homeimage} alt='Cook stirring vegetables in a hot pan' />
      <p>Photo by <a href='https://unsplash.com/@kevinmccutcheon'>Kevin McCutcheon</a> on Unsplash</p>
      <a className="btn btn-dark btn-lg" href="/recipes" role="button">Go To My Recipes</a>
    </div>
  );
};

export default Home;
