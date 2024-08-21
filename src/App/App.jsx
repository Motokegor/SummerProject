import React from 'react';
import { Routes, Route } from 'react-router-dom';
import pages from '../Pages/pages';
import './App.scss';

function App() {
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
        <Route path='/notes' element={<pages.Notes />} />
        <Route path='/' element={<pages.DescriptionPage/>}/>
        <Route path="/register-success" element={<pages.AuthorisationСompleted />} />
        <Route path="/login-success" element={<pages.AuthorisationСompleted />} />
        <Route path="/settingsPage" element={<pages.SettingsPage />} />
        <Route path="/notes/write" element={<pages.NoteWrite />} /> 
        <Route path="/notes/write/:id" element={<pages.NoteWrite />} /> 
      </Routes>
    </>
  );
}

export default App;