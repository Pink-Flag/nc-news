# NC News API documentation

This is version of a social news aggregator website such as Reddit.

The front end has been created with React, Javascript and Bootstrap. It requires at least Node Version 16.15.0 to run locally and is hosted here:

https://effortless-nasturtium-3b510c.netlify.app/

The back end has been created with Node.js and Express. The data is stored with PostgreSQL and the API is hosted via Heroku:

https://trickmirror.herokuapp.com/api

The github repository for the API can be viewed here:

https://github.com/Pink-Flag/be-project

## Using the application

The application is currently designed for mobile users and features a front page, seperate topic filters and individual articles with comments. The nav bar at the bottom of the screen allows the use to sort and filter articles by standard means such as title, author, votes etc. Each article can be voted and commented on by a user and each user is able to delete any comments they have previously made.

The votes and comments posted are rendered optimistically with API calls made once the data has updated properly.

Installation Requirements:

Node.js: v16.15.0 or later

1. Clone the repository in a new folder and `cd` into the directory
2. Run `npm install` to install the project and any dependencies
3. To run the app use: `npm start`
