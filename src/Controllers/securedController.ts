import { Router, Request, Response } from 'express';
import AuthTokenHandler from '../common/AuthTokenHandler';

const router: Router = Router();
router.get('/', (req: Request, res: Response) => {
   if (req.cookies.AuthToken && AuthTokenHandler.tokenValid(req.cookies.AuthToken)){
      res.send('secured');
   }
   else {
      res.send('invalidToken');
   }
});

export const SecuredController: Router = router;
