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
I was interested in React because I first heard that it had an easy learning curve. I then chose to stick to it as my main frontend framework because of the productivity enhancements that it provided. Using a VirtualDOM creates easier UI state changes, the declaritive style of React creates clean project directories where we can segregate business logic, UI, and component behavior easily (especially with Redux), and the use of props from parent components. It's honestly hard to think of something that I don't like about it. It created a more simplified experience in comparison to Angular and Vue.

### 2. Why do the component names in JSX start with capital letters?
Capitalized types indicate that the JSX tag is referring to a React component when corresponding to React.createElement(ComponentName)

### 3. What are the main types of components you can render in React? When do you choose one over the other?
There are 2 - Functional and Class components. I would use Functional Components only for presentation UI, especially if they don't have their own states to manage. This makes it much more easier to manage/ read in development. Class components should be used for manage states and behavior in an organized manner.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!
I've used Jest for React/Typescript user and integration testing. I've also used CICD like CircleCI (mainly in React Native apps) and Docker.
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
There's a lot of redundancy in this class with not extra behavior. I would convert this into a functional component for easier readability and less code while just reading from this.props.name.

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
Error: onChange will give an error because "event" is an SyntheticEvent and therefore event.target will be undefined React event handlers are passed as a Synthetic Event instance.

Fix: Creating a const variable between clearTimeout and setTimeout and referencing that value.

```
const value = event.target.value
 this.timeout = setTimeout(() => {
      this.setState({
        search: value
      })
    }, 250);
```

Other potential issue: no constructor to call React.Component's constructor. In this current state, we can't import props from parent components.
```
constructor(){
  super(props)
  //possibly move state here to this.state
}
```

Other potential issue: this.timeout should be in the constructor also.
---

Onto just a teensy bit of code + introducing you to our system! This part can be done on your own, and you can ping me when it's good to go!

Here is a link to a Github repo. containing our NextJS setup. It includes everything already setup for you -- SCSS support, a blank canvas for you to play with, and all the boileplate out of the way.

[The Github Repo.](https://github.com/tonebase/tonebase-interviews-fs-fe)

**Your challenge is to implement ONE of the following:**
I did this option

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
componentWillMount is invoked just before mounting occur and called before render(). There are a few issues with it. Obviously, because it runs before render(), it will not have any updated states and only have access to the inital values of the states. The biggest thing is that componentWillMount is a server-side rendering and runs asynchronously with render(). So, if an async call (like fetch) were to be called here, it will not return before the first render, and componentWillMount will not trigger a rerender on setState. So, the component will not update at all. This is why we use componentDidMount instead for async calls.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?
1. constructor() - 
2. getDerivedStateFromProps() - 
2. componentWillMount() -
3. render() -
4. componentDidMount()

You would make API requests in componentDidMount(). You can call setState() here to trigger a rerender to update the component with the relevant response data.

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

CICD and automation testing all the way. It's usually one of the last things (or possibly never) come across to in the first couple of projects. When I started doing this in my current web/mobile projects, the productivity of releasing prod code has been sick. CICD is one of those tools where when you use it the first time, you will always want to use it.
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
