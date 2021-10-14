import React from 'react'

export default function ErrorMessage(props: any) {
  return (
    <div className="errorMessage">
      {props.errors ? <p>{props.message}</p> : null}
    </div>
  )
}
