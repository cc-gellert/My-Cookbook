import React, { Component } from 'react';
import './Recipe.css';
import Card from 'react-bootstrap/Card';
import starterRecipes from './starterrecipes';

function Recipe() {
  return (
    <div className='Recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{starterRecipes.name}</Card.Title>
          <Card.Text>
            <ul>{starterRecipes.ingredients}</ul>
            {starterRecipes.instructions}
          </Card.Text>
          <a className="btn btn-dark btn-lg" href="/recipes" role="button">Go To My Recipes</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipe;
