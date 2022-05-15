import axios from 'axios';

const usersUrl = 'http://localhost:8080';

export const getStock = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addStock = async (stock) => {
    return await axios.post(`${usersUrl}/add`, stock);
}

export const deleteStock = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editStock = async (id, stock) => {
    return await axios.put(`${usersUrl}/${id}`, stock)
}