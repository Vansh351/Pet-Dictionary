import React from 'react'
import { Card ,Col} from 'react-bootstrap'

const DetailCard = ({pet,index}) => {
  return (
   <>
   <Col className='Card-col' sm={12} md={6} lg={3} key={index}>
       <Card style={{ width: '18rem' }}>
               <Card.Img className='Card-image'  variant="top" src={pet.image} alt="holder.js/100px180" />
               <Card.Body>
                 <Card.Title>{pet.breed}</Card.Title>
                 <Card.Text>
                             <li>Type: {pet.type}</li>
                             <li>Weight: {pet.weight}</li>
                             <li>Color: {pet.color}</li>
                 </Card.Text>
               </Card.Body>
             </Card>
    </Col>         
   </>
  )
}

export default DetailCard
