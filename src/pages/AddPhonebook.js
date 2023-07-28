import React, { useState } from 'react';
import '../css/addPhoneBook.css';

const AddPhoneBook = () => {
  const [phoneBookName, setPhoneBookName] = useState('');
  const [phoneBooks, setPhoneBooks] = useState([]); // Local const array to store phone book names
  const [error, setError] = useState(''); // State variable to track the error message

  const handleSave = () => {
    // Handle saving the phone book name to the local array
    if (phoneBookName.trim() !== '') {
      setPhoneBooks([...phoneBooks, phoneBookName]);
      setPhoneBookName(''); // Clear the input field after saving
      setError(''); // Clear any existing error message
    } else {
      setError('PhoneBook name cannot be empty.'); // Set the error message
    }
  };

  const handleCancel = () => {
    // Handle cancel action (e.g., navigate back or reset any temporary state)
    console.log('Canceling phone book name');
  };

  return (
    <div className="phonebook-container">
      <h2>Add New PhoneBook</h2>
      <div className="input-container">
        <input
          type="text"
          id="phoneBookName"
          value={phoneBookName}
          onChange={(e) => setPhoneBookName(e.target.value)}
          className="input-text"
          placeholder="Enter PhoneBook Name"
        />
        {/* Display the error message if there is one */}
        {error && <p className="error">{error}</p>}
      </div>
      <div className="button-container">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
      {/* Display the saved phone book names */}
      <div>
        <h3>Saved Phone Books:</h3>
        <ul className="contact-list">
          {phoneBooks.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddPhoneBook;
