import React, { useState } from 'react'
import PetDetails from './PetDetails'


const Setup = ( {petData}) => {
    const [selectedPet, setSelectedPet] = useState('');
    return (
        <>
            <div className='topDiv'>
                <h2>Pet Dictionary</h2>
                <div className='selectDiv'>
                    <select value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)}>
                        <option value="">Select a pet</option>
                        {Object.keys(petData).map(pet => (
                            <option key={pet} value={pet}>{pet}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div className='petDetailsDiv'>
            <PetDetails selectedPet={selectedPet} petData={petData} />
            </div>
        </>
    );
}

export default Setup
