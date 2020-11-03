import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Logo from './Logo/Logo';
import stylesLogo from './Logo/Logo.module.css';

export default function PhoneBook() {
  return (
    <div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={stylesLogo}
        unmountOnExit
      >
        <Logo />
      </CSSTransition>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
