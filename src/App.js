import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <body>
        <form>
          <h1>Arzttermin </h1>
          <label for="vorname">Vorname</label><br></br>
          <input type='text' id="vorname" name='vorname' required></input><br></br>
          
          <label for='nachname'>Nachname</label><br></br>
          <input type='text' id='nachname' name='nachname' required></input> <br></br>
          <label for='Gewicht'>Gewicht</label><br></br>
          <input type='number' id='Gewicht' name='Gewicht' required></input><br></br>
          <label for='handynummer'>Handynummer</label><br></br>
          <input type='tel' id='handynummer' name='handynummer' required></input><br></br>
          <label for='hight'>Grösse</label><br></br><input type='number' id='hight' name='hight' required></input><br></br>

          <label for='email'>Email</label><br></br>
          <input type='email' id='email' name='email'></input><br></br>
          <label for='geburtsdatum'>Geburtsdatum</label><br></br>
          <input type='date' id='geburtsdatum' name='geburtsdatum' required></input><br></br>
          <label for='termindatum'>Termindatum</label><br></br>
          <input type='date' id='termindatum' name='termindatum' required></input><br></br>
          <label for='krankenkassennummer'>Krankenkassennummer</label><br></br>
          <input type='number' id='krankenkassennummer' name='krankenkassennummer' required></input><br></br>
        
          
          <input type='submit' ></input>

        </form>
      </body>
    </div>
  );
}

export default App;
