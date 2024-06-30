### TODOS APP

This is the source code for the TODOS app we built in class.

It has a server and a client. The server is written in Node.js and the client is written in React.

To use this, you'll need to have a postgres database running, with a `Person` table and a `Task` table.

You'll also need to create a `.env` file in the `server` directory of the project, with the following variables:

`DATABASE_URL=postgres://username:password@localhost:5432/todos`

`PORT=3000`

The `PORT` variable is the port that the server will run on.

### Running the server

To run the server, you'll need to run `npm install` in the `server` directory.

Then, you can run `npm start` to start the server.

### Running the client

To run the client, you'll need to run `npm install` in the `client` directory.

Then, you can run `npm run dev` to start the client.
