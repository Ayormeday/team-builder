import React from "react";



function Form(props) {
  const { handleChange, onFormSubmit } = props;
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
        onChange={handleChange}
        id="name" 
        type="text" 
        placeholder="Name"
         />

      <label htmlFor="emailInput">Email</label>
      <input 
        value={email} 
        onChange={handleChange}
        id="email" 
        type="email" 
        placeholder="Email" 
        />

      <label htmlFor="roleInput">Role</label>
      <input 
        value={role} 
        onChange={handleChange}
        id="role" 
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
