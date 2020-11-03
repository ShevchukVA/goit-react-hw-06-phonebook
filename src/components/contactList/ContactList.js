import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactItem from '../contactItem/contactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <>
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} classNames={styles} timeout={250}>
          <ContactItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
