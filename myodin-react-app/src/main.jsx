import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import About from './About.jsx'
import ButterySmoothLists from './ButterySmoothLists.jsx'
import { Person, UsersVictim } from './Person2Person.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <About />
    <ButterySmoothLists />
    <Person />
    <UsersVictim />
  </StrictMode>,
)
