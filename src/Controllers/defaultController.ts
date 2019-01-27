import { Router, Request, Response } from 'express';

const router: Router = Router();
router.use('/', (req: Request, res: Response) => {
      res.send(200);
});

export const DefaultController: Router = router;
