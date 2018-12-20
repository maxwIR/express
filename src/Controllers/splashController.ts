import { Router, Request, Response } from 'express';
import { join } from 'path';

const router: Router = Router();
router.get('/', (req: Request, res: Response) => {
   res.sendFile(join(__dirname, "../views/test.html"));
});


export const SplashController: Router = router;
