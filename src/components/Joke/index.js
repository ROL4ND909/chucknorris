import React from 'react';

import './Joke.scss';

export default function joke({ joke, addJoke, unaddJoke }) {
  let button;

  return (
    <li className="joke">
      <p>{joke.joke}</p>

      {addJoke ? (
        <button className="btn  btn--like" onClick={() => addJoke(joke)}>
          <span className="srt">Add to favorites</span>
          <svg version="1.1" viewBox="0 0 14 14" aria-hidden="true" className="svg-inline" data-test="icon-heart" focusable="false"><path fillRule="evenodd" d="M7 12s5-3.33 5-6.628S8.769.951 7 3.105C5.225.958 2 2.074 2 5.372S7 12 7 12z"></path></svg>
        </button>
      ) : (
        <button className="btn  btn--like" data-variant="liked" onClick={() => unaddJoke(joke.id)}>
          <span className="srt">Remove from favorites</span>
          <svg version="1.1" viewBox="0 0 14 14" aria-hidden="true" className="svg-inline" data-test="icon-heart" focusable="false"><path fillRule="evenodd" d="M7 12s5-3.33 5-6.628S8.769.951 7 3.105C5.225.958 2 2.074 2 5.372S7 12 7 12z"></path></svg>
        </button>
      )}
    </li>
  )
}
