import React, {Fragment} from 'react';
import Card from './Card'

const cardListData = [
  {username: '/Chrystian',
   followers: 1483,
   todayFollower: 12,
   solcialIcon: '/images/icon-facebook.svg',
   color:'facebook'},
  {username: '@mudo_',
   followers: '28k',
   todayFollower: 40,
   solcialIcon: '/images/icon-twitter.svg',
   color:'twitter'},
  {username: 'mudo_',
   followers: '6k',
   todayFollower: 20,
   solcialIcon: '/images/icon-instagram.svg',
   color:'instagram'},
  {username: '/ChrystianLozano',
   followers: '12k',
   todayFollower: 29,
   solcialIcon: '/images/icon-youtube.svg',
   color:'youtube'},
]

const TopCardList = () => {
    return ( 
    <Fragment>
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map(({username, followers, todayFollower, solcialIcon, color}) => (
              <Card key={username} username={username} followers={followers} todayFollower={todayFollower} solcialIcon={solcialIcon} color={color}/>
            ))
          }

        </div>
      </div>
    </section>
    </Fragment>
     );
}
 
export default TopCardList;