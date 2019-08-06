# Getting started
Make sure you have a terminal scoped to the `02-jsx` dierectory and then run `npm install`. This will walk through the package.json file and install all of the dependencies for this tutorial.

## Running the starting point
To view the starting point code in a browser you can run the command `npm run start` or `npm start`. This should automatically open a browser window with the code located in the `/start` directory.

If you decide to change the files in the start directory this will automatically refresh your browser.

## Running the end point
To view the final output of this tutorial run `npm run end` which will automatically open a browser widnow with the code located in the `/end` directory. Again saving these files will automatically update the browser.

# Step by step

## Step #1 - Move scripts to file
- Create a file called `script.js`. This is going to hold our new src code
- Take all of the contents of our custom script tag in the index.html file and move them inside of the script file.
- Add a script tag pointing to the freshly created `script.js` file. 
- - `<script src="./script.js"></script>`

Make sure the browser displays the message "Hello, world" when you run `npm run end` from a terminal. If you do not see the message something ain't right.

## Step #2 - Adding webpack and babel
This step will bring in a bundler that pre-compiles a src javascript file to a production ready script. This allows us to use some javascript features that aren't fully implemented in browsers. As this is not the primary purpose of the tutorial here's the high level of how this works.

### Installing the tools
running `npm install` installs both webpack and babel, and a couple of configuration packages needed to make the two play nice together. You can view a list of these items in the `devDependencies` section of the package.json.

### Configuring the tools
There are a couple extra files added to the 02 folder, namely the `webpack.config.js` and the `.babelrc` these are the default files that webpack and babel look at while using their tools, so the configurations get picked up automatically. Using other file names is possible, but usually requires that you specify the name and path of the files.

### Building the javascript
After the `npm install` you can compile a script by running `npm run build` (defined in the `scripts` section of the package.json file) or `npx webpack` which calls webpack directly. Running these commands will have webpack grab the `script.js` file created in `/start` directory, and build a compiled version of the script in `/start/build` called `output.js`

## Step 3 - Using the compiled script
Now that webpack and babel have done their magic change the script tag with the src `./script.js` to have a src of `./build/output.js`. Reloading your browser should reveal that the files have an identical output (but the code in the files is far from identical).

## Step 4 - Updating functions to use jsx
JSX lets us use a html like syntax for creating elements. This syntax only works in the browser when it has been converted by a transpiler like babel, or, in our case, running the script through webpack which is loading babel.

Adding the following lines to your `script.js` file:
```
function HelloWorld() {
    return (
        <h1>
            <em>Hello</em>, world
        </h1>
    );
}
```

And removing the following lines as they are a different syntax for accomplishing the same thing. These  two portions of code can be considered "equivalent"
```
// react elements
var reactChildElement = React.createElement('em', null, 'Hello');
var reactElement = React.createElement('h1', null, [reactChildElement, ', world']);
```
And, lastly, update the `ReactDom.render` to use our custom JSX component

```
// replace this...
ReactDOM.render(reactElement, htmlNode);

// ... and add this
ReactDOM.render(<HelloWorld />, htmlNode);
```

## But why?
Why do these two vastly different syntax styles compile provide the same output? It's because they are the same... ish. Babel compiles the jsx syntax into the function style syntax that we initially used. Inspecting the output.js file that has been created will show the `React.CreateElement` calls.