import { Router, Request, Response } from 'express';

let instance: any = null;

class AuthTokenHandler {
   tokenList: string[];

   constructor() {
      this.tokenList = [];
      instance = this;
   }

   public static getInstance(): AuthTokenHandler {
      if (!instance){
         return new AuthTokenHandler();
      }
      return instance;
   }
}

instance = AuthTokenHandler.getInstance();
Object.freeze(instance);

export default instance as AuthTokenHandler;