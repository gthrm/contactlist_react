import mongoose from 'mongoose';

const bul = true;

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {type: String, required: bul},
    num: {type: Number, required: bul},
    workNum: {type: Number, required: bul},
    email: {type: String, required: bul},
    born: {type: Date, required: bul},
    text: {type: String, required: bul},    
    createdAt: {type: Date}
});

mongoose.model('Contact', ContactSchema);