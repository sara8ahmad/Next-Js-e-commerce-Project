const {default : axios} = require('axios');
const api_key = process.env.NEXT_PUBLIC_REST_API_KEY;
const api_url = 'https://strapi-backend-h32u.onrender.com/admin/content-manager/collection-types/api';


const axiosClient = axios.create({
    baseURL: api_url,
    headers: {
      Authorization: `Bearer ${api_key}`
    }
  });

  export default axiosClient;
