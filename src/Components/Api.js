import axios from 'axios';


const clientId = "zm42w1xj3zt740cfxo455igot5efz3";

const instance = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: { 'Client-ID': clientId }
})


export const getGames = () => instance.get('/games/top?first=5');

export const getCurrentStreams = (gameID) => instance.get(`streams?game_id${gameID}&first=24`);
export const getUsers = (userIds) => {
    let url = `/users?id=${userIds[0]}`;
    for (let i = 1; i < userIds.length; i++) {
        url += `&id=${userIds[i]}`;
    }
    return instance.get(url);

};