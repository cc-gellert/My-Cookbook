const starterRecipes = [
  {
    name: 'Honey Roasted Carrots',
    ingredients:['Honey', 'Carrots', 'Salt', 'Pepper'],
    instructions: 'Turn oven on to 400 degrees. Peel carrots and cut off tops. Lay in single layer on pan, brush with honey, and season with salt and pepper. Roast in oven for 30 minutes or until soft.',
    image: 'https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Easiest Pumpkin Pie',
    ingredients: ['1 pie crust', '1 15oz can of pumpkin puree', '1 can evaporated milk', '3/4 cup of sugar', 'salt to taste', '2 eggs', '1 tbsp pumpkin pie spice'],
    instructions: 'Turn oven to 350 degrees. Line pie pan with pie crust. Mix remaining ingredients in a bowl until blended. Then bake for 1 hour or until top of pie is golden brown.',
    image: 'https://images.unsplash.com/photo-1507383013594-af3890d5d6f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80'
  },
  {
    name: 'Rosemary Steak',
    ingredients: ['Steak', 'Oil', 'Rosemary', 'Salt', 'Pepper'],
    instructions: 'Heat a pan up until hot with oil. Rub steak with rosemary, salt and pepper. Sear on one side until halfway to desired doneness, then flip.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Sunday Morning Eggs',
    ingredients: ['Eggs', 'Butter', 'Salt', 'Pepper', 'Parsley', 'Chives'],
    instructions: 'Butter and heat up a pan until sizzling. Crack eggs into pan. Season with salt, pepper, chives, and parsley. Cook until yolk is to desired doneness.',
    image: 'https://images.unsplash.com/photo-1515481774243-98fd57ff2bd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Easy Roast Chicken',
    ingredients: ['1 whole chicken', 'Olive oil', 'Salt', 'Pepper', 'Lemon', 'Carrots', 'Potatoes'],
    instructions: 'Turn oven to 350 degrees. Prepare chicken by rubbing with salt, pepper, and lemon juice. Cut up carrots and potatoes into chunks. Season with olive oil, salt and pepper. Lay chicken on top of carrots and potatoes and bake for 1 hour or until done.',
    image: 'https://images.unsplash.com/photo-1567209387156-b3304198ad44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'
  },
  {
    name: 'Tomato Basil Soup',
    ingredients: ['1 can of crushed tomatoes', 'Milk', 'Cream', 'Basil', 'Salt', 'Pepper'],
    instructions: 'Heat up a soup pot on the stove over low heat. Mix in the crushed tomatoes, milk, and cream. Stir together. Once gently simmering, add salt and pepper, then season with basil leaves.',
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Fruit Bowl Appetizer',
    ingredients: ['Strawberries', 'Blackberries', 'Grapfruit', 'Oranges', 'Powdered sugar', 'Whipped cream'],
    instructions: 'Cut up berries. Peel and cut up oranges and grapefuit. Mix together in a bowl. Top with a bit of powdered sugar and a dollop of whipped cream.',
    image: 'https://images.unsplash.com/photo-1467887633195-23e82423e499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'Heirloom Tomato Tart',
    ingredients: ['Heirloom Tomatoes', '1 pie crust', 'Basil', 'Mozzarella cheese', 'Oregano', 'Salt', 'Pepper'],
    instructions: 'Turn oven on to 400 degrees. Lay pie crust inside greased pie dish. Slice the tomatoes and mozzarella chese thinly and layer on top of pie crust. Top with basil, oregano, salt, and pepper. Roast in oven for 25 minutes.',
    image: 'https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'Dinner Party Appetizers Plate',
    ingredients: ['Prosciutto', 'Olives', 'Brie cheese', 'Bread', 'Salami'],
    instructions: 'Layer Prosciutto and salami on a decorative plate. Top with a few olives. Cut brie cheese into wedges and lay on separate plate. Slice bread and lay on the side. Offer guests wine as they arrive.',
    image: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80'
  },
  {
    name: 'Spaghetti a la Rustica',
    ingredients: ['Spaghetti', 'Onion', 'Garlic', '1 can of crushed tomatoes', 'White wine', 'Olive Oil', 'Salt', 'Pepper'],
    instructions: 'Cook and drain spaghetti according to box instructions. Dice onions and mince garlic. Add olive oil to pan and cook over medium heat. Once hot add onions and garlic; saute until onions are translucent. Add white wine and simmer. Add salt, pepper, and crushed tomatoes. Toss in spaghetti and mix to coat.',
    image: 'https://images.unsplash.com/photo-1548247661-3d7905940716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'The Best Mushroom Chicken',
    ingredients: ['Chicken legs', 'Mushrooms', 'Onions', 'Garlic', 'Salt', 'Pepper', 'Olive oil'],
    instructions: 'Heat oven to 350 degrees. Rub olive oil on bottom of a casserole dish. Mince garlic and dice the onions. Rub chicken legs with more olive oil, the onions, garlic, salt, and pepper. Put in casserole dish and cook for 25 minutes. Then add the sliced mushrooms and bake for another 10 minutes.',
    image: 'https://images.unsplash.com/photo-1566918755129-8adaf6ff195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80'
  }
];

export default starterRecipes;
