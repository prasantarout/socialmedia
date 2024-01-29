import React from 'react'
import './Home.scss'
import Stories from '../../components/stories/Stories'
import Post from '../../components/posts/Post'
import Share from '../../components/share/Share'
const Home = () => {
  return (
    <div className='home'>
   <Stories/>
   <Share/>
   <Post/>  

    </div>
  )
}

export default Home