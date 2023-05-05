import React from 'react'
import './features.css'
import { Feature } from '../../component'

/*instead of calling the feature component 4 times we used the arrray*/ 
const featuresData = [
  {
    title: 'improving end distrust instantly',
    text: "Whenever a large amount of text needs to be generated from a machine based on some small amount of text input, GPT-3 provides a good solution."
  },
  {
    title: "Become active in this platform and rip the benefits",
    text: "As with any automation, GPT-3 would be able to handle quick repetitive tasks, enabling humans to handle more complex tasks that require a higher degree of critical thinking. There are many situations where it is not practical or efficient to enlist a human to generate text output, or there might be a need for automatic text generation that seems human"

  },
  {
    title: "Certification is better and investing in your skills",
    text: "When a user provides text input, the system analyzes the language and uses a text predictor based on its training to create the most likely output. The model can be fine-tuned, but even without much additional tuning or training, the model generates high-quality output text that feels similar to what humans would produce."
  },
  {
    title: "what happens when you get creative",
    text: "GPT-3 has even been used to clone websites by providing a URL as suggested text. Developers are using GPT-3 in several ways, from generating code snippets, regular expressions, plots and charts from text descriptions, Excel functions and other development applications."
  }
]

const Features = ()  => {
  return (
    <div className='gpt3__features section__padding ' id="features">
      <div className='gpt3__features-heading'> 
          <h1 className='gradient__text'> The future is now and you just need to realize it. Step into the feature and make it happen </h1>
          <p> Request eearly access to get started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
         </div>
      Features</div>
  )
}

export default Features