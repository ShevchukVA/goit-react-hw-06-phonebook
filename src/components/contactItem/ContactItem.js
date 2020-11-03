import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, onRemoveContact }) => (
  <li className={styles.item}>
    <p className={styles.text}>{name}:</p>
    <p className={styles.text}>{number}</p>
    <button className={styles.button} type="button" onClick={onRemoveContact}>
      X
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactsActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
