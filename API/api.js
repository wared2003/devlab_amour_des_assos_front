import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const url = 'https://127.0.0.1:8000/api'
const image = 'https://127.0.0.1:8000/images'

export function getUrl() {
    return url
}

export function getUrlImage() {
    return image
}

export function getCategory() {
    return axios.get(url + '/categories')
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function getEvent() {
    return axios.get(url + '/events')
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function getEventById(id) {
    return axios.get(url + '/events/' + id)
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function getEventByAssociation(id) {
    return axios.get(url + '/events/association/' + id)
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function getMyEvents(jwt) {
    return axios.get(url + '/event/me', {
        headers: {
            Authorization: "Bearer " + jwt
        }
    })
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function getAssoByUser(jwt) {
    return axios.get(url + '/associations/me', {
        headers: {
            Authorization: "Bearer " + jwt
        }
    })
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function getMe(jwt) {
    return axios.get(url + '/user/me', {
        headers: {
            Authorization: "Bearer " + jwt
        }
    })
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function getAsso() {
    return axios.get(url + '/associations')
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function getAssoById(id) {
    return axios.get(url + '/associations/' + id)
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.error(e)
        })
}

export function buyTicket(eventId, token) {
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    const bodyParameters = {
        "eventId": eventId
    };

    return axios.post(
        url + '/checkout',
        bodyParameters,
        config
    )
        .then((response => {
            return response
        }))
        .catch((e) => {
            return e
        });
}
