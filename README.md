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

Mostly I liked the way that React allowed me to think about the frontend as an expression of its underlying state, while keeping them cleanly separated. Vanilla DOM manipulation has a tendency to think about the entire webapp/website as a series of processes, rather than a structure, which can make it a bit difficult to track. Angular also tries to solve these problems, but the Angular codebase I've worked in continued to lean very heavily on JQuery and direct DOM manipulation in order to use vanilla JS libraries, which made the code a bit difficult to follow and maintain. One thing that I dislike is that it's fairly easy to over-modularize your code and end up having to jump between several different files to change a single simple form input.

### 2. Why do the component names in JSX start with capital letters?

Component names in JSX start with capital letters to distinguish them from native DOM elements (i.e. `<div>`)

### 3. What are the main types of components you can render in React? When do you choose one over the other?

 I'm not entirely sure what you mean by "types". There are a variety of patterns, but they tend to control the "how" and "why" of rendering react rather than the "what", which are always ultimately DOM elements. 

 The biggest distinction is between stateful/stateless components, which differ in that they either do or don't create and maintain a "state". Stateless components have information passed in as properties, and simply render/re-render in response to changes in those properties, without being able to modify them. There are various patterns for designing components, such as containers, providers, etc


### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

I have unit testing experience with Jest, and some experience with API testing in supertest, though it's been a bit since I've implemented either.

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
There's no reason for this component to have its own state. it never modifies state and it is wholly dependent on props being passed in. We could rewrite it as a stateless component, and simply have `this.props.name || 'Anonymous'` render from the jsx

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

The issue with this component has three parts: Objects are passed by reference in JS, setTimeout is asynchronous, and synthetic events in React are reused. Thus, in the context in which `setTimeout` executes its callback, `event.target.value` does not exist, since `event` has been reused by React for some other purpose. You can solve this by either assigning a variable to directly hold the value of `event.target.value`, or calling `event.persist()`

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

`componentWillMount` is deprecated in current implementations of React. Mostly, it doesn't seem to do anything that isn't better accomplished in either the `constructor` or `componentDidMount`. (`Constructor` for initializing state, and `componentDidMount` for doing initial data fetches- `componentWillMount` doesn't actually block the thread and wait for async requests, so it can be a bit deceptive if you expect an async call to complete before your component gets mounted)


### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

Mounting is the process of initializing and doing a first rendering of the component, which starts with the constructor, does a first run of the render method, and finishes with componentDidMount. API requests should go in componentDidMount, as async calls in the constructor create race conditions that may attempt to modify your state before the component mounts, which can cause issues with rerendering. Instead, the usual pattern is to have a placeholder component that can be rendered while waiting for a fetch to return with some data, at which point the state gets updated and the component is rerendered

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

Given unlimited time and budget, I'd migrate the entire frontend off of Kibana, except insofar as it can be used as a GUI tool with its built in visualization functionality. Developing custom plugins on top of Kibana is a nightmarish experience where the internal APIs are very lightly documented, even minor version updates introduce breaking changes, state cannot be shared between plugins, and performance is slowed by the overhead of loading in all of its built-in functionality. A separate platform would be more performant, easier to maintain, and let us leverage our own component libraries to speed up development.

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
