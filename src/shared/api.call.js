import axios from 'axios';

const baseURL = "http://localhost:8000/";
const api = axios.create({
  baseURL
});

export async function get(path) {
    return await api.get(path);
}