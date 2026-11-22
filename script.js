/* =============================================
   INVENTARIS LAB TKJ - MAIN SCRIPT
   Menerapkan: Variabel, Tipe Data, Operator,
   Percabangan, Perulangan, Array, Fungsi,
   Objek, DOM, Math, AJAX (fetch), Event
   ============================================= */

// ============================================
// [1] VARIABEL & TIPE DATA
// ============================================

// Array of Object untuk menyimpan data perangkat
let dataPerangkat = [];

// Konstanta key localStorage (String)
const STORAGE_KEY = "inventaris_lab_tkj";

// Data default bawaan laboratorium (15 perangkat dari data.json) untuk fungsi Reset LocalStorage
const DATA_DEFAULT_FALLBACK = [
  {
    "id": 1,
    "nama": "PC Client Lab 01",
    "kategori": "Komputer",
    "merk": "Lenovo ThinkCentre",
    "spesifikasi": "Intel Core i5-10400, 8GB RAM, SSD 256GB",
    "jumlah": 1,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 1 - Meja 01",
    "tanggalMasuk": "2024-07-15"
  },
  {
    "id": 2,
    "nama": "PC Client Lab 02",
    "kategori": "Komputer",
    "merk": "Lenovo ThinkCentre",
    "spesifikasi": "Intel Core i5-10400, 8GB RAM, SSD 256GB",
    "jumlah": 1,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 1 - Meja 02",
    "tanggalMasuk": "2024-07-15"
  },
  {
    "id": 3,
    "nama": "PC Client Lab 03",
    "kategori": "Komputer",
    "merk": "HP ProDesk 400",
    "spesifikasi": "Intel Core i3-10100, 4GB RAM, HDD 500GB",
    "jumlah": 1,
    "kondisi": "Rusak",
    "lokasi": "Lab TKJ 1 - Meja 03",
    "tanggalMasuk": "2023-01-10"
  },
  {
    "id": 4,
    "nama": "PC Server Utama",
    "kategori": "Komputer",
    "merk": "Dell PowerEdge T140",
    "spesifikasi": "Intel Xeon E-2224, 16GB RAM, HDD 1TB",
    "jumlah": 1,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 1 - Rak Server",
    "tanggalMasuk": "2023-06-20"
  },
  {
    "id": 5,
    "nama": "Router Cisco 2901",
    "kategori": "Router",
    "merk": "Cisco",
    "spesifikasi": "2x GigabitEthernet, 4x HWIC Slots, 512MB RAM",
    "jumlah": 2,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 1 - Rak Jaringan",
    "tanggalMasuk": "2024-02-05"
  },
  {
    "id": 6,
    "nama": "Router MikroTik RB750Gr3",
    "kategori": "Router",
    "merk": "MikroTik",
    "spesifikasi": "5x GigabitEthernet, 256MB RAM, RouterOS L4",
    "jumlah": 3,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 1 - Rak Jaringan",
    "tanggalMasuk": "2024-03-12"
  },
  {
    "id": 7,
    "nama": "Router MikroTik RB941",
    "kategori": "Router",
    "merk": "MikroTik",
    "spesifikasi": "4x FastEthernet, 32MB RAM, RouterOS L4",
    "jumlah": 1,
    "kondisi": "Rusak",
    "lokasi": "Lab TKJ 2 - Meja Praktik",
    "tanggalMasuk": "2022-08-01"
  },
  {
    "id": 8,
    "nama": "Switch Cisco Catalyst 2960",
    "kategori": "Switch",
    "merk": "Cisco",
    "spesifikasi": "24x FastEthernet, 2x GigabitEthernet Uplink, Managed",
    "jumlah": 2,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 1 - Rak Jaringan",
    "tanggalMasuk": "2024-02-05"
  },
  {
    "id": 9,
    "nama": "Switch TP-Link TL-SG1024",
    "kategori": "Switch",
    "merk": "TP-Link",
    "spesifikasi": "24x GigabitEthernet, Unmanaged, Rackmount",
    "jumlah": 1,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 1 - Rak Jaringan",
    "tanggalMasuk": "2023-11-28"
  },
  {
    "id": 10,
    "nama": "Switch D-Link DES-1016A",
    "kategori": "Switch",
    "merk": "D-Link",
    "spesifikasi": "16x FastEthernet, Unmanaged",
    "jumlah": 1,
    "kondisi": "Rusak",
    "lokasi": "Lab TKJ 2 - Rak Jaringan",
    "tanggalMasuk": "2021-05-14"
  },
  {
    "id": 11,
    "nama": "Access Point TP-Link EAP245",
    "kategori": "Access Point",
    "merk": "TP-Link",
    "spesifikasi": "AC1750, Dual Band, PoE, Ceiling Mount",
    "jumlah": 2,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 1 - Plafon",
    "tanggalMasuk": "2024-04-10"
  },
  {
    "id": 12,
    "nama": "Access Point Ubiquiti UniFi AP AC Lite",
    "kategori": "Access Point",
    "merk": "Ubiquiti",
    "spesifikasi": "AC1200, Dual Band, PoE, Indoor",
    "jumlah": 1,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 2 - Plafon",
    "tanggalMasuk": "2024-01-22"
  },
  {
    "id": 13,
    "nama": "PC Client Lab 04",
    "kategori": "Komputer",
    "merk": "Acer Veriton",
    "spesifikasi": "Intel Core i3-9100, 4GB RAM, HDD 500GB",
    "jumlah": 1,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 2 - Meja 01",
    "tanggalMasuk": "2023-03-05"
  },
  {
    "id": 14,
    "nama": "Access Point MikroTik cAP ac",
    "kategori": "Access Point",
    "merk": "MikroTik",
    "spesifikasi": "AC1200, Dual Band, PoE, Ceiling Mount, RouterOS",
    "jumlah": 1,
    "kondisi": "Rusak",
    "lokasi": "Lab TKJ 2 - Plafon",
    "tanggalMasuk": "2022-09-18"
  },
  {
    "id": 15,
    "nama": "Switch HP ProCurve 1810-24G",
    "kategori": "Switch",
    "merk": "HP",
    "spesifikasi": "24x GigabitEthernet, Smart Managed, Rackmount",
    "jumlah": 1,
    "kondisi": "Baik",
    "lokasi": "Lab TKJ 2 - Rak Jaringan",
    "tanggalMasuk": "2023-07-30"
  }
];

