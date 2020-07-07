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

I didn't personally choose React, it was already picked as the staple front-end framework of Hack Reactor's curriculum. That said, I've been happily continuing to develop with it as opposed to learning something else. React's clear Javascript structure makes it easy for me to read and write, and I love the ability to weave JS and html together in JSX. One detraction for me is that React can require a good amount of pre-planning to avoid time-consuming refactors down the road, such as changing functional components to class components, or changing the overall app structure to avoid unnecessary re-renders or unmounting/mounting of components.

### 2. Why do the component names in JSX start with capital letters?

Lower-case tag names compile as html elements; React components are capitalized to differentiate them from basic html elements so that the JSX block compiles correctly.

### 3. What are the main types of components you can render in React? When do you choose one over the other?

There are two main React component types - class and function. In general, you would choose a functional component if the component is state-less, and just renders from the props being passed in (though you can introduce state capabilites with the useState hook). Class components are used when your components have state and/or you want to use lifecycle hooks.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

I have experience using Mocha/Chai/Jasmine for vanilla JS testing, and Jest/Enzyme for testing React components. I've also successfully implemented continuous integration/automated testing using CircleCI.

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

1. the component only renders a single element based off of an unchanged prop, so it seems unnecessary to make it a class component.
2. the state variable 'name' is just making a copy of the prop, which creates two sources for the same value. There should be only "one source of truth".

Here's how I would refactor this component:
```
const App = (props) => {
  return (
    <p>Hello {props.name || 'Anonymous'}<p>
  );
}
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

1. In the handleChange method, an error will be thrown because of the async nature of this.timeout: by the time this.setState gets called, event will be null. This can be solved by either storing the value at the beginning of handleChange, or by using event.persist(). I personally prefer the first option.
2. The styling of the code makes it a little hard to read - it would benefit from some adjustments to the indentation and line spacing.

Here's how I would refactor this component:
```
class App extends React.Component {
  state = { search: '' }

  handleChange = (event) => {
    /**
     * This is a simple implementation of a "debounce" function,
     * which will queue an expression to be called in 250ms and
     * cancel any pending queued expressions. This way we can
     * delay the call 250ms after the user has stopped typing.
     */
    const searchTerm = event.target.value;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: searchTerm
      })
    }, 250);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    );
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

componentWillMount is a lifecycle hook invoked prior to rendering. It causes issues when async calls are made (e.g. an API call to fetch data used to render the page), as the component will mount/render before these calls return, which causes multiple re-renders of the page.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

When a stateful component mounts, functions are called in this order:
  1. The constructor, specifically super(props) and then the initial state
  2. The render() method
  3. Then any lifecycle hooks (provided you aren't using componentWillMount, which happens prior to rendering).

I would place an API request for data into componentDidMount - this will avoid excess re-renders due to the async nature of the request. Since the data from the API call will be used to properly render the page, I would create a 'loading' state variable that is initialized to true, which is used to conditionally render the page between a loading animation/spinner and the fully rendered page. So, while the API request is processing, a loading animation is displayed, and then when the request has resolved and the data is placed into the state, the loading state will flip to false and the fully-rendered page will now be displayed.

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

I'm happy to say there's fairly little I'd want to change about my last project. The one thing I found myself wanting to change was the structure of the data in the Firebase database (this was already set up by previous contributors). The way the data was structured, getting all of the data needed for each page of the web app required long promise chains (in some cases, longer than could fit on the sceen at once). While the data structure made for efficient requests (each single request didn't return any more than was explicity asked of it), it did complicate the development process early on.

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
