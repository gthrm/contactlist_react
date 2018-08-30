import { EventEmitter } from 'events'

import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

const CHANGE_EVENT = 'change'

let _contact = []
let _loadingError = null
let _isLoading = true

function formatContact(contact) {
    return {
        id: contact._id,
        name: contact.name,
        num: contact.num,
        workNum: contact.workNum,
        email: contact.email,
        born: contact.born,
        text: contact.text,
        createdAt: contact.createdAt
    }
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading
    },

    getContacts() {
        return _contact
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_CONTACTS_REQUEST: {
            _isLoading = true

            TasksStore.emitChange()
            break
        }

        case AppConstants.LOAD_CONTACTS_SUCCESS: {
            _isLoading = false
            _contact = action.contacts.map( formatContact )
            _loadingError = null

            TasksStore.emitChange()
            break
        }

        case AppConstants.LOAD_CONTACTS_FAIL: {
            _loadingError = action.error

            TasksStore.emitChange()
            break
        }

        default: {
            console.log('No such handler')
            console.log('---', action)
        }
    }
})

export default TasksStore