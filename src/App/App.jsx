import './App.scss'
import { Routes, Route } from 'react-router-dom'
import pages from '../Pages/pages'

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
        <Route path='/notes' element={<pages.Notes/>}/>
        <Route path='/' element={<pages.DescriptionPage/>}/>
      </Routes>
    </>
  )
}

export default App
