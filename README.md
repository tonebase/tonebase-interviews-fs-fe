### 1. What made you interested in/choose React as a framework? Was it a choice you made? Regardless, what is the one thing you enjoy most about it compared to other frameworks you've used and what is one thing you dislike about it?

Okay, here's the thing. There's already lots of answers in pull requests and I really dislike copyrighting so I'll be prompt and concise :)
I picked React because it was the best view framework in terms of spead, community and facebook's support.
Honestly, I haven't worked with other frameworks so I only can make conclusions from comparision articles etc.

### 2. Why do the component names in JSX start with capital letters?

I shy just to copy the answer from the internet :D
The short answer is JSX works this way. Otherwise it will be treated like a element, not a component.

### 3. What are the main types of components you can render in React? When do you choose one over the other?

Class and functional component. Originally we use class components for statefull containers and functional components for view, presentational components.
But now with hooks we can use functional components for statefull as well.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

I have some experience (read: not much, but a little bit :D ) writing jest tests mostly using react testing library. I prefer react testing library over enzyme because it tests not implementation details of component but rather functionality of the component.

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

State is redundant here. If it's completed component, I'd rather write it as a functional with props destructing:

```
const App = ({name = 'Anonymous'}) => <p>Hello {name}</p>;
```

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

Here we access nullified synthetic event. The simplest solution is to destructure event and assign event.target.value into a variable:

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
    const { value } = event.target;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: value
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

Also we could rewrite it to functional component:

```
const App = () => {
  const [ search, setSearch ] = React.useState('');
  let timeout;
  const handleChange = e => {
    const { value } = e.target;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearch(value)
    }, 250);
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
      {search && <p>Search for: {search}</p>}
    </div>
  )
}
```

---

### 1. Tell me about componentWillMount and the issues with it?

componentWillMount is invoked just before mounting occurs. It's deprecated. React team recommends using the constructor() instead for initializing state, for side effects componentDidMount.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

componentDidMount or API call.
On mount: constructor, getDerivedStateFromProps, render, componentDidMount.
On update: shouldComponentUpdate, render, componentDidUpdate.
On unmount: componentWillUnmount.

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

1. Fully scoped css for easy development and for avoiding css overrides. Styled-components or something similar.
2. It was monolyth platform with embedded react plugins. Of course much better to have one react app with code splitting, client caching instead of legacy aproach.

---
