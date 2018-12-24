import { Router, Request, Response } from 'express';

const router: Router = Router();
router.use('/', (req: Request, res: Response) => {
      res.send('404 not found');
});

export const DefaultController: Router = router;
