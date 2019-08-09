# Props, Properly
Props are your way to get data from one component to another. For example, if you have an active user and you need to pass the credentials to different components, you would use props to do so.

# Getting started
Make sure you have a terminal scoped to the `05-api` dierectory and then run `npm install`. This will walk through the package.json file and install all of the dependencies for this tutorial

## Running the starting point
To view the starting point code in a browser you can run the command `npm run start` or `npm start`. This should automatically open a browser window with the code located in the `/start` directory.

If you decide to change the files in the start directory this will automatically refresh your browser.

## Running the end point
To view the final output of this tutorial run `npm run end` which will automatically open a browser widnow with the code located in the `/end` directory. Again saving these files will automatically update the browser.

# Step by step
## Priming the layout
In this section we will be outputing a list that we retrieve from an api, but before we do that lets get our UI ready to handle the returned data. We'll create a list of items by first defining an array near the top of your `script.js` file, like so:
```
const simpleList = [
    "Hello",
    "World",
];
```

Then we'll add a state variable and initialize the value to the list we just created. In you react component add this line
```
const [list, setList] = React.useState(simpleList);
```

After we have our state set we need to display the list in the UI. This can be done by using the javascript array method `.map()` map loops over each element in an array and returns a specified result as returned by a lambda function. In this case we will be returning an array of JSX elements. For example, add the following to the returned value in your component underneath the `<h1>` tag. 
```
<ul>
    {list.map(item => (
        <li key={item}>{item}</li>
    ))}
</ul>
```

#### What is `key`
Key is a react thing used to help idetify objects in a map. Each key should have a unique value, and, if used right, keys can help your program be more performant.

## Implementing an api
Lets say that you want to load some data once a component is ready to render. You can use the `React.useEffect` method to tie into lifecyle hooks for your components. The `useEffect` function triggers when a component is initially "mounted" or initialize, or when it recieves updates.

Add the following lines to your component right below the state declarations.
```
useEffect(() => {
    axios.get('./movies.json').then(response => {
        console.log(response);
    });
});
```

This affect will immediately run when you rebuild and refresh the page, and if you look in the dev tool console you will see the logged response.

#### what the heck is `axios`
axios is an http client that handles requests. It's light weight, ploymorphic (works on a node server and a web client), and handles a couple of annoyances of sending http requests via javascript out of the box.

#### What the heck is .then()
`.then()` is a a way to chain functions or promises together. This is commonly used in async javascript programming. Basically calling `axios.get` returns a promise that gets fulfilled when the http request finishes. the `.then()` method takes a lambda and returns the output of the promise as the first argument.


Anywho, we have got our response from the api, but we need to add it to the state. We handle this just like we did before similar to this.
```
setList(response.data);
```

Adding this line just below the `console.log` added in the last step will load a full list of movies into your component.

Boom. That's it
