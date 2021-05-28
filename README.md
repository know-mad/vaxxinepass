## Objective
The objective of this project is to build a REST api as the back end part of the full stack vaxxine passport application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. Built on Node.js, this api features full Create, Read, Update, and Delete functionality when creating users for the app, as well as authentication for 
users to sign in once they have created an account.

## Technologies Used
1. Node.js
2. Express.js
3. MongoDB

## Features
1. RESTful api with full CRUD functionality
2. Authentication
3. MongoDB database using Mongo Atlas cloud services
4. Deployed to Heroku


## Dependencies
1. Express.js
```npm i express```
2. Mongoose.js
```npm install mongoose```
3. dotenv
```npm i dotenv```
4. jsonwebtoken
```npm install jsonwebtoken```
5. bcrypt
```npm install bcrypt```

### Route
POST register a user
```https://vaxxinepass.herokuapp.com/api/auth/register```

### Route
GET all users
```https://vaxxinepass.herokuapp.com/api/users```

### Expected Result 
```
{
    "_id": "603fa3d791900b59c8ed988c",
    "username": "Test User",
    "email": "Test@gmail.com",
    "__v": 0
  }
```


