import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { serverPort } from '../etc/config.json'

import * as db from './utils/dataBaseUtils'

const app = express()

db.setUpConnection()

app.use(bodyParser.json())

app.use(cors({ origin: '*' }));

app.get('/contacts', (req, res) => {
    db.listContacts().then(data => res.send(data))
})

app.get('/contacts/:id', (req, res) => {
    db.getContact(req.params.id).then(data => res.send(data))
})

app.post('/contacts', (req, res) => {
    db.createContact(req.body).then(data => res.send(data))
})

app.post('/contacts/:id', (req, res) => {
    db.updateContact(req).then(data => res.send(data)) //params.id, req.body
})

app.delete('/contacts/:id', (req, res) => {
    db.deleteContact(req.params.id).then(data => res.send(data))
})

const sever = app.listen(serverPort, () => {
    console.log(`Server on port ${serverPort}`)
})