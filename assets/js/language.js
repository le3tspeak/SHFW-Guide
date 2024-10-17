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
}