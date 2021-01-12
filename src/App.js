import React, { useState, useEffect } from 'react'
import useLocalStorageState from "use-local-storage-state";

import { Badge, AppBar, Tab, Tabs } from '@material-ui/core';

import Joke from './components/Joke/';
import Loader from './components/Loader';
import './App.scss';

const API_URL = `//api.icndb.com/jokes/random/`;

function App() {
  const [jokes, setjokes] = useState([]);
  const [likedJokes, setLikedJokes] = useLocalStorageState('Jokes', []);
  const [isTimerOn, setTimerOn] = useState(false);
  const [shouldFetchMore, setShouldFetchMore] = useState(likedJokes.length < 10);
  const [maxJokes, setmaxJokes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const changeTab = (ev, value) => {
    setCurrentTab(value);
  };

  // Getting the jokes
  const fetchJokes = () => {
    setLoading(true);

    fetch(API_URL + '10')
      .then((res) => res.json())
      .then((res) => {
        setjokes(res.value);

        // putt it in a timeout to always show the loader
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch((err) => console.warn(`We have an error here: err ${err}`));
  };

  const addJoke = (id) => {
    if (likedJokes.find((j) => j.id === id)) return;

    const likedJoke = jokes.find((j) => j.id === id);

    setLikedJokes([likedJoke, ...likedJokes]);
  }

  const likeJoke = (id) => {
    addJoke(id);

    setmaxJokes(likedJokes.length > 9);
  };

  useEffect(() => {
    // Runs everytime isTimerOn OR shouldFetchMore changes
    // and also after the first render
    let timeout;
    if (isTimerOn && shouldFetchMore) {
      fetch(API_URL)
        .then(res => res.json())
        .then((res) => {
          console.log(res.value.id);
          likeJoke(res.value.id);
          setShouldFetchMore(false);

          timeout = setTimeout(() => {
            setShouldFetchMore(true)
          }, 5000)
        })
    }

    return () => {
      // Runs when the component is unmounted
      // avoid running the timeout callback on unmounted component
      clearTimeout(timeout);
    }
  }, [isTimerOn, shouldFetchMore]);

  const toggleTimer = (ev) => {
    setTimerOn(ev.target.checked);
  }

  // Remove joke from liked list
  const unlikeJoke = (id) => {
    const newLikedJokes = likedJokes.filter((j) => j.id !== id);

    setLikedJokes(newLikedJokes);
  };

  return (
    <>
      <AppBar position='sticky' style={{backgroundColor: `var(--color-sunglo)`}}>
        <Tabs value={currentTab} onChange={changeTab} centered>
          <Tab label="Home" id="home-tab" aria-controls="home-panel" />
          <Tab label={
            <Badge color="secondary" badgeContent={likedJokes.length > 0 ? likedJokes.length : null}>
              likes
            </Badge>
          } id="likes-tab" aria-controls="likes-panel" />
        </Tabs>
      </AppBar>

      <main className="wrapper">
        {maxJokes && <h1>List is full</h1>}

        <div className="tabpanel" role="tabpanel" id="home-panel" hidden={currentTab !== 0}>
          <button className="btn" onClick={fetchJokes}>Give me some jokes</button>

          <ol className="joke-list">
            {jokes.map(joke => (
              <Joke  key={joke.id} joke={joke} likeJoke={likeJoke} />
            ))}
          </ol>
        </div>
        <div className="tabpanel" role="tabpanel" id="likes-panel" hidden={currentTab !== 1}>
          <label htmlFor="toggleTimer">
            <input type="checkbox" id="toggleTimer" onClick={toggleTimer} value={!isTimerOn} />
            Add random joke every 5 sec.
          </label>

          <ol className="joke-list" data-variant="liked">
            {likedJokes.map(joke => (
              <Joke  key={joke.id} joke={joke} unlikeJoke={unlikeJoke} />
            ))}
          </ol>
        </div>
      </main>

      {loading && <Loader />}
    </>
  );
}

export default App;
