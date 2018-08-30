import React from 'react'

import Contact from './Contact.js'

import Masonry from 'react-masonry-component'

import './ContactList.less'

const ContactList  = React.createClass({
    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        }

        console.log('--- this.props--- ', this.props)

        return (
            <Masonry
                className="ContactList"
                options={masonryOptions}
            >
            {
                this.props.contacts.map(contact =>
                        <Contact
                            key={contact.id}
                            name={contact.name}
                            onDelete={this.props.onContactDelete.bind(null, contact)}
                            onOpen={this.props.onContactLoad.bind(null, contact)}
                        >
                            {contact}
                        </Contact>
                )
            }

            </Masonry>
        )  
    }
})

export default ContactList