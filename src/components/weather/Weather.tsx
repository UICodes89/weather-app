import React from 'react'
import Search from "../search/Search";



export default function Weather() {
  const getClass = (data: string) => {
    return data;
  }

  return (
    <div className={`search-box ${true ? getClass('rainy') : ''}`}>
      <h1>Search Weather <span className="text-muted">by city or, geolocation</span></h1>
      <Search />
    </div >
  )
}
