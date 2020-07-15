import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function ServiceCard({ serviceFromParent }) {
  return (
    <div className='panel panel-default'>
        <div className="panel-heading">
          <h3 className='panel-title'>{serviceFromParent.type}</h3>
        </div>
      <Link>
        <div className='panel-body'>
          <dl>
            <dt>Cost</dt>
            <dd>{serviceFromParent.cost}</dd>
            <dt>Time</dt>
            <dd>{serviceFromParent.time}</dd>
          </dl>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard;