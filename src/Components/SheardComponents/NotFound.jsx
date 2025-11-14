import React from 'react'

export default function NotFound({message}) {
  return (
<div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
      <div className="card text-center shadow-sm p-4" style={{ maxWidth: "350px" }}>
        <div className="card-body">
          <p className="card-text text-muted">{message}</p>
        </div>
      </div>
    </div> )
}
