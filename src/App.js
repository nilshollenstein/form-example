import './App.css';
import React, { useState } from "react";


function App() {
  const [krankenkassennummer, setKrankenkassennummer] = useState("");
  const [geschlecht, setGeschlecht] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "krankenkassennummer") {
      setKrankenkassennummer(value);
    } else if (name === "geschlecht") {
      setGeschlecht(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    // Validierung der Krankenkassennummer
    if (!/^\d{13}$/.test(krankenkassennummer)) {
      alert("Die Krankenkassennummer muss genau 13 Ziffern lang sein.");
      return; // Bricht das Absenden ab
    }

    // Validierung des Geschlechts
    if (!geschlecht) {
      alert("Bitte wählen Sie ein Geschlecht aus.");
      return;
    }

    // Wenn alles gültig:
    alert(`Formular erfolgreich abgeschickt!\nGeschlecht: ${geschlecht}`);
    // Hier kannst du deine Logik für das Absenden einfügen (z. B. API-Aufruf)
  };

  return (
    <div className="App">
      
      <body>
        <form onSubmit={handleSubmit}>
          <h1>Arzttermin </h1>
          <label for="vorname">Vorname</label><br></br>
          <input type='text' id="vorname" name='vorname' placeholder='z.B. Nils' required></input><br></br>
          
          <label for='nachname'>Nachname</label><br></br>
          <input type='text' id='nachname' name='nachname' placeholder='z.B. Holgerson' required></input> <br></br>
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
          <label for="krankenkassennummer">Krankenkassennummer</label>
        <input
          type="text"
          id="krankenkassennummer"
          name="krankenkassennummer"
          placeholder="z.B. 1234567891234"
          value={krankenkassennummer}
          onChange={handleChange}
          required
        />
        <br />
          <label for='geburtsdatum'>Geburtsdatum</label><br></br>
          <input type='date' id='geburtsdatum' name='geburtsdatum' required></input><br></br>
          <label for='termindatum'>Termindatum</label><br></br>
          <input type='date' id='termindatum' name='termindatum' required></input><br></br><br></br>

          <fieldset>
          <legend>Geschlecht</legend>
          <label>
            <input
              type="radio"
              name="geschlecht"
              value="männlich"
              checked={geschlecht === "männlich"}
              onChange={handleChange}
              required
            />
            Männlich
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="geschlecht"
              value="weiblich"
              checked={geschlecht === "weiblich"}
              onChange={handleChange}
              required
            />
            Weiblich
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="geschlecht"
              value="divers"
              checked={geschlecht === "divers"}
              onChange={handleChange}
              required
            />
            Divers
          </label>
        </fieldset>
        <br></br>


          <label>
            <input type="checkbox" id="tos" name="tos" required />
          Ich akzeptiere die <a href="https://youtu.be/xm3YgoEiEDc">Terms of service</a>
          </label>
          
          
          <input type='submit' ></input>

        </form>
      </body>
    </div>
  );
}

export default App;
