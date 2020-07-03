import React from 'react';

import axios from './axios_intance';
import Header from './components/Header';

export const App = () => {
  axios.get('/characters').then((res) => console.log(res.data));

  return (
    <div className="container">
      <Header />
    </div>
  );
};
