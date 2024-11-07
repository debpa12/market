// Fungsi untuk menampilkan atau menyembunyikan menu pop-up
function toggleMenu() {
    const menu = document.getElementById('popup-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Fungsi untuk mengganti gambar produk saat diklik
function changeProductImage(imgElement, images) {
    let currentSrc = imgElement.src;
    imgElement.src = currentSrc.includes(images[0]) ? images[1] : images[0];
}

// Fungsi untuk menambahkan produk ke keranjang belanja
let totalHarga = 0;

function addToCart(price) {
    totalHarga += price;
    document.getElementById('total-price').innerText = totalHarga.toLocaleString('id-ID');
}

// Fungsi untuk validasi form kontak
function validateForm() {
    const email = document.getElementById('email').value;
    if (!email) {
        alert("Silakan masukkan email yang valid.");
        return false;
    }
    alert("Pesan berhasil dikirim!");
    return true;
}

// Fungsi untuk membuka pop-up formulir kontak
function openContactForm() {
    const contactForm = document.getElementById('contact-form-popup');
    contactForm.style.display = 'flex';
}

// Fungsi untuk menutup pop-up formulir kontak
function closeContactForm() {
    const contactForm = document.getElementById('contact-form-popup');
    contactForm.style.display = 'none';
}
