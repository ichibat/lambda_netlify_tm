const axios = require('axios');

exports.handler = function(event, context, callback){
  const API_URL = 'https://api.github.com/users';
  const API_CLIENT_ID = '3492ae1d1b982a32b820';
  const API_CLIENT_SECRET = '50896911dec05c7c649f3ca25a2ec5e820888eea';

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

// Send user respons
const send = body => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body)
  });
}

// Perform API call
const getUsers = () => {
  axios.get(URL)
    .then(res => send(res.data))
    .catch(err => send(err));

}

// Make sure method is GET
if(event.httpMethod == 'GET') {
  // Run
  getUsers();
}
}