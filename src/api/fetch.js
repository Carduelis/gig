const fetch = url => window.fetch(url).then(response => response.json());

export default fetch;
