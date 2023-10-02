import React from "react";
import{Controller, useForm,Controller} from "react-hook-form"
 function RegistrationForm() {
    const{
        handleSubmit,control,formState:{errors}}=useForm();
    

  return (
    <div>
      registrationForm
      <form action="">
        <div>
          <h4>Name</h4>
          <Controller/>
          name="username"
          control={control}
          render={
            ({field})=>
            <input {...field}/>
          }
          
        </div>
        <div>
          <h4>Email</h4>
          <input />
        </div>
        <div>
          <h4>Name</h4>
          <input />
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
