import React, { useState, useEffect } from 'react';

import axios from './axios_intance';
import Header from './components/Header';
import CharacterList from './components/CharacterList';

export const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`/characters`);

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />

      <CharacterList isLoading={isLoading} items={items} />
    </div>
  );
};
