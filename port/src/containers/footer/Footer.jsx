import React from 'react'
import './footer.css'
import gpt3logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='gpt3__footer space__padding' id='footer'>
      <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'> Step into the future with others and stop being a fucking pussy</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p> Request early access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='gpt3logo' />
            <p> Learning front-end is turning out to be intresting</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4> links</h4>
          <p> owners</p>
          <p> Social Media </p>
          <p> Counters</p>
          <p> Contact </p>

        </div>
        <div className='gpt3__footer-links_div'>
          <h4> Company </h4>
          <p> Terms & Condition </p>
          <p> Privacy policy </p>
          <p> Contact</p>

        </div>
        <div className='gpt3__footer-links_div'>
          <h4> Get in Touch</h4>
          <p> Address</p>
          <p> phone </p>
          <p> Email </p>
          <p> Domain </p>

        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>@2023 GPT-3. All rights reserved </p>

      </div>
      </div>
  )
}

export default Footer