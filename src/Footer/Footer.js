import React from 'react'
import './Footer.css'
import img_facebook from '../Image/img_facebook.svg'
import img_instagram from '../Image/img_instagram.svg'
import img_trash from '../Image/img_trash.svg'
import img_user from '../Image/img_user.svg'
import img_youtube from '../Image/img_youtube.svg'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer__column container-xs">
      <div className="footer__social-row">
        {/* <button className="footer__icon-button--facebook ui button black_900 size-xs outline square"> */}
          <img src={img_facebook} />
        {/* </button> */}
        <img
          src={img_instagram}
          alt="instagram"
          className="footer__image--instagram"
        />
        {/* <button className="footer__icon-button--facebook ui button black_900 size-xs outline square"> */}
          <img src={img_trash} />
        {/* </button> */}
        {/* <button className="footer__icon-button--facebook ui button black_900 size-xs outline square"> */}
          <img src={img_user} />
        {/* </button> */}
        <img
          src={img_youtube}
          alt="youtube"
          className="footer__image--instagram"
        />
      </div>
      <div className="footer__links-row">
        <ul className="footer__links-column--privacy">
          <li>
            <a href="#">
              <h4 className="ui_heading size-xs">Privacy Policy</h4>
            </a>
          </li>
          <li>
            <a href="#" className="privacypolicy-link">
              <h4 className="ui_heading size-xs">Privacy Policy</h4>
            </a>
          </li>
         
        </ul>
        <ul className="footer__links-column--contact">
          <li>
            <a href="#" >
              <h4 className="ui_heading size-xs">Contact Us</h4>
            </a>
          </li>
          <li>
            <a href="#" className="privacypolicy-link">
              <h4 className="ui_heading size-xs">Contact Us</h4>
            </a>
          </li>
        </ul>
        <ul className="footer__links-column--contact">
          <li>
            <a href="#">
              <h4 className="ui_heading size-xs">Cookie preferences</h4>
            </a>
          </li>
          <li>
            <a href="#" className="privacypolicy-link">
              <h4 className="ui_heading size-xs" >Cookie preferences</h4>
            </a>
          </li>
        </ul>
        <ul className="footer__links-column--contact">
          <li>
            <a href="#">
              <h4 className="ui_heading size-xs">Corporate Information</h4>
            </a>
          </li>
          <li>
            <a href="#" className="privacypolicy-link">
              <h4 className="ui_heading size-xs">Corporate Information</h4>
            </a>
          </li>
        </ul>

        
      </div>
      <a href="#" className="alkyetest-link">
              <h4 className="ui_heading size-xs">© Alkye Test</h4>
            </a>
    </div>
  </footer>
  
  )
}
