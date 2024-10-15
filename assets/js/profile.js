let currentProfile = 'default'; // Initiales Profil
let currentMode = 'eco'; // Initialer Modus

// Show profile by change event on profile page
function showProfile(profile) {
    currentProfile = profile; // Speichert das aktuelle Profil
    document.getElementById('settings-default-disclaimer').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-disclaimer').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-default-throttle').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-throttle').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-default-mss').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-mss').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-default-fwk').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-fwk').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-default-cc').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-cc').style.display = (profile === 'tuned') ? 'block' : 'none';
}

// Retrieve the elements
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

    // Alle Bilder für das Modal
    var images = document.querySelectorAll(".thumbnail");
    images.forEach(function(img) {
        img.onclick = function(event) {
            modal.style.display = "flex"; // Modal als Flexbox anzeigen
            modalImg.src = this.src;

            // Berechne die Position des Bildes
            var rect = this.getBoundingClientRect();
            var scrollTop = window.scrollY || document.documentElement.scrollTop; // Scroll-Position
            modal.style.top = `${rect.top + scrollTop}px`; // Setze die obere Position des Modals
            modal.style.left = `50%`; // Setze die linke Position des Modals auf die Mitte des Bildschirms
            modal.style.transform = `translate(-50%, -50%)`; // Zentriere das Modal
        }
    });

    // Schließen des Modals
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Schließen des Modals beim Klicken außerhalb des Bildes
    modal.onclick = function() {
        modal.style.display = "none";
    }
