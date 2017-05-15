[![Build Status](https://img.shields.io/travis/darkamenosa/tblog.svg?style=flat-square)](https://travis-ci.org/darkamenosa/tblog)
[![Coverage Status](https://img.shields.io/coveralls/darkamenosa/tblog.svg?style=flat-square)](https://coveralls.io/github/darkamenosa/tblog?branch=master)

## Introduction

At the beginning, this project was just an assignment on an interview. The requirement was to build a blog with few basic functionalities.

I thought it was a boring requirement (it really was). I got an idea "Why don't I put some more functional requirements and make something really interesting? What will happen if I can earn money from this project?"

I will put these ideas here later. This is just a start for my project.

You can view [demo](https://darkamenosa-tblog.herokuapp.com/) here

## Technical choice

On an interview, a technical leader said to me that *"NodeJS makes development faster, b/c it's easy to learn and has a lot of support tools"*. Most of the time I work with Java(Spring framework) and React stuffs, so I decide to try **NodeJS** for backend and **React** for frontent. Let's see how fast it is.

After spending few days to read some books, articles, repositories related to NodeJS, I got my stack.

The first thing I want to do is set up project structure and CICD process. 

- **Webclient**: [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate), I refer to use this stack, instead of setup from scratch. This stack is battle tested and I'm quite familiar with it. Reading webpack's document and rewrite webpack config files are nightmare, after that you have to add a ton of boilerplates to setup redux things (like middlewares, routes, ....). (Using: **React, Redux, ES6, ImmutableJS, Redux Saga, ...**)


- **Server**: [js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch), this is a very good tutorial. Building a project from backend to frontend, integrate with a lot of tools (flow, eslint, babel). I think follow this tutorial from chapter 1 to chapter 4 is enough to build a good backend structure. (Using: **Express, MongoDB, ES6, ...**). As you see, I also use ES6 for the server. In my opinion, ES6 will make your code cleaner and less magic than ES5.

- **Testing**: [testing-workshop](https://github.com/kentcdodds/testing-workshop), this workshop helped me know how to test a full stack JS project, from unit test to end-to-end test. In the video, Kent C. Dodds showed some very useful techniques to writing code. (Using: **Jest**)

- **Deployment**: I use TravisCI and Heroku. After finished build on TravisCI, new changes will be deployed to Heroku.

Finishing these things will make my development process faster.


## Now doing:

- View: [testing-workshop](https://github.com/kentcdodds/testing-workshop)

## To do:

1. Setup CICD process:

- Using Travis CI and Heroku (Done)

2. Implement core features:

- A homepage where users can scroll to see the list of articles infinitely.
- A Search screen, which show the result of search for articles
- An article detail page, where users can read the detail of each article
- User could login, after login, they will be able to mark one article as their favourite, and could access the article later from another menu.
- User's able to add new article.


3. Implement remain features:
    
- User's able to create group, join group, out group.
- Use can contribute to a group. 
- Blog posts in group can be public or private for group's users.

## Quick start

**Install dependencies:** 

1. Install root project dependencies:
```js
npm install
```
2. Install chidren projects dependencies:

```js
npm start install
```

**Run in production mode:**

1. Build project
```js
npm start build
```

2. Run: 
```js 
npm start prod
```

**Run in development mode:**
```js
npm start dev
```


## Documentation

## Contributors

[darkamenosa](https://github.com/darkamenosa/)

## License

This project is licensed under the MIT license, Copyright (c) 2017 darkamenosa. 
For more information see `LICENSE`.