// Boolean penanda data sudah dimuat
let isDataLoaded = false;

// ============================================
// [2] FUNGSI UTILITAS (Fungsi, Operator, Math)
// ============================================

/**
 * Menghasilkan ID unik menggunakan Math.random() dan Math.floor()
 */
function generateId() {
  return Math.floor(Math.random() * 1000000) + Date.now();
}

/**
 * Format tanggal YYYY-MM-DD menjadi DD/MM/YYYY
 * Menerapkan: String methods, percabangan
 */
function formatTanggal(dateStr) {
  if (!dateStr) return "-";
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    return parts[2] + "/" + parts[1] + "/" + parts[0];
  }
  return dateStr;
}

/**
 * Tampilkan tanggal hari ini di header
 * Menerapkan: Date object, Array
 */
function getTanggalHariIni() {
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const now = new Date();
  return hari[now.getDay()] + ", " + now.getDate() + " " + bulan[now.getMonth()] + " " + now.getFullYear();
}

// ============================================
// [3] PENYIMPANAN DATA - localStorage
// ============================================

/**
 * Simpan data ke localStorage
 * Menerapkan: JSON.stringify(), localStorage API
 */
function simpanKeStorage() {
  const jsonString = JSON.stringify(dataPerangkat);
  localStorage.setItem(STORAGE_KEY, jsonString);
}

/**
 * Muat data dari localStorage
 * Menerapkan: JSON.parse(), percabangan
 */
function muatDariStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data !== null && data !== undefined) {
    dataPerangkat = JSON.parse(data);
    return true;
  }
  return false;
}

// ============================================
// [4] PENGAMBILAN DATA JSON - fetch() / AJAX
// ============================================

/**
 * Ambil data awal dari file JSON menggunakan fetch()
 * Menerapkan: AJAX (fetch API), Promise
 */
function muatDataJSON() {
  fetch("data.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON: " + response.status);
      }
      return response.json();
    })
    .then(function (jsonData) {
      dataPerangkat = jsonData;
      simpanKeStorage();
      isDataLoaded = true;
      renderAll();
      showToast("Data awal berhasil dimuat dari JSON!", "success");
    })
    .catch(function (error) {
      console.error("Error fetch:", error);
      showToast("Gagal memuat data JSON.", "error");
      dataPerangkat = [];
      isDataLoaded = true;
      renderAll();
    });
}

// ============================================
// [5] INISIALISASI APLIKASI
// ============================================

/**
 * Event DOMContentLoaded - saat halaman selesai dimuat
 */
document.addEventListener("DOMContentLoaded", function () {
  // Tampilkan tanggal
  document.getElementById("currentDate").textContent = getTanggalHariIni();
  document.getElementById("footerYear").textContent = new Date().getFullYear();

  // Set tanggal default pada form
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  document.getElementById("inputTanggal").value = yyyy + "-" + mm + "-" + dd;

  // Inisialisasi animasi pembuka (Splash Screen & Cyber intro)
  initSplashScreen();

  // Percabangan: cek localStorage
  const adaDataLokal = muatDariStorage();

  if (adaDataLokal && dataPerangkat.length > 0) {
    isDataLoaded = true;
    renderAll();
    showToast("Data dimuat dari penyimpanan lokal.", "info");
  } else {
    muatDataJSON();
  }
});

// ============================================
// [6] TOGGLE FORM (DOM & Event)
// ============================================

/**
 * Toggle tampilkan/sembunyikan form
 * Menerapkan: DOM classList, percabangan
 */
function toggleForm() {
  const body = document.getElementById("formBody");
  const btn = document.getElementById("btnToggleForm");

  if (body.classList.contains("hidden")) {
    body.classList.remove("hidden");
    btn.textContent = "Sembunyikan";
  } else {
    body.classList.add("hidden");
    btn.textContent = "Tampilkan";
  }
}

// ============================================
// [7] STATISTIK (Perulangan, Array, Operator)
// ============================================

/**
 * Hitung dan tampilkan statistik perangkat
 * Menerapkan: for loop, percabangan if, operator
 */
