# Promises and Fetch

## Goals
* Understand what a promise is and why it's beneficial.
* Use promises to make HTTP requests.
* Chain promises to process request results.
* Handle errors with our promises.
* Use the Fetch API

## Keywords
* Promises
* then
* catch
* Pending
* Fulfilled
* Rejected
* Settled
* Callback Hell
* Chaining
* Success and Failure
* Fetch


# Background: Asynchronous Code

Imagine you are baking bread.
After you make the dough, you have to let the dough rise.
This is a crucially important step, but it takes a long time.
Luckily, while you wait for the dough to rise, you can clean your kitchen and make some jam to go with your bread.

Making HTTP requests is like waiting for your dough to rise.
It takes a long time to get a response, but luckily we can complete other tasks while we wait for the response!
**Asynchronous JavaScript** is any JavaScript code that initiates a task and shedules work to be done upon its completion, but doesn't keep the JavaScript engine from completing other tasks in the meantime.

Historically, JavaScript used the [**callback pattern**](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/) to allow engineers to write asynchronous code.
This solution led to writing deeply nested code that was annoying to read and difficult to organize.
**Promises** were proposed as a solution to the problems caused by the callback pattern - they are now widely used by JavaScript engineers to write asynchronous code.

# Introduction to Promises

A *Promise* is an object representing the eventual completion or failure of an asynchronous operation. This is most often seen when we make HTTP requests. Essentially, a promise is an object to which you attach callbacks.
Each subsequent callback will be executed once the last callback has completed.

Using promises allows us to wait for certain code to finish execution prior to running the next bit of code, without blocking the javascript engine from doing other things like responding to a user's clicks in the meantime.

## The States Of a Promise

Promises have three states:
1. _Fulfilled_ - The action relating to the promise succeeded.
2. _Rejected_ - The action relating to the promise failed.
3. _Pending_ - Hasn't fulfilled or rejected yet.

After a promise has been fulfilled or rejected, the promise is considered _Settled_.

## Example: Introduction to the Fetch API

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is used to make asynchronous requests for resources.
The `fetch` function is available to us in the browser, and to make an HTTP GET request, all we have to do is invoke `fetch` with a URL.
Let's make a request for all the users on our To-Do API:

```javascript
const myFirstPromise = fetch('https://alejos-todos-api.herokuapp.com/api/users')
console.log(myFirstPromise)
```

The return value of `fetch` is a promise.
When we check the console, we'll see that `myFirstPromise` is, indeed, a pending promise.
When we get a response from the server, the promise will resolve with a `Response` object.
Let's take a look at how we can use this `Response` object.

# 2. Promise Chaining 

Promises have a `.then()` method that accepts a callback function.
The callback that you pass into `.then()` should have a single parameter.
That parameter is the value that the `fetch` promise resolves to:

```js
fetch('https://alejos-todos-api.herokuapp.com/api/users').then(response => {
  console.log(response)
})
```

Our original promise resolves as soon as the HTTP headers are received by the browser.
That means we haven't even received the body of the response when our callback is invoked.
Luckily, the `response.json()` method returns a promise that resolves only once the entire response body has been received:

```js
fetch('https://alejos-todos-api.herokuapp.com/api/users').then(response => {
  return response.json()
})
```

Because `response.json()` returns another promise, we have to wait for it to resolve before we can work with the response data. To do this, we chain on another `.then()`. Let's wait for the API to finish sending us all the users, and then add all of the usernames to a list:

```js
fetch('https://alejos-todos-api.herokuapp.com/api/users').then(response => {
  return response.json()
}).then(body => {
  console.log(body)
  const users = body.payload
  const userList = document.querySelector('ul')
  for (let user of users) {
    const userItem = document.createElement('li')
    userItem.textContent = user.username
    userList.appendChild(userItem)
  }
})
```

The return value of each callback we pass into `.then()` matters a lot.
If we return another promise from a callback, the next `.then` callback will be passed the value that this promise resolves to.
If we return a value synchronously, the next `.then` callback will be invoked immediately with this value. For example:

