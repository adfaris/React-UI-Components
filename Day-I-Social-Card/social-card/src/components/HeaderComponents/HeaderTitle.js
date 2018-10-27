import React from 'react'
import './Header.css'
import HeaderContent from './HeaderContent'
import moment from 'moment'
const time = moment()

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda school
        <span className="time-stamp">{time.format('MMM Do')}</span>
        <HeaderContent />
      </div>
    </div>
  )
}
export default HeaderTitle
