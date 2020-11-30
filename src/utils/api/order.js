import {axios} from 'core';

export default {
    addOrder: postData => axios.post('/order/create', postData)
}