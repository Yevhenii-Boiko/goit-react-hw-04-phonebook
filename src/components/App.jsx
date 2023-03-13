import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from 'GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, SectionTitle } from './Title/Titles.styled';
import initialContacts from '../contacts.json';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const sameName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(newContact.name.toLowerCase());

    if (sameName) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Layout>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSave={addContact} />
      <SectionTitle>Contacts</SectionTitle>
      <Filter value={filter} onChange={filterContacts} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </Layout>
  );
};
