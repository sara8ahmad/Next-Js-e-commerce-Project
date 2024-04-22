const { default : axiosClient } = require('./axiosClient');

const getProducts = ()=>{ 
    return axiosClient.get('/products?populate=*')
};

const getProductById = (id)=>{ 
    return axiosClient.get(`/products/${id}?populate=*`)
};
const getProductByCategory = (category)=>{ 
    return axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
};



export default {
    getProducts,
    getProductById,
    getProductByCategory
}