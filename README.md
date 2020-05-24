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

React was the first proper JavaScript frontend framework that I was introduced to. 
I began using it as it was what was taught during my course at General Assembly. I have a small bit of experience with Angular and the number one thing that I enjoy in React over Angular is the community. 
There are so many great plugins, libraries and articles to consume regarding React, and there’s always someone pushing the limits of what can be done with it and dutifully documenting that limit pushing. Other frameworks(not just Angular, but Vue, Svelte etc.) have their ecosystems too of course, but let’s be honest, none of them are quite on the scale of React.
That said, I do wish that there had been more resources provided directly from the React team regarding transitioning from class components to hooks. As much as I enjoy hooks, it took a while to wrap my head around them and I can’t help but think that more one to one examples right from the team making the change would have sped it along immensely.

### 2. Why do the component names in JSX start with capital letters?

JSX component names start with a capital letter to differentiate them from regular html tags. 

If React sees something inside <angled brackets> in the return or render() return of a component it knows to do one of two things. In the case of a lower case letter it will attempt to render it as a regular html tag i.e. (<p>Hi, I’m Tim</p>). In the case of an upper case letter it will look for another component, usually defined at another place in the same file or imported from another file i.e. (<MyName name=”Tim” /> => <p>Hi, I’m {name}</p>).

### 3. What are the main types of components you can render in React? When do you choose one over the other?

Components are broadly split up into two categories: class based and functional.

Prior to React v16, a common pattern was to use class based (so called “smart components”) to process stateful logic, lifecycle methods etc. and to use functional components (“dumb components”)  for rendering data once logical operations were completed.

Since the introduction of hooks in React v16, this paradigm has shifted. Hooks allow you to use stateful logic and lifecycle methods in functional components.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

I have done some unit tests in the Mocha framework using the Chai assertion library. However, I prefer Jest, the framework developed by Facebook Open Source and included with create-react-app.

I am also seeking to get better with unit testing, so I think we would work well together in this.

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

Two things stand out to me. 

Most often the App level component is the first source of stateful logic in an React app. Therefore, it would be unlikely for an App level component to receive props, though it could happen if for instance you needed props passed down from a Higher Order Component.

Mixing props and state is generally bad practice, can lead to bugs and lends little to nothing to performance for the app. It’s best to choose one at a time to render with and use that as the single source of truth for the rendering. There is no need for state to be involved in this rendering.

I would redo this component as: 

```
class App extends React.Component {
  render() {
    return (
      <p>Hello {this.props.name || 'Anonymous'}</p>
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

There are a few things here that need to be fixed for this code to work as intended.

1)Firstly the call to this.handleChange needs to be done with an event handler, as it is expecting one.

2)On the provided event handler, you need to call the event.persist() method so that the event data will be usable in the asynchronous operations, set and clear Timeout. If you do not do this, the event data will read as null when accessed by setState, and React will throw an error.

After making these changes, the code would read as:

```
class App extends React.Component {
state = { search: '' }
handleChange = event => {
    event.persist()
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
        <input type="text" onChange={(event) => this.handleChange(event)} />
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

componentWillMount is a lifecycle method and the main way to call an effect before a component mounts in a class based component. After componentWillMount is called the component will be mounted to the DOM. It is not recommended to use componentWillMount to change state or to make an API call as it will be called before the render cycle and the data will be lost or behave unpredictably. 
Because of the myriad problems with componentWillMount, it was officially deprecated in React v16.3. 

### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?

The lifecycle of a React component can be broadly broken down into three main parts:

1) Mounting ,the “birth” of the component, wherein props and state are declared and configured and the component is inserted into the DOM.

2) Updating, the “life” of the component, wherein props and state can be changed and the component can interact with other components and other effects. Unlike mounting or unmounting, which only occur once, the update cycle can last indefinitely.

3) Lastly there is the Unmounting, or “death” of the component. This occurs when a user navigates away from a component, the component is hidden or the UI changes and no longer requires the component. The component will close down, ready to be called again if the React app needs it.
There are two main places where I would place an API call, depending if I needed it more than once.
 
If I only needed it upon loading of the component, I would place the API call in the componentDidMount lifecycle method of a class based component or a useEffect hook with an empty dependency array on a functional component. A use case for this would be if I wanted to call all of the user’s documents from a database as soon as the component mounts.

If I needed to call the API more than once, I would place it in a componentDidUpdate lifecycle method of a class based component or a useEffect hook without a dependency array in a functional component. An example of this would be if i needed to make an API call every time a user created input for a field, like a search.

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?

My last project was a brand new [portfolio](https://timmalstead.com/) from scratch using as much vanilla React as I could and as few libraries and helpers as I could. One of the things that I’m proudest of is creating a component that cycles through color stories. All in all, It went quite well and I’m happy with the result.

That said, I would love to take the theme idea even further and introduce different layouts and text features depending on the theme. I think a performant way to go about the second would be to introduce inline SVGs for the titles on my splash page. This would be better and make more sense than bogging down my load time calling a font I’m only going to use once.

As you say, I have neither unlimited time nor money, but I’m hoping to get back to this soon!

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
