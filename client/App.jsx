import React, { useState, useEffect } from 'react';
import MainNavBar from './components/MainNavBar';
import './assets/styles.scss';

const id = 1;

function App(props) {
  const [userName, setUserName] = useState('');

  useEffect(async () => {
    try {
      const response = await fetch(`/user/${id}`);
      const data = await response.json();
      setUserName(data.userName);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <MainNavBar userName={userName} />
      <div>
        <h1>Welcome to the App component!</h1>
      </div>
    </>
  );
}

export default App;
