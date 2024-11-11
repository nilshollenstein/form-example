import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                
          <h1>Wer das liest ist ein HS</h1>

      </header>
      <body>
        <form>
          <label for="vorname"></label>
          <input type='text' id="vorname" name='vorname' required></input>
          <input type='submit'></input>
        </form>
      </body>
    </div>
  );
}

export default App;
