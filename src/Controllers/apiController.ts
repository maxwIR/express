/* app/controllers/welcomeController.ts */
// Import only what we need from express
import { Router } from 'express';
import { LoginAPI } from '../api';
// Assign router to the express.Router() instance
const router: Router = Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome

router.use('/login', LoginAPI );


// Export the express.Router() instance to be used by server.ts
export const APIController: Router = router;
