import React from 'react'

import ContactStore from '../stores/contactStore.js'
import ContactActions from '../actions/ContactActions.js'

import ContactHeader from './ContactHeader.js'
import ContactEditor from './ContactEditor.js'
import ContactList from './ContactList.js'

import './App.css'

function getStateFromFlux() {
    return {
        isLoading: ContactStore.isLoading(),
        contacts: ContactStore.getContacts()
    }
}

const App = React.createClass({
    
    getInitialState() {
        return getStateFromFlux()
    },

    componentWillMount() {
        ContactActions.loadContacts()
    },

    componentDidMount() {
        ContactStore.addChangeListener(this._onChange)
    },

    componentWillUnmount() {
        ContactStore.removeChangeListener(this._onChange)
    },

    handleContactAdd(contactData) {
        console.log('****  handleContactAdd contactData **** ', contactData)
        ContactActions.createContact(contactData)
    },

    handleContactLoad(contactData) {
        console.log('****  handleContactLoad contactData **** ', contactData)
        ContactActions.loadContact(contactData)
    },

    handleContactUpdate(contactData) {
        console.log('****  handleContactUpdate contactData **** ', contactData)
        ContactActions.updateContact(contactData)
    },

    handleContactDelete(contact) {
        console.log('****  handleContactDelete contact **** ', contact)
        ContactActions.deleteContact(contact.id)
    },

    render() {
        return (
            <div className="App">
                <ContactHeader />
                <ContactEditor onContactAdd={this.handleContactAdd} />
                <ContactList contacts={this.state.contacts} onContactDelete={this.handleContactDelete} onContactLoad={this.handleContactLoad}/>
            </div>
        )
    },
    
    _onChange() {
        this.setState(getStateFromFlux())
    }
})

export default App