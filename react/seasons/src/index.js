import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return (
    <div>Hi there!<SeasonDisplay /></div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));