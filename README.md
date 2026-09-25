# Task 2 - User Data Fetch & Filter

Node.js script that fetches user data from https://jsonplaceholder.typicode.com/users,
filters users whose company `catchPhrase` contains "group" or "service" (case-insensitive),
and formats the result using ES6 object destructuring into:

`User: [Name] | Email: [Email] | City: [City]`

## Requirements
- Node.js 18+ (uses built-in global `fetch`)

## Run
```bash
node app.js
```
