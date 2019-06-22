import React from 'react';
import Button from './Button'

const App: React.FC = () => {
  return (
    <div>
      <header>Header</header>
      <div id="main">
        <Button>OUTLINED</Button>
      </div>
    </div>
  );
}

export default App;
