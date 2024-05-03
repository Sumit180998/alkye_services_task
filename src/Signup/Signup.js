import React, { useState } from 'react'
import './Signup.css'
import img_header_logo from '../Image/img_header_logo.png'
import img_eyeoff from '../Image/img_eyeoff.svg'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const[Open, setOpen]=useState('email')
  const[EyeOpen,setEyeOpen]=useState('password')
  const  Navigate =useNavigate()
  return (
    <div className='sign-up-step-one'>
      <div className="sign-up">
  {/* login instructions section */}
  { Open ==='email' && 
  <div className="sign-up__header">
    <div className="sign-up__header-column">
      <img
        src={img_header_logo}
        alt="headerlogo"
        className="sign-up__logo"
      />
      <p className="sign-up__step-indicator ui text size-md">STEP&nbsp;1 &nbsp; <span>Signup</span></p>
      <div className="sign-up__instructions-column">
        <p className="sign-up__instructions-title ui text size-lg">
          Enter your email address to continue
        </p>
        <p className="sign-up__instructions-text ui text size-md" onClick={()=>Navigate("/login")}>
          Log in to your account.   <span style={{color:'Red'}}>Login</span> ? 
        </p>
      </div>
    </div>
    <div className="sign-up__form-column">
      
      <label className="ui input size-xs outline round undefined_undefined undefined_undefined_border">
        <input name="email" placeholder="Email" type="email" />
      </label>
      <button className="ui button size-sm fill round" onClick={()=>setOpen("password")}>Continue</button>
    </div>
  </div>
}
{Open === 'password' && <>
  <div className="sign-up__header">
    <div className="sign-up__header-column">
      <img
        src={img_header_logo}
        alt="headerlogo"
        className="sign-up__logo"
      />
      <p className="sign-up__step-indicator ui text size-md">STEP&nbsp;2 &nbsp; <span>Signup</span></p>
      <div className="sign-up__instructions-column">
        <p className="sign-up__instructions-title ui text size-lg">
        Create an account to continue
        </p>
        <p className="sign-up__instructions-text ui text size-md" onClick={()=>Navigate("/login")}>
        Log in to your account.   <span style={{color:'Red'}}>Login</span> ? 
        </p>
      </div>
    </div>
    <div class="sign-up__password-group">
                
    <p class="ui text size-md" style={{ marginTop:'10px',marginBottom:'10px',
    fontWeight:'400'}}>Enter a password to create your account with </p>
                <label
                  class="sign-up__password-input ui input size-xs outline round undefined_undefined undefined_undefined_border"
                >
                  <input name={EyeOpen } placeholder="Choose a password" type="password" />
                  
                 { EyeOpen==='password' && <i class="fa-regular fa-eye-slash" onClick={()=>setEyeOpen('text')}></i>}
                {  EyeOpen==='text' &&  <i class="fa-regular fa-eye" onClick={()=>setEyeOpen('password')}></i>}
           
                </label>
                <p class="sign-up__password-hint ui text size-s" style={{fontSize: "10px", marginTop:'10px',marginBottom:'10px',
    fontWeight:'400'}}>
                    Use a minimum of 6 characters (case sensitive) with at least one number or special character.
                  </p>
                <div class="sign-up__password-hint-group">
                  
                  <button class="ui button size-sm fill round" style={{marginRight:"10px"}}
                  onClick={()=>setOpen('email')}
                   >back</button>
                  <button class="ui button size-sm fill round">Agree & Continue</button>

                  
                </div>

    

              </div>
              
  </div>
  <p className="sign-up__disclaimer ui text size-xs">
  <span className="sign-up__disclaimer-span">
    Dingoo will use your data to personalise and improve your Dingoo experience
    and to send you information about Dingoo. You can change your communication
    preferences anytime. We may use your data as described in our&nbsp;
  </span>
  <span className="sign-up__disclaimer-span"> Privacy Policy</span>
  <span className="sign-up__disclaimer-span">
    , including sharing it with The Test of Companies. By clicking "Agree &amp;
    Continue", you agree to our&nbsp;
  </span>
  <span className="sign-up__disclaimer-span"> Subscriber Agreement</span>
  <span className="sign-up__disclaimer-span">
    {" "}
    &nbsp;and acknowledge that you have read our&nbsp;
  </span>
  <span className="sign-up__disclaimer-span"> Privacy Policy</span>
  <span className="sign-up__disclaimer-span"> &nbsp;and&nbsp;</span>
  <span className="sign-up__disclaimer-span"> Collection Statement</span>
  <span className="sign-up__disclaimer-span"> .</span>
</p></>}
</div>
  <Footer/>
    </div>
  )
}
