import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const product = {
  id: '1',
  title: 'Coffee Mug - Mug',
  img: './coffee-mug.png'
};

const App = () => {
  return (
    <div>
      hola
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
