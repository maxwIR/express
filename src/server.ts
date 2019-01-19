/* app/server.ts */
// Import everything from express and assign it to the express variable
import express from 'express';
import bodyParser from 'body-parser';
// Import WelcomeController from controllers entry point
import {DefaultController} from './controllers';
import { join } from 'path';
// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port= process.env.PORT || 8080;

const urlEndodedParser = bodyParser.urlencoded({extended: false});
// Mount the WelcomeController at the /welcome route etc

app.use(express.static(join(__dirname,'public')));
app.use('*', DefaultController);
// Serve the application at the given port
app.listen(port, () => {
// Success callback
   console.log(`Listening at http://localhost:${port}/`);
});
