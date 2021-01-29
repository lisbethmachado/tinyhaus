// import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card/index'
import { Container } from './components/Grid/index';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <h1>Coming Soon</h1> */}
      <Container>
        <Card>
        <div className="brand">
          <h1>Coming soon</h1>
        </div>
        </Card>
      </Container>
    </div>
  );
}

export default App;
