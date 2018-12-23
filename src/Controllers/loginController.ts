/* app/controllers/welcomeController.ts */
// Import only what we need from express
import { Router, Request, Response } from 'express';
// Assign router to the express.Router() instance
const router: Router = Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome

router.get('/', (req: Request, res: Response) => {
// Reply with a hello world when no name param is provided
   res.send('Login here');
});

router.post('/', (req: Request, res: Response) => {
   if (req.body.username && req.body.username === 'admin'){
      res.cookie('AuthToken', '12345');
      res.send('Login posted');
   } else {
   res.send('Login bad');
   }
});

// Export the express.Router() instance to be used by server.ts
export const LoginController: Router = router;
