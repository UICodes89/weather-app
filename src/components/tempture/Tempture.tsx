import React from 'react'

export default function Tempture(props: any) {
  console.log(props);
  return (
    <div className="search-result">
      <div className="city-tempture">{props.city} <span>{props.tempture}</span></div>
      <div className="time-diff">{props.time_diff}</div>
    </div>
  )
}