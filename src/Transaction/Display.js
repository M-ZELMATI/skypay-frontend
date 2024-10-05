import React, { useEffect, useState } from 'react'
import { getAccountTransaction } from './Actions'
import Spinner from '../Spinner/Spinner'
import { TimestampToDate } from '../Assistance/GlobalFunctions'
import NodataImg from "../Assets/Images/non-data.png"
import { useTranslation } from 'react-i18next'
export default function Display() {
    const [spinner,setspinner]=useState(true)
    const [TransactionList,setTransactionList]=useState([])
    const {t}=useTranslation()
    useEffect(()=>{
        getAccountTransaction()
        .then((res)=>{
            setTransactionList(
            res.data
           )
        })
        .catch((err)=>{

        })
        .finally(()=>{
            setspinner(false)
        })
    },[])
  return (
    <div>

        {
            spinner?

            <Spinner/>
            :
            <div>
                {TransactionList && TransactionList.length>0?
                <>
                    <div className=' w-full p-2 row w-full text-center'>
                        
                       <div className='col-sm-5 col-md-5 col-lg-5 text-center'>
                           Date
                       </div>
                       <div className='col-sm-3 col-md-3 col-lg-3 text-center'>
                           Amount
                       </div>
                       <div className='col-sm-4 col-md-4 col-lg-4 text-center'>
                           Balance
                       </div>
                   </div>
                   {TransactionList.map((item)=>{
                       return (
                           <div className=' p-2 rounded bX row'>
                               <div className='col-sm-4 col-md-4 col-lg-4 text-center'>
                                   {TimestampToDate(item.transaction_date)}
                               </div> 
                               <div className='col-sm-4 col-md-4 col-lg-4 text-center'>
                                   {item.amount}
                               </div> 
                               <div className='col-sm-4 col-md-4 col-lg-4 text-center'>
                               {item.balance}
                               </div> 
                           </div>
                       )
                   })}

                
                </>
                :
                
                
                <div className="w-full h-full  justify-center items-center text-center">
                    <div className="items-center">
                      <img src={NodataImg} alt="No Results Found" className="mb-2" />
                      
                      <div className=" dark:text-blue-500 bold">{t('No Results Found')}</div>
                    </div>
                  </div>

                }
               
            </div>
        }
    </div>
  )
}
