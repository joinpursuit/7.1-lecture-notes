# Let's Bake Some Bread

It's a rainy Sunday morning, and a few close friends will be coming over to hang out in the evening.
I know just what to do - let's bake some bread!
Luckily, we've got some JavaScript functions to help us out:

```javascript
makeDough() // takes 10 minutes to complete
rise() // takes 1 hour to complete
bake() // takes 30 minutes to complete
serve() // takes 5 minutes to eat everything!
```

## Background: Function Signatures

A [function signature](https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function) describes the inputs and outputs of a function.
Suppose we have a function:

```javascript
let addNumbers = (n, m) => n + m
```

I want some notation to help me describe the signature of `addNumbers`.
One way I could do this is:

```typescript
let addNumbers: (n: number, m: number) => number
```

This says that `addNumbers` has an argument `n`, which is a number, an argument `m`, which is also a number, and it returns a value that is a number.
Ok, back to baking...

# Baking: The synchronous Way

If we write synchronous functions to complete each of our tasks, we can only focus on one task at a time.
That can be a bummer while baking.
For example, I'd love to make the jam while we let the dough rise.
Each of our baking functions will return the result of one step of baking.
So our baking functions will have the following signatures:

```typescript
let makeDough: () => dough
let rise: (d: dough) => risenDough
let bake: (r: risenDough) => bread
let serve: (b: bread) => void
```

## You Do
- Open `synchronousBaking.js` in VS Code
- Use the functions provided in the file to serve bread to your guests
- Use `node synchronousBaking.js` to run your code
- When you have successfully served bread to your guests, you should see the message: `🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 COMPLETE 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉`

## Solution

<details>
<summary>Expand for a solution</summary>

```javascript
const dough = makeDough()
const risenDough = rise(dough)

// I sure wish I could start making the jam while I wait for the dough to rise.
// Too bad I wrote synchronous functions!
// synchronous functions block downstream code from executing until they are completed.

const bread = bake(risenDough)
serve(bread)
```
</details>
<br>

# Baking with Callbacks

By using the callback pattern, we can improve our code by allowing us the ability to do other things while we wait for our bake our bread.
Asynchronous functions that use the callback pattern take an optional extra parameter at the end: a callback function.
When an asynchronous function like `rise` is invoked, it starts doing some work in the background -- or asks a friend to do some work in the background -- and schedules the callback to be called when the work is complete.
That way, an async function call won't block downstream code!
Using the callback pattern, our function signatures will be:

```typescript
let makeDough: (callback?: (d: dough) => void) => void
let rise: (d: dough, callback?: (r: risenDough) => void) => void
let bake: (r: risenDough, callback?: (b: bread) => void) => void
let serve: (b: bread, callback?: () => void) => void
```

If this notation is confusing, don't focus on it too much for now.
The key take away is that now, our functions don't return anything, and they each take an extra argument that is a callback.
For example, if we want to use the dough that `makeDough` creates, we pass a callback function whose first argument is `dough`.

## You Do
- Open `callbackBaking.js` in VS Code
- Use the functions provided in the file to serve bread to your guests
- Use `node callbackBaking.js` to run your code
- When you are done, you'll see the message: `🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 COMPLETE 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉`

## Solution

<details>
<summary>Expand for a solution</summary>

```javascript
makeDough(dough => {
    rise(dough, risen => {
        bake(risen, bread => {
            serve(bread, () => {
                console.log('Success!')
            })
        })
    })
})
```
</details>
<br>

## Pros and Cons of Baking with Callbacks

Some big pros:
- We freed ourselves up to finish other tasks while we baked our bread!
- If there were other tasks we needed to complete, the async code we wrote wouldn't block us from starting those tasks right away.

Some cons to think about:
- Look at our nested callbacks. How annoying! What if there were even more steps to bake our bread? It makes our code difficult to organize and a pain to read.
- Consider this scenario: We want to bake two loaves of bread asynchronously, and we need to wait for each of them to be finished before serving them. The callback pattern doesn't provide a simple solution to this kind of problem. More on this later.

# Baking with Promises

Promises are an attempt to address some of the cons of the callback pattern.
By using the chaining pattern, we can create a sequence of asynchronous steps that begin when the previous step has completed.

Refactoring our helper funcitons to leverage the benefits of promises, our new function signatures look like this:

```typescript
let makeDough: () => Promise<dough>
let rise: (d: dough) => Promise<risenDough>
let bake: (r: risenDough) => Promise<bread>
let serve: (b: bread) => Promise<void>
```

Now, our `makeDough` function will return a promise which will eventually resolve with the finished `dough`.
Time to review promise chaining using `.then()`!

## You Do
- Open `promiseBaking.js` in VS Code
- Use the functions provided in the file to serve bread to your guests
- Use `node promiseBaking.js` to run your code
- When you are done, you'll see the message: `🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 COMPLETE 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉`

## Solution

<details>
<summary>Expand for a solution</summary>

```javascript
makeDough()
    .then(dough => rise(dough))
    .then(risen => bake(risen))
    .then(bread => serve(bread))
```
</details>
<br>

# Bonus: Waiting for multiple promises to complete

Suppose we want to bake and serve two loaves of bread!
We can start baking each of these  loaves separately, but how, then, can we make sure we serve them at the same time?
Here's what our problem looks like in code:

```js
makeDough()
    .then(dough => rise(dough))
    .then(risen => bake(risen))
    .then(bread => {
        // In this callback, I only have access to the first loaf of bread!
    })

makeDough()
    .then(dough => rise(dough))
    .then(risen => bake(risen))
    .then(bread => {
        // In this callback, I only have access to the second loaf of bread!
    })

// How can I serve them together???
```

## You Do

- Look up [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- Refactor `promiseBaking.js` to use `Promise.all` to allow you to serve two loaves of bread at once