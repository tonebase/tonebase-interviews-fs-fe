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

While I have not had the opportunity to work with Angular or Vue, React appeals to me because of the unconstrained customization and freedom it delivers. Compared to Angular, which is a "framework", React is a library and does not have a "right" way of building applications. In addition, React provides an easy way to compose your app with components and manage the one-way data flow from parent to child components. Although it was not my choice to learn React (it was part of the App Academy curriculum), I love to work with it every day and continuously learn new and exciting features such as hooks, which greatly enhance my development experience. To further my point, I really enjoyed taking advantage of this opportunity to learn about the useReducer and useContext hooks and integrate them into this interview project as a method for storing the global theme state. Although I could have implemented the entire Redux cycle for the theme switching, the feature was not complex enough and therefore useReducer and useContext were the appropriate choices. Since the day I started working with it, the one issue I've had is that the official documentation has not always been the answer to the various bugs I have encountered throughout my React journey. Since the React community is so large, I almost always fin the answer to my questions through Medium articles, Youtube channels, and Stack Overflow. However, this is a blessing in disguise because whenever I research my issues online, I get yet another opportunity to learn a new approach to solving problems and expand my ever-growing React acumen!

### 2. Why do the component names in JSX start with capital letters?
A component must start with a capital letter. If it starts with a lowercase letter, JSX will interpret that component as `React.createElement('component')`, which effectively boils down to a plain HTML element. Essentially, React will disregard that the component is indeed a component and instead render a vanilla `div`, `button`, etc. depending on what the component was intending to render. React will actually warn you in the console if you attempt to use a lower-cased component because it will know that the component name is not a valid HTML tag. 

### 3. What are the main types of components you can render in React? When do you choose one over the other?
The two main types of components in React are class-based components and functional components. Before the addition of hooks with React v16.8, the main reasons for the use of class-based components over functional components were that only class components had access to state and lifecycle methods. There are a few important reasons why the React team decided to add hooks and make functional components the future standard. First and foremost, functional components are much nicer to read and understand, given that they are simply regular functions that all Javascript developers are already familiar with. Second, using them requires less code compared to class components. Finally, according to the React team, there is a slight performance boost using functional components over class components. Personally, the biggest reason I switched over to hooks was the removal of lifecycle methods, which made debugging unnecessarily more difficult due to having to locate the exact point in the component lifecycle where my bug was occuring. In their place, lifecycle hooks such as useEffect were introduced and allowed you to replicate the functionality of one or more lifecycle methods with one hook depending on how you use it. For instance, if you do not pass in a property in into useEffect's dependency array, it will function as componentDidMount. If you do pass in a property, every time the value of that property changes, useEffect will be invoked.

### 4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

While I have not written tests for my apps, I have had previous experience with reading and interpreting Jasmine, Jest, Mocha, Rspec, and Capybara tests. If necessary, I am more than willing to take the initiative to look into the specific testing framework the team is interested in and learn how to implement it into tonebase's codebase!

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
There are two big issues with this component. The first is that because the constructor function is run only once before the component is mounted, the name value will never get updated should there be any update to it in the future. The second reason is that props are immutable and state is mutable, therefore the only way the value can be changed is if its parent component passes it down a new updated value. With that being said, I would first change the component to a functional component, set the initial state value with the useState hook to be `props.name` , then use the useEffect hook and pass `props.name` to its dependency array to track changes. What this will do is that every time the props change, useEffect will be invoked because it will see that the props have changed and set the component's state to the new prop value. 

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
The issue arises due to React's event pooling mechanism. The `onChange` handler is an instance of SyntethicEvent, which is a wrapper around the browser's native event. What this means is that the `onChange` event object will be reused and all the properties will be set to null after the event callback is invoked. As a result, accessing the event in an asynchronous way will actually cause an error. Specifically, `event.target.value` will be null and throw an error when the component tries to access it after 250ms. The solution to this issue above is to call `event.persist()`  at the top of the `handleChange` function. This will allow the component to remove the event from React's event pool and allow it to keep a reference to the event that it wants to access asynchronously.



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
In terms of its usability, componentWillMount has been deprecated since 2018 and will be removed in React 17. The React team decided that it was best to remove it because the community at large was misusing it and causing unintended errors. The biggest issue with componentWillMount is that it is not safe for asynchronous rendering. More specifically, making an API call within componentWillMount will cause the component to render empty data because it will not return the results of that call before the component's first render. The reason it will not return before the first render is because React will not wait for componentWillMount to finish its API call and instead move on to rendering the component. When I started working on my very first React project, I would constantly run into the "cannot read property 'map' of undefined" error because the component was attempting to iterate through empty data that had not been fetched yet. This is why it is important to make calls in componentDidMount; by that point in the lifecycle, the component has already rendered at least once. For projects that use server-side rendering such as in a NextJS application, componentWillMount is actually going to be called twice, once to the server and once on the client, which is not only inefficient but also not behavior that we want. 


