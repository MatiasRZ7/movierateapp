import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Auth } from './pages/auth'
import {Home} from './pages/home'
import { Movie } from './pages/movies'
import { TvShow } from './pages/tvshow'
import { Rated } from './pages/rated'
import { ThemeContext } from './components/Themedark'
import { useContext, useEffect } from 'react'

function App() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/rated' element={<Rated/>} />
          <Route path='/movie/:id' element={<Movie/>} />
          <Route path='/tvshow/:id' element={<TvShow/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App