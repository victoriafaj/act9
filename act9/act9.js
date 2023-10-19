import React, { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <p>Nombre Completo: {firstName} {lastName}</p>
    </div>
  );
}

export default Person;