### 2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why?
The component lifecycle begins with the "render phase" where the constructor method will initialize the component's state and take in its props that were passed down from the parent component. The next lifecycle method that will run is componentWillMount (not recommended for use as it is deprecated and will be removed in React 17.0). Next, the render method will run and return JSX which effectively inserts the component to the DOM. Now that the component is mounted, the next method that will be immediately invoked is componentDidMount. ComponentDidMount is the best place to make API calls because this will ensure that the data that is returned after the first render and effectively prevent the component from iterating over empty data. Once the componentDidMount method has run, the component has officially finished the "mounting" phase and now enters the "updating" phase. If the component's props or state have updated or changed, shouldComponentUpdate is invoked, followed by the render method which gets called a second time and rerenders the component with the new data. Once the component has rerendered, the final component in the "updating" phase that gets called is componentDidUpdate. Finally, the component enters the "unmounting" phase where componentWillUnmount will get called before React officially removes the component from the DOM. 

### 3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why?
In my last project, Coworkinger, if I had unlimited time and budget, I would definitely use that towards looking into ways that I could find and retrieve more coworking space data that I could then add into my app. Currently, the app only has 5 coworking spaces that I manually researched and retrieved data for, but this is nowhere near enough information to provide for potential users of my app. The second biggest issue is that if the data changes, in the future, the data in my app becomes out of date. In order to generate information at scale, there are two solutions that I would consider. The first option is to learn Python and use BeautifulSoup to scrape the information from a coworking space website. If something about that space changes (space availability or the cost of workspace), my web crawler would be able to see that the information on the website changed and dynamically update that space's information in MongoDB. The second option is the fastest and most expensive solution and that is to use another company's API (Yelp was one of the companies I was considering) and pay them for access to all the information they have on coworking spaces. As a result, I will be able to quickly expand the app's reach from not only the Bay Area, but to the rest of the world!

---

That's it! Now it's your time -- feel free to ask any questions you may have and we'd love to answer to the best of our abilities. Thank you so much for taking the time to do this quick interview - we can't wait to see your answers and see if there's a way for us to work together!

At tonebase we truly believe in the following principles:

1. To Educate & Inspire In Everything We Do
2. Think Big, Then Think Bigger
3. Align Around The Mission, Execute Against The Vision
4. Start And End With The Customer
5. Culture Doesn't Just Happen, It's Crafted

We'll let you know very soon if you've moved into the next phase of the interview. In the next step we will introduce you to the founders, our mission + vision, core company values and to our small, close-knit and wonderful team. We're all excited to see where things go and will be in touch ASAP.

If there's anything else or you need to get ahold of the team at any time, you can reach out to [<team@tonebase.co>](mailto:team@tonebase.co) or reach Abhi, co-founder and Head of Product at [<abhi@tonebase.co>](mailto:abhi@tonebase.co)
