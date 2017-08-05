# ticket-control
A ticket control for events running in web server with web sockets and QR Code ticket validation.

## Setup
To run the project, first, clone the repo and install dependencies with
`yarn` or `npm install`.

Then, you can run the project with node (recommend the last LTS version) running
``node index``, and for development watch of assets and server files``yarn run dev``.

The project will run by default in *localhost:8000*. To change this, go to `server/globals.js` and change the appGlobals.server Object.

Before run the server, make sure of had created an database and copy the `knexfile.exemple.js` as `knexfile.js` with your config.
Install the *Knex.js* globally and then run:
- ``knex migrate:latest``
- ``knex seed:run``

## Query Builder
To Query Builder, i'm using the Knex.js (see [docs here](http://knexjs.org/)).
To access this in controllers, you can use the `DB`, since he is being stored in global scope.

> Exemple: 
```javascript
var users = DB.select().from('users');
```

## Last Considers
> **THIS IS NOT PRODUCTION READY (A much of security known issues not fixed)**
The project is for study reasons only.
A Mainly using:
- Hapi as http server framework
- webpack basic config for watch and bundle our assets (js/scss only)
- Vue framework (This can be removed from project without worries. In realy, why do i used it?!)
- [Instascan](https://github.com/schmich/instascan) - Library for QR code read. (Thanks for creators and maintainers, awesome library!).
