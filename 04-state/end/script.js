// where to place the react components after the code runs
var htmlNode = document.getElementById('root');

function myAwesomeFunction() {
    console.log('I totally came up with this function on my own.');
}

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

// render a react element to a specified dom node
ReactDOM.render(<HelloWorld name="Luigi" action={myAwesomeFunction} />, htmlNode);