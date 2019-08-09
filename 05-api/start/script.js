import axios from 'axios';

// where to place the react components after the code runs
var htmlNode = document.getElementById('root');

function HelloWorld(props) {
    
    return (
        <div>
            <h1>
                <em>Hello</em>, {props.name}
            </h1>
        </div>
    );
}

// render a react element to a specified dom node
ReactDOM.render(<HelloWorld />, htmlNode);