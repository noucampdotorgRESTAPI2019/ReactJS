# React.js Exercise 3 – React State

> Complete ALL the exercises in this section. Ask thomas.devine@lyit.ie for help or post an *Issue* on your GitHub repository.

## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/d3
$ git pull --no-edit https://github.com/noucampdotorgRESTAPI2019/ReactJS.git latest
$ git status

```

Check your `ReactJS` folder. You should have some new files in it.


## Part 1 - MyButton Component

> Make sure you have the React app running as outlined in the lecture slides.
	
1.	Add the [MyButton.js](/MyButton.js) component to your React project `src` folder.  

1.  Modify ``src/index.js`` so that your the `<MyButton>` component is rendered using this code:

	```javascript
	import React from 'react';
	import ReactDOM from 'react-dom';
	import MyButton from './MyButton.js';

	ReactDOM.render(<MyButton />, document.getElementById('root'));
	```

1.	Test it works using the link [http://localhost:3000/](http://localhost:3000/)

1.	Make sure you use the React console tab to view the component you just created.  Using this React tab change the caption text to "hi".  
    You should notice the button caption change.  This is a simple demostration of the purpose of component _state_.  A change to state causes the component to be re-rendered.


## Part 2 - Clock Component
	
1.	Add the [Clock.js](/Clock.js) component to your React project `src` folder.  

1.  View the source code in `Clock.js` and notice how component state (date), behaviour (tick), and look (output) is encapsulated in one component.
    This is a good example of what a React component should be.

1.  Modify ``src/index.js`` so that your the `<Clock>` component is rendered using this code:

	```javascript
	import React from 'react';
	import ReactDOM from 'react-dom';
	import Clock from './Clock.js';

	ReactDOM.render(<Clock />, document.getElementById('root'));
	```

1.	Test it works using the link [http://localhost:3000/](http://localhost:3000/)

1.	Make sure you use the React console tab to view the component you just created.  Again note how a change to state causes the component to be re-rendered.

