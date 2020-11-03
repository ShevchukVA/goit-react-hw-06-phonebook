import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.container}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="name"
              name="name"
              value={name}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={number}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
