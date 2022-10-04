import React,{useState} from 'react'
import styles from '../styles/Home.module.css';

function Contacts() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: "",
        subject:"",
        phonenumber:""
      });
      const handleChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (inputs.name == "" || inputs.email == "" || inputs.message == "") {
            console.log("gee")
        //   setShow(true);
        //   setResponse("Enter Required Details");
        //   setTimeout(function () {
        //     setShow(false);
        //   }, 5000);
          return;
        } 
        // else {
        //   const requestOptions = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(inputs),
        //   };
    
        //   fetch("http://www.ecareserve.com/api/contact_form", requestOptions)
        //     .then((response) => response.json())
        //     .then((res) => {
        //       console.log(res);
        //     //   setResponse(res.message);
        //       console.log(res.message);
        //     });
        //   setShow(true);
        //   setTimeout(function () {
        //     setShow(false);
        //   }, 1000);
        // }
      };
  return (
    <div className={styles.contact}>
         <h2>Get in touch with us?</h2>
         <form>
         <div className={styles.inputbox}>
         <input
                        type='text'
                        name='name'
                        id='name'
                        className={styles.input}
                        placeholder='Name *'
                        value={inputs.name}
                        onChange={handleChange}
                      />
                      <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email *'
                        className={styles.input}
                        value={inputs.email}
                        onChange={handleChange}
                      />
         </div>
         <div className={styles.inputbox}>
         <input
                        type='text'
                        name='name'
                        id='phonenumber'
                        className={styles.input}
                        placeholder='Phone Number'
                        value={inputs.phonenumbers}
                        onChange={handleChange}
                      />
                      <input
                        type='text'
                        name='email'
                        id='subject'
                        placeholder='Subject *'
                        className={styles.input}
                        value={inputs.subject}
                        onChange={handleChange}
                      />
         </div>
         <textarea
                      type='text'
                      name='message'
                      id='message'
                      placeholder='Message'
                      className={styles.message}
                      value={inputs.message}
                      onChange={handleChange}
                    />
         </form>
         <button className={styles.btun}>SEND MESSAGE</button>
    </div>
  )
}

export default Contacts