// import logo from './assets/brand_logo.png';
import './App.css';
import { Card } from './components/Card/index'
import { Container } from './components/Grid/index';
// import { Nav } from './components/Nav/index';

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
      {/* <Nav /> */}
      <Container>
        <Card>
        {/* <div className="logo">
        <img src={logo} alt="tiny haus"/>
        </div> */}
        <div className="brand">
        <h1>Coming soon</h1>
        </div>
        </Card>
      </Container>
    </div>
  );
}

export default App;
