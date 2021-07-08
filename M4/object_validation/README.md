# Writing Object Validations with [Joi](https://github.com/sideway/joi)

## Joi - a most powerful schema description language and data validator for JS.

This demo provides a walkthrough of using the Joi npm package to validate objects in `JS`.

---

## Types of Data Validation

There are many checks to perform in order to validate data. Some or all of the procedures listed below are generally performed on data before it is stored in a database.

- **Data Type Check** (_value is of correct data type_)
- **Code Check** (_value is from a valid list or follows certain format_)
  - zip code
- **Range Check** (_value falls within pre-defined range_)
  - Coordinates
- **Format Check** (_value is of pre-determined format_)
  - "DD-MM-YYYY"
- **Consistency Check** (_value conforms to logic condition_)
  - Appointment `datetime` is after current `datetime`
- **Uniqueness Check** (_value is unique in database_)

Read more about common data checks: [What is Database Validation?](https://corporatefinanceinstitute.com/resources/knowledge/data-analysis/data-validation/)

---

## Getting Started

- In the terminal, navigate to a local `npm` project folder
- `$npm install joi`

**User Schema**

In this demo, we will use the following `User` schema to write object validations.

```SQL
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    username TEXT,
    is_subscriber BOOLEAN
);
```

---

## Basic Validations

**helpers.js**

```JS
const customErrorHandler = (e, req, res, next) => {
  console.error("Error: ", e);

  res.status(e.statusCode).json(
      { error: e.name, message: e.message }
  );

  next();
};

class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = "ValidationError";
    this.statusCode = "400";
    this.message = message;
  }
}

class RecordNotFoundError extends Error {
  constructor(message) {
    super(message);

    this.name = "RecordNotFoundError";
    this.statusCode = "404";
    this.message = message;
  }
}

module.exports = {
    customErrorHandler,
    ValidationError,
    RecordNotFoundError
};
```

**userController.js**

```JS
// DEPENDENCIES
const {
    customErrorHandler,
    ValidationError,
    RecordNotFoundError
} = require("../helpers.js");

// MIDDLEWARE
const validateUser = (req, res, next) => {

  try {
    const {
        first_name,
        last_name,
        email,
        username,
        is_subscriber
    } = req.body;

    if (
        !first_name ||
        !last_name ||
        !email ||
        !username ||
        !is_subscriber
    ) {
      const msg = "Erroneous request body";
      throw new ValidationError(msg);
    }
  } catch (e) {
    return next(e);
  }
  return next();
};

// CREATE
users.post("/", validateUser, async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    if (user["id"]) {
      res.json(user);
    } else {
      const msg = `${JSON.stringify(req.body)} not found in database.`;
      throw new RecordNotFoundError(msg);
    }
  } catch (e) {
    return next(e);
  }
});

// ERROR HANDLING
users.use(customErrorHandler);
```

**Does the validation work as expected?**

Send a `post` request where the body contains

- none of the expected key/value pairs
- Some of the expected key/value pairs
- null values for every key
- incorrect type for some key

---

## Better Validations

To improve the `validateUser` function, let's add a `Type Check` for each value.

**userController.js**

```JS
// MIDDLEWARE
const validateUser = (req, res, next) => {

  try {
    const {
        first_name,
        last_name,
        email,
        username,
        is_subscriber
    } = req.body;

    if (
        typeof first_name !== "string" ||
        typeof last_name !== "string" ||
        typeof email !== "string" ||
        typeof username !== "string" ||
        typeof is_subscriber !== "boolean"
    ) {
      const msg = "Erroneous request body";
      throw new ValidationError(msg);
    }
  } catch (e) {
    return next(e);
  }
  return next();
};
```

We can improve the `Type Check` further by appending to the `ValidationError` message with details about which object properties are invalid.

**userController.js**

```JS
// MIDDLEWARE
const validateUser = (req, res, next) => {

  try {
    const {
        first_name,
        last_name,
        email,
        username,
        is_subscriber
    } = req.body;

    let msg = "Erroneous request body";
    let isUserInvalid = false;

    if (typeof first_name !== "string") {
        isUserInvalid = true;
        msg += "first_name must be a 'string'";
    }
    if (typeof last_name !== "string") {
        isUserInvalid = true;
        msg += "last_name must be a 'string'";
    }
    if (typeof email !== "string") {
        isUserInvalid = true;
        msg += "email must be a 'string'";
    }
    if (typeof username !== "string") {
        isUserInvalid = true;
        msg += "username must be a 'string'";
    }
    if (typeof is_subscriber !== "boolean") {
        isUserInvalid = true;
        msg += "is_subscriber must be a 'boolean'";
    }
    if (isUserInvalid === true) {
      throw new ValidationError(msg);
    }
  } catch (e) {
    return next(e);
  }
  return next();
};
```

**Bonus: These validations are specific to each key, but not very DRY.**

Refactor the `Type Check` validations so that the code is DRY and validates each key `type` iteratively.
