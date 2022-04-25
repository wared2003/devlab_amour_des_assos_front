import axios from "axios";

const url = 'http://192.46.237.170:1337'
export function getUrl(){
    return url
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
