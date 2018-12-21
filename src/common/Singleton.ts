
let instance: any = null;

class Singleton {

   constructor() {
      instance = this;
   }

   public static getInstance(): Singleton {
      if (!instance){
         return new Singleton();
      }
      return instance;
   }
}

instance = Singleton.getInstance();
Object.freeze(instance);

export default instance as Singleton;