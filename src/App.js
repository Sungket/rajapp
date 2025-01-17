import logo from './logo.svg';
import './App.css';
import {
	Button,
	Container,
	ButtonGroup,
	Card,
	Form,
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

	  {/* Media player section */}

	    <div class = "col-2">
	      <div class = "centercontent">
	      </div>
	  	<div class = "card">
	  	  <div class ="card-body">
	  	    <ButtonGroup aria-label = "Placeholder example">
	  	       <Button variant="secondary">Rewind</Button>
	  	       <Button variant="secondary">Stop</Button>
	  	       <Button variant="secondary">Play</Button>
	  	       <Button variant="secondary">Pause</Button>
	  	       <Button variant="secondary">Forward</Button>
	  	    </ButtonGroup>
	  	  </div>
	  	</div>
	    </div>

	  <section id="contact">
	    <div class = "row">
	      <p>Message Me</p>

	      <Form>
	  	<Form.Group className="mb-3" controlId="formBasicName">
		  <Form.Control type="name" placeholder="Name" />
	  	</Form.Group>
		<Form.Group className="mb-3" controlId="formBasicEmail">
		  <Form.Control type="email" placeholder="Enter Email" />
	  	</Form.Group>
	  	<Form.Group className="mb-3" controlId="formBasicMessage">
	  	  <Form.Control type="message" placeholder="Message" />
	  	</Form.Group>
	  	<Button variant="primary" type="submit">
	  	  Submit
	  	</Button>
	      </Form>

	      <form id = "contactForm" action = "forms/contact.php">
	        <div class = "form-group">
	          <input type="name" class="form-control" id="inputName" placeholder="Name"/>
	        </div>
	        <div class = "form-group">
	  	  <input type = "email" class = "form-control" id = "inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
	        </div>
	        <div class = "form-group">
	  	  <input type="message" class="form-control" id="inputMessage" aria-describedby="message" placeholder="Type your message"/>
	        </div>
	      </form>
	    </div>
	  </section>
	  </div>
	</div> 
    </div>
  );
}

export default App;
