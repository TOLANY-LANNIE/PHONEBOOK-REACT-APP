import React, { useState } from 'react';
import '../css/addEntry.css'; 
const AddEntry = () => {
  const [phoneBook, setPhoneBook] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [savedEntry, setSavedEntry] = useState(null); // To store the saved entry
  const [entries, setEntries] = useState([]); // Array to store AddEntry objects
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!phoneBook) {
      setError('Please select a phone book option.');
      return;
    }

    // Prepare the data to be saved
    const entryData = {
      phoneBook,
      name,
      phoneNumber,
    };

    // Save the data to the entries array
    setEntries([...entries, entryData]);

    // Set the savedEntry state to display the last saved entry
    setSavedEntry(entryData);

    // Clear the input fields and error after saving
    setPhoneBook('');
    setName('');
    setPhoneNumber('');
    setError('');
  };

  const handleCancel = () => {
    // Handle cancel action (e.g., navigate back or reset any temporary state)
    console.log('Canceling entry');
  };

  // Function to handle phone number input and format it as "081-365-9535"
  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    const sanitizedPhoneNumber = inputPhoneNumber.replace(/[^0-9]/g, '');
    const formattedPhoneNumber = sanitizedPhoneNumber.slice(0, 10);

    // Format the phone number as "081-365-9535" if it has 10 digits
    if (formattedPhoneNumber.length === 10) {
      const formatted = `${formattedPhoneNumber.slice(0, 3)}-${formattedPhoneNumber.slice(3, 6)}-${formattedPhoneNumber.slice(6, 10)}`;
      setPhoneNumber(formatted);
    } else {
      setPhoneNumber(formattedPhoneNumber);
    }
  };

  return (
    <div className="entry-container">
      <h2>Add New Entry</h2>
      {error && <p className="error">{error}</p>}
      <div className="input-container">
        <select
          id="phoneBook"
          value={phoneBook}
          onChange={(e) => setPhoneBook(e.target.value)}
          className="select-input"
        >
          <option value="">Select PhoneBook</option>
          <option value="Eblocks">Eblocks</option>
          <option value="DVT">DVT</option>
          <option value="DVT">ENTELECT</option>
        </select>
      </div>
      <div className="input-container">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-text"
          placeholder="Enter name"
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="input-text"
          placeholder="Enter phone number"
        />
      </div>
      <div className="button-container">
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
     
      {/* Display all saved entries */}
      {entries.length > 0 && (
        <div className="saved-entry">
          <h3>All Saved Entries:</h3>
          {entries.map((entry, index) => (
            <div key={index}>
              <p>PhoneBook: {entry.phoneBook}</p>
              <p>Name: {entry.name}</p>
              <p>Phone Number: {entry.phoneNumber}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddEntry;
