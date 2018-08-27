import mongoose from 'mongoose';

import config from '../../etc/config.json';

import '../models/Contact';

const Contact = mongoose.model('Contact');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.username}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`)
};

export function listContacts(id) {
    return Contact.find();
};

export function getContact(id) {
    return Contact.findById(id);
};

export function createContact(data) {
    console.log(data);
    const contact = new Contact({
        name: data.name,
        num: data.num,
        workNum: data.workNum,
        email: data.email,
        born: data.born,
        text: data.text,
        createdAt: new Date()
    });

    return contact.save();
};

export function updateContact(params) {
    console.log(params);
};

export function deleteContact(id) {
    return Contact.findById(id).remove();
};