import { Router, Request, Response } from 'express';
import { join } from 'path';

const router: Router = Router();
router.use('/', (req: Request, res: Response) => {
      res.redirect("/error");
});

export const DefaultController: Router = router;
