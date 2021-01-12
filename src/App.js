import React, { useState } from 'react'
import useLocalStorageState from "use-local-storage-state";

import { Badge, AppBar, Tab, Tabs } from '@material-ui/core';

import Joke from './components/Joke/';
import Loader from './components/Loader';
import './App.scss';

const API_URL = `//api.icndb.com/jokes/random/`;

function App() {
  const [jokes, setjokes] = useState([]);
  const [likedJokes, setLikedJokes] = useLocalStorageState('Jokes', []);

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
        setTimeout(() => {
          setLoading(false);
        }, 400);
      })
      .catch((err) => console.warn(`We have an error here: err ${err}`));
  };

  const likeJoke = (id) => {
    if (likedJokes.find((j) => j.id === id) || likedJokes.length > 9) {
      // #TODO
      // Add a message or something if joke is on the list or the max jokes are reached
      console.log('is liked or max like items');
      return;
    }

    const likedJoke = jokes.find((j) => j.id === id);

    setLikedJokes([likedJoke, ...likedJokes]);
  };

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
        <div className="tabpanel" role="tabpanel" id="home-panel" hidden={currentTab !== 0}>
          <button className="btn" onClick={fetchJokes}>Give me some jokes</button>

          <ol className="joke-list">
            {jokes.map(joke => (
              <Joke  key={joke.id} joke={joke} likeJoke={likeJoke} />
            ))}
          </ol>
        </div>
        <div className="tabpanel" role="tabpanel" id="likes-panel" hidden={currentTab !== 1}>
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
