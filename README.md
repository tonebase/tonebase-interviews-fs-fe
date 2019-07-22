# tonebase Technical Interview - FullStack (Front-End Focus)

Welcome to the tonebase Technical Interview! Congratulations, if you're here it means we think you'd make a great addition to the team, based on your past experience, personality and kick-ass skills!

This interview is a small/short test of those skills. Ideally the questions presented and the challenges involved should take no more than 1 hour for an experienced full-stack developer with React chops.

The initial portion of this interview is simply answering a few technical, front-end and React based questions. These should be written and do not need to be too long. However, we are a company where members of the team are constantly shifting around/traveling, whether to China to manage our upcoming subsidiary there, or to New York and Europe to head productions, attend events, etc.

Thus writing, and the ability to write clearly, logically and to formulate arguments and answers is crucial at tonebase, whether a developer, PM, or A&R manager! This test aims to give us a better understanding of you as a writer, as well as your development skills.

#### Types of Questions

This interview has been created for someone who considers themselves a full-stack developer with a focus on the front-end. Very concretely what we mean by this is you feel comfortable spinning up an express server and handling MVC based routes, controlles and middleware... but you really feel at home diving into some React or Vue code and ironing out cross-browser bugs and optimizing SCSS patterns. Or you feel comfortable everywhere, which is even better :)

#### Our Stack

The questions below are informed by our stack. I will list the details of each below:

- Client
  _ NextJS => Server Side React ([Github Link](https://github.com/zeit/next.js))
  _ Firebase Authentication ([Documentation](https://firebase.google.com/docs/auth))
  _ React-Easy State Stores ([Github Link](https://github.com/solkimicreb/react-easy-state))
  _ Segment Analytics
- Server/API
  _ NodeJS/Express (custom, no off the shelf management system like SAILS)
  _ Segment Analytics
- Database
  _ Firebase Realtime Database (current)
  _ MongoDB (future)
- Payment Processing
  _ Chargebee (Subscription Management)
  _ Stripe (Payment Processing)
- Marketing Technology
  _ Intercom (soon to be removed)
  _ FullStory
  _ Attribution App
  _ HelpScout
  _ Customer.io
  _ Amplitude
  _ Google Analytics
  _ SendGrid
  _ Google Optimize (A/B, Multivariate)
  _ Some others...
- Other
  _ Vimeo (Video Hosting)  
   _ Figma (Design)
  _ Canva (Design)
  _ Premier (Video Editing) \* GIMP (Image Manipulation)

---

Okay, with all that out of the way let's dive into the question section!

### 1. What made you interested in/choose React as a framework? Was it a choice you made? Regardless, what is the one thing you enjoy most about it compared to other frameworks you've used and what is one thing you dislike about it?

### 2. What are the main types of components you can render in React? When do you choose one over the other?

### 3. Tell me about componentWillMount and the issues with it?

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

---

Onto just a teensy bit of code + introducing you to our system! This part can be done on your own, and you can ping me when it's good to go! When you're good to go with your implementation and/or happy with it feel free to make a P.R. into this repo. under a new branch titled `${ YOUR_NAME--FullStack--FrontEnd }`

Here is a link to a Github repo. containing our NextJS setup. It includes everything already setup for you -- SCSS support, a blank canvas for you to play with, and all the boileplate out of the way.

[The Github Repo.](https://github.com/tonebase/tonebase-interviews-fs-fe)

**Your challenge is the following:**

I, or a designer, just gave you the following design in Figma.

[The Figma Design](https://www.figma.com/file/9lVu8DBWvR04IRuFI07eRX/tonebase-Interviews?node-id=0%3A1)

Please open up that link - you may need to create a Figma account to be able to view it but this should be relatively easy/simple. This is testing your ability to handle design-handoffs in a clean manner, but if this is in any way tricky simply reach out because this is an easily trainable skill and not a requirement!

Your job is to implement this design on that blank page in the NextJS application. Feel free to structure the code in whatever manner you would be proud of shipping. Any framework is just fine to use -- Bootstrap, Material, whatever! Bootstrap is included by default so you don't have to look for how to interface BS + NextJS. Other frameworks might need a little more work/searching.

The implementation is good when you determine it's good -- we're excited to see what you come up with!

**Note:** The design is intentionally non-prescriptive on interactivity. Adding any or none is up to you. Build this how you would were this going to be shipped to 100,000+ passionate musicians, pianists and guitarists.
