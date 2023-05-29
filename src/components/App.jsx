import React, { Component } from 'react';
import data from './data/data.json'
import Contacts from './Contacts/Contacts';
import Forma from './Forma/Forma';
import { nanoid } from 'nanoid'
import { Notify } from 'notiflix';

  class App extends Component {
    state = {
    contacts: data,
    };


    // ! ====== Add contact to state ======
    addNewContact = ({ name, number, contactIsList}) => {
    const newNameToLowerCase = name.toLowerCase();
    const {  contacts } = this.state;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newNameToLowerCase && contact.number === number) {
        Notify.failure(`${contact.name}: ${contact.number} is already in contacts`)
        contactIsList = true;
        return;
      }
    });

if (contactIsList) {
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

    // ! ====== Delete contact from state ======

    deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),

    }));
  };

    render() {
      return (
        <>

          <Forma  onSubmit={this.addNewContact}/>
          <Contacts
            contacts={this.state.contacts}
            pressDeleteContact={this.deleteContact}
        />
        </>

      )
    }
  }

  export default App;
