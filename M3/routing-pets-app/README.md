# Routing Demo: Pets App

Now we'll build a react router demo with slightly more complex routing logic.

## TODO: src/index.js

Wrap our App component with the BrowserRouter.

## TODO: src/App.js

Use the Switch component to use exclusive routing logic.

## TODO: src/Components/Pets/Pets.js

First, checkout the render method to see how it works. Then:

- Complete `componentDidMount()`
- Complete `renderPet()`
- Complete `renderPetList()`

## YOU DO

In Pets.js, add a route named `/pets/random/:num`.

This route should render an `h1` that says: "You have requested {num} pet images".

For example, if you visit `localhost:3000/pets/random/5` you should see a heading that reads "You have requested 5 pet images".
