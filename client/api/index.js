import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    contactlist() {
        return axios.get(`${apiPrefix}/contacts`)
    },

    getContact(id) {
        return axios.get(`${apiPrefix}/contacts/${id}`)
    },

    createContact(data) {
        return axios.post(`${apiPrefix}/contacts`, data)
    },

    updateContact(data) {
        return axios.post(`${apiPrefix}/contacts/${data.params.id}`, data)
    },

    deleteContact(id) {
        return axios.delete(`${apiPrefix}/contacts/${id}`);
    }
}