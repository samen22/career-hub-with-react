import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2>Oppss!!!</h2>
      <p>The page your requested is currently NOT FOUND!!!</p>
      <Link to='/'><button>Go Back to home</button></Link>
    </div>
  );
};

export default ErrorPage;