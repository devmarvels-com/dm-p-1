import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

enum SubscriptionEnum {
  yes = "yes",
  no = "no",
}

type IFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  subscribe: SubscriptionEnum;
};

function App() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onFormSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label>First Name</label>
        <input {...register("firstName")} />
        <label>Last Name</label>
        <input {...register("lastName")} />
        <label>Email</label>
        <input {...register("email")} />
        <label>Add me to your newsletter?</label>
        <select {...register("subscribe")}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
