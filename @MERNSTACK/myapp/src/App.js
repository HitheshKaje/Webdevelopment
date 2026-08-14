import logo from './logo.svg';
import './App.css';
import Goals from './components/Goals';
import Life from './components/Life';

function App() {
  const course = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a React app' },
    { id: 3, text: 'Deploy the app' }
  ];
  return (

    
    <div className="App">
      <div id="welcome-message">
        <h1>Welcome to React</h1>
        <p>This is a simple React app.</p>
      </div>
      <Goals goals={course} />
      <Life handleClick={() => console.log('Button clicked!')} message="Hello, React!" />
      <div id="welcome-message1">
        <h1>@myapp</h1>
        <h1>Welcome to React</h1>
        <p>all rights reserved</p>
      </div>
    </div>
  );
}

export default App;
