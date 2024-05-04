import React, { useState } from 'react'
import "./Signin.css"
import Loginform from '../../components/forms/Loginform'
import { useLogin } from '../../components/hooks/user'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

const Signin = () => {
    
    const{handleLogin,loginLoading}=useLogin()
    const [response,setResponse]=useState(null)
    const navigate=useNavigate()

    const handleSubmit=async(email,password)=>{
            const res =await handleLogin(email,password)
            
            setResponse(res)
            if(res.success){
                toast.success("Login Succesfull!")
                navigate('/')
            }else{
                toast.error(res.error)
            }
    }
    return (
        <section>
            <div className='con'>
                <div className="logincard">
                    <div className="loginimage text-light">
                        <div className="img pb-3">
                            <img src="./assets/image/logo.png" alt="img" />
                        </div>
                        <p className='text-center'>Welcome to Yatri Restro<br />Please enter your credentails to access your account</p>
                    </div>
                    <div className="bg-white loginform ">
                        <h3 className='text-center pb-2'>Login</h3>
                       <Loginform handleSubmit={handleSubmit} loginLoading={loginLoading} response={response}/>
                    </div>
                </div>
                <p className='text-center py-4 text-light'>&#169;2024 Yatri Restro. All Rights Reserved</p>
                
            </div>
        </section>
    )
}

export default Signin
