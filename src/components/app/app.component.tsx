import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../header/header.component'
import '../../common/styles'
import './app.component.css'
import About from '../../pages/about/about.page'
import Home from '../../pages/home/home.page'

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                >
                </Route>
                <Route
                    path='/about'
                    element={<About />}
                >
                </Route>
            </Routes>
        </Router>
    )
}
export default App