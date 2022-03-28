import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chat, Orders  } from '../.'

const App = () => {
  return (
    <div className="container">
      <Chat caseNumber={'00022542'} role={'user'}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
