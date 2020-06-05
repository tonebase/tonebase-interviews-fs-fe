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
At the end of the React is just Javascript and HTML. Being that Javascript is my primary language this made my ramp up extremely fast. While thinking about what Javascript framework I would use to create a small web application called Habitual(web app to foster better habits) I asked myself two questions "What framework has the most user friendly documentation?" and "What framework would be best for a small application with minimal routes to a RESTful API?". After rendering my first component to the DOM I was immediately hooked. The syntax was very intuitive, and there were tons of libraries on npm that would allow me customize my components. Ultimately it was the React developer community that made my decision that would easier. Initially the only thing I diliked about React was the tedious prop drilling within applications with few components. To my surprise there were built in API's like Context, or state management libraries like Redux that I could onboard if the state management became complex. As of today, my only gripe with React is that it is unopionated. There are many different ways write your code for your components, thus possibly making the onboarding of someone else's code time consuming. 

### 2. Why do the component names in JSX start with capital letters?
JSX allows developers the XML syntax of naming our components exactly what they are <HomePage/> or <NavBar/>. However, if a developer forgets to capitalize the first character of the component name React will attempt to render the component as a HTML tag when the React.createElement() is called by React under the hood.
### 3. What are the main types of components you can render in React? When do you choose one over the other?
There are stateful components that management the state and logic (event handlers etc.) of the application or that individual components. This component can be a ES6 class(using this.setState to update state), or a function component(uses hooks state, etc.). Then there are presentational components that state is passed down to through props.  These components are just for the view of the application. 

Pure Components which take care of shouldComponentUpdate lifecycle method. By the nature of React the entire component tree is re-rendered when there is a state somewhere in the application. This is were Pure Components shine because these components will not render unless their state is updated.  One of the few ways to optimize your React code. 

Then there are HOC components(High Order Components) that typically has a state property with an array value. The value is mapped out and a component return from the HOC for each element. These type of components are best application that need to list data on the DOM. 

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

Most of my experience is with using Jest for unit testing. I haven't gotten around to leveraging Enzyme's shallow rendering of components for testing, but I plan to add this testing suite to my Rate My Landlord project. Although unit testing is a great start, my goal is to get better at adding both unit and integration tests to all my current and future projects.  

---

Whew, okay, now moving into a couple of code questions. We don't need you to code anything just yet, but this is more around optimization and undertstanding JS/React.

### 1. What is wrong with this example, and how would you go about fixing or improving the component?
Because props is being passed into App, and App's only job is to render the name of whoever is logged in (a.k.a. presentational component) . I would convert this to a function component, deconstruct name from the props object, and render {name} inside of the paragraph tag. Example below:

```
const App = ({name}) => {
  return (
    <p>Hello {name}</p>
  )
}

```

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
I would have personally made this enter component a function component and used useState to update the state. The timeout variable would need to declared outside of the context of the handleChange function. Then I would pass the e.target.value in a argument to the 
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
Lifecycle methods like componentWillMount and componentDidMount are typically used to fetch data from an API after a componnent mounts. Unfortunately, due to componentWillMount being invoked before the render method this lifecycle method cause side effects (i.e.components rendering empty data) before the promise is resovled from the API call. Hence, componentDidMount being to better choice for async api calls after the first render of the component.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?
Components have three phases: mounting, updating, and unmounting. With React16.3+, during the mounting phase four lifecycle methods are called under hood in order: constructor, getDerivedStateFromProps, render, and componentDidMount. After React has updated the DOM and any refs, the componentDidMount method is called, and it is here that an request for data from the API should be made. 

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?
In my last project Kondo(memory leak visualizer tool) my teams MVP was to fetch heap data from a SPA by leveraging Puppeteer to open a headless chromium browser, start a CDP session to open the memory profiling tool in the Chromium browser and take heap snapshots, diff the heap nodes, then ultimately visualize the heap data in multiple charts using Chart.js. If I could improve one thing, it would be to make the application a complete CLI versus visualizing the heap data in a dashboard like SPA. The purpose of the tool is to make developers lives easier while debugging code to find possible memory leaks and enhance overall application performance. A developers view should never be taken away from their code while debugging/optimizing it. Although a dashboard like SPA is nice to look at, the only thing the developer is concerned with is data that points to a possible problem in their code. I would hate to see all frontend code I contributed go to waste, however, I would love to know that my solution made the developers experience with the tool more seamless. 

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
