let currentLanguage = 'EN'; // Initiale

// Show profile by change event on profile page
function switchLanguage(language) {
    currentLanguage = language; // Speichert das aktuelle Profil
    // Header
    document.getElementById('EN-Header').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-Header').style.display = (language === 'DE') ? 'block' : 'none';

    // Navigation
    document.getElementById('EN-Guides').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-Guides').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-Models').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-Models').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-Language-Select').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-Language-Select').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-FAQ').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-FAQ').style.display = (language === 'DE') ? 'block' : 'none';

    // Footer
    document.getElementById('EN-Footer').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-Footer').style.display = (language === 'DE') ? 'block' : 'none';

    // ST-Link
    document.getElementById('EN-ST-Link-Introduction').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ST-Link-Introduction').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-ST-Link-Requirements').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ST-Link-Requirements').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-ST-Link-Instructions').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ST-Link-Instructions').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-ST-Link-HowTo').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ST-Link-HowTo').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-ST-Link-AT32-GD32').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ST-Link-AT32-GD32').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-ST-Link-Note').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ST-Link-Note').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-ST-Link-Disclaimer').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ST-Link-Disclaimer').style.display = (language === 'DE') ? 'block' : 'none';

    // FWK Calculator
    document.getElementById('EN-FWK-Head').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-FWK-Head').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-FWK').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-FWK').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-FWK-Calc-Note').style.display = (language === 'EN') ? 'block' : 'none';    
    document.getElementById('DE-FWK-Calc-Note').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-FWK-Calc-Head').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-FWK-Calc-Head').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-FWK-Calc-Result').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-FWK-Calc-Result').style.display = (language === 'DE') ? 'block' : 'none';

    // APPS
    document.getElementById('EN-APPS-SHU').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-APPS-SHU').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-APPS-ReFlasher').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-APPS-ReFlasher').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-APPS-Scootbatt').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-APPS-Scootbatt').style.display = (language === 'DE') ? 'block' : 'none';

    // G2
    document.getElementById('EN-G2-Introduction').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-Introduction').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-ProfileSelection-Disclaimer').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-ProfileSelection-Disclaimer').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-ProfileSelection-Disclaimer-2').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-ProfileSelection-Disclaimer-2').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-Throttle').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-Throttle').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-Brake').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-Brake').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-Brake-2').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-Brake-2').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-Motor').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-Motor').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-FWK').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-FWK').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-CC').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-CC').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-Mode').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-Mode').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-Lights').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-Lights').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-UI').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-UI').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-GS').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-GS').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-G2-Disclaimer').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-G2-Disclaimer').style.display = (language === 'DE') ? 'block' : 'none';

    // G30

    // Error Codes
    document.getElementById('EN-ERROR-DESC').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ERROR-DESC').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-ERROR-Contents').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ERROR-Contents').style.display = (language === 'DE') ? 'block' : 'none';
    document.getElementById('EN-ERROR-List').style.display = (language === 'EN') ? 'block' : 'none';
    document.getElementById('DE-ERROR-List').style.display = (language === 'DE') ? 'block' : 'none';
}
    