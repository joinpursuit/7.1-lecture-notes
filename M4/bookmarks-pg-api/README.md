# Bookmarks App with Postgres

This is the bookmarks app we've built together in class.
It includes code from lessons 9 - 11 located on the pursuit core web repo for M4: [link](https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/full_stack_express/README.md).
It includes additional code to improve the data validation and error handling beyond what is covered in these lessons.

## Getting Started
- Pull updates to the lecture notes repo
- Navigate to this directory and run `npm install`
- `touch .env` and add the following env vars to your project:
    ```
    PORT=3003
    ENVIRONMENT=DEVELOPMENT
    PG_HOST=localhost
    PG_PORT=5432
    PG_DATABASE=bookmarks_dev
    PG_USER=postgres
    ```
- `npm run db_init` and `npm run db_seed`
- `npm start`