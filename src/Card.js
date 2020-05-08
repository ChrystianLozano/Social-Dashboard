import React from 'react';
import './card.css'
const Card = ({username, followers, todayFollower, solcialIcon, color}) => {
    const social = `card ${color}`
    return (
        <article className={social}>
        <p className="card-title">
          <img src={solcialIcon} alt="" />
          {username}
        </p>
        <p className="card-followers">
          <span className="card-followers-number">{followers}</span>
          <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
          <img src="images/icon-up.svg" alt="" />
          {todayFollower} Today
        </p>
      </article>
     );
}
 
export default Card;