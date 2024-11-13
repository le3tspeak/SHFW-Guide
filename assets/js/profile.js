let currentProfile = 'default'; // Initiales Profil

// Show profile by change event on profile page
function showProfile_G2(profile) {
    currentProfile = profile; // Speichert das aktuelle Profil
    document.getElementById('settings-default-disclaimer_G2').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-disclaimer_G2').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-wma-disclaimer_G2').style.display = (profile === 'wma') ? 'block' : 'none';
    document.getElementById('settings-default-throttle_G2').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-throttle_G2').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-wma-throttle_G2').style.display = (profile === 'wma') ? 'block' : 'none';
    document.getElementById('settings-default-mss_G2').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-mss_G2').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-wma-mss_G2').style.display = (profile === 'wma') ? 'block' : 'none';
    document.getElementById('settings-default-fwk_G2').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-fwk_G2').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-wma-fwk_G2').style.display = (profile === 'wma') ? 'block' : 'none';
    document.getElementById('settings-default-cc_G2').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-cc_G2').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-wma-cc_G2').style.display = (profile === 'wma') ? 'block' : 'none';
}

function showProfile_G30(profile) {
    currentProfile = profile; // Speichert das aktuelle Profil
    document.getElementById('settings-default-disclaimer_G30').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-disclaimer_G30').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-default-throttle_G30').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-throttle_G30').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-default-mss_G30').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-mss_G30').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-default-fwk_G30').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-fwk_G30').style.display = (profile === 'tuned') ? 'block' : 'none';
    document.getElementById('settings-default-cc_G30').style.display = (profile === 'default') ? 'block' : 'none';
    document.getElementById('settings-tuned-cc_G30').style.display = (profile === 'tuned') ? 'block' : 'none';
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
