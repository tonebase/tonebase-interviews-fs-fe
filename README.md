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

Out of curiosity I started to dip my toes in React just to check it out. After seeing how mainstream the library was I decided to make it a priority to dive deep in React.

Pros: I like the robustness and community support. There’s tons of react packages and resources available. It’s definitely not going away anytime soon. There’s lots of developer-friendly features such as the React DevTools. The react team does well in easing the migration to a new major version in providing useful deprecation warnings. Another thing to mention is one-way data binding, as it simplifies “who” owns the data; this is good for reducing complexity.

Cons: High pace of development. One-way data binding, as you have to pass props down to any components that need them. It can get pretty repetitive especially if your component hierarchy is quite large.

### 2. Why do the component names in JSX start with capital letters?

React treats components that start with a lowercase letter as html. For example, if you use `<counter />` without any capitilization, it will throw an error because react will treat it as a native html element and the "counter" html element does not exist.

### 3. What are the main types of components you can render in React? When do you choose one over the other?

There’s presentational components aka dumb components and there’s smart components aka containers.

Smart containers are stateful components, they compute the output and contain the logic. These components usually make use of state.

A dumb component does not have any logic. It simply renders the component hierarchy and adds style.

You could also have a variation of the above so that it suites your project. For example, it’s not uncommon to have “screen/page” components or “router” components that handle routing.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!
I am a big fan of writing tests. It never hurts to write too many tests, the only downside to that might be taking the time to write them but from experience I will say that in the long run it will save you time in having to go down rabbit holes just to find the origin of a bug. For unit testing, my favorite testing frameworks are Mocha and Jest. For react-specific projects I also use Enzyme to make it easier to test components. As for E2E testing, I’ve used Puppeteer and Jest.

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

This example is using derived state as an anti-pattern. In this case it is not necessary to copy props into state. We should avoid using state as much as possible and in this case our component does not need to have state at all, we could simply read from `this.props.name` thereby making the component fully controlled.

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

The issue with this example is in the way React handles synthetic events. The event used in this example is an instance of SyntheticEvent, which is not a DOM event but React’s implementation of events. A key difference between DOM events and React events is that synthetic events are reused, so `event.target.value` will be null when accessed after the timeout. The simplest way to fix this is by using `event.persist()`.

Some improvements that could be made:

1. inherit from `React.PureComponent`
2. explicitly initialize `this.timeout = null` to avoid any unexpected side effects of having `clearTimeout(undefined)`

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

There is nothing inherently wrong with `componentWillMount()`, it’s the way you intend to use it where issues arise. One common issue is fetching data within `componentWillMount()`, this will create unwanted side effects because `componentWillMount()` will not return before the first render. That means your component will render empty data on the initial render. Maybe that’s why it has been deprecated. As an alternative, use `componentDidMount()` and initialize state.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

In the process of mounting, the following lifecycle methods are called in this order:

1. `constructor()`

This is where you initialize state, bind methods, etc; basically get the component ready.

2. `getDerivedStateFromProps()`

This method is rarely used in the wild. It's useful when your state is derived from props.

3. `render()`

Here we return what will be reconciled into react's virtual DOM. It should be pure and logic should be kept out of it.

4. `componentDidMount()`

Finally, the component has mounted. It is recommended that you place data requests in this lifecycle method because it will be called once, when the component mounts and when the DOM is readily available



### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

Let's see... the last project I worked on was an apartment marketplace for university students. Working on a large-scale project by yourself is tedious! If I could go back in time, I would hire people to help me with the project. It's not only rewarding in that development is much faster but you also get the chance to have your ideas validated by others. That's a huge plus for me. I've worked on a lot of side projects by myself and I've also worked on production-level projects with a team. All I can say is that a highly-motivated team with the same vision in mind trumps a highly-talented team with no vision.

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
