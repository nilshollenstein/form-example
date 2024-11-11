import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <body>
        <form>
          <label for="vorname">Vorname</label><br></br>
          <input type='text' id="vorname" name='vorname' required></input>
          <input type='submit'></input>
        </form>
      </body>
    </div>
  );
}

export default App;
