import React, { useState, useEffect } from 'react';
import '../css/phonebook.css';

const PhoneBook = ({ savedEntry }) => {
  const [contacts, setContacts] = useState({});
  const [phoneBooks, setPhoneBooks] = useState([]); // To store the phone book names
  const [selectedPhoneBook, setSelectedPhoneBook] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for the list of contacts
  const sampleContacts = {
    EBLOCK: [
      { id: 1, name: 'Thulani', phoneNumber: '081-123-4567' },
      { id: 2, name: 'Sibongile', phoneNumber: '081-987-6543' },
      { id: 2, name: 'Fana', phoneNumber: '081-987-6543' },
    ],
    DVT: [
      { id: 3, name: 'Bongani', phoneNumber: '081-456-7890' },
      { id: 4, name: 'Sphiwe', phoneNumber: '081-456-7890' },
      { id: 5, name: 'Andile', phoneNumber: '081-456-7890' },
    ],
    ENTELECT: [
      { id: 3, name: 'Sipho', phoneNumber: '081-456-7890' },
      { id: 4, name: 'Mthulisi', phoneNumber: '081-456-7890' },
      { id: 5, name: 'Andiswa', phoneNumber: '081-456-7890' },
    ],
  };

  useEffect(() => {
    // Simulate fetching data from a server 
    setContacts(sampleContacts);

    // Get the phone book names from the sampleContacts object
    const phoneBookNames = Object.keys(sampleContacts);
    setPhoneBooks(phoneBookNames);

    // Set the default selected phone book to the first one in the list
    if (phoneBookNames.length > 0) {
      setSelectedPhoneBook(phoneBookNames[0]);
    }
  }, []);

  // Function to add a new contact to the list
  const addNewContact = (contact) => {
    const updatedContacts = { ...contacts };
    updatedContacts[selectedPhoneBook] = [...(updatedContacts[selectedPhoneBook] || []), contact];
    setContacts(updatedContacts);
  };

  // Filter contacts based on the selected phone book and the first letter of the first name
  const filteredContacts = contacts[selectedPhoneBook]?.filter((contact) => {
    if (!searchTerm) return true; // If search term is empty, show all contacts
    const firstLetter = contact.name.trim().charAt(0).toLowerCase();
    return firstLetter === searchTerm.toLowerCase();
  }) || [];

  return (
    <div>
      <h2>PhoneBook</h2>
      <div className="filter-container">
        <label htmlFor="phoneBook">Filter:</label>
        <select
          id="phoneBook"
          value={selectedPhoneBook}
          onChange={(e) => setSelectedPhoneBook(e.target.value)}
        >
          {phoneBooks.map((phoneBook) => (
            <option key={phoneBook} value={phoneBook}>
              {phoneBook}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxLength="1"
          placeholder="Enter a letter"
        />
      </div>
      <ul className="contact-list">
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneBook;
