### 1. What made you interested in/choose React as a framework? Was it a choice you made? Regardless, what is the one thing you enjoy most about it compared to other frameworks you've used and what is one thing you dislike about it?

### Answer:

React for me is built for builders as I can consider myself one of those I like React because sometimes while writing React I forgot that I am inside a framework and also React has a really efficient and big ecosystem. React not an opinionated library and that's one of the biggest reasons I fall in love with React because of. When I first introduced to the Virtual DOM it was mind-blowing back in the day. It's easy to start with since you feel that you're writing a plain javascript functions.


### 2. Why do the component names in JSX start with capital letters?

### Answer:

This is because in `JSX` lower-case tag names are considered to be `HTML` tags. However, lower-case tag names with a dot (property accessor) aren't.

### Examples:

-   `<component />`  compiles to  `React.createElement('component')`  (html tag)
-   `<Component />`  compiles to  `React.createElement(Component)`


### 3. What are the main types of components you can render in React? When do you choose one over the other?

### Answer:

There are four different React component types:
 - #### Stateless Component -- Simple function that renders an output with little to no logic:
	Stateless components are components that obviously have no state — but the seriously… The reason for using this format of code, is when you don’t need all the bells and whistles (and bloat) of a React.Component.

- #### Basic Component -- Stateful component with lifecycle:

	This is your traditional React Component. Specifically, you need a component that has a state and/or lifecycle. You’ll need the state for situations when the parent component doesn’t change, but you need this component or it’s children to change.

- #### Interactive Component — Basic component with user interactive actions:
A component that changes states when on a user is interacting with it. For example, a component might need to change based on a user’s specific action with it, such as typing text in an input, or submitting a form. Very similar to the “basic” example above, the difference with this component is that a component is listening to user interactions such as onMouseEnter, onMouseLeave, onClick, onTouchStart, onTouchEnd and others.

- #### Enhanced Component — A component wrapper with actions and styled enhancements:

	The next step is to have a component that leverages another component’s features for styling and actions, so that we don’t have to rewrite all that code every time we have a button-like component.

And those are four types of components that you can create with React but now days after we having React hooks you can basically do the stateful component with normal javascript functions.


### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

### Answer:

I am very comfortable using TDD approach while develop an application as my last two positions as Frontend Engineer I've built a full enterprise scale systems that are fully TDD.


### 1. What is wrong with this example, and how would you go about fixing or improving the component?

---

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
### Answer:

in this specific example I would do it as functional component and also would use default prop value.

---

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

### Answer:
so first of all there's no instance property called `this.timeout` aslo I would clearing the `this.timeout`  inside `componentWillUnmount()`.

---

### 1. Tell me about componentWillMount and the issues with it?

### Answer:
  Your component is going to appear on the screen very shortly. That chunky render function, with all its beautifully off-putting JSX, is about to be called. What do you want to do?

The answer is… probably not much. Sorry to start off slow, but componentWillMount is a bit of a dud.

The thing about componentWillMount is that there is no component to play with yet, so you can’t do anything involving the DOM.

Also, nothing has changed since your component’s constructor was called, which is where you should be setting up your component’s default configuration anyway.

and also I saw some people using it for AJAX call but this doesn't seem good at all. Most common use case app configuration in your root component, it can call setState don’t. I would recommend use default state instead.

and lastly it's deprected now and named to `UNSAFE_componentWillMount()`.


### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

### Answer:

#### Pre-mounting (Initialization)

A component is a JS class. Like any class, it has a  `constructor`  function that is called to set things up. It usually sets up state and props.

#### Mounting

Once initialization has completed, an instance of the component is created and mounted onto the DOM. Using its initial state, the component renders onto the page for the first time. At this phase, we have two lifecycle methods available to use:  `componentWillMount`, and  `componentDidMount`.

After the  `constructor`  is called,  `componentWillMount`  is called just  _before_  `render`  and is called once in a lifecycle. This method is not used much as I mentioned before.

`componentDidMount` is called just _after_ the `render` method. Like `componentWillMount`, it is called once in a lifecycle. Because the render method has already been called, we can access the DOM. You would use this method to set up any long-running processes or asynchronous processes such as fetching and updating data.

#### Updating

Whenever a component’s state and props change from within the React component or through the api or backend, the component is updated by being re-rendered on the page. State and props change depending on a user’s interaction with the component or if new data is passed in.

The lifecycle methods that are available in this phase are:

1.  `componentWillReceiveProps`  : This method is invoked when there is a change to the props that the parent is passing into the component.

2.  `shouldComponentUpdate`  : This method is invoked just before the component is about to re-render. It determines whether the component should be updated or not. By default, it returns true. You can compare the old and new props and state by using the  `nextProps`  and  `nextState`  arguments and prevent unnecessary re-renders if the changes in props and/or state don’t affect what’s being shown to the user.

3.  `componentWillUpdate`  : This method is called just after  `shouldComponentUpdate`  has finished and just before the new component gets rendered. Some examples of uses for this method are if you have any calculations you need to perform before re-rendering and after props and/or state updates, or if you need to update integrations with third party libraries. Like  `shouldComponentUpdate`  , it also receives arguments like  `nextProps`  and  `nextState`.

4.  `componentDidUpdate`  : This method is called just after the re-rendering of the component. You will have access to the previous props and state with  `prevProp`  and  `prevState`  as well as the current ones, and you can use this method to update any third party libraries if they happen to need an update due to the re-render.

#### Unmounting

This is the last phase in the component’s lifecycle. At the unmounting stage, the component gets deleted and removed from the page. The only lifecycle method at this stage is  `componentWillUnmount`, which is called just before the component gets deleted. It is used to clear anything that was set up in  `componentDidMount`. For example, removing any timers defined in  `componentDidMount`.
