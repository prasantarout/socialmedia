import React, { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '../../context/authContext';
const Stories = () => {


  const { currentUser } = useContext(AuthContext);

  const dataItem=[
    {
      id:1,
      name:'john doe',
      img:'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id:2,
      name:'john doe',
      img:'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id:3,
      name:'john doe',
      img:'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id:4,
      name:'john doe',
      img:'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    // {
    //   id:5,
    //   name:'john doe',
    //   img:'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
    // },
    // {
    //   id:6,
    //   name:'john doe',
    //   img:'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
    // }
  ]


  return (
    <div className='stories'>
         <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser?.name}</span>
          <button>+</button>
        </div>
      {dataItem.map((item,index)=>
        <div className="story" key={index}>
          <img src={item?.img} alt="" />
          <span>{item?.name}</span>
        </div>
      )}
    </div>
  )
}

export default Stories