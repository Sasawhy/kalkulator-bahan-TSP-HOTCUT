repository/
├── index.html
├── styles/
│   └── style.css
└── scripts/
    └── script.js
function hitungTali() {
    // Ambil nilai input
    const kode = parseFloat(document.getElementById('kode-tali').value);
    const panjangCm = parseFloat(document.getElementById('panjang-tali').value);
    const jumlahOrder = parseFloat(document.getElementById('jumlah-order-tali').value);
    
    // Validasi input
    if (isNaN(kode) || isNaN(panjangCm) || isNaN(jumlahOrder)) {
        alert("Harap isi semua field dengan angka!");
        return;
    }
    
    // Hitung bahan tali utama secara berurutan
    let hasil = kode;       // Mulai dengan kode
    hasil = hasil / 90;     // Dibagi 90
    hasil = hasil * (panjangCm / 100); // Dikali panjang (cm ke meter)
    hasil = hasil * jumlahOrder; // Dikali jumlah orderan
    hasil = hasil * 2;      // Dikali 2
    hasil = hasil / 1000;   // Dibagi 1000
    
    // Tampilkan hasil
    document.getElementById('bahan-tali').textContent = hasil.toFixed(2);
    document.getElementById('hasil-tali').style.display = 'block';
}

function hitungHotcut() {
    // Ambil nilai input
    const kode = parseFloat(document.getElementById('kode-hotcut').value);
    const panjangCm = parseFloat(document.getElementById('panjang-hotcut').value);
    const jumlahOrder = parseFloat(document.getElementById('jumlah-order-hotcut').value);
    
    // Validasi input
    if (isNaN(kode) || isNaN(panjangCm) || isNaN(jumlahOrder)) {
        alert("Harap isi semua field dengan angka!");
        return;
    }
    
    // Hitung bahan hotcut secara berurutan
    let hasil = kode;       // Mulai dengan kode
    hasil = hasil / 90;     // Dibagi 90
    hasil = hasil * 100;    // Dikali 100
    hasil = hasil * (panjangCm / 100); // Dikali panjang (cm ke meter)
    hasil = hasil * jumlahOrder; // Dikali jumlah orderan
    
    // Tampilkan hasil
    document.getElementById('bahan-hotcut').textContent = hasil.toFixed(2);
    document.getElementById('hasil-hotcut').style.display = 'block';
}