function hitungStatistik() {
  let totalPerangkat = 0;
  let jumlahBaik = 0;
  let jumlahRusak = 0;

  // Perulangan for
  for (let i = 0; i < dataPerangkat.length; i++) {
    const item = dataPerangkat[i];
    totalPerangkat = totalPerangkat + item.jumlah;

    // Percabangan if-else
    if (item.kondisi === "Baik") {
      jumlahBaik = jumlahBaik + item.jumlah;
    } else if (item.kondisi === "Rusak") {
      jumlahRusak = jumlahRusak + item.jumlah;
    }
  }

  // Update DOM dengan animasi angka naik (Count-Up Animation)
  animateCounter("statTotal", totalPerangkat);
  animateCounter("statBaik", jumlahBaik);
  animateCounter("statRusak", jumlahRusak);
}

// ============================================
// [8] RENDER TABEL (DOM, Perulangan, Percabangan)
// ============================================

/**
 * Render tabel data perangkat
 * Menerapkan: DOM manipulation, Array, perulangan, percabangan
 */
function renderTabelPerangkat(dataFiltered, highlightId, highlightType) {
  const data = dataFiltered || dataPerangkat;

  // Update count
  document.getElementById("dataCount").textContent = data.length + " perangkat";

  // --- TABEL DESKTOP ---
  const tbody = document.getElementById("perangkatTableBody");
  let htmlTable = "";

  if (data.length === 0) {
    htmlTable = '<tr><td colspan="9"><div class="empty-state">Tidak ada data perangkat ditemukan</div></td></tr>';
  } else {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const nomor = i + 1;
      const isTarget = highlightId !== undefined && highlightId !== null && (item.id == highlightId || String(item.id) === String(highlightId));
      let rowClass = "";
      let badgeExtra = "";

      if (isTarget) {
        if (highlightType === "edit") {
          rowClass = "row-updated-entry";
          badgeExtra = '<span class="badge-updated-pulse">DIUPDATE</span> ';
        } else {
          rowClass = "row-new-entry";
          badgeExtra = '<span class="badge-new-pulse">BARU</span> ';
        }
      }

      const badgeKondisi = item.kondisi === "Baik" ? "badge-baik" : "badge-rusak";
      const dotClass = item.kondisi === "Baik" ? "dot-baik" : "dot-rusak";

      htmlTable +=
        '<tr class="' + rowClass + '">' +
        "<td>" + nomor + "</td>" +
        "<td><strong>" + item.nama + "</strong> " + badgeExtra + "</td>" +
        "<td>" + item.kategori + "</td>" +
        "<td>" + item.merk + "</td>" +
        "<td>" + item.jumlah + "</td>" +
        '<td><span class="badge ' + badgeKondisi + '"><span class="badge-dot ' + dotClass + '"></span>' + item.kondisi + "</span></td>" +
        "<td>" + item.lokasi + "</td>" +
        "<td>" + formatTanggal(item.tanggalMasuk) + "</td>" +
        "<td>" +
        '<div class="aksi-group">' +
        '<button class="btn btn-sm btn-detail" onclick="lihatDetail(' + item.id + ')">Detail</button>' +
        '<button class="btn btn-sm btn-edit" onclick="editPerangkat(' + item.id + ')">Edit</button>' +
        '<button class="btn btn-sm btn-hapus" onclick="hapusPerangkat(' + item.id + ')">Hapus</button>' +
        "</div>" +
        "</td>" +
        "</tr>";
    }
  }

  tbody.innerHTML = htmlTable;

  // --- CARD LIST MOBILE ---
  const cardList = document.getElementById("perangkatCardList");
  let htmlCards = "";

  if (data.length === 0) {
    htmlCards = '<div class="empty-state">Tidak ada data perangkat ditemukan</div>';
  } else {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const isTarget = highlightId !== undefined && highlightId !== null && (item.id == highlightId || String(item.id) === String(highlightId));
      let cardClass = "card-item";
      let badgeExtra = "";

      if (isTarget) {
        if (highlightType === "edit") {
          cardClass += " row-updated-entry";
          badgeExtra = '<span class="badge-updated-pulse">DIUPDATE</span> ';
        } else {
          cardClass += " row-new-entry";
          badgeExtra = '<span class="badge-new-pulse">BARU</span> ';
        }
      }

      const badgeKondisi = item.kondisi === "Baik" ? "badge-baik" : "badge-rusak";
      const dotClass = item.kondisi === "Baik" ? "dot-baik" : "dot-rusak";

      htmlCards +=
        '<div class="' + cardClass + '">' +
        '<div class="card-item-header">' +
        "<strong>" + item.nama + "</strong> " + badgeExtra +
        '<span class="badge ' + badgeKondisi + '"><span class="badge-dot ' + dotClass + '"></span>' + item.kondisi + "</span>" +
        "</div>" +
        '<div class="card-item-details">' +
        "<div><span class='label'>Kategori</span><span>" + item.kategori + "</span></div>" +
        "<div><span class='label'>Merk</span><span>" + item.merk + "</span></div>" +
        "<div><span class='label'>Jumlah</span><span>" + item.jumlah + " unit</span></div>" +
        "<div><span class='label'>Lokasi</span><span>" + item.lokasi + "</span></div>" +
        "<div><span class='label'>Tgl Masuk</span><span>" + formatTanggal(item.tanggalMasuk) + "</span></div>" +
        "</div>" +
        '<div class="card-item-actions">' +
        '<button class="btn btn-sm btn-detail" onclick="lihatDetail(' + item.id + ')">Detail</button>' +
        '<button class="btn btn-sm btn-edit" onclick="editPerangkat(' + item.id + ')">Edit</button>' +
        '<button class="btn btn-sm btn-hapus" onclick="hapusPerangkat(' + item.id + ')">Hapus</button>' +
        "</div>" +
        "</div>";
    }
  }

  cardList.innerHTML = htmlCards;
}

