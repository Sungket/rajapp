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
	      <p style={titleStyle} >Raj's Non Copyright Music</p>
	    </div>
	    <div class="col">
	      <p>Listen</p>
	    </div>
	  </div>
	  <div class="row">
	    <div class="col-3">
	      <ul class="list-group">
		<li class = "list-group-item">About</li>
	        <li class = "list-group-item">Work with me</li>
	        <li class = "list-group-item">Credits</li>
	      </ul>
	    </div>
	    <div class = "col-7">
	      <div class = "row">

	  {/* Song selection section. Songs will be able to be uploaded and then it will appear on the list dynamically */}

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
