import axios from "axios";
import setAuthorization from "../../setAuthorization";


export function login(payload){
   return((dispatch)=>{
    return axios.post("/api/auth/login", payload)
          .then( res =>{
            if(res.data.auth){
                setAuthorization(res.data.token);
            }
            return res.data.userDetl
          });
   }); 
}


export function userAuthentication(authData){
    return {
        type:"USER_AUTHENTICATED",
        payLoad:{authData}
    }
}
