import React, {Fragment} from 'react';
import './cardsmall.css'
const Cardsmall = ({icon, pageViews, growth}) => {
    return (
        <Fragment>
                    <div className="card-small">
          <p className="card-small-views">Page Views</p>
          <p className="card-small-icon">
            <img src={icon} alt="" />
          </p>
          <p className="card-small-number">{pageViews}</p>
          <p className="card-small-percentage">
            <span>
              <img src="images/icon-up.svg" alt="" />
                {growth}%
            </span>
          </p>
        </div>
        </Fragment>
      );
}
 
export default Cardsmall;