import React from 'react'

import ReactDOM from 'react-dom/client'
import './todolist.css'

import ToDoList from './ToDoList.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList/>
  </React.StrictMode>,
)
