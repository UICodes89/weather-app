import axios from 'axios';
let baseURL = 'http://localhost:8000/api/v1';



// For GET requests
axios.interceptors.request.use(
  (req) => {
    // Add configurations here
    req.url = baseURL + req.url;
    return req;
  },
  (err) => {
    console.log("Error Occured");
    return Promise.reject(err);
  }
);



// For POST requests
axios.interceptors.response.use(
  (res) => {

    // Add configurations here
    if (res.status === 200) {
      console.log('Posted Successfully');
      return res;
    }
    if (res.status === 400) {
      console.log('Error Occured 400');
    }

    if (res.status === 405) {
      console.log('Error Occured 405');
    }
    return {};

  },
  (err) => {
    console.log("Error Occured");
    return Promise.reject(err);
  }
);