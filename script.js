    function checkInput() {
      var userInput = document.getElementById('userInput').value.toLowerCase();

      if (userInput === 'wilhelminenstraße') {
        document.getElementById('output').innerHTML = '51.076303 13.750260';
        document.getElementById('output').classList.add('correctOutput'); // Hinzufügen der Klasse für richtige Ausgabe
      } else {
        document.getElementById('output').innerHTML = 'Falsche Eingabe. Versuche es erneut.';
        document.getElementById('output').classList.remove('correctOutput'); // Entfernen der Klasse, falls sie zuvor hinzugefügt wurde
      }

      return false;
    }