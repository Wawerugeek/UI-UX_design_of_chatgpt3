import React from 'react'
import './possibility.css'
import possibilityimg from '../../assets/possibilityimg.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility"> 
    <div className="gpt3__possibility-image"> 
    <img src = {possibilityimg} alt="possibility" />
    </div>
    <div className='gpt3__possibility-content'>
      <h4> Request for early Access to get a through pass</h4>
      <h1 className='gradient__text'>The possibility ofcourse surpass the human imagination </h1>
      <p> One of the most notable examples of GPT-3's implementation is the ChatGPT language model. ChatGPT is a variant of the GPT-3 model optimized for human dialogue, meaning it can ask follow-up questions, admit mistakes it has made and challenge incorrect premises </p>
      <h4> request for early access</h4>
    </div>

    </div>
  )
}

export default Possibility