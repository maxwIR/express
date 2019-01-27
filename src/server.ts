/* app/server.ts */
// Import everything from express and assign it to the express variable
import express from 'express';
// Import WelcomeController from controllers entry point
import {DefaultController} from './controllers';
// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
<<<<<<< HEAD
const port= process.env.PORT || 8080;

// Mount the WelcomeController at the /welcome route etc
app.use('/', express.static('public'));

app.use('*', DefaultController);
=======
const port: number = 80;
// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);
app.use('/', SplashController);
>>>>>>> parent of a6c2432... fixed to work on Azure
// Serve the application at the given port
app.listen(port, () => {
// Success callback
   console.log(`Listening at http://localhost:${port}/`);
});
