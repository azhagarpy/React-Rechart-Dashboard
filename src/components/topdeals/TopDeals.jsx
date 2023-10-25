import React from 'react'
import "./TopDeals.scss";
import {topDeals} from "../../data";
const TopDeals = () => {
  return (
    <div className='topdeals'>
      <h1>Top Deals</h1>
      {topDeals.map(e=>{
        return(
              <div className='top-deals-list' key={e.id}>
              <div className='top-deals-item'>
                <div className='topDeals-left'>
                  <div className='image'>
                    <img src={e.Image} alt="#profile" />
                  </div>
                  <div className='txt'>
                    <p>{e.Name}</p>
                    <small>{e.Mail}</small>
                  </div>
                </div>
                <p>${e.Price}</p>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default TopDeals