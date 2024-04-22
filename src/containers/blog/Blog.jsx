import React from 'react'
import './blog.css'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

// eslint-disable-next-line no-unused-vars
const Component = (props) => {
  return(
    <div className='blog_component'>
      <div className='blog_component-image'>
        <img src={props.path} alt="blog_image" />
      </div>
      <div className='blog_component-body'>
        <p>Sep 26, 2021</p>
        <h1>{props.title}</h1>
        <p >Read Full Article</p>
      </div>
    </div>
  )
}
const Blog = () => {
  return (
    <div id='Library' className='blog_container section__margin'>
      <div className='blog_container-text gradient__text'>
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='blog_container-'>
        <div className='blog_container-principal'>
          <Component path={blog01} title='GPT-5 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className='blog_container-other'>
          <Component path={blog02} title='GPT-5 and Open  AI is the future. Let us exlore how it is?'/>
          <Component path={blog03} title='GPT-5 and Open  AI is the future. Let us exlore how it is?'/>
          <Component path={blog04} title='GPT-5 and Open  AI is the future. Let us exlore how it is?'/>
          <Component path={blog05} title='GPT-5 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog