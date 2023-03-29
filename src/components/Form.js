import axios from 'axios';
import React, { useState } from 'react';
import './Form.css';
import base_url from "../api/bootapi";
const Form = () => {
  const [contactData, setContactData] = useState({});
  //handleForm start
const handleForm=(e)=>{
  console.log(contactData);
  postDataToServer(contactData);
  e.preventDefault();

}

  //handleForm end

  //createing post data on the server
  const postDataToServer=(data)=>{
axios.post(`${base_url}/contact/add`,data).then(
  (response)=>{
    console.log(response);
    console.log("success");
  },(error)=>{
    console.log(error);
    console.log("error");
  }
)
  };


  return (
    <div className="form">
       <form onSubmit={handleForm}>
        <label>Your Name</label>
        <input type="text" name="name" placeholder='Enter name here' onChange={(e)=>{setContactData({...contactData,name:e.target.value})
        }}/>
        <label>Your Email</label>
        <input type="email" name="email" placeholder='Enter email here' onChange={(e)=>{setContactData({...contactData,email:e.target.value})
        }}/>
        <label>Subject</label>
        <input type="text" name="subject" placeholder='Enter Subject here'
        onChange={(e)=>{setContactData({...contactData,subject:e.target.value})
      }}/>
        <label>Message</label>
        <textarea rows="6" placeholder='type your message here' name="messsage"
        onChange={(e)=>{setContactData({...contactData,message:e.target.value})
      }}></textarea>

        <button type="submit" className="btn">Submit</button>
       </form>

    </div>
  )
}

export default Form