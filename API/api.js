import axios from "axios";

const url = 'https://127.0.0.1:8000/api'
const image = 'https://127.0.0.1:8000/images'
export function getUrl(){
    return url
}
export function getUrlImage(){
    return image
}
export function getCategory(){
    return axios.get(url + '/categories')
        .then((response)=>{
            return response
        })
        .catch((e)=>{
            console.error(e)
        })
}

export function getEvent(){
    return axios.get(url + '/events')
        .then((response)=>{
            return response
        })
        .catch((e)=>{
            console.error(e)
        })
}

export function getEventById(id){
    return axios.get(url + '/events/' + id)
        .then((response)=>{
            return response
        })
        .catch((e)=>{
            console.error(e)
        })
}
