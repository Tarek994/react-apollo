import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../header/header.component'
import '../../common/styles'
import './app.component.css'
import About from '../../pages/about/about.page'
import Home from '../../pages/home/home.page'
import { ApolloProvider } from '@apollo/client'
import client from '../../common/apollo-client'

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    )
}
export default App