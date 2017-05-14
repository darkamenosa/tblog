[![Build Status](https://img.shields.io/travis/darkamenosa/tblog.svg?style=flat-square)](https://travis-ci.org/darkamenosa/tblog)
[![Coverage Status](https://img.shields.io/coveralls/darkamenosa/tblog.svg?style=flat-square)](https://coveralls.io/github/darkamenosa/tblog/darkamenosa/tblog?branch=master)

## Introduction

At the beginning, this project was just an assignment on an interview. The requirement was to build a blog with few basic functionalities.

I thought it was a boring requirement (it really was). I got an idea "Why don't I put some more functional requirements and make something really interesting? What will happen if I can earn money from this project?"

I will put these ideas here later. This is just a start for my project.

## Technical choice

On an interview, a technical leader said to me that *"NodeJS makes development faster, b/c it's easy to learn and has a lot of support tools"*. Most of the time I work with Java(Spring framework) and React stuffs, so I decide to try **NodeJS** for backend and **React** for frontent. Let's see how fast it is.

After spending few days to read some books, articles, repositories related to NodeJS, I got my stack.

- Webclient: React

	+ [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)

- Server: ExpressJS

	+ [js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch)

## Now doing:

- View: [testing-workshop](https://github.com/kentcdodds/testing-workshop)

## To do:

1. Setup CICD process:

	- Using Travis CI and Heroku (Done)

1. Implement core features:

	- A homepage where users can scroll to see the list of articles infinitely
  - A Search screen, which show the result of search for articles
  - An article detail page, where users can read the detail of each article
  - User could login, after login, they will be able to mark one article as their favourite, and could access the article later from another menu.
  - User's able to add new article.

1. Implement remain features:
    
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