// ============================================
// [9] PENCARIAN & FILTER (String, Array.filter)
// ============================================

/**
 * Filter perangkat berdasarkan pencarian dan filter
 * Menerapkan: Event oninput/onchange, String methods, Array.filter(), operator logika
 */
function filterPerangkat() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const kategori = document.getElementById("filterKategori").value;
  const kondisi = document.getElementById("filterKondisi").value;

  // Array.filter()
  const hasil = dataPerangkat.filter(function (item) {
    // String.indexOf() untuk pencarian
    const cocokNama = item.nama.toLowerCase().indexOf(keyword) !== -1 ||
                      item.merk.toLowerCase().indexOf(keyword) !== -1;

    // Percabangan ternary
    const cocokKategori = kategori === "" ? true : item.kategori === kategori;
    const cocokKondisi = kondisi === "" ? true : item.kondisi === kondisi;

    // Operator logika AND
    return cocokNama && cocokKategori && cocokKondisi;
  });

  renderTabelPerangkat(hasil);
}

// ============================================
// [10] CRUD - CREATE / UPDATE / EDIT
// ============================================

// Variabel untuk melacak ID perangkat yang sedang dilihat di modal detail
let currentDetailId = null;

/**
 * Simpan perangkat baru atau update existing dari form atas
 * Menerapkan: Event onsubmit, DOM, Objek, Array.unshift/findIndex, percabangan
 */
