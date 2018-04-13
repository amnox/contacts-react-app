import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*function ListContacts(props){
  return (
    <ol className = "contact-list">
      {props.contacts.map((contact) =>
        <li key={contact.id} className='contact-list-item'>
          <div 
            className = 'contact-avatar' 
            style = {
              {
                backfroundImage: `url(${contact.avatarURL})`
              }
            }
          ></div>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button 
            onClick = {() => props.onDeleteContact(contact)}
            className='contact-remove'>Remove</button>
        </li>
      )}
    </ol>
  )
}*/


class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired,
  }
  state = {
    query:''
  }
  updateQuery = (query) => {
    this.setState(()=>({
      query: query.trim()
    }))
  }
  render() {
    const {query} = this.state;
    const {contacts, onDeleteContact, onNavigate} = this.props;

    const showingContacts = query === ''
      ? contacts
      : contacts.filter((c) => (c.name.toLowerCase().includes(query.toLocaleLowerCase())))
    return (
      <div className = 'list-contacts'>
        <div className = 'list-contacts-top'>
          <input 
            className = 'search-contacts'
            type= 'text'
            value = {query}
            onChange = {(event) => this.updateQuery(event.target.value)}
          />
          <Link
            to = '/create'
            className = 'add-contact'
          > Add Contact
          </Link>
        </div>
        <ol className = "contact-list">
          {showingContacts.map((contact) =>
            <li key={contact.id} className='contact-list-item'>
              <div 
                className = 'contact-avatar' 
                style = {
                  {
                    backfroundImage: `url(${contact.avatarURL})`
                  }
                }
              ></div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button 
                onClick = {() => onDeleteContact(contact)}
                className='contact-remove'>Remove</button>
            </li>
          )}
        </ol>
      </div>
    )
  }
}


export default ListContacts;