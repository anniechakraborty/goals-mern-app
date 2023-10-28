# Goals App
Goals App is a simple full stack application with authentication that allows users to log in and write their goals. They can edit, delete and view their goals (basic CRUD functionality). This is my first MERN stack project. I am following [Traversy Media](https://www.youtube.com/@TraversyMedia)'s [Learn The Mern Stack - Express & MongoDB Rest API](https://youtu.be/-0exw-9YJBo?si=aVo5xV78BA8dXuDK) playlist

## Things I had to do first to set up the project 

- Ran `npm init` to initialise a `packages.json` file

- Set the "main" property in packages.json as "server.js" as that file is the entry point for the server
`"main": "server.js"`

- Installed the following dependencies
`npm i express dotenv mongoose colors express-async-handler`/
dotenv : provides access to the environment variables in .env file/
mongoose : provides a quick efficient layer to manage database operations/
colors : renders the terminal text in different colors/
express-async-handler : makes it easier to write async-await operations like api calls by 

- Installed the following dev dependencies
`npm i -D nodemon`/
nodemon : constantly watches the server.js (my entry point to express server) for any code changes. so my changes are rendered immediately without having to restart the server

- Updated `scripts` with the followwing dictionary/
`"scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server"
},`