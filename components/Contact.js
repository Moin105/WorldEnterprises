import React,{useState} from 'react'
import styles from '../styles/Home.module.css';
import Modal from './Modal';

function Contacts() {
 
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState("");
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
  // setShow(true);
  setTimeout(function () {
    setShow(false);
  }, 1000);
  // setShow(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.name == "" || inputs.email == "" || inputs.message == "" || inputs.phonenumber == "" || inputs.subject == "") {
      setShow(true);
      setResponse("Enter Required Details");
      setTimeout(function () {
        setShow(false);
      }, 5000);
      return;
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      };

      fetch("https://globaltechnologia.org/qrcodeNew/public/api/send_email", requestOptions)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          setResponse(res.message);
          console.log(res.message);
        });
      setShow(true);
      setTimeout(function () {
        setShow(false);
      }, 1000);
    }
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
         {/* <button className={styles.button}  > */}
         <button className={styles.btun} onClick={handleSubmit}>SEND MESSAGE</button>
         {show && <Modal message={response}/>}
    </div>
  )
}

export default Contacts