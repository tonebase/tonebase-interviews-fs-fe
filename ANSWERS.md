1) I chose React one way data flow and modularity.  I learned Angular and React within a year of each other and I found that Angular was easy to get started but complexity ramped up pretty quickly but with React the learning curve was pretty steep but then you know it.  
 
Passing data down as props from a parent’s state made debugging much easier and generally easier to follow the flow of data.  Having modular components which brings the ability to reuse those components is another key feature.  

2) Component names start with a capital letter because lower case letters refer to built in html elements while capitalized refer to a component defined in a file.

3) React gives Class Components and Functional Components.  Class Components can hold state and pass state down as props to children components.  Functional Components do not hold state but can accept props and render views

4) I am experienced with many testing frameworks.  My favorite is jest because of all the tooling that comes with it, i.e the ability to scan and check your code base for code coverage.  Jest on offers unit and integration tests.  There is an up and coming framework called Cypress that offers full end-to-end testing of an application.


#1 code example.
Setting initial state with props is an anti-pattern, it duplicates the source of truth.  If props are changed without the component being refreshed the new prop value will not be displayed.

#2 Because React reuses Synthetic Event objects, all properties on event.target are nullified after an event callback is invoked.  At the top of the error handler i used event.persist() and the paragraph rendered as well as state value.


The problem with ComponentWillMount is that it executes before rendering.  So if there is an async action like a fetch, the fetch will happen first and rendering will continue.  If your UI depends on an array of data returned from the fetch youll get an error.  The work around for that is building another component with dummy data until the fetech completes.

In the React lifecycle, in a stateful component, the Constructor function will fire first, initializing state and binding event handlers.
getDerivedStateFromProps runs before render, on both initial and following updates.
render comes next, it should be a pure function, returning the same result each time its invoked and doesnt interact with the browser.
componentDidMount - once the app is rendered this runs.  Its where you want to fetch data or setup subscriptions.

In my latest project, Cypress Recorder (a tool that generates test code in the Cypress testing framework) there are unit tests but not assertion tests.  Assertion tests check for specific actions rather than plugging in arguments to a function and running that.  One could check that a URL is correct once you click a button to navigate somewhere on a page, for example. Time was short and launch was nearing so as of now only unit and integration tests were done.