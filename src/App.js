import logo from './logo.svg';
import './App.css';
import {
	Button,
	Container,
} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title1 from './Title1.js';

const titleStyle = {
	color: 'blue'
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
	<div class="container">
	  <div class="row">
	    <div class="col">
	      <p style={titleStyle} >Raj's Music App</p>
	    </div>
	    <div class="col">
	      <p>Listen</p>
	    </div>
	  </div>
	  <div class="row">
	    <div class="col-3">
	      <p>Placeholder about, contact</p>
	    </div>
	    <div class = "col-7">
	      <div class = "row">
	        <div class = "col">
	          <div class = "card">
	            <div class = "card-header">Name of Song</div>
	    	    <img	/>
	  	    <div class = "card-body">
	  	      <p class = "card-text">
	  	         Description of song here
	  	      </p>
	  	    </div>
	  	  </div>
	        </div>
                <div class = "col">
	          <div class = "card">
	            <div class = "card-header">Name of Song</div>
	    	    <img	/>
	  	    <div class = "card-body">
	  	      <p class = "card-text">
	  	         Description of song here
	  	      </p>
	  	    </div>
	  	  </div>
	        </div>
	      </div>
	      <p>Placeholder media library</p>
	    </div>
	    <div class = "col-2">
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
