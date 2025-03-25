import './App.css'
import { useState } from 'react'

function App() {

  console.log('render')



  // stato per controllare se il campo e stato compilato
  const [isFilled, setIsFilled] = useState(true);

  const [submited, setSubmited] = useState(false)

  const [formData, setFormData] = useState({
    realName: '',
    userName: '',
    password: '',
    specialization: '',
    yearsOfExperience: '',
    textArea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
    
    if (name === "specialization" && value !== "") {
      setIsFilled(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { realName, userName, password, specialization, yearsOfExperience, textArea } = formData;

    if (realName.trim() != '' &&
      userName.trim() != '' &&
      password.trim() != '' &&
      specialization != '' &&
      Number.isInteger(Number(yearsOfExperience)) &&
      Number(yearsOfExperience) >= 0 &&
      textArea.trim() != '') {

      setSubmited(true)
      console.log('form inviato',
        {
          realName,
          userName,
          password,
          specialization,
          yearsOfExperience,
          textArea
        }

      )


    } else {

      setSubmited(false)
      setIsFilled(false)
      console.log('Ci sono dei campi senza compilare');

    }

  }

  const { realName, userName, password, specialization, yearsOfExperience, textArea } = formData;

  return (
    <>
      <h2>Web Developer Sign Up!</h2>

      <form onSubmit={handleSubmit}>
        <div className='customInput'>
          <label htmlFor="realName">Scrivi il tuo Nome</label>
          <input
            type="text"
            placeholder='il tuo nome'
            id="realName"
            name="realName"
            value={realName}
            onChange={handleChange}
            required
          />
        </div>

        <div className='customInput'>
          <label htmlFor="userName">Scrivi il tuo User-Name</label>
          <input
            type="text"
            placeholder='il tuo User-Name'
            id="userName"
            name="userName"
            value={userName}
            onChange={handleChange}
            required
          />

        </div>

        <div className='customInput'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />

        </div >

        <div className='customInput'>
          <label htmlFor="specialization">Specializzazione</label>
          <select
            name="specialization"
            id="specialization"
            value={specialization}
            onChange={handleChange}>

            <option value="">Scegli una specializazzione</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>

        </div >

        <div className='customInput'>
          <label htmlFor="yearsOfExperience">Anni di esperienza</label>
          <input
            type='number'
            id="yearsOfExperience"
            name="yearsOfExperience"
            min="0"
            value={yearsOfExperience}
            onChange={handleChange}
            required
          />

        </div>

        <div className='customInput'>
          <label htmlFor="textArea">Breve descrizione sullo sviluppatore</label>
          <textarea
            id="textArea"
            name="textArea"
            placeholder='Io mi chiamo ... '
            rows="4"
            cols="50"
            value={textArea}
            onChange={handleChange}
            required
          ></textarea>

        </div>

        <button type='submit'>Inviare</button>

      </form >
      {submited && <p> Form Inviato!</p >}
      {!isFilled && <p className='errorText'> Scegli una Specializazzione!</p >}

    </>

  )
}

export default App
