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

When I first began learning how to write code, I took tutorials on how to create websites using vanilla Javascript. It was no surpise that I became overwhelmed becuase I had a hard time tracking what lines of codes did what in my application. At this moment, I scrolled through other online resources and quickly found myself learning JQuery. I created the commonly learned todo application but still I thought there must be an easier way to track all the moving parts in my application. When I came across the React framework and created the same todo project, I thought to myself there's no going back to JQuery. I love how this framework focuses on breaking every functionality into separate components. Also being able to store and manipulate current values of data known as "state" which would then be used to dynamically render to the page saved so much time. It is so convenient to be able to write Javascript within HTML tags, and now I no longer struggle keeping track of the moving parts.

With that said, the one thing I dislike about React is keeping track of state inherited from parent components. Passing props down from parent to child to child sometimes results in the bad practice of "prop drilling". Fortunately, state management tools such as Redux and GraphQL help to mitigate this problem.

### 2. Why do the component names in JSX start with capital letters?
If one were to accidently name a component without capitalizing the first letter, React will read this component as a native HTML tag or will throw a warning. Capitalizing the first letter signals to React that this is a React component so it should be handled as one.

### 3. What are the main types of components you can render in React? When do you choose one over the other?
There are two main types of components, Stateless and Stateful components. Stateless (also known as functional) components don't hold state, hence the name. I like to call these dummy components because they don't incorporate logic. They usually inherit props and display on the page the way they are meant. Stateful components actually keeps track of changing and managing data. These components dynamically render this data to the page mainly through passing down props to its child components. In many cases, these pieces of state are changed depending on user actions.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

I have a fair amount of experience testing applications using Mocha, Chai, Jasmine, and Jest. Lately I've been mostly using Jest for create-react-app applications.

---

Whew, okay, now moving into a couple of code questions. We don't need you to code anything just yet, but this is more around optimization and undertstanding JS/React.

### 1. What is wrong with this example, and how would you go about fixing or improving the component?
There is no need to make this App component stateful. Its only job is to render the property "name" from the props it inherits so it should just be changed into a functional component. Lets say however, that this component was meant to be added on to and that more peices of state were to be introduced. Setting the name variable to the name of the props it inherits is still redundant, this peice of state should be taken out. Changes to the name prop would happen in it's parent component.

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
The problem here is that event.target.value will not work because event.target is undefined. The reason being is becuase you can't access the event object while using an asynchronous method due to performance reasons. These properties are nullified. I would set the event.target.value as a variable beforehand and use this value in your setState method.
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


my Code:
class App extends React.Component {
state = { search: '' }
handleChange = event => {
  const value = event.target.value
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
This is a lifecycle method which will only be called once, before the component intitially renders. This method gives the developer the ability to update state before the first render, which allows the component's state and props to be safely queried. The problem with ComponentWillMount occurs with fetching data from a server. The component's render method will have already been completed before the data is fetched resulting in the component returning empty data which may cause memory leaks.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?
First, the component's contructor is called which sets the initial state and binds event handlers (binds "this" to the methods you declare). Next, the render method is called which tells React exactly whats being displayed. Once the component is mounted, componentDidMount() is then called which is used to update any state. When making an API call, you want to do so in the componentDidMount method due to the fact that the component has already rendered and that the data is only being fetched one time from the client side.

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?
My current project that I am working on is an investing simulator. Once signed in, the user will be presented with a simulated stock market and can buy and sell stocks using fake money. If I had the resources, I would pay for the stock data that I'm working with. I'm limited with the amount of requests a user can make every minute so I've found myself getting creative so that this limitation is unnoticable. I would also then be able to use websockets to display real time data throughout the day without having to worry about this problem. However, I'm still trying to figure out a way I can do so for free.

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
