import React, { useState }from 'react';
import './App.css';
import uuid from 'uuid';
import Form from './Form';

const initialTeamMemberList = [
  {id:uuid(), name: 'gabe', email:'placeholder@yahoo.com', role: 'instructor'}

];

const initialTeamMemberForm = {
  name: '',
  email: '',
  role : '',
};


function App() {
  const [teamMemberList, setTeamMemberList] = useState(initialTeamMemberList);
  const [teamMemberForm, setTeamMemberForm] = useState(initialTeamMemberForm);

  // const handleChange = e => {
  //   setTeamMemberForm({
  //    ...teamMemberForm,
  //    [e.target.id]: e.target.value
  //   });
  //   };
  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    teamMemberForm({
      name: e.target.value,
      email: friendForm.email,
    });
  };


    const onFormSubmit = e => { 
      e.preventDefault();
      const newTeamMember = {
        id: uuid(),
        name: teamMemberForm.name,
        age: teamMemberForm.age,
      };
      const newteamMemberList = teamMemberList.concat(newTeamMember);
      setTeamMemberList(newteamMemberList);
      setTeamMemberForm(initialTeamMemberForm);
    };


  return (
    <div className="App">
      <header className="App-header">
        <Form 
        handleChange={handleChange}
        onFormSubmit={onFormSubmit}
        teamMemberForm={teamMemberForm}
        />
      </header>
    </div>
  );
}

export default App;
