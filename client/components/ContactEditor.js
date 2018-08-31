import React from 'react'

import './ContactEditor.less'

const ContactEditor = React.createClass({
    getInitialState() {
        return {
            name: '',
            num: null,
            workNum: null,
            email: '',
            born: '',
            text: ''
        }
    },

    componentDidMount() {
        $(function(){
            $("#tel").mask("+7 (999) 999-99-99");
            $("#tel1").mask("+7 (999) 999-99-99");
          })
    },

    handleNameChange(event) {
        this.setState( {name: event.target.value})
    },

    handleNumChange(event) {
        this.setState( {num: event.target.value})
    },

    handleWorkNumChange(event) {
        this.setState( {workNum: event.target.value})
    },

    handleEmailChange(event) {
        this.setState( {email: event.target.value})
    },

    handleBornChange(event) {
        this.setState( {born: event.target.value})
    },

    handleTextChange(event) {
        this.setState( {text: event.target.value})
    },

    handleContactAdd() {
        const newContact = {
            name: this.state.name,
            num: this.state.num,
            workNum: this.state.workNum,
            email: this.state.email,
            born: this.state.born,
            text: this.state.text
        }

        this.props.onContactAdd(newContact)
        this.setState( {name: '', num: '', workNum: '', email: '', born: '', text: ''} )
    },

    

    render() {
        return (
            <div className="ContactEditor">
                <input
                    type="text"
                    className="ContactEditor__input"
                    placeholder="Введиде имя"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    id="tel"
                    type="tel"
                    className="ContactEditor__input"
                    placeholder="Введиде личный телефон"
                    value={this.state.num}
                    onChange={this.handleNumChange}
                />
                <input
                    id="tel1"
                    type="tel"
                    className="ContactEditor__input"
                    placeholder="Введиде work телефон"
                    value={this.state.workNum}
                    onChange={this.handleWorkNumChange}
                />
                <input
                    type="text"
                    className="ContactEditor__input"
                    placeholder="Введиде E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <input
                    type="date"
                    className="ContactEditor__input"
                    placeholder="Введиде дату рождения"
                    value={this.state.born}
                    onChange={this.handleBornChange}
                />
                <textarea
                    placeholder="Введите текст заметки"
                    rows={5}
                    className="ContactEditor__text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="ContactEditor__footer">
                    <button
                        className="ContactEditor__button"
                        disabled={!this.state.name || !this.state.num || !this.state.workNum || !this.state.email || !this.state.born || !this.state.text}
                        onClick={this.handleContactAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
})

export default ContactEditor