import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <frameElement>
      <div>
        <h1>hello</h1>
      </div>
    </frameElement>
      <About></About>
  </React.StrictMode>
);


