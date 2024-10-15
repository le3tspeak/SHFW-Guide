function calculateFWK() {
    // Werte aus den Feldern holen
    var dpcValue = parseFloat(document.getElementById('dpc-value').value);
    var speedValue = parseFloat(document.getElementById('speed-value').value);
    var initialFieldCurrentValue = parseFloat(document.getElementById('initialfieldcurrent-value').value);
    var expectedSpeedValue = parseFloat(document.getElementById('expected-speed-value').value);
    
    // Validierung der Eingaben
    if (isNaN(dpcValue) || isNaN(speedValue) || isNaN(initialFieldCurrentValue) || isNaN(expectedSpeedValue)) {
        alert("Bitte alle Felder korrekt ausfüllen.");
        return;
    }

    if (expectedSpeedValue <= speedValue) {
        alert("Die erwartete Geschwindigkeit muss größer sein als die maximale Geschwindigkeit ohne FWK.");
        return;
    }

    // Berechnungen:
    var startSpeed = speedValue - 7; // Beispielhafte Startgeschwindigkeit
    var speedDifference = expectedSpeedValue - startSpeed;
    var variableFieldCurrent = (dpcValue / speedDifference) * 1000; // Beispielhafte Berechnung

    // Begrenzung der Variable Field Current auf maximal 2500 mA/km/h
    var roundedVariableFieldCurrent = Math.min(2500, Math.floor(variableFieldCurrent / 100) * 100);

    // Ergebnisse in die HTML-Elemente schreiben
    document.getElementById('result-startspeed').textContent = "Start Speed: " + startSpeed + " km/h";
    document.getElementById('result-initialfieldcurrent').textContent = "Initial Field Current: " + initialFieldCurrentValue + " A";
    document.getElementById('result-varablefieldcurrent').textContent = "Variable Field Current: " + roundedVariableFieldCurrent + " mA/km/h";

    // Ergebnisse anzeigen
    document.getElementById('results-section').style.display = 'block';
}

function resetResults() {
    // Ergebnisse verstecken
    document.getElementById('results-section').style.display = 'none';
}