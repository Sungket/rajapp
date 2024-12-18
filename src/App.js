import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title1 from './Title1.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<Title1 />
	<Title1 />  
        <img src={logo} className="App-logo" alt="logo" />
	<Button>Test Button</Button>
	<div className="App">
	  <h1>Hello World!</h1>
	</div>
      </header>
    </div>
  );
}

export default App;
