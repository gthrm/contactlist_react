import React, {Component} from 'react'

import './ContactHeader.css'

class ContactHeader extends Component{

    render() {
        return (
            <div className="topbar">
                <div className="mh-topbar__inside">
                    <ul className="mh-menu">
                        <li className="mh-menu-item" >
                            <a className="mh-menu-item__link" onClick={this.clicked} >Контакты</a>
                        </li>
                        <li className="mh-menu-item" >
                            <a className="mh-menu-item__link" onClick={this.clicked} >Добавить контакт</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    clicked(data) {
        console.log(this)
    }
}

export default ContactHeader