import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Let's Build something awesome with GPT-3 OpenAI</h1>
        <p>Generative Pre-trained Transformer 3(GPT-3) is an autogressive language model released in 2021 that uses deep learning to produce human-like text. Given an initial text as prompt, it will produce text that continues that prompt</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Enter your email' />
          <button type='button'>Get started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p> 17,800 people requested access in the last 24 hours</p>
      </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
        </div>

      </div>
      
  )
}

export default Header