import React from 'react'
import { Feature } from '../../component'
import './WhatGPT3.css'
const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='gpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="what is GPT3" text="One of the most notable examples of GPT-3's implementation is the ChatGPT language model. ChatGPT is a variant of the GPT-3 model optimized for human dialogue, meaning it can ask follow-up questions, admit mistakes it has made and challenge incorrect premises. ChatGPT was made free to the public during its research preview to collect user feedback. ChatGPT was designed in part to reduce the possibility of harmful or deceitful responses"/>
      </div>
      <div className='gpt3__whatgpt3-heading'> 
        <h1 className='gradient__text'>The possibilities exceed human imagination </h1>
        <p>explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="ChatBots" text="Technology is getting more advanced every year. AI draws pictures now, creates sitcoms, writes music, and talks to people about complicated topics. But how to use such tech to gain business benefits?"/>
        <Feature title="Knowledgebase" text="The OpenAI GPT-3 AI chatbot is a sophisticated language processing system that can understand the context of messages, generate coherent answers, translate texts, write code, and more.     "/>
        <Feature title="Education" text="You can utilize it to automate customer service, providing a tremendous range of answers to the most popular queries, lowering costs for human operators, and making support faster than ever."/>
      </div>

    </div>
  )
}

export default whatGPT3