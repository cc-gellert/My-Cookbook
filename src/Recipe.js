import React, { Component } from 'react';
import './Recipe.css';
import Card from 'react-bootstrap/Card';
import starterRecipes from './starterrecipes';

function Recipe(props) {
  const { recipe } = this.props;
  return (
    <div className='Recipe'>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>
            <ul>{recipe.ingredients}</ul>
            <p>{recipe.instructions}</p>
          </Card.Text>
          <a className="btn btn-dark btn-lg" href="/recipes" role="button">Go Back To My Recipes</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipe;
