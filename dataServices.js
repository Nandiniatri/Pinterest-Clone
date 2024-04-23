const dataService = (function() { 
    const apiUrl = '';
    
    function fetchData(url, method, data) {  
      return fetch(url, {
        method: method, 
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'DEMO-API-KEY' 
        },
        body: JSON.stringify(data),
      }).then((response)  =>{ 
        return response.json()
      })
    }
  
    function getData(url='') {
        const newUrl = `${apiUrl}${url}`;
        console.log(newUrl);
        return fetchData(newUrl, 'GET');
    }
  
    return {
      getData 
    };
  })();

export default dataService;