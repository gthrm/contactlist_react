import React from 'react'

import './Contact.less'

const Contact = React.createClass({
    render() {

        console.log('*** contact - ', this.props)
        return (
            <div className="Contact">
                <span className="Contact__del-icon" onClick={this.props.onDelete}> x </span>
                    <h4 className="Contact__title">Контакт {this.props.name}</h4>
                <div className="Contact__text" onClick={this.props.onOpen}>
                    <p> Личный номер: {this.props.children.num} </p>
                    <p> Рабочий номер: {this.props.children.workNum} </p>
                    <p> E-mail: {this.props.children.email} </p>
                    <p> Родился: {this.props.children.born} </p>
                    <p> Комментарий: {this.props.children.text} </p>
                    <p> Создано: {this.props.children.createdAt} </p>
                </div>
            </div>
        )
    }
})

export default Contact