import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from 'GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, SectionTitle } from './Title/Titles.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const sameName = this.state.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(newContact.name.toLowerCase());

    if (sameName) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Layout>
        <GlobalStyle />
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSave={this.addContact} />
        <SectionTitle>Contacts</SectionTitle>
        <Filter value={filter} onChange={this.filterContacts} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Layout>
    );
  }
}
