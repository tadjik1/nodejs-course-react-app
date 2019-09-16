import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:3001',
  validateStatus: status => {
    if (status === 401) {
      localStorage.removeItem('token');
      window.location.reload(true);
      return;
    }
    return status <= 399;
  }
});
