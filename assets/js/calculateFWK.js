function calculateFWK() {
    // Werte aus den Feldern holen
    var dpcValue = parseFloat(document.getElementById('dpc-value').value);
    var speedValue = parseFloat(document.getElementById('speed-value').value);
    var initialFieldCurrentValue = parseFloat(document.getElementById('initialfieldcurrent-value').value);
    var expectedSpeedValue = parseFloat(document.getElementById('expected-speed-value').value);
    var torqueAmps = parseFloat(document.getElementById('torqueAmps').value); // Iq (Torque component)
    
    // Validierung der Eingaben
    if (isNaN(dpcValue) || isNaN(speedValue) || isNaN(initialFieldCurrentValue) || isNaN(expectedSpeedValue) || isNaN(torqueAmps)) {
        alert("Bitte alle Felder korrekt ausfüllen.");
        return;
    }

    if (expectedSpeedValue <= speedValue) {
        alert("Die erwartete Geschwindigkeit muss größer sein als die maximale Geschwindigkeit ohne FWK.");
        return;
    }

    // Warnung zurücksetzen und verstecken bei erneuter Berechnung
    document.getElementById('warning-section').style.display = 'none';

    // Berechnungen:
    var startSpeed = speedValue - 7; 
    var speedDifference = expectedSpeedValue - startSpeed;
    var variableFieldCurrent = (dpcValue / speedDifference) * 1000; 
    var totalFluxAmps = initialFieldCurrentValue + ((variableFieldCurrent * speedDifference) /1000); // Multiply variable flux per km/h above activation speed
    var ITotal = Math.sqrt(Math.pow(torqueAmps, 2) + Math.pow(totalFluxAmps, 2)).toFixed(2);

    // Begrenzung der Variable Field Current auf maximal 2500 mA/km/h
    var roundedVariableFieldCurrent = Math.min(2500, Math.floor(variableFieldCurrent / 100) * 100);
    // Runde auf Ganzzahlen
    var roundedtotalFluxAmps = Math.round(totalFluxAmps);
    // Runde auf 1 Dezimalstelle
    var roundedITotal = Math.round(ITotal * 10) / 10;

    // Ergebnisse in die HTML-Elemente schreiben
    document.getElementById('result-startspeed').textContent = "Start Speed: " + startSpeed + " km/h";
    document.getElementById('result-initialfieldcurrent').textContent = "Initial Field Current: " + initialFieldCurrentValue + " A";
    document.getElementById('result-varablefieldcurrent').innerHTML = "Variable Field Current: " + roundedVariableFieldCurrent + " mA / km/h";
    document.getElementById('result-Iq').innerHTML = "Maximum Torque Current (I<sub>q</sub>): " + torqueAmps + " A";
    document.getElementById('result-Id').innerHTML = "Maximum Field Current (I<sub>d</sub>): " + roundedtotalFluxAmps + " A";
    document.getElementById('result-It').innerHTML = "Total Peak Current Draw (I<sub>T</sub>): " + roundedITotal + " A";

    // Ergebnisse anzeigen
    document.getElementById('results-section').style.display = 'block';
    // Warnung anzeigen wenn ITotal >= 30A
    if (roundedtotalFluxAmps > 30) {
        document.getElementById('warning-section').style.display = 'block';
        document.getElementById('warning').textContent = "Warning: Maximum Field Current exceeds the default 30A phase limit.";
    }
}

function calculateFWK_de() {
    // Werte aus den Feldern holen
    var dpcValue = parseFloat(document.getElementById('dpc-value_de').value);
    var speedValue = parseFloat(document.getElementById('speed-value_de').value);
    var initialFieldCurrentValue = parseFloat(document.getElementById('initialfieldcurrent-value_de').value);
    var expectedSpeedValue = parseFloat(document.getElementById('expected-speed-value_de').value);
    var torqueAmps = parseFloat(document.getElementById('torqueAmps_de').value); // Iq (Torque component)
    
    // Validierung der Eingaben
    if (isNaN(dpcValue) || isNaN(speedValue) || isNaN(initialFieldCurrentValue) || isNaN(expectedSpeedValue) || isNaN(torqueAmps)) {
        alert("Bitte alle Felder korrekt ausfüllen.");
        return;
    }

    if (expectedSpeedValue <= speedValue) {
        alert("Die erwartete Geschwindigkeit muss größer sein als die maximale Geschwindigkeit ohne FWK.");
        return;
    }

    // Warnung zurücksetzen und verstecken bei erneuter Berechnung
    document.getElementById('warning-section_de').style.display = 'none';

    // Berechnungen:
    var startSpeed = speedValue - 7; 
    var speedDifference = expectedSpeedValue - startSpeed;
    var variableFieldCurrent = (dpcValue / speedDifference) * 1000; 
    var totalFluxAmps = initialFieldCurrentValue + ((variableFieldCurrent * speedDifference) /1000); // Multiply variable flux per km/h above activation speed
    var ITotal = Math.sqrt(Math.pow(torqueAmps, 2) + Math.pow(totalFluxAmps, 2)).toFixed(2);

    // Begrenzung der Variable Field Current auf maximal 2500 mA/km/h
    var roundedVariableFieldCurrent = Math.min(2500, Math.floor(variableFieldCurrent / 100) * 100);
    // Runde auf Ganzzahlen
    var roundedtotalFluxAmps = Math.round(totalFluxAmps);
    // Runde auf 1 Dezimalstelle
    var roundedITotal = Math.round(ITotal * 10) / 10;

    // Ergebnisse in die HTML-Elemente schreiben
    document.getElementById('result-startspeed_de').textContent = "Start Speed: " + startSpeed + " km/h";
    document.getElementById('result-initialfieldcurrent_de').textContent = "Initial Field Current: " + initialFieldCurrentValue + " A";
    document.getElementById('result-varablefieldcurrent_de').innerHTML = "Variable Field Current: " + roundedVariableFieldCurrent + " mA / km/h";
    document.getElementById('result-Iq_de').innerHTML = "Maximum Torque Current (I<sub>q</sub>): " + torqueAmps + " A";
    document.getElementById('result-Id_de').innerHTML = "Maximum Field Current (I<sub>d</sub>): " + roundedtotalFluxAmps + " A";
    document.getElementById('result-It_de').innerHTML = "Total Peak Current Draw (I<sub>T</sub>): " + roundedITotal + " A";

    // Ergebnisse anzeigen
    document.getElementById('results-section_de').style.display = 'block';
    // Warnung anzeigen wenn ITotal >= 30A
    if (roundedtotalFluxAmps > 30) {
        document.getElementById('warning-section_de').style.display = 'block';
        document.getElementById('warning_de').textContent = "Warning: Maximum Field Current exceeds the default 30A phase limit.";
    }
}

function resetResults() {
    // Ergebnisse verstecken
    document.getElementById('results-section').style.display = 'none';
    // Warnung verstecken
    document.getElementById('warning-section').style.display = 'none';
}

function resetResults_de() {
    // Ergebnisse verstecken
    document.getElementById('results-section_de').style.display = 'none';
    // Warnung verstecken
    document.getElementById('warning-section_de').style.display = 'none';
}