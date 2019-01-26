
const fetchData = async (routeName) => {
  const endpoint = `http://localhost:7777/${routeName}/get-all-${routeName}`;

  return fetch(endpoint, { method: 'GET' })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export default fetchData;
