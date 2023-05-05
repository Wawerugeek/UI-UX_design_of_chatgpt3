import React from 'react'
import './blog.css'
import { Article } from '../../component'
import {blog1, blog2, blog3, blog4, blog5} from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>alot is happening and we need to move with the speed of light</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'> 
        <Article imgUrl={blog1}  date='March-05-2023' title='GPT3 and the open AI is the future of everything. Test the waters bruh' />
        </div>
        <div className='gpt3__blog-container_groupB'> 
        <Article imgUrl={blog2}  date='March-05-2023' title='GPT3 and the open AI is the future of everything. Test the waters bruh'/>
        <Article imgUrl={blog3} date='March-05-2023' title='GPT3 and the open AI is the future of everything. Test the waters bruh'/>
        <Article imgUrl={blog4} date='March-05-2023' title='GPT3 and the open AI is the future of everything. Test the waters bruh'/>
        <Article imgUrl={blog5} date='March-05-2023' title='GPT3 and the open AI is the future of everything. Test the waters bruh'/>

        </div>

      </div>

    </div>
  )
}

export default Blog