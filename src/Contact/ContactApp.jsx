
import React, { useState } from 'react';
import './ContactApp.css';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');

  const addContact = () => {
    
      setContacts([...contacts, { name, phone }]);
      setName('');
      setPhone('');
    
  };

  const removeContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contact-app">
      <h1>Contact List</h1>
      <div className="contact-input">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      <div className="contact-search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
        />
      </div>
      <ul className="contact-list">
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
            <button onClick={() => removeContact(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactApp;
