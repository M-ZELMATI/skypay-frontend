import axios from "axios";


export function LoginAction(email,password){
      return axios({
        method: 'post',
        url:process.env.REACT_APP_APP_URL_BACKEND+"/v1/auth/signin",
        data:{   "email":email,
            "password":password
          }
    })
} 

export function RegisterAction(data){
    data["enabled"]=true;
    data["role"]="USER";
    data["accountNumber"]="skypay"+data.name+Math.floor(8999*Math.random());
    console.log(data)
    return axios({
      method: 'post',
      url: process.env.REACT_APP_APP_URL_BACKEND+"/v1/auth/create",
      data:data
  })
} 


