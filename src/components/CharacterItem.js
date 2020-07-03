import React, { useEffect } from 'react';

import axios from '../axios_intance';

const CharacterItem = ({ item }) => {
  // useEffect(() => {
  //   const getQuote = async () => {
  //     const newName = item.name.replace(/ /g, '+');

  //     const result = await axios.get(`/quote/random?author=${newName}`);
  //     console.log(result.data);
  //   };

  //   getQuote();
  // });

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="Character" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong>{' '}
              <span
                style={{
                  color: item.status === 'Alive' ? 'green' : 'red',
                }}
              >
                {item.status}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
