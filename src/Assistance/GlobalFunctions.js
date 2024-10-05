import { decodeToken } from "react-jwt";

export function TimestampToDate(timestamp ) {
    const date = new Date(timestamp);
    console.log(timestamp)
    console.log(date)
    const formattedDate = date.toLocaleString();
    return formattedDate;
  }
  

  
export function TokenDecoded (){
    try {
      return decodeToken(localStorage.getItem('access_token'))
    } catch (error) {
      return true;
    }
  };
  