function simpanPerangkat(event) {
  event.preventDefault();

  // Ambil nilai dari form (DOM)
  const editId = document.getElementById("editId").value;
  const nama = document.getElementById("inputNama").value.trim();
  const kategori = document.getElementById("inputKategori").value;
  const merk = document.getElementById("inputMerk").value.trim();
  let jumlah = parseInt(document.getElementById("inputJumlah").value);
  if (isNaN(jumlah) || jumlah < 1) jumlah = 1;
  const spesifikasi = document.getElementById("inputSpesifikasi").value.trim();
  const kondisi = document.getElementById("inputKondisi").value;
  const lokasi = document.getElementById("inputLokasi").value.trim();
  const tanggalMasuk = document.getElementById("inputTanggal").value;

  // Validasi (percabangan)
  if (nama === "" || kategori === "" || merk === "") {
    showToast("Mohon lengkapi semua field wajib!", "error");
    return;
  }

  // Percabangan: tambah atau edit
  if (editId === "") {
    // Buat objek baru
    const perangkatBaru = {
      id: generateId(),
      nama: nama,
      kategori: kategori,
      merk: merk,
      spesifikasi: spesifikasi,
      jumlah: jumlah,
      kondisi: kondisi,
      lokasi: lokasi,
      tanggalMasuk: tanggalMasuk
    };

    // Menerapkan: Array.unshift() agar perangkat baru otomatis masuk di posisi paling atas (indeks 0)
    dataPerangkat.unshift(perangkatBaru);

    // Simpan ke storage
    simpanKeStorage();

    // Reset filter pencarian & kategori agar data baru di nomor 1 langsung terlihat
    document.getElementById("searchInput").value = "";
    document.getElementById("filterKategori").value = "";
    document.getElementById("filterKondisi").value = "";

    bersihkanForm();
    renderAll(perangkatBaru.id, "new");

    // Efek Animasi Selebrasi Confetti
    launchConfetti();

    // Mainkan efek audio (jika aktif)
    playSciFiSound("success");

    showToast("Perangkat '" + nama + "' berhasil ditambahkan di data paling atas!", "success");

    // Scroll ke bagian atas tabel secara halus
    const tabel = document.getElementById("perangkatTable");
    if (tabel) {
      tabel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  } else {
    // Mode Update dari Form Atas
    const index = dataPerangkat.findIndex(function (item) {
      return item.id == editId || String(item.id) === String(editId);
    });

    if (index !== -1) {
      // Update properti objek
      dataPerangkat[index].nama = nama;
      dataPerangkat[index].kategori = kategori;
      dataPerangkat[index].merk = merk;
      dataPerangkat[index].spesifikasi = spesifikasi;
      dataPerangkat[index].jumlah = jumlah;
      dataPerangkat[index].kondisi = kondisi;
      dataPerangkat[index].lokasi = lokasi;
      dataPerangkat[index].tanggalMasuk = tanggalMasuk;

      simpanKeStorage();
      bersihkanForm();
      renderAll(dataPerangkat[index].id, "edit");

      playSciFiSound("success");
      showToast("Data perangkat '" + nama + "' berhasil diperbarui!", "success");

      // Scroll ke tabel
      const tabel = document.getElementById("perangkatTable");
      if (tabel) {
        tabel.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      showToast("Data perangkat tidak ditemukan!", "error");
      return;
    }
  }
}

/**
 * Handler utama tombol 'Edit' pada tabel atau mobile card.
 * Membuka Modal Edit Perangkat langsung di layar tanpa membuat user tersesat scrolling.
 * Menerapkan: Array.find(), DOM
 */
function editPerangkat(id) {
  bukaModalEdit(id);
}

/**
 * Buka popup modal edit dan isi semua input dengan data perangkat
 */
function bukaModalEdit(id) {
  const item = dataPerangkat.find(function (p) {
    return p.id == id || String(p.id) === String(id);
  });

  if (!item) {
    showToast("Data tidak ditemukan!", "error");
    return;
  }

  // Isi form modal edit
  document.getElementById("modalEditId").value = item.id;
  document.getElementById("modalInputNama").value = item.nama;
  document.getElementById("modalInputKategori").value = item.kategori;
  document.getElementById("modalInputMerk").value = item.merk;
  document.getElementById("modalInputJumlah").value = item.jumlah;
  document.getElementById("modalInputSpesifikasi").value = item.spesifikasi || "";
  document.getElementById("modalInputKondisi").value = item.kondisi;
  document.getElementById("modalInputLokasi").value = item.lokasi;
  document.getElementById("modalInputTanggal").value = item.tanggalMasuk;

  // Update judul modal edit
  const titleEl = document.getElementById("modalEditTitle");
  if (titleEl) {
    titleEl.innerHTML = "&#9998; Edit Perangkat: <strong>" + item.nama + "</strong>";
  }

  // Tampilkan modal edit
  const overlay = document.getElementById("modalEditOverlay");
  if (overlay) {
    overlay.classList.add("show");
  }

  // Fokus ke field nama setelah modal terbuka
  setTimeout(function () {
    const input = document.getElementById("modalInputNama");
    if (input) input.focus();
  }, 100);
}

/**
 * Tutup modal edit perangkat
 */
function tutupModalEdit() {
  const overlay = document.getElementById("modalEditOverlay");
  if (overlay) {
    overlay.classList.remove("show");
  }
}

/**
 * Simpan hasil perubahan dari Modal Edit Perangkat
 */
function simpanEditModal(event) {
  event.preventDefault();

  const editId = document.getElementById("modalEditId").value;
  const nama = document.getElementById("modalInputNama").value.trim();
  const kategori = document.getElementById("modalInputKategori").value;
  const merk = document.getElementById("modalInputMerk").value.trim();
  let jumlah = parseInt(document.getElementById("modalInputJumlah").value);
  if (isNaN(jumlah) || jumlah < 1) jumlah = 1;
  const spesifikasi = document.getElementById("modalInputSpesifikasi").value.trim();
  const kondisi = document.getElementById("modalInputKondisi").value;
  const lokasi = document.getElementById("modalInputLokasi").value.trim();
  const tanggalMasuk = document.getElementById("modalInputTanggal").value;

  // Validasi field wajib
  if (nama === "" || kategori === "" || merk === "") {
    showToast("Mohon lengkapi semua field wajib!", "error");
    return;
  }

  const index = dataPerangkat.findIndex(function (item) {
    return item.id == editId || String(item.id) === String(editId);
  });

  if (index !== -1) {
    // Update properti objek
    dataPerangkat[index].nama = nama;
    dataPerangkat[index].kategori = kategori;
    dataPerangkat[index].merk = merk;
    dataPerangkat[index].spesifikasi = spesifikasi;
    dataPerangkat[index].jumlah = jumlah;
    dataPerangkat[index].kondisi = kondisi;
    dataPerangkat[index].lokasi = lokasi;
    dataPerangkat[index].tanggalMasuk = tanggalMasuk;

    // Simpan ke localStorage
    simpanKeStorage();

    // Tutup modal edit
    tutupModalEdit();

    // Render ulang dengan highlight 'edit'
    renderAll(dataPerangkat[index].id, "edit");

    // Audio dan notifikasi
    playSciFiSound("success");
    showToast("Perangkat '" + nama + "' berhasil diperbarui!", "success");
  } else {
    showToast("Data perangkat tidak ditemukan!", "error");
  }
}

/**
 * Opsi tambahan: Buka mode edit pada form atas jika diinginkan
 */
function editPerangkatDiForm(id) {
  const item = dataPerangkat.find(function (p) {
    return p.id == id || String(p.id) === String(id);
  });

  if (!item) {
    showToast("Data tidak ditemukan!", "error");
    return;
  }

  // Isi form atas
  document.getElementById("editId").value = item.id;
  document.getElementById("inputNama").value = item.nama;
  document.getElementById("inputKategori").value = item.kategori;
  document.getElementById("inputMerk").value = item.merk;
  document.getElementById("inputJumlah").value = item.jumlah;
  document.getElementById("inputSpesifikasi").value = item.spesifikasi || "";
  document.getElementById("inputKondisi").value = item.kondisi;
  document.getElementById("inputLokasi").value = item.lokasi;
  document.getElementById("inputTanggal").value = item.tanggalMasuk;

  // Update judul form & tombol
  document.getElementById("formTitle").innerHTML = "&#9998; Edit Perangkat: " + item.nama;
  document.getElementById("btnSimpan").textContent = "Update";
  const btnBatal = document.getElementById("btnBatalEdit");
  if (btnBatal) btnBatal.style.display = "inline-flex";

  // Mode highlight pada card form
  const formCard = document.getElementById("formCard");
  if (formCard) formCard.classList.add("card-edit-mode");

  // Pastikan form terlihat
  const body = document.getElementById("formBody");
  if (body) body.classList.remove("hidden");
  document.getElementById("btnToggleForm").textContent = "Sembunyikan";

  // Scroll ke form dengan offset aman agar judul dan seluruh input tampak jelas di layar
  if (formCard) {
    const rect = formCard.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
      top: rect.top + scrollTop - 20,
      behavior: "smooth"
    });
  }
}

/**
 * Batalkan mode edit pada form atas dan kembalikan ke form tambah baru
 */
