## Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm run start` to start the local server

## Application Structure

- `src/index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `src/config/` - This folder contains configuration.
- `src/routes/` - This folder contains the route definitions for our API.
- `src/models/` - This folder contains the schema definitions for our Mongoose models.

## Domain design

- Article
- User
- Comment


## How to build

- Setup project structure based on [js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch). You can read from chapter 1 to chapter 4.
I don't really like the idea to share code between server and frontend, so I just stop at chapter 4.
