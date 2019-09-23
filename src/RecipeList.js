import React, { Component } from 'react';
import Recipe from './Recipe';
import NewRecipeForm from './NewRecipeForm';
import starterRecipes from './starterrecipes';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './RecipeList.css';

class RecipeList extends Component {
  render(){
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
              <a className="btn btn-dark btn-lg" href='#' role="button">Go To Recipe</a>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <div className='RecipeList'>
        <h1>Recipes List</h1>
        <Container>
          <Row>
            {recipes}
          </Row>
        </Container>
      </div>
    );
  }
};

export default RecipeList;