function batalEdit() {
  bersihkanForm();
  showToast("Mode edit form dibatalkan.", "info");
}

/**
 * Bersihkan seluruh isian form dan kembalikan ke mode Tambah Perangkat Baru
 */
function bersihkanForm() {
  const form = document.getElementById("formPerangkat");
  if (form) form.reset();

  const editId = document.getElementById("editId");
  if (editId) editId.value = "";

  const formTitle = document.getElementById("formTitle");
  if (formTitle) formTitle.innerHTML = "&#10010; Tambah Perangkat Baru";

  const btnSimpan = document.getElementById("btnSimpan");
  if (btnSimpan) btnSimpan.textContent = "Simpan";

  const btnBatal = document.getElementById("btnBatalEdit");
  if (btnBatal) btnBatal.style.display = "none";

  const formCard = document.getElementById("formCard");
  if (formCard) formCard.classList.remove("card-edit-mode");

  // Set tanggal default hari ini
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const inputTgl = document.getElementById("inputTanggal");
  if (inputTgl) inputTgl.value = yyyy + "-" + mm + "-" + dd;
}

/**
 * Reset seluruh data di LocalStorage kembali ke data default bawaan (data.json)
 * Menerapkan: confirm(), localStorage.removeItem(), fetch() / AJAX, DOM, renderAll()
 */
function resetKeDefault() {
  const yakin = confirm(
    "Apakah Anda yakin ingin mereset seluruh data inventaris ke data default bawaan?\n\nSemua data baru atau hasil edit yang tersimpan di LocalStorage akan dihapus dan dikembalikan ke 15 data awal bawaan (data.json)."
  );

  if (!yakin) {
    return;
  }

  // Bersihkan isian form
  bersihkanForm();

  // Reset filter pencarian & kategori
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const filterKat = document.getElementById("filterKategori");
  if (filterKat) filterKat.value = "";
  const filterKon = document.getElementById("filterKondisi");
  if (filterKon) filterKon.value = "";

  // Hapus key di localStorage
  localStorage.removeItem(STORAGE_KEY);

  // Muat ulang data default dari file data.json
  fetch("data.json?t=" + Date.now())
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Gagal mengambil data.json: " + response.status);
      }
      return response.json();
    })
    .then(function (jsonData) {
      dataPerangkat = jsonData;
      simpanKeStorage();
      isDataLoaded = true;
      renderAll();
      playSciFiSound("success");
      launchConfetti();
      showToast("Data LocalStorage berhasil di-reset ke data default awal (" + dataPerangkat.length + " perangkat)!", "success");

      // Scroll halus ke bagian atas tabel
      const tabel = document.getElementById("perangkatTable");
      if (tabel) {
        tabel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    })
    .catch(function (error) {
      console.warn("Fetch gagal saat reset, menggunakan fallback bawaan:", error);
      dataPerangkat = JSON.parse(JSON.stringify(DATA_DEFAULT_FALLBACK));
      simpanKeStorage();
      isDataLoaded = true;
      renderAll();
      playSciFiSound("success");
      launchConfetti();
      showToast("Data LocalStorage berhasil di-reset ke data default awal (" + dataPerangkat.length + " perangkat)!", "success");

      const tabel = document.getElementById("perangkatTable");
      if (tabel) {
        tabel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
}

/**
 * Reset form dan data: dipanggil jika tombol reset atau fungsi resetForm dieksekusi
 */
function resetForm() {
  resetKeDefault();
}

// ============================================
// [11] CRUD - DELETE (Array.splice)
// ============================================

/**
 * Hapus data perangkat
 * Menerapkan: confirm(), Array.findIndex(), Array.splice()
 */
function hapusPerangkat(id) {
  const item = dataPerangkat.find(function (p) {
    return p.id == id || String(p.id) === String(id);
  });

  const namaPerangkat = item ? item.nama : "perangkat ini";
  const yakin = confirm("Apakah Anda yakin ingin menghapus '" + namaPerangkat + "'?");

  if (yakin) {
    const index = dataPerangkat.findIndex(function (item) {
      return item.id == id || String(item.id) === String(id);
    });

    if (index !== -1) {
      const namaHapus = dataPerangkat[index].nama;

      // Array.splice() - hapus 1 elemen di posisi index
      dataPerangkat.splice(index, 1);

      simpanKeStorage();
      renderAll();

      showToast("'" + namaHapus + "' berhasil dihapus!", "success");
    }
  }
}

// ============================================
// [12] DETAIL PERANGKAT (Modal, DOM)
// ============================================

/**
 * Tampilkan detail perangkat dalam modal
 * Menerapkan: Array.find(), DOM innerHTML
 */
function lihatDetail(id) {
  const item = dataPerangkat.find(function (p) {
    return p.id == id || String(p.id) === String(id);
  });

  if (!item) {
    showToast("Data tidak ditemukan!", "error");
    return;
  }

  currentDetailId = item.id;
  document.getElementById("modalTitle").textContent = item.nama;

  const badgeKondisi = item.kondisi === "Baik" ? "badge-baik" : "badge-rusak";

  const html =
    '<div class="detail-row"><span class="detail-label">Nama</span><span class="detail-value">' + item.nama + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Kategori</span><span class="detail-value">' + item.kategori + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Merk</span><span class="detail-value">' + item.merk + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Spesifikasi</span><span class="detail-value">' + (item.spesifikasi || "-") + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Jumlah</span><span class="detail-value">' + item.jumlah + " unit</span></div>" +
    '<div class="detail-row"><span class="detail-label">Kondisi</span><span class="detail-value"><span class="badge " + badgeKondisi + "">' + item.kondisi + "</span></span></div>" +
    '<div class="detail-row"><span class="detail-label">Lokasi</span><span class="detail-value">' + item.lokasi + "</span></div>" +
    '<div class="detail-row"><span class="detail-label">Tanggal Masuk</span><span class="detail-value">' + formatTanggal(item.tanggalMasuk) + "</span></div>";

  document.getElementById("modalBody").innerHTML = html;
  document.getElementById("modalOverlay").classList.add("show");
}

/**
 * Buka modal edit langsung dari dalam modal detail
 */
function editDariModalDetail() {
  if (currentDetailId !== null) {
    const idToEdit = currentDetailId;
    tutupModal();
    editPerangkat(idToEdit);
  }
}

/**
 * Tutup modal detail
 */
function tutupModal() {
  document.getElementById("modalOverlay").classList.remove("show");
  currentDetailId = null;
}

// Event: tutup modal dengan Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    tutupModal();
    tutupModalEdit();
  }
});

