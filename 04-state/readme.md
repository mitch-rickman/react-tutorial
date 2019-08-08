# Props, Properly
Props are your way to get data from one component to another. For example, if you have an active user and you need to pass the credentials to different components, you would use props to do so.

# Getting started
Make sure you have a terminal scoped to the `04-state` dierectory and then run `npm install`. This will walk through the package.json file and install all of the dependencies for this tutorial.

## Running the starting point
To view the starting point code in a browser you can run the command `npm run start` or `npm start`. This should automatically open a browser window with the code located in the `/start` directory.

If you decide to change the files in the start directory this will automatically refresh your browser.

## Running the end point
To view the final output of this tutorial run `npm run end` which will automatically open a browser widnow with the code located in the `/end` directory. Again saving these files will automatically update the browser.

# Step by step
## What is state?
State is the current state of your application and it represents one of the core concepts of reactive programing. Using state variables and updating state will automatically re-render portions of your application. For example, lets walk through incrementing a number. If the number we are incrementing starts at 0 we can assume that the current state of `n` is `0`. Now when we click a button we can update `n` to be `n + 1`.

## Step 1 - define n and set its initial state
As of React 16.8 we have access to hooks which is a new, fancy way of using state. To instatiate a state variable we author a line like the following:
```
const [n, setN] = React.useState(0);
```

There are a couple of pieces to walk through here. First of the `[n, setN]` is known as [destructuring](https://codeburst.io/using-destructing-for-objects-and-arrays-and-its-practical-examples-e3ebb13170e5), which in this case is just a fancy way of pulling the first two indexes out of an array.

`React.useState()` is a method provided by ... well ... React. Providing it with an argument like so `React.useState(0)` sets the initial state for the `n` instance variable to be `0` or whatever we may pass the argument in as.

## Step 2 - update state
`setN` is a function and our way of updating `n`. Calling `setN` with an argument will tell React to update the value of `n` to match the argument, and also trigger a re-render for components that may care about it.

Update your component to look like this:
```
function HelloWorld(props) {

    const [n, setN] = React.useState(0);
    
    return (
        <div>
            <h1>
                <em>Hello</em>, {props.name}
            </h1>
            <p>The current count is {n}</p>
            <button type="button" onClick={() => setN(n + 1)}>This button rules</button>
        </div>
    );
}
```
Running the above example will allow you to click the button and update n by 1. 

Note that we removed the awsome function from earlier and replaced it with a lambda that calls `setN`. Why a lambda instead of just `onClick={setN(n+1)}`? This is because we need to provide a function to be called where placing `setN(n+1)` immediately invokes the function, which re-renders the component, which then invokes the function again... which isn't great.

## Additional Resources
- [Hooks](https://reactjs.org/docs/hooks-intro.html)
- [State hooks](https://reactjs.org/docs/hooks-state.html)
- [The rules of hooks](https://reactjs.org/docs/hooks-rules.html)
