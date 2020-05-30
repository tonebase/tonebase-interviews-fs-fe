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

### 2. Why do the component names in JSX start with capital letters?

### 3. What are the main types of components you can render in React? When do you choose one over the other?

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

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

Assuming that props.name never changes, it makes little sense to create state unnecessarily with the constructor function. Due to this, I would turn this into a functional component and not create any state at all, followed by moving the logical OR operator directly into the return statement like this:

return <p>Hello {this.props.name || 'Anonymous'}</p>;

Not only is the cleaner and less repetitive, but it would allow the component to update in the case that props.name changes (unlike the constructor function, which would only update once).

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

The way that React handles event handlers is such that you cannot access the event asynchronously, which is precisely what setTimeout does. This is because React handles these events as passed instances of the SyntheticEvent object which has all its properties set to null the moment the event callback is invoked (this is because SyntheticEvent is reused/pooled). Due to this, the moment at which the 250ms delayed callback of setTimeout is invoked, the event.target.value will already be null. A solution would be to call event.persist() in the handleChange function, as this will remove the event from the SyntheticEvent object pool and allow it to be referenced.

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

The only thing wrong with componentWillMount is that its use cases are few to none (and as such it is deprecated). At the time it is called, there is no component yet, which means you cannot do anything involving the DOM. The main issue that often arises from componentWillMount is when an asynchronous call (which is not a good use case for it) is made, as there is a possibility it will resolve before there is a component, so if you wanted to setState or mess with the DOM at all, for example, you would be doing so on a component that isn't mounted yet. You could use componentWillMount to set up configuration to an external API for you to access in componentDidMount, but even then you would want to do that elsewhere in your code.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

The first step is intialization and the set up of state. Then the component mounts, which is preceded by the componentWillMount() function and followed by the initial render and componentDidMount() function. It is in the componentDidMount stage that you would start a request for data from an API because at this point there is guarunteed to be a component available to render the data to. After this, the component has finished mounting and begins updating if there are new props or state changes. Similar to the mounting stage, the updating stage consists of the componentWillUpdate() function followed by the the rerender and componentDidUpdate() function. When the component is removed from the page, the final function called is componentWillUnmount(), which marks the end of the cycle.

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

The last full project I completed was Star Jump, an education application for young children. I started as the back-end engineer but quickly completed all neccesary tasks and became full-stack, aiding in the design and development of the front-end as well as implementing global state and creating the logic for one of the game modules, which ended up getting reused for multiple. I think with unlimited time and budget, I would like to refactor the application to utilize SCSS, as well as optimize a lot of the logic I wrote. In addition I would definitely build more game modules, create a more complex reward system, as well as a level system for the modules. As for my back-end work, I want to revisit my authentication system and have give it an email address verification system.

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
