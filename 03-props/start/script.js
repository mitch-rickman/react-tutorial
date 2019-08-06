// where to place the react components after the code runs
var htmlNode = document.getElementById('root');


function HelloWorld() {
    return (
        <h1>
            <em>Hello</em>, world
        </h1>
    );
}

// render a react element to a specified dom node
ReactDOM.render(<HelloWorld />, htmlNode);