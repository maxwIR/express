import { Router, Request, Response } from 'express';
import { join } from 'path';
import AuthTokenHandler from '../common/AuthTokenHandler';

const router: Router = Router();
router.get('/', (req: Request, res: Response) => {
   if (AuthTokenHandler.tokenValid('hi')){
      res.send('secured');
   }
   else {
      res.send('invalidToken');
   }
});

export const SecuredController: Router = router;
