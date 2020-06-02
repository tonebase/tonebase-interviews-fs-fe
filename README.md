# tonebase Technical Interview - FullStack (Front-End Focus)

Welcome to the tonebase Technical Interview! Congratulations, if you're here it means we think you'd make a great addition to the team, based on your past experience, personality and kick-ass skills!

This interview is a small/short test of those skills. Ideally the questions presented and the challenges involved should take no more than 1 hour for an experienced full-stack developer with React chops.

The initial portion of this interview is simply answering a few technical, front-end and React based questions. We can talk through these on a call as I'd love to hear how you think about them/through them!

#### Types of Questions

This interview has been created for someone who considers themselves a full-stack developer with a focus on the front-end. Very concretely what we mean by this is you feel comfortable spinning up an express server and handling MVC based routes, controlles and middleware... but you really feel at home diving into some React or Vue code and ironing out cross-browser bugs and optimizing SCSS patterns. Or you feel comfortable everywhere, which is even better :)

#### Our Stack

The questions below are informed by our stack. I will list the details of each below:

- Client
  - NextJS => Server Side React ([Github Link](https://github.com/zeit/next.js)) + MadeByWild Boilerplate ([Github Link](https://github.com/madebywild/wild-next))
  - Firebase Authentication ([Documentation](https://firebase.google.com/docs/auth))
  - React-Easy State Stores ([Github Link](https://github.com/solkimicreb/react-easy-state))
  - Segment Analytics
- Server/API
  - NodeJS/Express (custom, no off the shelf management system like SAILS)
    - Segment Analytics
- Database
  - Firebase Realtime Database (current)
  - MongoDB (future)
- Payment Processing
  - Chargebee (Subscription Management)
  - Stripe (Payment Processing)
- Marketing Technology
  - Intercom (soon to be removed)
  - FullStory
  - Attribution App
  - HelpScout
  - Customer.io
  - Amplitude
  - Google Analytics
  - SendGrid
  - Google Optimize (A/B, Multivariate)
  - Some others...
- Other
  - Vimeo (Video Hosting)
  - Figma (Design)
  - Canva (Design)
  - Premier (Video Editing) \* GIMP (Image Manipulation)

---

Okay, with all that out of the way let's dive into the question section!

### 1. What made you interested in/choose React as a framework? Was it a choice you made? Regardless, what is the one thing you enjoy most about it compared to other frameworks you've used and what is one thing you dislike about it?

I was introduced to React in a software engineering intensive, so the choice was made for me. However after learning more about the alternatives such as Angular and Vue, I discovered that I enjoy React's integration of JSX the most. Blending the elements of HTML and JavaScript makes the development process easier by using several functionalities like map and filter to display DOM nodes. If I could change something about React, I would have React mirror Angular and be written in TypeScript instead of JavaScript. Static type checking before code execution helps to detect errors sooner and more efficiently (and saves headaches!). Once I learned TypeScript, I programmed my applications in it and haven't looked back since.

### 2. Why do the component names in JSX start with capital letters?

JSX fundamentally compiles to `React.createElement(component, props, ...children)`. So when an element starts with a lowercase letter, React interprets that as an HTML element and then gets passed into `React.createElement` as a string (like 'section'), which we don't want. Alternatively, component capitalization tells React that the component has been defined or imported somewhere in the file to pass into `React.createElement`.

### 3. What are the main types of components you can render in React? When do you choose one over the other?

The main types of React components are class and functional components. Class components are best suited for when declaring a state and accessing lifecycle methods. Function components are designed to display information, making them easier to read, debug, and test.

However with the introduction of Hooks in React 16.8, functional components now have access to state and lifecycle methods. Hooks allows the reusability of stateful logic, consolidates related logic (like fetching data), and minifies better for performance.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

At my last workplace, I executed React and Redux testing in Jest and Enzyme to facilitate continuous integration and deployment, ensure product reliability for every future release, and minimize unexpected outcomes by evaluating critical edge cases. My work was primarily in unit testing, and I'm ready to take on the responsibility for other testing types. I see testing the same way I see eating vegetables: nobody likes doing it, but it's essential for growth and success.

---

Whew, okay, now moving into a couple of code questions. We don't need you to code anything just yet, but this is more around optimization and undertstanding JS/React.

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

This issue is a common case of "derived state" and it should be avoided, because copying props into state is unnecessary and creates bugs.

To handle this, I recommend making the component fully controlled (let the parent control the props) by removing the state entirely and converting the class component to a function component. My solution is displayed below:

```javascript
const App = ({ name }) => {
  const nameDisplay = name || 'Anonymous';

  return <p>Hello {nameDisplay}</p>;
};
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

This issue is a little more tricky, as it pertains to React's SyntheticEvent wrapper. To optimize cross-browser compatibility, the event is defined as a synthetic event and is "pooled" - enabling the event object to be reused somewhere else in the application. This process of invoking the event callback nullifies all of the properties of the SyntheticEvent, and will result in an "Uncaught TypeError" error.

To fix this, I recommend creating a closure with a function returning the debounced function (using lodash's debounce) while passing in the persisted event. By doing so, it removes the synthetic event from the pool and grants access to the event. My solution is displayed below:

```javascript
import { debounce } from 'lodash';

const App = () => {
  const [search, setSearch] = useState('');
  const debounceEvent = (...args) => {
    const debouncedEvent = debounce(...args);
    return (event) => {
      event.persist();
      return debouncedEvent(event);
    };
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input type='text' onChange={debounceEvent(handleChange, 250)} />
      {search ? <p>Search for: {search}</p> : null}
    </div>
  );
};
```

---

Onto just a teensy bit of code + introducing you to our system! This part can be done on your own, and you can ping me when it's good to go!

Here is a link to a Github repo. containing our NextJS setup. It includes everything already setup for you -- SCSS support, a blank canvas for you to play with, and all the boileplate out of the way.

[The Github Repo.](https://github.com/tonebase/tonebase-interviews-fs-fe)

**Your challenge is to implement ONE of the following:**

1. OPTION 1: Implement a simple counter

For this assignment you may use a state management system of your choice (other than the native React state). We recommend `react-easy-state` as that is our default tool and is extremely simple to get up and running.

The counter should:

(a) Increment UP once per hour between 9AM and 5PM (inclusive)

(b) Increment DOWN once per hour between 6PM and 8AM (inclusive)

(c) Increment UP when a button is clicked manually

(d) Increment DOWN when a different button is clicked manually

2. OPTION 2: Build the Google homepage (www.google.com)

Open-ended, go into as much or as little detail as makes sense to you. Responsiveness, functionality, modularity, etc. is all up to you -- we want to know how you interpret this prompt. Feel free to get as creative or keep it as simple as you would like. Your code will be evaluated along the following criteria:

- Functionality
- Creativity
- Readability
- Cleanliness
- Comments
- Modularity
- Defensiveness
- Declarative-ness

**When Complete**

When you're good to go with your implementation and/or happy with it feel free to make a P.R. into this repo. under a new branch titled `${ YOUR_NAME--FullStack--FrontEnd }`

---

Lastly, just a bit of writing! We are a company where members of the team are constantly shifting around/traveling, whether to China to manage our upcoming subsidiary there, or to New York and Europe to head productions, attend events, etc.

Thus writing, and the ability to write clearly, logically and to formulate arguments and answers is crucial at tonebase, whether a developer, PM, or A&R manager! These questions aim to give us a better understanding of you as a writer, as well as your development skills.

### 1. Tell me about componentWillMount and the issues with it?

`componentWillMount` is the first lifecycle method to execute, and it only executes once. This happens before the component initilizes from the render() method, which means that there is no access to the DOM. Problems may arise because setting the state synchronously will not trigger a re-render when we expect it to. Therefore, it has been considered legacy and React advises to use `componentDidMount` instead.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

1. constructor()

   Before the component mounts, the `constructor` is invoked and is responsible for initializing state and binding event handlers. Note that super(props) should be called before any other statement inside the `constructor`.

2. static getDerivedStateFromProps()

   `getDerivedStateFromProps` gets called on the initial mount and subsequent updates, and it returns an object for updating the state or null. This is mainly used where the state depends on changes in props over time, which happens rarely.

3. render()

   `render` is the only required method in a class component, and it should be pure (returning the same result every time it's invoked). With props and state, it returns one of the following types: react elements, arrays and fragments, portals, string and numbers, or booleans or null.

4. componentDidMount()

   After the component mounts, `componentDidMount` will get invoked and is the recommended place for initializing DOM nodes, requesting data from the API, and setting up subscriptions. The reason being is to make sure that the state can be accessed, and to set up re-rendering when the data is received (which could take several seconds) to update said state.

Note that I didn't mention `componentWillMount`, since it has been deprecated since React 16.3.

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

The last project I worked on is called, "React Blue" (reactblue.io), which is a prototyping and visualization tool that helps engineers build component trees with custom templates. I worked with a team of talented engineers in a Scrum environment, and leveraged technologies like React, Redux, D3, Bootstrap, and Sass.

If I can improve one thing in this project, I would convert the entire codebase into TypeScript. One of my top priorities in development is scalability, and the strict nature of TypeScript ensures a more robust and maintainable codebase. Even though the conversion may take a lot of time upfront, it will save even more time and resources in the future.

---

That's it! Now it's your time -- feel free to ask any questions you may have and we'd love to answer to the best of our abilities. Thank you so much for taking the time to do this quick interview - we can't wait to see your answers and see if there's a way for us to work together!

At tonebase we truly believe in the following principles:

1. To Educate & Inspire In Everything We Do
1. Think Big, Then Think Bigger
1. Align Around The Mission, Execute Against The Vision
1. Start And End With The Customer
1. Culture Doesn't Just Happen, It's Crafted

We'll let you know very soon if you've moved into the next phase of the interview. In the next step we will introduce you to the founders, our mission + vision, core company values and to our small, close-knit and wonderful team. We're all excited to see where things go and will be in touch ASAP.

If there's anything else or you need to get ahold of the team at any time, you can reach out to [<team@tonebase.co>](mailto:team@tonebase.co) or reach Abhi, co-founder and Head of Product at [<abhi@tonebase.co>](mailto:abhi@tonebase.co)
