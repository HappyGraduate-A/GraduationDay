// Fungsi untuk menghasilkan warna acak
function getRandomColor() {
    const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Fungsi untuk membuat confetti
function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }

    // Bersihkan confetti setelah 5 detik
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Fungsi untuk memunculkan pop-up modal
function showPopup() {
    var modal = document.getElementById("popupModal");
    modal.style.display = "flex";
}

// Event listener untuk modal
var modal = document.getElementById("popupModal");
var span = document.getElementsByClassName("close")[0];

// Tutup modal ketika tombol "x" diklik
span.onclick = function() {
    modal.style.display = "none";
}

// Tutup modal ketika klik di luar modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Jalankan confetti otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", showConfetti);
