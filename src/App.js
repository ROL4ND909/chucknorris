import React, { useState, useEffect } from 'react'
import useLocalStorageState from "use-local-storage-state";

import { Badge, AppBar, Tab, Tabs } from '@material-ui/core';

import Joke from './components/Joke/';
import Loader from './components/Loader';
import './App.scss';

const API_URL = `//api.icndb.com/jokes/random/`;

function App() {
  const [jokes, setJokes] = useState([]);
  const [likedJokes, setLikedJokes] = useLocalStorageState('Jokes', []);
  const [isTimerOn, setTimerOn] = useState(false);
  const [shouldFetchMore, setShouldFetchMore] = useState(likedJokes.length < 10);
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
        setJokes(res.value);

        // putt it in a timeout to always show the loader
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch((err) => console.warn(`We have an error here: err ${err}`));
  };

  const addJoke = (joke) => {
    if (likedJokes.find((j) => j.id === joke.id) || likedJokes.length > 9) return;
    const newLikedJokes = [joke, ...likedJokes];

    setLikedJokes(newLikedJokes);
  }

  useEffect(() => {
    // Runs everytime isTimerOn OR shouldFetchMore changes OR list is not full
    if (isTimerOn && shouldFetchMore && likedJokes.length < 10) {
      fetch(API_URL)
        .then(res => res.json())
        .then((res) => {
          addJoke(res.value);
          setShouldFetchMore(false);

          setTimeout(() => {
            setShouldFetchMore(true)
          }, 5000);
        })
    }
  }, [isTimerOn, shouldFetchMore]);

  const toggleTimer = (ev) => {
    setTimerOn(ev.target.checked);
  }

  // Remove joke from liked list
  const unaddJoke = (id) => {
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
        <div className="tabpanel" role="tabpanel" id="home-panel" hidden={currentTab !== 0}>
          <button className="btn" onClick={fetchJokes}>Give me some jokes</button>

          <ol className="joke-list">
            {jokes.map(joke => (
              <Joke  key={joke.id} joke={joke} addJoke={addJoke} />
            ))}
          </ol>
        </div>
        <div className="tabpanel" role="tabpanel" id="likes-panel" hidden={currentTab !== 1}>
          <div className="toggle-bar">
            <label className="c-switch">
              <input className="c-switch__input" type="checkbox" onClick={toggleTimer} value={!isTimerOn} />
              <span className="c-switch__slider"></span>
            </label> Add random joke every 5 sec.
          </div>

          <ol className="joke-list" data-variant="liked">
            {likedJokes.map(joke => (
              <Joke  key={joke.id} joke={joke} unaddJoke={unaddJoke} />
            ))}
          </ol>
        </div>
      </main>

      {loading && <Loader />}
    </>
  );
}

export default App;
