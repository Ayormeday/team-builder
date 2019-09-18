import React from "react";

function Form(props) {
  const { handleChange, onFormSubmit } = props;
  const { name, email, role } = props.teamMemberForm;

  return (
    <form>
      <label htmlFor="nameInput">Name</label>
      <input 
        value={name} 
        id="nameInput" 
        type="text" 
        placeholder="Name"
        onChange={handleChange}
         />

      <label htmlFor="emailInput">Email</label>
      <input 
        value={email} 
        id="emailInput" 
        type="email" 
        placeholder="Email" 
        onChange={handleChange}/>

      <label htmlFor="roleInput">Role</label>
      <input 
        value={role} 
        id="roleInput" 
        type="text" 
        placeholder="Role" 
        onChange={handleChange}/>

      <button 
        disabled={false}
        onClick={onFormSubmit}
        >
            Submit
        </button>
    </form>
  );
}

export default Form;
