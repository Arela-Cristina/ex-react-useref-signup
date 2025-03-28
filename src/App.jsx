import './App.css'
import { useState, useRef } from 'react'

function App() {

  console.log('render')

  const [submited, setSubmited] = useState(false)
  const [showSpecializationError, setShowSpecializationError] = useState(false)

  const nameRef = useRef(null)

  const [formData, setFormData] = useState({
    // realName: '',
    userName: '',
    password: '',
    specialization: '',
    yearsOfExperience: '',
    textArea: ''
  });

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

  // stato validazioni
  const [validUserName, setValidUserName] = useState(true)
  const [validPassword, setValidPassword] = useState(true)
  const [validtextArea, setValidTextArea] = useState(true)



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // validazione userName
    if (name === "userName") {
      const hasSymbols = [...symbols].some(symbol => value.includes(symbol));
      if (value.length < 5 || hasSymbols) {
        setValidUserName(false);

      } else {
        setValidUserName(true);

      }
    }

    // validazione password
    if (name === "password") {
      const hasLetters = [...letters].some(letter => value.includes(letter));
      const hasSymbols = [...symbols].some(symbol => value.includes(symbol));
      const hasNumbers = [...numbers].some(number => value.includes(number));
      if (value.length < 7 || !hasSymbols || !hasNumbers || !hasLetters) {
        setValidPassword(false);
      } else {
        setValidPassword(true);
      }
    }

    // validazione specializazzione
    if (name === "specialization" && value !== "") {
      setShowSpecializationError(false)
    }

    // validazione textArea
    if (name === "textArea") {
      const textLength = value.trim().length;
      console.log(textLength)
      if (textLength < 100 || textLength > 1000) {
        setValidTextArea(false);
      } else {
        setValidTextArea(true);
      }
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { userName, password, specialization, yearsOfExperience, textArea } = formData;

    const realName = nameRef.current.value.trim()

    const isSpecializationValid = specialization !== '';
    setShowSpecializationError(!isSpecializationValid);

    const formValid =
      realName != '' &&
      userName.trim() != '' &&
      validUserName &&
      password.trim() != '' &&
      validPassword &&
      specialization != '' &&
      Number.isInteger(Number(yearsOfExperience)) &&
      Number(yearsOfExperience) >= 0 &&
      textArea.trim() != '' &&
      validtextArea

    if (formValid) {
      setSubmited(true)
      console.log('form inviato',
        {
          realName,
          userName,
          password,
          specialization,
          yearsOfExperience: parseInt(yearsOfExperience),
          textArea
        });

    } else {
      setSubmited(false)
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
            ref={nameRef}
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

          {!validUserName ? (
            <p className='errorText'>Username: Deve contenere min 6 caratteri, acetta caratteri alfanumerici</p>
          ) : (
            userName.length >= 5 && <p className='noErrorText'>Username valido ✅</p>
          )}

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
          {!validPassword ? (
            <p className='errorText'>Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo</p>
          ) : (
            password.length >= 8 && <p className='noErrorText'>Password valida ✅</p>
          )}
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
          {showSpecializationError && <p className='errorText'> Scegli una Specializazzione!</p >}


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
            maxLength={1000}
            required
          ></textarea>
          {!validtextArea ? (
            <p className='errorText'>Descrizione: Deve contenere tra 100 e 1000 caratteri come max.</p>
          ) : (
            textArea.length >= 100 && <p className='noErrorText'>Descrizione valida ✅</p>
          )}
        </div>

        <button type='submit'>Inviare</button>

      </form >
      {submited && <p> Form Inviato!</p >}

    </>

  )
}

export default App
