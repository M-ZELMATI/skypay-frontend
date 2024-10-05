import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

import { toast } from 'react-toastify';

import logo from "./../Assets/Logos/skypay.jpg"
import { RegisterAction } from './Actions';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
export default function Register(props) {
    const { t, i18n } = useTranslation();
    const [accountAttributes,setaccountAttributes]=useState({})
    const [spinner,setSpinner]=useState(true)
    const Navigate=useNavigate()
    function onchangeAttributes(key,value){
        setaccountAttributes({ ...accountAttributes, [key]: value })
    }

    function RegisterAccount(){
      setSpinner(false)
     
      if(accountAttributes && accountAttributes['name'] && accountAttributes['name'].length>3 &&  accountAttributes['login'] && accountAttributes['login'].length>7  && accountAttributes['password'] && accountAttributes['password'].length>= 8 && accountAttributes && accountAttributes['password']==accountAttributes['password_repeat'])
        {
          let data={"email":accountAttributes['login'],"password":accountAttributes['password'],"name":accountAttributes['name']}
        RegisterAction(data)
        .then(function (response) {
          toast.success(t("Registration passed correctly"))
          Navigate("/login")
          setSpinner(true)
        })
        .catch(function (error) {
            toast.error(t("Registration didn't passe correctly"))
            toast.error(error.error)
        })
        .finally(()=>{
          setSpinner(true)

        });}
      else{
          
          if(!accountAttributes['name'] || accountAttributes['name'].length<3){
            toast.error(t("The name less then 3 charachters"))
            setSpinner(true)
    
          }
          if(!accountAttributes['login'] || accountAttributes['login'].length<7){
            toast.error(t("The email incorrect"))
            setSpinner(true)
    
          }
          if(!accountAttributes['password'] || accountAttributes['password'].length<8){
            toast.error(t("The password should be more than 8 charachers"))
            setSpinner(true)
    
          }
          if(accountAttributes['password']!=accountAttributes['password_repeat']){
            toast.error(t("The repeated password incorrect"))
            setSpinner(true)
    

          }
          setSpinner(true)

        }
    }
  return (
<>
  <div className='my-5'>

    <div className='container text-center' style={{maxWidth:"550px"}}>
    {!spinner?
      <Spinner/> 
      :
      <>
        <div className='container'>
          <img className="rounded-circle" alt="avatar1" src={logo} style={{maxWidth:"200px"}} />
          <h2 className='text-left' style={{textAlign:"left",margin:'17px', fontWeight:"500"}}>{t("Sign up")}</h2>
          <div className="mb-4 text-left ">
              <label htmlFor="Name" className=" text-left block text-md font-medium mb-2">{t('Name')}:</label>
              <input
                className="p-2 w-full border border-gray-300 rounded"
              label={t("Name")} id='form1' type='name' onChange={(e)=>{onchangeAttributes("name",e.target.value);}}/>
          </div>
          <div className="mb-4 text-left ">
              <label htmlFor="email" className=" text-left block text-md font-medium mb-2">{t('Email')}:</label>
              <input
                className="p-2 w-full border border-gray-300 rounded"
                label={t("Email")} id='form2' type='email'  onChange={(e)=>{onchangeAttributes("login",e.target.value);}}/>
          </div>
          
           <div className="mb-4 text-left ">
              <label htmlFor="password" className=" text-left block text-md font-medium mb-2">{t('password')}:</label>
              <input
                className="p-2 w-full border border-gray-300 rounded"
                label={t('Password')} id='form2' type='password'  onChange={(e)=>{onchangeAttributes("password",e.target.value);}}/>
          </div>
          
           <div className="mb-4 text-left ">
              <label htmlFor="Repeat password" className=" text-left block text-md font-medium mb-2">{t('Repeat password')}:</label>
              <input
                className="p-2 w-full border border-gray-300 rounded"
                label={t("Repeat password")} id='form2' type='password'     onChange={(e)=>{onchangeAttributes("password_repeat",e.target.value);}}/>
          </div>

         
          <button className=" btn btn-primary mb-4 w-100" onClick={()=>RegisterAccount()}>
            {t("Sign up")}
          </button>
          <div className="d-flex justify-content-between mx-4 mb-4">
            {t("You have an account?")}
            <span className='register-Link-item' onClick={()=>Navigate('/login')}>{t("Login")}</span>
          </div>

        
        </div>
      </>
       
    }
    </div>
   
  </div>
</>

  )
}
