import React from 'react'
import './Signup.css'
import img_header_logo from '../Image/img_header_logo.png'
import img_eyeoff from '../Image/img_eyeoff.svg'
import Footer from '../Footer/Footer';

export default function Signup() {
  return (
    <div className='sign-up-step-one'>
      <div className="sign-up">
  {/* login instructions section */}
  <div className="sign-up__header">
    <div className="sign-up__header-column">
      <img
        src={img_header_logo}
        alt="headerlogo"
        className="sign-up__logo"
      />
      <p className="sign-up__step-indicator ui text size-md">STEP&nbsp;1</p>
      <div className="sign-up__instructions-column">
        <p className="sign-up__instructions-title ui text size-lg">
          Enter your email address to continue
        </p>
        <p className="sign-up__instructions-text ui text size-md">
          Log in to your account. If you don’t have one, you will be prompted to
          create one.
        </p>
      </div>
    </div>
    <div className="sign-up__form-column">
      <label className="ui input size-xs outline round undefined_undefined undefined_undefined_border">
        <input name="email" placeholder="Email" type="email" />
      </label>
      <button className="ui button size-sm fill round">Continue</button>
    </div>
  </div>

  <div className="sign-up__header">
    <div className="sign-up__header-column">
      <img
        src={img_header_logo}
        alt="headerlogo"
        className="sign-up__logo"
      />
      <p className="sign-up__step-indicator ui text size-md">STEP&nbsp;2</p>
      <div className="sign-up__instructions-column">
        <p className="sign-up__instructions-title ui text size-lg">
        Create an account to continue
        </p>
        <p className="sign-up__instructions-text ui text size-md">
        You’ll be able to log in to Dingoo with this email address and password.
        </p>
      </div>
    </div>
    <div class="sign-up__password-group">
                <p class="ui text size-md">Enter a password to create your account with </p>
                <label
                  class="sign-up__password-input ui input size-xs outline round undefined_undefined undefined_undefined_border"
                >
                  <input name="password" placeholder="Choose a password" type="password" />
                  <img src={img_eyeoff} alt="eye-off" class="eye-off" />
                </label>
                <div class="sign-up__password-hint-group">
                  <p class="sign-up__password-hint ui text size-s" style={{fontSize: "20px",
    fontWeight:'400'}}>
                    Use a minimum of 6 characters (case sensitive) with at least one number or special character.
                  </p>
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
</p>
</div>
  <Footer/>
    </div>
  )
}
