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

For me I personally chose to work in React as the framework is so popular among the community and it is pretty easy to find support for it through simple searching of the web. But, I think the biggest thing that I really enjoy about React vs. other frameworks is using JSX in building out applications. I find that JSX just feels very intuitive to me and I’m able to write really clean and understandable code using JSX (I am aware that JSX can be used in other frameworks like Vue, but you may not necessarily end up on a team using JSX when working in other frameworks).

The one thing I enjoy working with React the most is how un-opinionated it can be in comparison to other frameworks like Vue and Angular. Some folks may consider this a con to React, but for me React is able to give more freedom with how lightweight the library is. However, one thing I do dislike about React is how state management is determined and handled. It can be quite tricky to determine what kind of state management library you’d want to use when creating a React application and is really dependent on the size of the application and how large you intend to scale it. As applications grow and scale it may make sense to use Redux for managing state, however, if you need to get the application up and running more quickly Redux may not be the best answer. 


### 2. Why do the component names in JSX start with capital letters?

In JSX if the component starts with a lower-case letter it will be treated like a HTML component (e.g. <div>, <span>, etc.). Using a capital letter will ensure that the JSX correctly compiles to React.createElement(Foo) vs. React.createElement(‘foo’).

### 3. What are the main types of components you can render in React? When do you choose one over the other?

The two most basic types of components in React are stateful vs. stateless components. The difference between these two components is that one will contain state and essentially keep track of changing data while stateless components can be used to display state given to them from stateful components. Generally, stateful components are used as containers that store and keep track of state, while the state can be passed down as props to stateless children components to display in the application.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

Props should generally not be used as state in the components that they have been passed down to. Instead of creating state in this component, I’d simply just add the logic of the ternary operator to the <p></p> that is being rendered. Instead of <p>Hello {this.state.name}</p> I would write in <p> Hello {this.props.name ? this.props.name : ‘Anonymous’}.

---

Whew, okay, now moving into a couple of code questions. We don't need you to code anything just yet, but this is more around optimization and undertstanding JS/React.

### 1. What is wrong with this example, and how would you go about fixing or improving the component?

Props should generally not be used as state in the components that they have been passed down to. Instead of creating state in this component, I’d simply just add the logic of the ternary operator to the <p></p> that is being rendered. Instead of <p>Hello {this.state.name}</p> I would write in <p> Hello {this.props.name ? this.props.name : ‘Anonymous’}.

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

In this case the event cannot be accessed in an asynchronous way as it is a SyntheticEvent and so .target.value will have no reference and error out. To fix this we could try calling event.persist() on the synthetic event which removes it from the pool allowing references to the event to be retained asynchronously.

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

  ComponentWillMount is a legacy lifecycle method that React no longer recommends that its users use. As of React 17.0 the React time will be renaming componentWillMount to UNSAFE_componentWillMount. This lifecycle method was not intended for some of the asynchronous rendering features that React now offers - componentWillMount is synchronous and would require multiple rendering passes to get the updated data, making it inefficient.


### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?
  
  When mounting the following functions are called in this order - constructor(), static getDerivedStateFromProps(), render(), and componentDidMount(). When updating the following functions are called in this order - static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate(). When unmounting componentWillUnmount() is called and the following methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component - static getDerivedStateFromError(), componentDidCatch(). If we need to make a request for data from the API the best place to make the call would be in componentDidMount. By fetching the data in componentDidMount it ensures that the fetch only happens after the initial render of the component and that it doesn't get executed on the server but on the client side only. 



### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

  Most recently, I've worked on an open source project called reactFLO, which is a tool for developers to help debug state in their React applications. The application visualizes the component hierarchy tree for developers and also visualizes how state flows throughout components in their applications. If there was one thing that we could have definitely improved upon for the project it would probably be the documentation. While we were able to have the application up and running correctly, our documentation on how the application works and also how to use the application is a little lacking. As it is an open project, we definitely want other developers to be able to also dive into the codebase and make their own contributions as well, however, this would be much easier if we had more clear and thorough documentation on how the application works. Specifically, one of the tasks we had to do was essentially take the React Fiber tree and restructure it into a more graph-like structure so it could be used in our D3 visualization. I'd really like to explain this a bit more in our docs so other developers can understand not only how the application is working but why we chose to structure the component tree into a graph-like structure.

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
