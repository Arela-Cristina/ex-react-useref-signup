import './App.css'
import { useState } from 'react'

function App() {


  return (
    <>
      <h2>Il Form degli Sviluppatori</h2>

      <form action="submit">
        <div className='customInput'>
          <label htmlFor="name">Scrivi il tuo Nome</label>
          <input type="text" placeholder='il tuo nome' id="name" name="name" />
        </div>

        <div className='customInput'>
          <label htmlFor="username">Scrivi il tuo User-Name</label>
          <input type="text" placeholder='il tuo User-Name' id="username" name="username" />
        </div>

        <div className='customInput'>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className='customInput'>
          <label htmlFor="specialization">Specializzazione</label>
          <select name="" id="specialization">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </div>

        <div className='customInput'>
          <label for="yearsOfExperience">Anni di esperienza</label>
          <input type='number' id="yearsOfExperience" name="yearsOfExperience" />
        </div>

        <div className='customInput'>
          <label for="description">Breve descrizione sullo sviluppatore</label>
          <textarea id="description" name="description" rows="4" cols="50"></textarea>
        </div>

        <button type='submit'>Inviare</button>
      </form>

    </>

  )
}

export default App
