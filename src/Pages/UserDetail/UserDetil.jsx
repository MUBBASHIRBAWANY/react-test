import React from 'react'
import './UserDetil.css'
import { useParams } from 'react-router'
import { userdata } from '../../utily/userdata'

const UserDetil = () => {
    const {id} = useParams()
    

    const user = userdata.find((item)=>{
        return(
            item.id == id
        )
    })

    const {description,profileImage,name,profession} = user
    console.log(user)
  return (

    
    <div className='users'>
    <div className='userImage'>
        <img src={profileImage} alt="" />
    </div>
    <div className='userdetail' >
        <h1>{name}</h1>
        <p className='pro'>{profession}</p>
        <p className='dec'>{description}</p>
        <div className='Social-link'>
            <img src="/assets/OtherImage/g10.svg" alt="" />
            <img src="/assets/OtherImage/instargram.com - png.svg" alt="" />
            <img src="/assets/OtherImage/LinkedIn svg.svg" alt="" />
            <img src="/assets/OtherImage/Twitter  svg.svg" alt="" />

        </div>
        <button className='but1'>Buy a me Coffee</button>
    </div>
    </div>
  )
}

export default UserDetil
