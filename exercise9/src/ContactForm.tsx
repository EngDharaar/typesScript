import React, { useState } from "react";
interface EmailWithName {
  onSubmit: (data:{ name: string, email: string }) => void;
}
const ContactForm = ({ onSubmit }: EmailWithName) => {

  const [asForm,setForm]=useState({
    name:'',
    email:''
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(asForm)
  };
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target;
setForm((prev)=>({...prev,[name]:value}))
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          onChange={handleChange}
          placeholder="enter your email"
          name="email"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
