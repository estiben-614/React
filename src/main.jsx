import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MultipleQuotes from './03-examples/MultipleQuotes'
import FocusScreen from './04-useRef/FocusScreen'
import { Padre } from './07-tarea-memo/Padre'
import TodoApp from './08 - useReducer/TodoApp'
// import HooksApp from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithHook } from './01-useState/CounterWithHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
    {/* <FormularioSimple /> */}
  </React.StrictMode>,
)
