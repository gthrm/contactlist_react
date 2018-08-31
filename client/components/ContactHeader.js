import React, {Component} from 'react'

import ViewAction from '../actions/ViewActions.js'

import './ContactHeader.css'

const ContactHeader  = React.createClass({

    getInitialState() {
        return {
            visible: false
        }
    },

    handleOpenEditor() {
        const isOpenE = this.state.visible
        this.props.isOpen(isOpenE)
    },

    render() {
        return (
            <div className="topbar">
                <div className="mh-topbar__inside">
                    <ul className="mh-menu">
                        <li className="mh-menu-item" >
                            <a className="mh-menu-item__link" onClick={this.handleOpenEditor} >Добавить контакт</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
})

export default ContactHeader