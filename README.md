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

It was not really my choice to learn React. I initially learned it to help a friend with a personal project a little over a year ago, and I really didn’t like it at first. But having played around with it a lot since then, and having learned Apple’s functional/declarative UI framework SwiftUI, I’ve come to appreciate what it offers web developers, and I might be ready to reluctantly admit that it’s an excellent solution. Comparing it to both Vue and Svelte, I appreciate `React.Component`'s render function, which computes and renders the Component’s markup. Although Vue and Svelte obviously help developers separate their application and UI logic, I prefer encapsulating markup inside of JavaScript as a conclusion from my application logic, rather than encapsulating JavaScript inside of markup.

On the other hand, I never stopped disliking Redux and I will always strongly dislike Redux. I think centralizing application state is an awesome idea, and I can even get on board with the way Redux proposes we do it. However, I think their nomenclature is unhelpful and confusing, I think their documentation is poorly written, and I think the way they ask us to manage actions is confusing. When it comes to Flux state management, I strongly prefer Vuex, and I think that even other communities (such as the Swift community) implement the pattern better than Redux.

### 2. Why do the component names in JSX start with capital letters?

Capital letters denote to JSX that the component being invoked is a React component, rather than an HTML element. JSX renders `<button>` or any other "vanilla" HTML element by passing a string to React’s createElement function, where JSX renders `<Button />` by evaluating a React component called `Button` and mounting its result.

### 3. What are the main types of components you can render in React? When do you choose one over the other?

You can either render functional or class components. Class components are more involved, but easily expose React’s view lifecycle by allowing us to override the component’s lifecycle methods. This is traded off for more eloquent and readable functional components that only expose the component state with the useEffect and useState Hooks. I prefer class components when I need to access every part of a component’s life cycle and perform custom logic that may not be performed automatically by a hook such as useEffect.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

I took a Quality Assurance class in college where they made me learn JUnit, but I’ve also unit tested Express routes and Vue components for a side project using Jest and the Testing Library, which has API’s for all the major web frameworks. I wrote test cases for the coding challenge below as well, with Enzyme which I actually liked using more than the Testing Library. I think writing tests can be a pain because you have to clearly articulate your system’s requirements, but that it’s obviously a good exercise that can ultimately feel excellent if you let it. I’d say most of the cleanest code I’ve written has been code that I’ve written while practicing Test Driven Development.

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

I don’t think there’s anything wrong with it. It works assuming React is imported. I might improve it by declaring the state object outside the constructor:

```
class App extends React.Component {
  state = { name: 'Anonymous' };

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

Before version 17, React would set null to the event target (and all other fields) in order to reuse event objects and optimize performance in older browsers. Calling event.persist() allows the event object to “persist” the data passed in from its target component:

```
class App extends React.Component {
	state = { search: '' };

  handleChange = event => {
    event.persist();
    /**
     * This is a simple implementation of a "debounce" function,
     * which will queue an expression to be called in 250ms and
     * cancel any pending queued expressions. This way we can
     * delay the call 250ms after the user has stoped typing.
     */
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value,
      });
    }, 250);
  };

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} />
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

It’s deprecated as of React 16.3. But other than that, it’s also called before the component mounts. If any data is fetched in the function, this means that the component’s initial render is dependent on the success or failure of the fetch. Even if you account for the failure in componentWillMount, fetching data after the initial render will keep the component’s initial appearance independent of the fetch’s success and the code will likely be cleaner more eloquent.

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

Mounting - when the component is first instantiated, rendered, and mounted to the DOM

1. constructor()

- initializes the component

2. getDerivedStateFromProps()

- computes state from the props passed in

3. render()

- computes the HTML result of the component's state and mounts it to the DOM

4. componentDidMount()
   - called after the component is mounted to the DOM
   - Fetch data here, because fetching data after the initial render forces us to render the component with an initial state default state that does not crash and that is still informative to the user, in case the data fetch fails for some reason.

Updating - when the componet’s state or props change

1. getDerivedStateFromProps()

- updates state based on props passed in. If the data passed into a prop is changed, it will update the state here.

2. shouldComponentUpdate()

- returns boolean whether the component should re-render or not. defaults to `true`

3. render()

- computes the HTML result of the component's new state and mounts it to the DOM

4. getSnapshotBeforeUpdate()

- captures the props and state before the update occurs, so that we can access their values after the update finishes.

5. componentDidUpdate()

- must be used if getSnapshotBeforeUpdate() is used
- Accesses props and state after an update occurs

Unmounting - when the component is removed from the DOM

1. componentWillUnmount()

- called right before the component is removed from the DOM

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

With my most recent project, if I had unlimited time and budget, I would probably migrate away from Firebase’s Cloud Firestore and towards Redis. When I started UpStyle, I initially used Firebase because I’m familiar with it, I wanted to make progress quickly, and I had other technologies that I would have to learn on the fly like SwiftUI. I thought I would be able to save time by not having to worry about setting up and connecting to my own backend, I really like Firebase’s authentication features, I like having access to other Firebase features such as ML and Crashlytics should I need them, and I still think that the document-based approach to saving outfits and items suits UpStyle extremely well, as opposed to a traditional relational approach.

But a thrifting app also calls for complex queries and full-text search, two features that Firebase is not well-prepared to deliver. For full-text search, their recommended solution is to set up a cloud function that copies your Firestore data to an Elastic container. This solution was inefficient, fairly constraining, and expensive. I’ve since replaced my Elastic endpoint with a RedisJSON (Redis’ MongoDB/Firestore competitor) endpoint, which has offered me full-text search on any field, as well as boolean queries with as many clauses as I need so my users can search by size, hashtag, price, or any other criteria. However, it feels unnecessary to have the rest of my collections still saved to Firestore when I could centralize them on Redis, and I don’t like needing to invoke a Cloud Function that copies an outfit or an item every time a user posts one.

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
