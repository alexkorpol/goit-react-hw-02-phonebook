import React from 'react';
import { Button, Item } from './Contacts.styled';

const Contacts = ({ contacts, pressDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name + ' : ' + number}
          <Button type="button" onClick={() => pressDeleteContact(id)}>Delete</Button>
        </Item>
      ))}
    </ul>
  );
};

export default Contacts;





