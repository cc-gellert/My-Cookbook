import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { CookbookContext, CookbookProvider } from './context/cookbook.context';
import starterRecipes from './starterrecipes';
import './NewRecipeForm.css';

function NewRecipeForm(props){
  const { recipes, dispatch } = useContext(CookbookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', name: 'name', ingredients: 'ingredients', instructions: 'instructions', image: 'image' });
  };
  return (
    <CookbookProvider>
      <Container className='newrecipeform'>
        <h1 style={{ color: 'rgb(161, 3, 3)' }}>Add a New Recipe</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formRecipeName">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Recipe Name" required />
          </Form.Group>
          <Form.Group controlId="formIngredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control type="text" name='ingredients' placeholder="1 Banana, 2 eggs, etc." required />
          </Form.Group>
          <Form.Group controlId="formInstructions">
            <Form.Label>Instructions</Form.Label>
            <Form.Control as="textarea" rows='5' name='instructions' placeholder="Instructions" required />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type='text' name='image' placeholder="Image URL" required />
          </Form.Group>
          <Button variant="outline-danger" className='button' size='lg' type="submit">
            Submit
          </Button>
          <Button variant='outline-success' size='lg' className='gobackbutton' href='/recipes'>
            Go Back to Recipe List
          </Button>
        </Form>
      </Container>
    </CookbookProvider>
  );
}

export default NewRecipeForm;
