import React, { useState, useContext } from 'react';
import Route from 'react-router-dom';
import Recipe from './Recipe';
import starterRecipes from './starterrecipes';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { MenuContext } from './context/menu.context';
import './RecipeList.css';

function RecipeList() {
  const { dispatch } = useContext(MenuContext);
  const recipes = starterRecipes.map(element => {
    return (
      <Col md={6} lg={4}>
        <Card className='card'>
          <Card.Img variant="top" src={element.image} alt='food image' fluid />
          <Card.Body>
            <Card.Title>{element.name}</Card.Title>
            <Card.Text>
              {element.instructions}
            </Card.Text>
            <button className="btn btn-dark btn-lg" style={{margin: '10px'}}>Go To Recipe</button>
            <button className="btn btn-dark btn-lg"
            onClick={() => dispatch({type: 'ADD', name: element.name, image: element.image })
          }>Add to Menu</button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
    return (
      <div className='RecipeList'>
        <h1>Recipes List</h1>
        <Button className='newrecipebutton btn btn-dark btn-lg' href='/recipes/new'>Add a New Recipe</Button>
        <Container>
          <Row>
            {recipes}
          </Row>
        </Container>
      </div>
    );
};

export default RecipeList;
