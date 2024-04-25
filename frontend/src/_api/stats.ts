import axios from "axios";

export const getAllUsers = async () => {
    return (await axios.get('/stats/users')).data
}

export const getCountUsers = async () => {
    return (await axios.get('/stats/countUsers')).data
}

export const getLastRow = async () => {
    return (await axios.get('/stats/getLastRow')).data
}

export const getCountRowsLastMonth = async () => {
    return (await axios.get('/stats/countRowsLastMonth')).data
}