// ============================================
// [13] TOAST NOTIFICATION (DOM, setTimeout)
// ============================================

/**
 * Tampilkan notifikasi toast
 * Menerapkan: DOM createElement/appendChild/removeChild, setTimeout
 */
function showToast(pesan, tipe) {
  const container = document.getElementById("toastContainer");

  const toast = document.createElement("div");
  toast.className = "toast " + (tipe || "info");
  toast.textContent = pesan;

  container.appendChild(toast);

  // setTimeout: hapus setelah 3 detik
  setTimeout(function () {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(30px)";
    toast.style.transition = "all 0.3s ease";

    setTimeout(function () {
      if (toast.parentNode) {
        container.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// ============================================
// [14] RENDER ALL
// ============================================

/**
 * Render ulang semua tampilan
 * @param {number|string} [highlightId] - ID perangkat yang baru ditambahkan/diedit untuk efek highlight
 * @param {string} [highlightType] - 'new' atau 'edit'
 */
function renderAll(highlightId, highlightType) {
  hitungStatistik();
  renderTabelPerangkat(null, highlightId, highlightType);
}

// ============================================
// [15] ANIMASI HITUNG STATISTIK (Count-Up Animation)
// ============================================

/**
 * Animasi angka bergerak naik (Count-Up) dari nilai awal ke nilai target
 * Menerapkan: requestAnimationFrame, Math.min, Math.floor, Date.now
 */
function animateCounter(elementId, targetValue, duration) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const startValue = parseInt(el.textContent) || 0;
  if (startValue === targetValue) {
    el.textContent = targetValue;
    return;
  }
  const animDuration = duration || 800;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / animDuration, 1);
    // Easing ease-out quad
    const easeOut = 1 - (1 - progress) * (1 - progress);
    const currentVal = Math.floor(startValue + (targetValue - startValue) * easeOut);
    el.textContent = currentVal;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      el.textContent = targetValue;
    }
  }
  requestAnimationFrame(updateCounter);
}

// ============================================
// [16] ANIMASI PEMBUKA & SPLASH SCREEN (Canvas, Math, RAF)
// ============================================

let splashCanvasAnimId = null;
let splashProgressInterval = null;
let isSplashOpen = true;

/**
 * Inisialisasi animasi pembuka saat halaman pertama dibuka
 */
function initSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;

  // Jalankan animasi canvas jaringan
  startSplashCanvas();

  // Jalankan simulasi loading & terminal status
  runSplashProgress();
}

/**
 * Jalankan progress bar dan terminal diagnostik high-tech
 */
function runSplashProgress() {
  const fill = document.getElementById("splashProgressFill");
  const percentText = document.getElementById("splashProgressPercent");
  const statusText = document.getElementById("splashProgressStatus");
  const terminal = document.getElementById("splashTerminalText");

  let progress = 0;
  if (splashProgressInterval) clearInterval(splashProgressInterval);

  const messages = [
    { at: 5,  terminal: "Menginisialisasi Kernel Sistem Inventaris Lab TKJ...", status: "BOOTING SISTEM" },
    { at: 28, terminal: "Memindai topologi jaringan & node switch Lab TKJ...", status: "MEMINDAI JARINGAN" },
    { at: 58, terminal: "Sinkronisasi database unit komputer & router...", status: "SINKRONISASI DATA" },
    { at: 85, terminal: "Memverifikasi integritas sistem Wisnu Sangjaya (XII TKJ 2)...", status: "VERIFIKASI SISTEM" },
    { at: 98, terminal: "Sistem aktif dan terhubung! Menyiapkan dashboard...", status: "SISTEM SIAP" }
  ];

  const startTime = Date.now();
  const totalDuration = 2200; // 2.2 detik

  splashProgressInterval = setInterval(function () {
    const elapsed = Date.now() - startTime;
    progress = Math.min(Math.floor((elapsed / totalDuration) * 100), 100);

    if (fill) fill.style.width = progress + "%";
    if (percentText) percentText.textContent = progress + "%";

    // Update pesan status berdasarkan progres
    for (let i = messages.length - 1; i >= 0; i--) {
      if (progress >= messages[i].at) {
        if (terminal && terminal.textContent !== messages[i].terminal) {
          terminal.textContent = messages[i].terminal;
        }
        if (statusText) statusText.textContent = messages[i].status;
        break;
      }
    }

    if (progress >= 100) {
      clearInterval(splashProgressInterval);
      setTimeout(function () {
        tutupSplash();
      }, 350);
    }
  }, 30);
}

/**
 * Tutup / sembunyikan splash screen dengan animasi lens blur & fade out
 */
function tutupSplash() {
  if (!isSplashOpen) return;
  isSplashOpen = false;

  if (splashProgressInterval) clearInterval(splashProgressInterval);

  const splash = document.getElementById("splashScreen");
  if (splash) {
    splash.classList.add("splash-hidden");
  }

  // Hentikan canvas setelah animasi selesai untuk efisiensi performa
  setTimeout(function () {
    if (splashCanvasAnimId) {
      cancelAnimationFrame(splashCanvasAnimId);
      splashCanvasAnimId = null;
    }
  }, 800);

  // Jalankan animasi hitung angka statistik
  hitungStatistik();

  // Mainkan efek audio jika aktif
  playSciFiSound("intro");
}

/**
 * Putar ulang animasi splash (bisa dipanggil kapan saja oleh user/penguji)
 */
function triggerSplashIntro(forceReplay) {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;

  isSplashOpen = true;
  splash.classList.remove("splash-hidden");

  // Reset progress bar
  const fill = document.getElementById("splashProgressFill");
  const percentText = document.getElementById("splashProgressPercent");
  if (fill) fill.style.width = "0%";
  if (percentText) percentText.textContent = "0%";

  startSplashCanvas();
  runSplashProgress();
}

/**
 * Animasi Canvas Network Nodes (Topologi Jaringan Lab TKJ)
 * Menerapkan: Canvas 2D API, Math.sin, Math.cos, requestAnimationFrame
 */
function startSplashCanvas() {
  const canvas = document.getElementById("splashCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", function () {
    if (isSplashOpen && canvas) {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
  });

  // Array objek partikel node jaringan
  const nodeCount = Math.min(Math.floor(width / 35), 45);
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9,
      radius: Math.random() * 2.2 + 1.2,
      color: Math.random() > 0.4 ? "rgba(248, 113, 113, " : "rgba(255, 255, 255, "
    });
  }

  function renderNodes() {
    if (!isSplashOpen) return;

    ctx.clearRect(0, 0, width, height);

    // Hubungkan node-node yang berdekatan dengan garis fiber optik
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.35;
          ctx.strokeStyle = "rgba(239, 68, 68, " + alpha + ")";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Gambar titik node
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;

      // Pantulan dinding
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      ctx.fillStyle = n.color + "0.8)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    splashCanvasAnimId = requestAnimationFrame(renderNodes);
  }

  if (splashCanvasAnimId) cancelAnimationFrame(splashCanvasAnimId);
  renderNodes();
}

