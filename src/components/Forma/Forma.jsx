import React, { Component } from 'react';
import { Button, Form, Input, Label, Span } from './Forma.styled';

class Forma extends Component {
  state = {
    name: '',
    number: '',
  };

handleChange = nameValueInput => event => {
    const { target } = event;
    this.setState({
      [nameValueInput]: target.value,
    });
  return (console.log("state", this.state))
  };


handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form  onSubmit={this.handleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            placeholder="Your name"
            name="name"
            value={name}
            onChange={this.handleChange('name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Span>Number</Span>
          <Input
            type="tel"
            placeholder="Your number"
            name="number"
            value={number}
            onChange={this.handleChange('number')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add to contacts
        </Button>
      </Form>

    )
   }
}
  export default Forma;



