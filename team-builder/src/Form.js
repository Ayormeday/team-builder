import React from 'react';



function Form (props){
    const { name, email, role } = props



    return (
    <form>
        <label htmlFor='nameInput'>Name</label>
        <input value={name} id='nameInput' type='text' placeholder='Name'/>
        
        <label htmlFor='emailInput'>Email</label>
        <input value={email} id='emailInput' type='email' placeholder='Email'/>

        <label htmlFor='roleInput'>Role</label>
        <input value={role} id='roleInput' type= 'text' placeholder='Role'/>

        <button disabled='false'>
            Submit
        </button>
      
    </form>

    );
}

export default Form;