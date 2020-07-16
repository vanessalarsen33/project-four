import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function ServiceCard({ serviceFromParent }) {
  return (
    <div>
          <h3>{serviceFromParent.type}</h3>
      <Link>
          <dl>
            <dt>Cost</dt>
            <dd>{serviceFromParent.cost}</dd>
            <dt>Time</dt>
            <dd>{serviceFromParent.time}</dd>
          </dl>
      </Link>
    </div>
  )
}

export default ServiceCard;