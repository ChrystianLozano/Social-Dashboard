import React, {Fragment} from 'react';
import Card from './Card'

const cardListData = [
  {username: '/Chrystian'},
  {username: '@mudo_'},
  {username: 'mudo_'},
  {username: '/ChrystianLozano'},
]

const TopCardList = () => {
    return ( 
    <Fragment>
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map(({username}) => (
              <Card key={username} username={username}/>
            ))
          }

        </div>
      </div>
    </section>
    </Fragment>
     );
}
 
export default TopCardList;