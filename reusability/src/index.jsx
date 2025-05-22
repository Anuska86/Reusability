import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Components/Button.jsx';

function App() {
  return (
    <main>
      <Button>Buy now!</Button>
      
      
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);