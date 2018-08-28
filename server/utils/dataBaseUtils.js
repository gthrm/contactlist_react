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
    let upContact = {
        name: params.body.name,
        num: params.body.num,
        workNum: params.body.workNum,
        email: params.body.email,
        born: params.body.born,
        text: params.body.text,
        createdAt: new Date()
    };
    return Contact.findByIdAndUpdate(params.params.id, {$set: upContact}, { new: true });
};

export function deleteContact(id) {
    return Contact.findById(id).remove();
};