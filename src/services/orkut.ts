import axios from 'axios';
import { api } from './apiUrl';

export interface SignUpData {
    username: string;
    avatar: string;
    email: string;
    password: string;
}

export type LoginData = Omit<SignUpData, 'username' | 'avatar'>;

function createConfig(token: string | null) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

function postSignUp(body: SignUpData) {
    const promise = axios.post(`${api}/users/registration`, body);
    return promise;
}

function postLogin(body: LoginData) {
    const promise = axios.post(`${api}/users/authentication`, body);
    return promise;
}

function getUserProfile(token: string | null) {
    const config = createConfig(token);
    const promise = axios.get(`${api}/users`, config);
    return promise;
}

function getUserFriends(token: string | null, id: number) {
    const config = createConfig(token);
    const promise = axios.get(`${api}/users/${id}/friends`, config);
    return promise;
}

function getUserProfileById(token: string | null, id: number) {
    const config = createConfig(token);
    const promise = axios.get(`${api}/users/${id}`, config);
    return promise;
}

function getUsersByName(token: string | null, username: string | null) {
    const config = createConfig(token);
    const promise = axios.get(`${api}/users/list?username=${username}`, config);
    return promise;
}

function getUserRequests(token: string | null, userId: number | null) {
    const config = createConfig(token);
    const promise = axios.get(`${api}/users/${userId}/friendship`, config);
    return promise;
}

function getFriendship(token: string | null, userId: number | null, friendId: number | null) {
    const config = createConfig(token);
    const promise = axios.get(`${api}/users/${userId}/friends/${friendId}`, config);
    return promise;
}

function postFriendshipRequest(token: string | null, friend: number | null) {
    const config = createConfig(token);
    const promise = axios.post(`${api}/users/${friend}/friendship`, {}, config);
    return promise;
}

export {
    postLogin,
    postSignUp,
    getUserProfile,
    getUserFriends,
    getUserProfileById,
    getUsersByName,
    getUserRequests,
    getFriendship,
    postFriendshipRequest,
};
