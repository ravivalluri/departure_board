import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

fetch('/mock_data.json')
  .then((response) => {
    response.json().then((data)=> {
      ReactDOM.render(
        <App trains={data}/>,
        document.getElementById('root')
      );
    });
  });

