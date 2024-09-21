import './Card.css'
import CardData from './CardData'
import {userdata} from '../../utily/userdata.js'

const Card = () => {
  return (
  <div className='allData'>
    
    {
      userdata.map((item, key) =>{
        return(
          <CardData key={key} data={item} />

        )

      })

    }
  </div>
  )
}

export default Card
