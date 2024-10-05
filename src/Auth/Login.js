import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./../Assets/Logos/skypay.jpg"
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next'; 
import { LoginAction } from './Actions';
import 'react-toastify/ReactToastify.css'
const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  {t}=useTranslation();
  const navigate = useNavigate(); 
  
  function handleSubmit(event) {
    event.preventDefault();    
    LoginAction( email,password)
      .then((response)=>{  
            if(response.data?.code==200){
            
            localStorage.setItem('access_token', response.data?.access_token);
            navigate('/transaction');
            onLoginSuccess(true)
            }
            else{
            toast.error(t('Bad credentials '));

            }
        })
        .catch((err)=>{
          toast.error(t('Login error '), err);
        })   
  };

  

  return (
    <div className='container justify-center text-center flex m-5 '>
        <div className=" text-center " >
          <header className="header-logo">
              <img src={logo} style={{width:'200px'}} className='circle-image'/>
              <h2>Skypay</h2>
          </header>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="mb-4 text-left ">
              <label htmlFor="email" className="text-left block text-sm font-medium mb-2">{t('Email')}:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="mb-4 text-left ">
              <label htmlFor="password" className=" text-left block text-md font-medium mb-2">{t('Password')}:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 w-full border border-gray-300 rounded"
                required
              />
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className=" btn btn-primary bg-blue-500 text-white p-2 rounded mr-4 w-full principal-backgroundcolor"
              >
                {t('Login')}
              </button>
            </div>
            <div className="register-link">
                    {t("You dont have account?")}  
                <span className='register-Link-item cursor-pointer color-primary' onClick={()=>navigate("/register")}>{t("Register")}</span>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Login;
