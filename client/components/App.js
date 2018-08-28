import React, {Component} from 'react'

import ContactHeader from './ContactHeader.js'
import ContactList from './ContactList.js'

import './App.css'

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <ContactHeader />
                <ContactList />
            </div>
        )
    }   
}

export default App