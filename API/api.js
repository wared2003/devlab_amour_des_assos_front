import axios from "axios";
import { AsyncStorage } from 'react-native';
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const url = 'http://192.46.237.170:1337'

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

export function buyTicket(){
    const token = asyncStorage.getItem('@jwt:key')

    const config = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTEyMzE4MzgsImV4cCI6MTY1MTI2NzgzOCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYUBhLmZyIn0.FqmRUQdszqN4ck09A_TVwazpVFyC4VjNtiYlqevXf-65Atn_OI3kvekpccYiz49S9qk5T0uiKiVr1qaT4fZoS6E_I86v5FE2CwWG-mcax3qNmaYKXVaj5He0utJsf7R91DkqTRekgMy4FCWdVI_gUUkG6InU_PT40fCkYbyU8fGNiyOJFnRBF56q2FG6hI9_TBfWDmMb--F-8j1yzgYFHRW1r5--kyroHGiZ-FdT3NbIC-DH1bKC2huvYggNebKZY2zVi6hHnbPGPbZ6BcoJYnK7zo4Rw8AUevEYHjyn6zuoD2W0GbbRhSYRVENlglE8lfsMoIVBviQ73y8R7Fl-pn8o6G7rGAZDjB9XyOQVVmdOw7V0Td4Uf_G3vybg5t-09iVMMbuXkqZqJxRaMSSZxq1QwbkavgdEqunbKFom2Z_CtPQTDbWzydE_saYC2EgEf-_5KpsHlqtCNHVEWiUrhkzxqfMnpHGgSIocy7U4dcw3cPp7xtXXstxeeNXKLPGKB_q4MYkFN4UD5JvQJso0djQ1yNoQWDaS7jzdG7HmSuFIcyDO4xZu6gt3BAkW2now8xUwCbOz2UuCGkbC_AQRcYWih8JYniRhFSPuIroN-NdzY5YULnL8ozwB6HXeWV04JplsAG9Sl3aytPXZFkD5iQ2Q7gU4vuz5hO5a8BNgNZc` }
    };

    const bodyParameters = {
        "eventId": 1
    };

    return axios.post(
        'https://10.2.165.52:8000/api/checkout',
        bodyParameters,
        config
    )
        .then((response => {
            return response
        }) )
        .catch((e)=>{return e});
}
