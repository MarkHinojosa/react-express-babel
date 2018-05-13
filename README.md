This living project is an example on how to get a React client, and a Node.js server to run.. This requires the running of both the client server and the api server "concurrently". The tools used in this project are React.js, Express.js, Babel, Nodemon, and the Concurrently NPM package.

What is React ?
React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

What is Express.js ?
Express is a light-weight web application framework to help organize your web application into an MVC architecture on the server side.

What is Babel ?
Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).

What is Nodemon ?
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

What is Concurrently ?
Allows you to run multiple commands concurrently.

A few notes.. As of now, this project does not have the "build" option and hence it is not suitable for production. Also, going forward, Babel's new "env" preset replaces the ES2015,ES2016 etc. presets. Learn more here https://babeljs.io/

Available Root Commands:

* "NPM run server" - runs API with Nodemon & Babel

* "NPM run dev" - runs API server & client server concurrently with nodemon & Babel

resources:

* Concurrently
  https://www.npmjs.com/package/concurrently

  https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

* Babel
  https://www.youtube.com/watch?v=LtEP_-3a5CY

* Nodemon
  https://nodemon.io/
