import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.chooseSushis.map((sushi) => {
          return <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} sushisEaten={props.sushisEaten}/>
        })}
        <MoreButton getMoreSushis={props.getMoreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer;


// Pass props down from a component to a const.
