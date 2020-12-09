import axios from 'axios'
// import ls from 'local-storage'
import { JSONtoURL } from '../helpers'

const API_URL = 'http://localhost:3000'

const token = '1e8b7060-3a0e-11eb-87dc-6792d6331ce7'

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    axios: axiosInstance,
    async get(path, params) {
        const res = await this.axios.get(params ? `${path}?${JSONtoURL(params)}` : path)
        if (res && res.data && (res.data.status === 'error')) {
            throw res.data.message
        }
        return res
    },
    async post(path, params) {
        const res = await this.axios.post(path, { token, ...params })
        if (res && res.data && (res.data.status === 'error')) {
            throw res.data.message
        }
        return res
    },
    async put(path, params) {
        const res = await this.axios.put(path, { token, ...params })
        if (res && res.data && (res.data.status === 'error')) {
            throw res.data.message
        }
        return res
    },
    async delete(path, params) {
        const res = await this.axios.delete(path, { token, ...params })
        if (res && res.data && (res.data.status === 'error')) {
            throw res.data.message
        }
        return res
    }
}
