import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_7/Container'


const container = document.getElementById('app');

// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_7')

  ReactDOM.render(<Container />, container)
})
