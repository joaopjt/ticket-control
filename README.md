# ticket-control
A ticket control for events running in web server with web sockets and QR Code ticket validation.

## Setup
To run the project, first, clone the repo and install dependencies with
`yarn` or `npm install`.

Then, you can run the project with node (recommend the v7)
``node index``, and for development ``yarn run dev``.

The project will run by default in *localhost:8000*. To change this, go to `server/globals.js` and change the appGlobals.server Object.

## Query Builder
To Query Builder, i'm using the Knex.js (see [docs here](http://knexjs.org/)).
To access this in controllers, from exemple, you can use the `DB`, since he is being init in global scope.

> Exemple: 
```javascript
var users = DB.select().from('users');
```
