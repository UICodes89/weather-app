import axios from 'axios';

// For GET requests
axios.interceptors.request.use(
  (req) => {
    // Add configurations here
    debugger;
    return req;
  },
  (err) => {
    debugger;
    return Promise.reject(err);
  }
);