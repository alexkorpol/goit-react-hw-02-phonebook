import React, { Component } from 'react';
import data from './data/data.json'
import Contacts from './Contacts/Contacts';

  class App extends Component {
  state = {
    contacts: data,
  };

    render() {
      return (
        <>
          <Contacts data = {data}
        />
        </>

      )
    }
  }

  export default App;
