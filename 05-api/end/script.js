import axios from 'axios';

// where to place the react components after the code runs
var htmlNode = document.getElementById('root');

const simpleList = [
    "Hello",
    "World",
];


function HelloWorld(props) {

    const [list, setList] = React.useState(simpleList);
    React.useEffect(() => {
        axios.get('./movies.json').then(response => {
            setList(response.data);
        });
    });
    
    return (
        <div>
            <h1>Bestest Movies</h1>
            <ol>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ol>
        </div>
    );
}

// render a react element to a specified dom node
ReactDOM.render(<HelloWorld />, htmlNode);