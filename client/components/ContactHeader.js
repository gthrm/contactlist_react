import React, {Component} from 'react'

import './ContactHeader.css'

const ContactHeader  = React.createClass({

    getInitialState() {
        return {
            visible: false
        }
    },

    handleClick() {
        console.log('***** visible ', this.state.visible)
        this.setState({visible: !this.state.visible})
    },

    render() {
        return (
            <div className="topbar">
                <div className="mh-topbar__inside">
                    <ul className="mh-menu">
                        <li className="mh-menu-item" >
                            <a className="mh-menu-item__link" onClick={this.handleClick} >Добавить контакт</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
})

export default ContactHeader