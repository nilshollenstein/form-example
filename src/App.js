import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <body>
        <form>
          <label for="vorname">Vorname</label><br></br>
          <input type='text' id="vorname" name='vorname' required></input><br></br>
          
          <label for='nachname'>Nachname</label><br></br>
          <input type='text' id='nachname' name='nachname' required></input> <br></br>
          <label for='Gewicht'>Gewicht</label><br></br>
          <input type='number' id='Gewicht' name='Gewicht' required></input>
          <label for='geburtsdatum'>Geburtsdatum</label><br></br>
          <input type='date' id='geburtsdatum' name='geburtsdatum' required></input>
<br></br>
          <label for='todesdatum'>Todesdatum</label>
          <br></br>
          <input type='date' id='todesdatum' name='todesdatum' required></input><br></br>
          <input type='submit'></input>

        </form>
      </body>
    </div>
  );
}

export default App;
