import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<Button>Test Button</Button>
	<div className="App">
	  <h1>Hello World!</h1>
	</div>
      </header>
    </div>
  );
}


function Logo() {
  return (
    <h1>Raj Music App</h1>
  )

}

export default App;
