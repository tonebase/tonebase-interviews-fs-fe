# Derek Miranda's Response

Hi all! Here are my responses to your questions in the original repo:

---

### 1. What made you interested in/choose React as a framework? Was it a choice you made? Regardless, what is the one thing you enjoy most about it compared to other frameworks you've used and what is one thing you dislike about it?

To be honest, it was out of hearsay since I'd read about it a lot in front-end forums early into my software engineering training. I'd decided to look into it and grew to enjoy working with it. One thing I like about React are that its easy to deal with app composition. JSX helps lay apps out into an understandable tree of its components. I also appreciate the unidirectional data flow since it makes it easier to track how view data moves and changes throughout a component structure. Something I dislike about React is that it can be hard to implement functionality in which imperative programming may be better suited, such as animating on a canvas.

### 2. Why do the component names in JSX start with capital letters?

JSX is designed with OOP in mind so it uses JavaScript classes to define distinct objects with their own components and attached functionality.

### 3. What are the main types of components you can render in React? When do you choose one over the other?

I believe there are three types of components: stateful class components, functional components, and wrapper components. Typically, stateful components are used if a developer needs to implement state transformations within a component or use lifecycle hooks such as `componentDidMount`. They're also lighter-weight and don't incur as much computational overhead that a stateful component might. Functional components would be used if those aren't necessary and you simply need a way of providing view for any passed in data. Wrapper components can be thought of as component decorators that have distinct bits of functionality that you might add to a view component. For example, a wrapper can be used to connect components to a Redux store.

However, React Hooks provide ways of implementing lifecycle hooks and state transformations usually restricted to stateful components to functional components.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

My previous company hadn't really done much testing either so I'd made sure to build my own experience by applying some form of TDD to some internal JS packages I'd worked on. There was also a project which used BrowserStack to implement automated browser testing. I'd used Mocha, Ava, and Jest as well as some experimenting with Cypress.

---

### 1. What is wrong with this example, and how would you go about fixing or improving the component?

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || 'Anonymous'
    }
  }
  render() {
    return (
      <p>Hello {this.state.name}</p>
    );
  }
}
```
The state property "name" doesn't need to be on the component's state since there are no state changes within the App component. It can simply be a prop that gets passed in and any changes to "name" can be handled in the surrounding context.

### 2. What's the issue with this component. Why? How would you go about fixing it?

```
class App extends React.Component {
state = { search: '' }
handleChange = event => {
/**
     * This is a simple implementation of a "debounce" function,
     * which will queue an expression to be called in 250ms and
     * cancel any pending queued expressions. This way we can
     * delay the call 250ms after the user has stoped typing.
     */
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value
      })
    }, 250);
  }
render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    )
  }
}
```
React pools its SyntheticEvents for performance reasons so subsequent reads of event.target will be null. This can be fixed by either calling `​event.persist()​` on the passed in event in the event handler or caching the value.

In the code example below, we can create a new closure context within the latest ​setTimeout​ to store the input field's value instead of trying to read from ​event​ directly once the timeout is complete.

```js
handleChange = event => {
  clearTimeout(this.timeout);
  this.timeout = setTimeout(value => {
    this.setState({
      search: value
    })
  }, 250, event.target.value);
}
```
---

1. OPTION 1: Implement a simple counter
  
  For this assignment you may use a state management system of your choice (other than the native React state). We recommend `react-easy-state` as that is our default tool and is extremely simple to get up and running.

  The counter should:

  (a) Increment UP once per hour between 9AM and 5PM (inclusive)

  (b) Increment DOWN once per hour between 6PM and 8AM (inclusive)

  (c) Increment UP when a button is clicked manually

  (d) Increment DOWN when a different button is clicked manually

__My work can be found in `pages/counter.js`__

---

### 1. Tell me about componentWillMount and the issues with it?

This is a lifecycle hook that fires before a component is rendered. It can be used to do any actions necessary for rendering such as fetching data.

The main issue with it is that it's unsafe. The lifecycle method has been prefixed with `UNSAFE`, which acknowledges trouble using it by the React authors themselves. The main issue is that since this method is often used to fetch data, many uses of it don't account for the asynchronous nature of a request. An alternative would be to use `componentDidMount` to declare two states within a component, one in which data hasn't been fetched and one where it has.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

At start of being mounted to the DOM, a stateful component, like any JavaScript class, calls its constructor and runs any initial steps it needs to. The component is then rendered and mounted onto the DOM. Right after this, React invokes the `componentDidMount` method on the component. This can be useful for any side-effects that need to take place as soon as the component is rendered, such as making a request to an API.

After being mounted, subsequent updates, either through internal state changes or new props being passed down, queues rerenders of the component. After each render, `componentDidUpdate` is called which can allow taking certain actions or creating side effects depending on changes in either props or state.

When a component is removed from the DOM, React finishes the lifecycle by calling `componentWillUnmount`, which can help with teardown steps such as stopping an ongoing timer.

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

The last project I'd worked on was a CMS that managed ads for a major client of my previous company. It was a portal for 3rd-party HTML ad developers to upload their ads for this client. The main page to view all the different ads had quite a few issues so I'd focus my efforts on this. The most pressing issue to me was that there was a timer that polled requests to the API for a set of ads and updated the page every time. For one, I'd refactor this to only rerender what parts of the page have been updated through some diffing method. I think polling is a fine method for keeping up-to-date but it didn't need to be at the second or so interval it ran at. The search functionality also only worked with the current data for the page so I'd fix it to have the backend process this query and send data that's relevant throughout the whole set of ads.