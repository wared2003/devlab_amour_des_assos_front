import axios from "axios";
import { AsyncStorage } from 'react-native';
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

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

export function getEventByAssociation(id){
    return axios.get(url + '/events/association/' + id)
        .then((response)=>{
            return response
        })
        .catch((e)=>{
            console.error(e)
        })
}

export function getAssoByUser(jwt){
    return axios.get(url + '/associations/me', {
        headers: {
            Authorization: "Bearer " + jwt
        }
    })
        .then((response)=>{
            return response
        })
        .catch((e)=>{
            console.error(e)
        })
}

export function getAsso(){
    return axios.get(url + '/associations')
        .then((response)=>{
            return response
        })
        .catch((e)=>{
            console.error(e)
        })
}

export function getAssoById(id){
    return axios.get(url + '/associations/' + id)
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
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTExNTk1ODgsImV4cCI6MTY1MTE5NTU4OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiYUBhLmZyIn0.u-CWup00AMvqMcP6WhO339KJOSFpbm7-YnCJEkh1Jp9INsW4KwLOIUXl5PgMABf_NpfZu1xn0lfhx4gG50KaV4vWCpDzvoNRYknX53xMNkwCJuxhaJEVUbm345Tw_j5_bbUtpyf9MCSN2kfisNF-4BpiI1h8tdecPtVTEsFaXO5zwrwxviZ1L3jcRWMpoviCvnD4X9igx5E-XM1w0bmAzmnw49nEQQ0xYR_nq_BeFvtOVELd2CrR3jlnK_Sm5dkjVS5CM_94TWip-c88lC_TVum_2pAN7iLOCiqUBnmt5ue-mx0fKnlvs7COpaNrlujsDpqQvEV88to5uO6us9NJ3adt-gLPIq4ZcaB5ctfBJU9wcnrkE45BOGtQ7SSWGuS1zlz_HdYUYKSE4_nhEz-g9uo06pRFUAsS6dR_xaZCN7ZVtzXGJGmWu2DL6J_7MdFRLf2adK9ak3kDTLsUI49Lw5U2fz3xP1lFvLNNhoKEEAV8wxU8BwiACkvRvo3-KDdEu-uRbAfDsHXgNQqq-OaksJhZyHdJ1CgUiolDSKzeQdmgqeuzU_o_B_AqlsCm11hF85rUfuwTvqPUNb1Tx5-kAY2Wc5CG8R-6xs-bAuzoirZFMJIydHETKjLf4AoBQogYpj02sJc9GlJXlEro6y9aSwITmzXYE81NMW-ITCzA06Q` }
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
