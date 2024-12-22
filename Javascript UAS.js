// JavaScript untuk mengatur galeri
const galleryButton = document.getElementById('galleryButton');
const galleryModal = document.getElementById('galleryModal');
const closeGallery = document.getElementById('closeGallery');

// Fungsi untuk menampilkan galeri
galleryButton.addEventListener('click', () => {
    galleryModal.style.display = 'flex';
});

// Fungsi untuk menutup galeri
closeGallery.addEventListener('click', () => {
    galleryModal.style.display = 'none';
});

// Menutup galeri jika klik di luar konten
galleryModal.addEventListener('click', (event) => {
    if (event.target === galleryModal) {
        galleryModal.style.display = 'none';
    }
});
