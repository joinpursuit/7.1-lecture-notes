# Pursuit-Core-Web-React-Routing-Lab

[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

Today, we are creating a full-fledged app to fulfill all of your pet-image-searching desires: both cats and dogs.

- Use the [Cat API](https://thecatapi.com) for your cat-fetching needs. 🐱
- Use the [Dog API](https://dog.ceo/dog-api) for your dog-fetching needs. 🐶

<details>
  <summary>Tips: Using the APIs</summary>

**Cat API**

- You may see some instructions in the docs about getting an API key. You don't need it to do this lab. You can ignore that.
- [Check the Quickstart](https://docs.thecatapi.com/) to find the URL to use to load one random cat image.
- [The documentation here](https://docs.thecatapi.com/pagination) says to add `?limit=3` to the URL to show 3 random images.

**Dog API**

- [The documentation here](https://dog.ceo/dog-api/documentation/random) shows you how to request a random dog picture _or_ a specific number of random dog images.
- [Scroll down this page](https://dog.ceo/dog-api/documentation/breed) to see how to request a random image of a specific dog breed.
- Notice that the Dog API responses have a different structure than the Cat API responses!

</details>

This app will have _routes_.

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm start` to start your React application
- `npm run cypress` (in a separate terminal window) to open the cypress testing window

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Route Structure and How This App Is Different

For the most part we have been **centralizing state** (usually in `App`) and passing it down to child components via props.
That's good!
However, this app is a little different.

We are making the conscious decision that we **don't want** to centralize state.
Instead of one big app, our app is going to be more like a collection of smaller apps inside different routes.

These apps (components) will be:

- **Random dog image** `/dog/random`: Load a random dog image. Include a button that loads a new random image when clicked.
- **Multiple random dogs** `/dog/random/:num`: This will render the number of random dog images requested for in the `num` URL parameter using a single API call to the dog API. No button required.
- **Random dog by breed** `/dog/:breed`: This will render a dog image of the specified breed. No button required.
- **Random cat image** `/cat/random`. Load a random cat image. Include a button that loads a new random image when clicked.
- **Multiple random cats** `/cat/random/:num`: This will render the number of random cat images requested for in the `num` URL parameter using a single API call to the cat API. No button required.

## Bonus

- **Random amounts of both cats and dogs** `/all/random`. Load a random number between 1 and 10 for both cats AND dogs (e.g 4 cats and 7 dogs), and uses one API call for each of the two APIs to load that many images.

![Routing lab demo](./routing-lab-demo.gif)

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on github.
- Submit the link to your pull request on Canvas.
