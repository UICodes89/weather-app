import React from 'react'
import Search from "../search/Search";



export default function Weather() {
  const getClass = (data: string) => {
    return data;
  }

  return (
    <div className={` ${true ? getClass('rainy') : ''}`}>
      <Search />
    </div >
  )
}
