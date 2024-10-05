import axios from "axios";


export function DispotAction(amount){
      return axios({
        method: 'post',
        url: process.env.REACT_APP_APP_URL_BACKEND+"/v1/transaction/dispot/"+amount,
        data:{"amount":amount},
        headers: { 'Authorization': 'Bearer ' +localStorage.getItem('access_token')}

    })
} 

export function WithdrawAction(amount){
    return axios({
      method: 'post',
      url: process.env.REACT_APP_APP_URL_BACKEND+"/v1/transaction/withdraw/"+amount,
      data:{"amount":amount},
      headers: { 'Authorization': 'Bearer ' +localStorage.getItem('access_token')}

  })
} 


export function getAccountTransaction(amount){
    return axios({
      method: 'get',
      url: process.env.REACT_APP_APP_URL_BACKEND+"/v1/transaction/getall",
      headers: { 'Authorization': 'Bearer ' +localStorage.getItem('access_token')}

  })
} 