export class LocalStorage {
    public static set(key: string, value: any){
        localStorage.setItem(key, JSON.stringify(value))
    }
    public static get(key: string){
       const data: string = localStorage.getItem(key);
       if (!data) {
           return null;
       }
       return JSON.parse(data);
   }

   public static remove(key: string) {
       localStorage.removeItem(key);
   }

}