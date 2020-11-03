import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const handleAddContact = (state, action) => {
  if (
    action.payload.contact.name === '' ||
    action.payload.contact.number === ''
  ) {
    return state;
  } else if (state.length === 0) {
    return [...state, action.payload.contact];
  } else {
    const names = state.map(contact => contact.name.toLowerCase());
    if (names.includes(action.payload.contact.name.toLowerCase())) {
      alert(`${action.payload.contact.name} is alredy in contacts`);
      return state;
    } else {
      return [...state, action.payload.contact];
    }
  }
};

const handleRemoveContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.addContact]: handleAddContact,
  [contactsActions.removeContact]: handleRemoveContact,
});

const filter = createReducer('', {
  [contactsActions.filterContacts]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });
