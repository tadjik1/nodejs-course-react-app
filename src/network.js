import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001',
});

/*
* if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.reload(true);
        return;
      }
      console.error(error.response.data);
      
* */
