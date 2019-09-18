import React, { useState }from 'react';
import './App.css';
import uuid from 'uuid';
import Form from './Form';


const initialTeamMemberList = [
  { id: uuid(), name: 'gabe', email:'a@yahoo.com', role: 'Full stack dev'},
  { id: uuid(), name: 'luke', email: 'b@getMaxListeners.com', role: 'Full stack dev'},
  { id: uuid(), name: 'josh', email: 'c@yahoo.com', role: 'Full stack dev'},

];

const initialTeamMemberForm = {
  name: '',
  email: '',
  role : '',
};


function App() {
  const [teamMemberList, setTeamMemberList] = useState(initialTeamMemberList);
  const [teamMemberForm, setTeamMemberForm] = useState(initialTeamMemberForm);

  const handleChange = e => {
    setTeamMemberForm({
     ...teamMemberForm,
     [e.target.id]: e.target.value
    });
    };
 


    const onFormSubmit = e => { 
      e.preventDefault();
      const newTeamMember = {
        id: uuid(),
        name: teamMemberForm.name,
        email: teamMemberForm.email,
        role: teamMemberForm.role
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
        {/* {
        teamMemberList.map(member => {
          <h5 key={member.id}> {member.name} {member.email} {member.role}</h5>
        })
        } */}
      </header>
    </div>
  );
}

export default App;
