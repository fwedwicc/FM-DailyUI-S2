import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './Route'

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          route.index ? (
            <Route key={index} index element={route.element} />
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          )
        ))}
      </Routes>
    </Router>
  )
}

export default App