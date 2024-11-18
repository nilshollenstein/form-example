import './App.css';

function App() {
  return (
    <div className="App">
      
      <body>
        <form>
          <h1>Arzttermin </h1>
          <label for="vorname">Vorname</label><br></br>
          <input type='text' id="vorname" name='vorname' placeholder='z.B. Meo' required></input><br></br>
          
          <label for='nachname'>Nachname</label><br></br>
          <input type='text' id='nachname' name='nachname' placeholder='z.B. Belloni' required></input> <br></br>
          <label for='Gewicht'>Gewicht (in Kg)</label><br></br>
          <input type='number' id='Gewicht' name='Gewicht' placeholder='z.B. 70 Kg' required></input><br></br>
          <label for='hight'>Grösse (in Meter)</label><br></br>
          <input type='number' id='hight' name='hight' placeholder='z.B. 1.85' required></input><br></br>
          <label for='Strasse'>Strasse</label><br></br>
          <input type='text' id='Strasse' name='Strasse' placeholder='z.B. Musterstrasse 12' required></input><br></br>
          <label for='Plz'>Postleitzahl</label><br></br>
          <input type='text' id='Plz' name='Plz' placeholder='z.B. 8472' required></input><br></br>
          <label for='Ort'>Ort</label><br></br>
          <input type='text' id='Ort' name='Ort' placeholder='z.B. Zürich' required></input><br></br>

          
          
          <label for='handynummer'>Handynummer</label><br></br>
          <input type='tel' id='handynummer' name='handynummer' placeholder='z.B. 123 123 12 12' required></input><br></br>
          <label for='email'>Email</label><br></br>
          <input type='email' id='email' name='email' placeholder='z.B. beispiel@gmail.com' required></input><br></br> 
          <label for='krankenkassennummer'>Krankenkassennummer</label><br></br>
          <input type='number' id='krankenkassennummer' name='krankenkassennummer' placeholder='z.B. 1234567891234' required></input><br></br>
          <label for='geburtsdatum'>Geburtsdatum</label><br></br>
          <input type='date' id='geburtsdatum' name='geburtsdatum' required></input><br></br>
          <label for='termindatum'>Termindatum</label><br></br>
          <input type='date' id='termindatum' name='termindatum' required></input><br></br>
         
         
          
          <input type='submit' ></input>

        </form>
      </body>
    </div>
  );
}

export default App;
