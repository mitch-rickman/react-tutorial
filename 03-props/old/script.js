// where to place the react components after the code runs
var htmlNode = document.getElementById('root');


function HelloWorld(props) {
    return (
        <h1>
            <em>Hello</em>, {props.name}
        </h1>
    );
}

// render a react element to a specified dom node
ReactDOM.render(<HelloWorld />, htmlNode);