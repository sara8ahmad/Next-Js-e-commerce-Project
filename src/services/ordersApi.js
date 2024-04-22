const { default : axiosClient } = require('./axiosClient');

const createOrder = (data)=>{ 
    return axiosClient.post(`/orders`, data)
};



export default {
    createOrder
}