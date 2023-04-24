import './App.css';
import Nav from './components/Nav';
import Landing_Logo from './components/Landing_Logo';
import Current_News from './components/Current_News';
function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Landing_Logo />
      </header>
        <Current_News />
       
    </div>
  );
}

export default App;