```js
fetch('https://alejos-todos-api.herokuapp.com/api/users').then(response => {
  return response.json()
}).then(users => {
  return users.payload[0]
}).then(firstUser => {
  console.log(firstUser.username)
})
```

## You Do

- Use fetch to request all of the todos from the todo API.
- Use `response.json()` to wait for all of the todos to be sent.
- Once you have a list of todos, `console.log` all of the data.

### If you have time:
- Append your todos to a list on the DOM
- Make sure you only append your own todos - nobody elses!
- You may add another `ul` to the HTML file or create one dynamically


# Catching Errors

Sometimes things go wrong when you make an API call.
Generally speaking, there are two ways something can go wrong:

1. A server is able to provide a response, but the response status indicates an error (e.g. 404 (Not found))
1. A network error or other issue prevents the Fetch API from making the request in the first place (e.g. lost wifi connectivity)

We can address the first problem by checking the `response.ok` property:

```js
fetch('https://alejos-todos-api.herokuapp.com/api/users').then(response => {
  if (response.ok) { // true if 200 <= HTTP Response Status < 300
    console.log('everything worked out!')
  } else {
    console.log('oh no, got response status:', response.status)
  }
})
```

If a network error or other problem prevents the Fetch API from making the request in the first place, then the promise will reject, rather than resolve.
When a promise is rejected, the callback to `.then()` won't be executed.
Instead, we can use the `.catch()` method to specify a callback to be executed in the event our promise is rejected.
Let's see how that looks:

```js
// HTTP requests made to 3rd party APIs must be made in Cross-Origin Resource Sharing mode.
// Setting the request mode to Same Origin will cause this promise to reject.
fetch('https://alejos-todos-api.herokuapp.com/api/users', {mode: 'same-origin'})
  .then(response => console.log('got a response')) // This callback will never run
  .catch(error => console.log('oh no:', error.message)) // This will run instead
```

Anytime you are working with promises, you should provide a `.catch()` method to determine what to do in case the promise is rejected.
A single `.catch()` method can handle a promise rejection that happens anywhere upstream. For example:

```js
fetch('https://alejos-todos-api.herokuapp.com/api/users', {mode: 'same-origin'})
  .then(response => response.json())
  .then(data => console.log('we got some data:', data))
  .catch(error => console.log('oh no:', error.message))
```

Our `.catch` callback will be executed if our fetch promise rejects, or if the `response.json()` promise rejects.

## You Do
We can use the REST Countries API to lookup info on different countries.
One of the following promises in our promise chain is rejecting.

- Add a `.catch()` callback to log out the error message and prevent the error from propagating further.
- Jot down your thoughts on this error message. What error message did you get? What do you think is going wrong?
- Fix the fetch request so that you request a list of every country ([API docs here](https://restcountries.eu/))

```js
fetch('https://restcountries.eu/')
  .then(response => response.json())
  .then(data => console.log('Got some data:', data))
```

# POST Requests with Fetch

By default, `fetch` will make a GET request.
To specify more information about the request you'd like to make, you can pass `fetch` a second `settings` argument.
Let's take a look at how we could implement a signup button using `fetch` with different settings:

```js
document.querySelector('button').addEventListener('click', signup)

function signup(event) {
  event.preventDefault()
  const username = document.querySelector('input').value
  const user = { username: username }
  const data = JSON.stringify(user) // turns a JS Object into a string
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // tells the server we are sending JSON data
    },
    body: data // The body can't be an object - we have to turn it into a string!
  }

  fetch('https://alejos-todos-api.herokuapp.com/api/users/signup', settings)
    .then(response => {
      if (response.ok) { // true if 200 <= response status < 300
        console.log('Successfully signed up!')
      } else {
        throw Error(response.statusText)
      }
    }).catch(error => {
      console.log('Something went wrong:', error.message)
    })
}
```

Some important notes on the code above:
- Use the `method` setting to use HTTP verbs other than GET
- When you make a POST request (or any other type of request that has a body), use the `Content-Type` header to specify which data format the body is in
- The body of a request cannot be an object. `JSON.stringify()` is a helpful function that returns a properly formatted JSON string based on an argument you pass it.

# Making Promises

The Fetch API conveniently returns a promise for us.
If you want to create your very own promises, though, you can!
The `Promise` constructor accepts a callback with two parameters: `resolve` and `reject`.
Creating a new promise looks like this:

```js
let promise = new Promise((resolve, reject) => {
  // Do some asynchronous task!
})
```

The `resolve` parameter is a function that represents the next thing to do once the asynchronous task has resolved successfully.

The `reject` parameter is also a function - but it represents the next thing you should do if the asynchronous task fails and the Promise should be rejected.

Here's a promise that waits 1 second before resolving with a greeting:

```js
let greetingProm = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello, dear user!')
  }, 1000)
})

greetingProm.then(message => console.log('Promise resolved with message: ', message))
```

Here's a function that creates a promise that waits for `ms` milliseconds before resolving:

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })
}

