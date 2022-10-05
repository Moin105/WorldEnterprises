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
                        name='phonenumber'
                        id='phonenumber'
                        className={styles.input}
                        placeholder='Phone Number'
                        value={inputs.phonenumber}
                        onChange={handleChange}
                      />
                      <input
                        type='text'
                        name='subject'
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