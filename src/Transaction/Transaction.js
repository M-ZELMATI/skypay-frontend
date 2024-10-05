import React, { useState } from 'react'
import Dispot from './Dispot'
import Withdraw from './Withdraw'
import Display from './Display'
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { TokenDecoded } from '../Assistance/GlobalFunctions';

export default function Transaction(props) {
    const [transactionType,setTransactionType]=useState("Dispot")
    const navigate=useNavigate()
    
  return (
    <div className=" m-5 ">
      
        <h2 className='text-center w-full '> Transactions Account Skypay</h2>
        <h5 className='text-center w-full '> Hello, {TokenDecoded().name}</h5>
        <br/>
        <div className="row m-2">
          <div className=" col-sm-4 col-md-3 col-lg-2">
          <div className='row'>
                <div className='color-white bg-primary hover:bg-primary white bold flex text-center justify-center cursor-pointer rounded-2 m-2 container col-sm-12 col-md-12 col-lg-12 bx p-4' onClick={()=>setTransactionType("Dispot")}>
                    Dispot
                </div>
                <div className='cursor-pointer rounded-2 m-2 hover:bg-warnning container bg-warning color-white bold flex text-center justify-center col-sm-12 col-md-12 col-lg-12 bx p-4' onClick={()=>setTransactionType("Withdraw")}>
                    Withdraw
                </div>
                <div className='cursor-pointer rounded-2 m-2 hover:bg-info container bg-info color-white bold flex text-center justify-center col-sm-12 col-md-12 col-lg-12 bx p-4' onClick={()=>setTransactionType("Dispaly")}>
                    Display
                </div>
                <div className='cursor-pointer rounded-2 m-2 hover:bg-secondary container bg-secondary color-white bold flex text-center justify-center col-sm-12 col-md-12 col-lg-12 bx p-4'                 
                onClick={()=>{
                    props.lougout();
                    localStorage.removeItem("access_token")
                    navigate('/login')

                }}>
                    Log out
                </div>
            </div>
          </div>
          <div className='col-sm-1 col-md-1 col-lg-1'>

          </div>
          <div className=" col-sm-7 col-md-8 col-lg-9 rounded-2 container bx p-5">
           {transactionType== "Dispot" && (<Dispot/>)}
           {transactionType== "Withdraw" && (<Withdraw/>)}
           {transactionType== "Dispaly" && (<Display/>)}

          </div>

        </div>
    </div>
  )
}
