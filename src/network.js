import axios from 'axios';

export default axios.create();

/*
* if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.reload(true);
        return;
      }
      console.error(error.response.data);
      
* */
