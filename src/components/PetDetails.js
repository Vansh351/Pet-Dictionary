import React from 'react'
import DetailCard from './Card'
import { Row } from 'react-bootstrap'


const PetDetails = ({ selectedPet, petData }) => {
    if (!selectedPet) {
        return null;
    }

    const petCategory = petData[selectedPet];
    if (!petCategory || !petCategory.length) {
        return null; // Handle case when selected pet category is not found or is empty
    }

    return (
        <>   <div className='petDetailsHead'>
            <h2>Details of {selectedPet}</h2>
        </div>
            <div className='petDetailsRow'>
                <Row>
                    {petCategory.map((pet, index) => (
                        <DetailCard pet={pet} key={index} />
                    ))}
                </Row>
            </div>
        </>

    );
}

export default PetDetails
