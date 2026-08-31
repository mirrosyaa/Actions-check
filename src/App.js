import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>GitHub Actions Practice</h1>
      <p>This is a React app for testing CI/CD workflows</p>
      <p>Version: 1.0.0</p>
      <button onClick={() => alert('GitHub Actions works!')}>
        Click me
      </button>
    </div>
  );
}

export default App;