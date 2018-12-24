import { Router, Request, Response, NextFunction } from 'express';

let instance: any = null;

class AuthTokenHandler {
   tokenList: string[];

   constructor() {
      this.tokenList = ['12345'];
   }

   public static getInstance(): AuthTokenHandler {
      if (!instance){
         return new AuthTokenHandler();
      }
      return instance;
   }

   public getToken(){
      let token = 'secured!'
      if(this.tokenList.indexOf(token)<0){
         this.tokenList.push(token);
      }
      return token;
   }

   public tokenValid(token: string){
      if(this.tokenList.indexOf(token)<0){
         return false;
      }
      return true;
   }
}

instance = AuthTokenHandler.getInstance();
Object.freeze(instance);

export default instance as AuthTokenHandler;

export function Authorizer (req: Request, res: Response, next: NextFunction) {
   let permissions = [];
   if (req.cookies.AuthToken && AuthTokenHandler.getInstance().tokenValid(req.cookies.AuthToken)){
      permissions.push('*');
      next();
   } else {
      res.send('failed to authenticate');
   }
}