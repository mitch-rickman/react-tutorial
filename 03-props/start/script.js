// where to place the react components after the code runs
var htmlNode = document.getElementById('root');


function HelloWorld() {
    return (
        <h1>
            <em>Hello</em>, world
        </h1>
    );
}
// react elements
var reactChildElement = React.createElement('em', null, 'Hello');
var reactElement = React.createElement('h1', null, [reactChildElement, ', world']);

// render a react element to a specified dom node
ReactDOM.render(<HelloWorld />, htmlNode);