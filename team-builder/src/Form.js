import React from "react";



function Form(props) {
  const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;
  const { name, email, role } = props.teamMemberForm;
  const isDisabled = () => {
    if (!name || !email || !role){
        return true;
    }
    return false;
  };

  return (
    <form>
      <label htmlFor="nameInput">Name</label>
      <input 
        value={name} 
        onChange={onNameChange}
        id="nameInput" 
        type="text" 
        placeholder="Name"
         />

      <label htmlFor="emailInput">Email</label>
      <input 
        value={email} 
        onChange={onEmailChange}
        id="emailInput" 
        type="email" 
        placeholder="Email" 
        />

      <label htmlFor="roleInput">Role</label>
      <input 
        value={role} 
        onChange={onRoleChange}
        id="roleInput" 
        type="text" 
        placeholder="Role" 
        />

      <button 
        disabled={isDisabled()}
        onClick={onFormSubmit}
        >
            Submit
        </button>
    </form>
  );
}

export default Form;
