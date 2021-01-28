import React from 'react'

import './Loader.scss';

export default function loader() {
  return (
    <div className="loader">
      <h1 className="loader__text" data-text="Getting some jokes...">Getting some jokes...</h1>
    </div>
  )
}
