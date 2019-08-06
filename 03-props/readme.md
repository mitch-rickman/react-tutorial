# Props, Properly
Props are your way to get data from one component to another. For example, if you have an active user and you need to pass the credentials to different components, you would use props to do so.

# Getting started
Make sure you have a terminal scoped to the `03-props` dierectory and then run `npm install`. This will walk through the package.json file and install all of the dependencies for this tutorial.

## Running the starting point
To view the starting point code in a browser you can run the command `npm run start` or `npm start`. This should automatically open a browser window with the code located in the `/start` directory.

If you decide to change the files in the start directory this will automatically refresh your browser.

## Running the end point
To view the final output of this tutorial run `npm run end` which will automatically open a browser widnow with the code located in the `/end` directory. Again saving these files will automatically update the browser.

# Step by step
## Passing a simple prop
For a basic example lets use the `<HelloWorld />` component we built in part 2. We will pass a prop called `name` and use it to display the message "Hello, `name`".

To pass a simple string prop to a componet you assign it like a html attribute. For example in the `ReactDOM.render` call display the following component `<HelloWorld name="Luigi" />`. This passes a prop called "name" with the value of "Luigi" to the `HelloWorld` component.

## Using a simple prop
Now that the prop has been passed to the component it is easy to consume. Consider the following code:
```
function HelloWorld(props) {
    return (
        <h1>
            <em>Hello</em>, {props.name}
        </h1>
    );
}
```

We added props as an arugment to the HelloWorld component. Props is a javascript object that contains all props passed to the component (yes you can pass any number of props). Then we use `{props.name}` to output the prop with the key of name to the final rendered html. The `{}` allows you to run a javascript function or output a value in the JSX code.

## What can a prop be?
Props can be a string, number, function, object or really anything you can pass in javascript. For example lets pass a simple function and add a button to the component that will fire the function when clicked.

First create a function that does somethg. Anything. For those without imagination here is an example:
```
function myAwesomeFunction() {
    console.log('I totally came up with this function on my own.');
}
```