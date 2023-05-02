import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchRandomGreeting } from '../actions/greetingsAction';
import Greeting from './Greeting';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);
  console.log(fetchRandomGreeting())
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
};

export default App;