wait(1000).then(() => {
  console.log('That was quite a wait!')
})
```

As a final example, here is a function that returns a promise that resolves 50% of the time and rejects 50% of the time:

```js
function waitMayFail(ms) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      setTimeout(() => reject(), ms)
    } else {
      setTimeout(() => resolve(), ms)
    }
  })
}

waitMayFail(1000)
  .then(() => console.log('That was lucky!'))
  .catch(() => console.log('Promise rejected :('))
```

## You Do

- Complete the functions below according to the specification

```js
/**
* Returns a promise that resolves with a specific value after a waiting period.
* @param {any} resolveValue - a value for the returned promise to resolve with
* @param {number} ms - number of milliseconds before the returned promise is resolved
* @returns {Promise} - a promise that resolves after ms milliseconds with resolveValue
*/
function timeout(resolveValue, ms) {

}

// Should wait 1 second and then print 'secret message'
timeout("secret message", 1000).then(message => console.log(message))

/**
* Returns a promise that resolves when a button is clicked. The promise should resolve with the click event object.
* @returns {Promise} - a promise that resolves after the callback has been successfully executed
*/
function waitForClick() {
  const button = document.querySelector('button')
  // You take it from here...
}

// Should console.log '{button} was clicked' when you click the button
waitForClick().then(e => console.log(`${e.target} was clicked`))
```

<details>
<summary>Expand for a solution:</summary>

```js
/**
* Returns a promise that resolves with a specific value after a waiting period.
* @param {any} resolveValue - a value for the returned promise to resolve with
* @param {number} ms - number of milliseconds before the returned promise is resolved
* @returns {Promise} - a promise that resolves after ms milliseconds with resolveValue
*/
function timeout(resolveValue, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resolveValue)
    }, ms)
  })
}

timeout("secret message", 1000).then(message => console.log(message))

/**
* Returns a promise that resolves when a button is clicked. The promise should resolve with the click event object.
* @returns {Promise} - a promise that resolves after the callback has been successfully executed
*/
function waitForClick() {
  const button = document.querySelector('button')
  return new Promise(resolve => {
    button.addEventListener('click', (event) => resolve(event))
  })
}

waitForClick().then(e => console.log(`${e.target} was clicked`))
```
</details>



## Resources

* [Fetch - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Fetch Parameters](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
* [How to use the Fetch API](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
* [Fetch vs Axios](https://medium.com/@sahilkkrazy/fetch-vs-axios-http-request-c9afa43f804e)
* [JavaScript: Learn Promises](https://codeburst.io/javascript-learn-promises-f1eaa00c5461)
* [JavaScripot Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) * [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all): Accepts an array of promises, and creates a single promise that only gets fulfilled if every promise in the array is fulfilled.
 * A [polyfill](https://github.com/stefanpenner/es6-promise) is required for consistent functionality across older browsers.
