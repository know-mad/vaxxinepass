# Vaxxine Pass App API
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

## Endpoints
POST register a user
```https://vaxxinepass.herokuapp.com/api/auth/register```

POST login a user
```https://vaxxinepass.herokuapp.com/api/auth/login```

POST forgot password
```https://vaxxinepass.herokuapp.com/api/auth/forgotpassword```

PUT reset password
```https://vaxxinepass.herokuapp.com/api/auth/resetpassword/:resetToken```

GET all users
```https://vaxxinepass.herokuapp.com/api/users```

### Expected Result 
```
{
    "_id": "60b3ba1f3f46acfc6cccc4d7",
    "username": "testuser",
    "email": "test2@email.com",
    "address": "555 E 21st Ave.",
    "apartment": "202",
    "zipCode": "21122",
    "tel": "2125555555",
    "__v": 0
  },
  {
    "_id": "60b3bb1c3f46acfc6cccc4d8",
    "username": "testuser2",
    "email": "test3@email.com",
    "address": "555 E 23rd Ave.",
    "apartment": "157",
    "zipCode": "21122",
    "tel": "2127777777",
    "__v": 0
  }
```


