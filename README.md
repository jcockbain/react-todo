# TODO App

A web-app to manage tasks, built with Express and React.js.

## Running the app

The following commands will run the app locally, once the repo has been cloned.

```bash
npm install
npm start
```

The client is under `/client` and the server `/server`.

From the root directory, `npm start` starts both in tandem, using the npm package `concurrently`. To run either client or server on its own, run `npm start` from its directory.

Installing dependencies is the same, running `npm install` will update both the client and server packages. Whereas from from `/client` or `/server`, update only that apps

## Running the tests

To run the whole test bucket:

```bash
npm test
```

The server uses Mocha to unit and API test the server, these tests are under `/server/test`. To run only these:

```bash
cd server
npm test
```

The client uses Jest to component test. To run these:

```bash
cd client
npm test
```
