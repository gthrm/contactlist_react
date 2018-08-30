import AppDispatcher from '../dispatcher/AppDispatcher'
import Constants from '../constants/AppConstants'

import api from '../api'

const ContactActions = {
    loadContacts() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_CONTACTS_REQUEST
        })

        api.contactlist()
        .then(({ data }) => 
            AppDispatcher.dispatch({
                type: Constants.LOAD_CONTACTS_SUCCESS,
                contacts: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_CONTACTS_FAIL,
                error: err  
            })
        )
    },
    loadContact(id) {
        AppDispatcher.dispatch({
            type: Constants.LOAD_CONTACTS_REQUEST
        })

        api.getContact(id)
        .then(({ id }) => 
            AppDispatcher.dispatch({
                type: Constants.LOAD_CONTACTS_SUCCESS,
                id: id
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_CONTACTS_FAIL,
                error: err  
            })
        )
    },

    createContact(contact) {
        console.log('createContact', contact)
        api.createContact(contact)
            .then(() => 
            this.loadContacts()
        )
        .catch(err =>
            console.error(err)
        )
    },

    updateContact(data) {
        console.log('createContact', data)
        api.updateContact(data)
            .then(() => 
            this.loadContacts()
        )
        .catch(err =>
            console.error(err)
        )
    },

    deleteContact(id) {
        console.log('deleteContact ', id)
        api.deleteContact(id)
        .then(() =>
            this.loadContacts()
        )
        .catch(err =>
            console.error(err)
        );
    }

}

export default ContactActions

