import React, {Fragment} from 'react';
const TopCardList = () => {
    return ( 
    <Fragment>
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          <article className="card facebook">
            <p className="card-title">
              <img src="images/icon-facebook.svg" alt="" />
              /Chrystian
            </p>
            <p className="card-followers">
              <span className="card-followers-number">1483</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p>
          </article>
        </div>
      </div>
    </section>
    </Fragment>
     );
}
 
export default TopCardList;