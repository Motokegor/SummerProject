import React, { useState, useEffect } from 'react'; 
import { Routes, Route } from 'react-router-dom'
import pages from '../Pages/pages'
import './App.scss'

function App() {
  const [notes, setNotes] = useState([]); 
  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setNotes(data.notes))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  return (
    <>
      <Routes>
        <Route path='/home' element={<pages.Home/>}/>
        <Route path='/login' element={<pages.Login/>}/>
        <Route path='*' element={<pages.Error/>}/>
        <Route path='/tips' element={<pages.Tips/>}/>
        <Route path='/statistic' element={<pages.Statistic/>}/>
        <Route path='/startPage' element={<pages.StartPage/>}/>
        <Route path='/register' element={<pages.Register/>}/>
        <Route path='/notes' element={<pages.Notes notes={notes} setNotes={setNotes} />} />
        <Route path='/' element={<pages.DescriptionPage/>}/>
        <Route path="/register-success" element={<pages.AuthorisationСompleted />} />
        <Route path="/login-success" element={<pages.AuthorisationСompleted />} />
        <Route path="/settingsPage" element={<pages.SettingsPage />} />
        <Route path="/notes/write" element={<pages.NoteWrite notes={notes} setNotes={setNotes} />} /> 
        <Route path="/notes/write/:id" element={<pages.NoteWrite notes={notes} setNotes={setNotes} />} /> 
      </Routes>
    </>
  )
}

export default App