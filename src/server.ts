/* app/server.ts */
// Import everything from express and assign it to the express variable
import express from 'express';
import { Request, Response } from 'express';

import bodyParser from 'body-parser';
// Import WelcomeController from controllers entry point
import {DefaultController} from './controllers';
// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port= process.env.PORT || 8080;

// Mount the WelcomeController at the /welcome route etc
app.use('/', express.static('public'));

app.use('*', DefaultController);
// Serve the application at the given port
app.listen(port, () => {
// Success callback
   console.log(`Listening at http://localhost:${port}/`);
});
