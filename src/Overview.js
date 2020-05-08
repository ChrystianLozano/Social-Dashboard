import React, {Fragment} from 'react';
import Cardsmall from './Cardsmall'

const CardsmallList = [
    {
        icon: 'images/icon-facebook.svg',
        pageViews: '87',
        growth: 3,
        key: 1
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '109',
        growth: 8,
        key: 2
    },
    {
        icon: 'images/icon-instagram.svg',
        pageViews: '20',
        growth: 8,
        key: 3
    },
    {
        icon: 'images/icon-youtube.svg',
        pageViews: '139',
        growth: 305,
        key: 4
    },
    
]

const Overview = () => {
    return ( 
        <Fragment>
    <section className="overview">
    <div className="wrapper">
      <h2>Overview - Today</h2>
      <div className="grid">
          {
              CardsmallList.map(({icon, pageViews, growth, key}) => (
                  <Cardsmall key={key} icon={icon} pageViews={pageViews} growth={growth} />
              ))
          }
        </div>
        </div>
  </section>
        </Fragment>
     );
}
 
export default Overview;