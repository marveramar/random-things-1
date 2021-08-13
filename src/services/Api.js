import React from 'react';

const Api = 'https://api.punkapi.com/v2/beers'


const ApiCall = () => fetch(Api).then(response => response.json());

export { ApiCall };
