import logo from './logo.svg';
import './App.css';
import {
	Button,
	Container,
} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title1 from './Title1.js';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
	<div class="container">
	  <div class="row">
	    <div class="col">
	      <p>Raj's Music App</p>
	    </div>
	    <div class="col">
	      <p>Listen</p>
	    </div>
	  </div>
	  <div class="row">
	    <div class="col">
	      <p>Placeholder song list</p>
	    </div>
	    <div class = "col">
	      <p>Placeholder media library</p>
	    </div>
	    <div class = "col">
	      <p>Placeholder media player</p>
	    </div>
	  </div>
	  <div class="row">
             <p>Placeholder About</p>
	  </div>
	  <div class="row">
             <p>Placeholder Contact</p>
	  </div>
	  <div class="row">
	    <p>About</p>
	    <p>Contact</p>
	  </div>
	</div> 
    </div>
  );
}

export default App;
