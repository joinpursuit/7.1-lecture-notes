# Redux

## What are the 3 Principles of Redux?

1. **Single Source of Truth**:

   - Application state is represented by a single JS object, the **State Tree**

   - Every change to state is explicit

1. **State is Read Only**

   - State cannot be mutated

   - To change the state, code must dispatch an action

   - Using an index allows use to distinguish between the same type but different action

   - Action: a plain JS object which minimally describes changes to the application

1. **State mutations are made with Pure functions called Reducers**

   - Reducer takes the **previous state** and **dispatching action** as arguments
   - Reducer returns the **next state** (or the default expected initial state if the state argument is undefined)

   - **Pure**: return value depends solely on argument values which are **never mutated**
   - **Impure**: Side effects, **mutated values**, database/network calls

   - A complex app will contain many Reducers, yet each Reducer will be a simple function

## What is the Combine Reducer Pattern?

- One reducer may be called by another and stored as arrays or objects
- Results of the `combineReducers()` utility function are assembled into a **single Global State Object**, a store created with the Root reducer
- Naming of corresponding State Keys and Reducers **must match exactly**
- Simplify code using **ES6 Object Literal Shorthand Notation**

## **What's the relationship between `createStore` and `rootReducer`?**

- **createStore** depends on **rootReducer**

- Provider component makes the store available throughout the entire component tree

## What is the function of the `useSelector` Hook?

- Extract data from the redux store state using a selector function
- Component re-renders every time the current result value and result value are different
