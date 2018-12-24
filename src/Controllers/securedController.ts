import { Router, Request, Response } from 'express';
import AuthTokenHandler, { Authorizer } from '../common/AuthTokenHandler';

const router: Router = Router();
router.get('/', Authorizer, (req: Request, res: Response) => {
      res.send('secured');
});

export const SecuredController: Router = router;
