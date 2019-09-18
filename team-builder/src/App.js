import React, { useState }from 'react';
import './App.css';
import uuid from 'uuid';
import Form from './Form';

const initialTeamMemberList = [
  { id: uuid(), name: 'gabe', age: 42 },
  { id: uuid(), name: 'luke', age: 22 },
  { id: uuid(), name: 'josh', age: 52 },
];

const initialTeamMemberForm = {
  name: '',
  email: '',
  role : '',
};

function App() {
  const [teamMember, setTeamMember] = useState(initialTeamMemberList);
  const [teamMemberForm, setTeamMemberForm] = useState(initialTeamMemberForm);



  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
}

export default App;
