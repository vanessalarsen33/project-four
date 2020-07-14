import React from 'react';

function ServiceCard({ serviceFromParent }) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{serviceFromParent.service}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Cost</dt>
                    <dd>{serviceFromParent.cost}</dd>
                    <dt>Time</dt>
                    <dd>{serviceFromParent.time}</dd>
                </dl>
            </div>
        </div>
    )
}

export default ServiceCard;