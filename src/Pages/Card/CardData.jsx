import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router'


const CardData = ({data}) => {
  const navigate = useNavigate()
    const {name,profession, description, background,profileImage, id} = data;
  return (
    <div>
        <div className='main'> 
      <img className='backImage' src={background} alt="" />
      <img className='userimage' src={profileImage} alt="" />
      <h1 className='name'>{name}</h1>
      <p className='Profission'>{profession}</p>
      <p className='Detail' > {description}</p>
     <div className='Social-link'><img  src="/assets/OtherImage/Social-link.svg" alt="" /> </div>
     <div className='profile-btn' ><button value={id}  onClick={()=> navigate(`/user/${id}`)} className='view-profile'> view profile</button></div>

    </div>
    </div>
  )
}

export default CardData