import React, { Component } from 'react';

const Contacts = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, name, number }) => (
        <li key={id}>
          {name + ' : ' + number}
          <button type="button" ></button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;





