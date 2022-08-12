// import { useState } from 'react';

import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  removeItem,
  getItems,
  filterItems,
  getFilter,
} from '../redux/contactsSlice';

function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const filterText = useSelector(getFilter);

  const formSubmitHandler = contact => {
    const normalzeName = contact.name.toLocaleLowerCase();

    contacts.find(contact => contact.name.toLocaleLowerCase() === normalzeName)
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addItem(contact));
  };

  const deleteContact = contactId => {
    dispatch(removeItem(contactId));
  };

  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  const getContactsFilter = () => {
    const normalizedFilter = filterText.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const contactsFilter = getContactsFilter();
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filterText} onChange={changeFilter} />
      <ContactList contacts={contactsFilter} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