// ============================================
// [17] ANIMASI SELEBRASI CONFETTI (Canvas, Math, RAF)
// ============================================

let confettiAnimId = null;

/**
 * Luncurkan partikel confetti selebrasi saat data baru berhasil dibuat
 * Menerapkan: Canvas 2D, Math.random, Array, requestAnimationFrame
 */
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const colors = ["#ef4444", "#dc2626", "#fca5a5", "#22c55e", "#eab308", "#38bdf8", "#ffffff"];
  const particles = [];
  const particleCount = 80;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width / 2 + (Math.random() - 0.5) * 200,
      y: height * 0.35,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  const startTime = Date.now();
  const maxDuration = 2600;

  function renderConfetti() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, width, height);

    let activeParticles = 0;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravitasi
      p.vx *= 0.98; // gesekan udara
      p.rotation += p.vRotation;

      if (elapsed > 1600) {
        p.opacity = Math.max(0, 1 - (elapsed - 1600) / 1000);
      }

      if (p.opacity > 0 && p.y < height + 20) {
        activeParticles++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    }

    if (activeParticles > 0 && elapsed < maxDuration) {
      confettiAnimId = requestAnimationFrame(renderConfetti);
    } else {
      ctx.clearRect(0, 0, width, height);
      if (confettiAnimId) {
        cancelAnimationFrame(confettiAnimId);
        confettiAnimId = null;
      }
    }
  }

  if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
  renderConfetti();
}

// ============================================
// [18] EFEK AUDIO WEB SYNTHESIZER (Web Audio API)
// ============================================

let audioCtx = null;
let isSoundEnabled = false;

/**
 * Toggle efek suara aktif/nonaktif
 */
function toggleSound() {
  isSoundEnabled = !isSoundEnabled;
  const icon = document.getElementById("soundIcon");
  if (icon) {
    icon.innerHTML = isSoundEnabled ? "&#128266;" : "&#128263;";
  }
  showToast(isSoundEnabled ? "Efek audio diaktifkan!" : "Efek audio dimatikan.", "info");
  if (isSoundEnabled) {
    playSciFiSound("beep");
  }
}

/**
 * Mainkan sintesis nada sci-fi menggunakan Web Audio API
 */
function playSciFiSound(type) {
  if (!isSoundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (!audioCtx) return;
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "success") {
      // Dua nada harmonik ceria
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.18); // G5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === "intro") {
      // Sci-fi sound chord
      osc.type = "triangle";
      osc.frequency.setValueAtTime(261.63, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.35);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc.start(now);
      osc.stop(now + 0.7);
    } else {
      // Blip lembut
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    }
  } catch (err) {
    console.log("Audio API info:", err);
  }
}

