import React from 'react';
import AppointmentCard from '../../components/PuppyCard/PuppyCard';

function PuppyListPage({ puppiesFromParent, handleDeletePuppy }) {
    return (
        <>
            <h1>Puppy List</h1>
            <div className='PuppyListPage-grid'>
                {puppiesFromParent.map(puppy => 
                    <PuppyCard
                        key={puppy._id}
                        puppyFromParent={puppy}
                        handleDeletePuppy={handleDeletePuppy}
                    />
                )}
            </div>
        </>
    )
}

export default PuppyListPage;