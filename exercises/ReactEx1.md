# React.js Exercise 1 – Getting Started

> Complete ALL the exercises in this section. Ask thomas.devine@lyit.ie for help or post an *Issue* on your GitHub repository.


		

## Part 1 - Tour of Project Code

> Make sure you have the React app running as outlined.

Let's simplify the default code given to us.

1.	Using an editor open ``public/index.html``.  Remove all the code and replace with this code:

	```javascript
	<!doctype html>
	<html lang="en">
	<head>
	  <title>React App</title>
	</head>
	<body>
	  <div id="root"></div>
	</body>
	</html>

	```

	Notice the ``<div>``.  It's the placeholder for our first React component

1.	Using an editor open the ``App`` component in ``src/App.js``.   Notice the following:
	- the imports
	- the component class ``App`` that extends from Reacts ``Component`` class
	- the mandatory ``render()`` method that returns the component elements (HTML)
	- the export 
	
1.	Open ``src/index.js``.  Remove (or comment out) all the code and replace with this code:

	```javascript
	import React from 'react';
	import ReactDOM from 'react-dom';	
	import App from './App.js';

	ReactDOM.render(<App />, document.getElementById('root'));
	```

	Notice:
	- the imports
	- the render method that renders the ``App`` component in the ``<div>``


## Part 2 - My First React Component

1.	In the ``src`` folder create a new file ``HelloWorld.js`` and add our component code below:

	```javascript	
	import React from 'react';
	import ReactDOM from 'react-dom'

	class HelloWorld extends React.Component {
	  render() {
	    return (
	      <h1>Hello World!</h1>
	    );
	  }
	}
	export default HelloWorld;
	```

1.	Edit ``src/index.js``.  Remove (or comment out) all the code and replace with this code:

	```javascript
	import React from 'react';
	import ReactDOM from 'react-dom';
	import HelloWorld from './HelloWorld.js';

	ReactDOM.render(<HelloWorld />, document.getElementById('root'));
	```

1.	View your first component using the link [http://localhost:3000/](http://localhost:3000/)

1.	Make sure you use the React console tab to view the component you just created.
