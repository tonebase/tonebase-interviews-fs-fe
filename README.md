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
React was the first framework I started with when I began working with JavaScript so it wasn't an active choice I made, but my interest grew and I continued to use it as React is one of the most used and rapidly growing frontend framework. It is not as small as Vue but not as bulky as Angular either - I think it is a nice balance between the two. I like React's use of virtual DOM for fast and efficient rendering, but I dislike that its unidirectional data flow can sometimes lead to extreme prop-drilling (which can be addressed with Context API and React Hooks).

### 2. Why do the component names in JSX start with capital letters?
Component names in JSX needs to start in capital letter because those that start with lowercase letters are treated as built-in components/HTML tags and won't be recognized/rendered correctly.

### 3. What are the main types of components you can render in React? When do you choose one over the other?
The two main types of components in React are class/stateful components that manages state and passes prop down to children, and functional/presentational components that do not have state, and may receive props from top-level component to display information.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!
I have experience with Jest and Enzyme to implement unit testing, but testing is certainly not area of my focus or something I've done extensively.

---

Whew, okay, now moving into a couple of code questions. We don't need you to code anything just yet, but this is more around optimization and undertstanding JS/React.

### 1. What is wrong with this example, and how would you go about fixing or improving the component?
The component updates its state with a prop that was passed from its parent component, which would only work for setting up the initial state. If value in props is updated in the parent, that change won't be reflected in the state inside App. This can be fixed by simply rendering the name in JSX directly from the passed props, without unnecessarily assigning the props value to the state.

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

### 2. What's the issue with this component. Why? How would you go about fixing it?
Using event.target within setState() results in error, as React's setState() is asynchronous function and event is nullified by the time setState() accesses it. To persist the event.target value, use event.persist() or save the target value in a variable and access the value through this variable.

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
componentWillMount is a lifecycle method in React that is considered a "legacy" and no longer recommended to be used in React documentation. Although the method is invoked before mounting, data-fetching inside componentWillMount will still result in component rendering with empty data due to asynchronicity. Fetching can be called inside componentDidMount instead, which makes it clearer that data will be rendered after the mounting. Also, in SSR, componentWillMount is called twice, both on server and client - again, better alternative is to use componentDidMount, which is called only once on client side.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?
First, state is initialized inside the constructor. Before component is rendered, static method getDerivedStateFromProps is called if there are any state changes in props that needs to be updated in state. Then render() is called to render the JSX component, and immediately afterwards  componentDidMount() is called.
Request for data from API would be placed inside componentDidMount() - you can interact with rendered components if data needs to be displayed in frontend, or update the state by calling setState(). Also, it is a better choice than componentWillMount for the reasons specified in (1).

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?
I would migrate from React Hooks to Redux for state management in ThermaKube. My team initially chose to use React Hooks because we thought state management using Hooks would be simpler, lighter, and adequate for the project. However, as the project grew bigger than we anticipated, there were a lot of shared state and data that needed to persist between different components, which would have benefitted from centralized store in Redux.
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
