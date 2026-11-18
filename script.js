/* ==========================================================================
   WEB-CLASS FINAL PROJECT - APPLICATION SCRIPT
   Authors: Alby, Mufid, Mikael, Nafidz (Kelas X)
   ========================================================================== */

// --- DEFAULT SEED DATA ---
const DEFAULT_DATA = {
  // 1. Jadwal Pelajaran
  schedule: {
    "Senin": [
      { time: "07:00 - 07:45", subject: "Upacara Bendera", teacher: "Seluruh Guru & Siswa", room: "Lapangan Utama" },
      { time: "07:45 - 09:15", subject: "Matematika Wajib", teacher: "Pak Joko, M.Pd", room: "Ruang X-1" },
      { time: "09:15 - 09:45", subject: "Istirahat Pertama", teacher: "-", room: "Kantin / Kelas", isBreak: true },
      { time: "09:45 - 11:15", subject: "Bahasa Indonesia", teacher: "Bu Ratna, S.Pd", room: "Ruang X-1" },
      { time: "11:15 - 12:45", subject: "Informatika (Pemrograman Web)", teacher: "Pak Hendra, S.Kom", room: "Lab Komputer 2" }
    ],
    "Selasa": [
      { time: "07:15 - 08:45", subject: "Fisika Dasar", teacher: "Pak Budi Santoso, M.Si", room: "Lab Fisika" },
      { time: "08:45 - 10:15", subject: "Bahasa Inggris", teacher: "Miss Clara, M.Hum", room: "Ruang X-1" },
      { time: "10:15 - 10:45", subject: "Istirahat", teacher: "-", room: "Kantin", isBreak: true },
      { time: "10:45 - 12:15", subject: "Biologi", teacher: "Bu Sri Wahyuni, S.Pd", room: "Lab Biologi" },
      { time: "12:45 - 14:15", subject: "Pendidikan Agama & Budi Pekerti", teacher: "Ust. Mansur, M.Ag", room: "Musholla / X-1" }
    ],
    "Rabu": [
      { time: "07:15 - 08:45", subject: "Kimia", teacher: "Bu Diana, M.Pd", room: "Lab Kimia" },
      { time: "08:45 - 10:15", subject: "Sejarah Indonesia", teacher: "Pak Slamet, S.Pd", room: "Ruang X-1" },
      { time: "10:15 - 10:45", subject: "Istirahat", teacher: "-", room: "Kantin", isBreak: true },
      { time: "10:45 - 12:15", subject: "Pendidikan Pancasila (PPKn)", teacher: "Pak Wahyu, S.Pd", room: "Ruang X-1" },
      { time: "12:45 - 14:15", subject: "Seni Budaya", teacher: "Bu Maya, S.Sn", room: "Ruang Kesenian" }
    ],
    "Kamis": [
      { time: "07:15 - 08:45", subject: "PJOK (Olahraga)", teacher: "Pak Agus, S.Pd.Kor", room: "Gedung Olahraga" },
      { time: "08:45 - 10:15", subject: "Sosiologi / IPS", teacher: "Bu Nurul, S.Sos", room: "Ruang X-1" },
      { time: "10:15 - 10:45", subject: "Istirahat", teacher: "-", room: "Kantin", isBreak: true },
      { time: "10:45 - 12:15", subject: "Geografi", teacher: "Pak Eko, M.Pd", room: "Ruang X-1" },
      { time: "12:45 - 14:15", subject: "Bimbingan Konseling (BK)", teacher: "Bu Linda, S.Psi", room: "Ruang X-1" }
    ],
    "Jumat": [
      { time: "07:00 - 07:45", subject: "Senam Pagi & Literasi", teacher: "Osis & Tim Kesiswaan", room: "Lapangan" },
      { time: "07:45 - 09:15", subject: "Ekonomi", teacher: "Pak Dedi, M.E", room: "Ruang X-1" },
      { time: "09:15 - 09:45", subject: "Istirahat", teacher: "-", room: "Kantin", isBreak: true },
      { time: "09:45 - 11:15", subject: "Prakarya & Kewirausahaan (PKWU)", teacher: "Bu Anisa, S.Pd", room: "Ruang X-1" },
      { time: "11:30 - 13:00", subject: "Sholat Jumat Berjamaah", teacher: "DKM Sekolah", room: "Masjid Sekolah", isBreak: true }
    ]
  },

  // 2. Piket Harian
  piket: {
    "Senin": ["Alby Fabian", "Citra Kirana", "Fajar Ramadhan", "Dinda Ayu", "Rian Hidayat"],
    "Selasa": ["Mufid Al-Haq", "Gita Savitri", "Hafidz Nugraha", "Intan Permata", "Bagas Pratama"],
    "Rabu": ["Mikael Kevin", "Nabila Syakieb", "Oki Setiawan", "Putri Anggraini", "Rangga Wijaya"],
    "Kamis": ["Nafidz Maulana", "Sarah Zahra", "Taufik Ismail", "Vina Pandu", "Yoga Pratama"],
    "Jumat": ["Zaidan Ali", "Bella Safira", "Dimas Anggara", "Eka Putri", "Farhan Maulana"]
  },

  // 3. Info Tugas & PR
  tasks: [
    {
      id: "tsk-1",
      subject: "Informatika",
      title: "Final Project Pembuatan Website Kelas (HTML, CSS, JS)",
      desc: "Membuat website interaktif per kelompok berisi jadwal, kas, dan menfess.",
      deadline: "2026-11-25",
      type: "Kelompok",
      priority: "urgent",
      completed: false
    },
    {
      id: "tsk-2",
      subject: "Matematika",
      title: "Latihan Soal SPLTV Halaman 84 No. 1-10",
      desc: "Kerjakan di buku berpetak lengkap dengan grafik dan metode eliminasi.",
      deadline: "2026-11-20",
      type: "Individu",
      priority: "normal",
      completed: false
    },
    {
      id: "tsk-3",
      subject: "Bahasa Indonesia",
      title: "Analisis Struktur & Kaidah Teks Anekdot",
      desc: "Cari 1 contoh teks anekdot kritik sosial lalu tentukan abstraksi s/d koda.",
      deadline: "2026-11-22",
      type: "Individu",
      priority: "normal",
      completed: true
    },
    {
      id: "tsk-4",
      subject: "Fisika",
      title: "Laporan Praktikum GLB & GLBB",
      desc: "Ketik rapi format PDF dan lampirkan foto dokumentasi pita ticker timer.",
      deadline: "2026-11-24",
      type: "Kelompok",
      priority: "normal",
      completed: false
    }
  ],

  // 4. Laporan Uang Kas
  kas: {
    balance: 1450000,
    income: 2100000,
    expense: 650000,
    transactions: [
      { id: "tx-1", date: "2026-11-02", desc: "Iuran Kas Minggu ke-1 (30 Siswa)", amount: 300000, type: "in" },
      { id: "tx-2", date: "2026-11-05", desc: "Beli Alat Kebersihan (Sapu, Pel, Kemoceng)", amount: 85000, type: "out" },
      { id: "tx-3", date: "2026-11-09", desc: "Iuran Kas Minggu ke-2 (32 Siswa)", amount: 320000, type: "in" },
      { id: "tx-4", date: "2026-11-12", desc: "Konsumsi Lomba Classmeeting Futsal", amount: 150000, type: "out" },
      { id: "tx-5", date: "2026-11-16", desc: "Iuran Kas Minggu ke-3 (31 Siswa)", amount: 310000, type: "in" },
      { id: "tx-6", date: "2026-11-17", desc: "Beli Spidol Whiteboard & Penghapus", amount: 45000, type: "out" }
    ],
    studentKas: [
      { no: 1, name: "Alby Fabian", status: "Lunas", weeksPaid: 4, phone: "6281234567890" },
      { no: 2, name: "Bella Safira", status: "Nunggak 1 Minggu", weeksPaid: 3, phone: "6281234567891" },
      { no: 3, name: "Citra Kirana", status: "Lunas", weeksPaid: 4, phone: "6281234567892" },
      { no: 4, name: "Dimas Anggara", status: "Lunas", weeksPaid: 4, phone: "6281234567893" },
      { no: 5, name: "Mikael Kevin", status: "Lunas", weeksPaid: 4, phone: "6281234567894" },
      { no: 6, name: "Mufid Al-Haq", status: "Lunas", weeksPaid: 4, phone: "6281234567895" },
      { no: 7, name: "Nafidz Maulana", status: "Lunas", weeksPaid: 4, phone: "6281234567896" },
      { no: 8, name: "Rian Hidayat", status: "Nunggak 2 Minggu", weeksPaid: 2, phone: "6281234567897" },
      { no: 9, name: "Sarah Zahra", status: "Lunas", weeksPaid: 4, phone: "6281234567898" },
      { no: 10, name: "Yoga Pratama", status: "Nunggak 1 Minggu", weeksPaid: 3, phone: "6281234567899" }
    ]
  },

  // 5. Papan Pengumuman
  announcements: [
    {
      id: "ann-1",
      title: "Seragam Batik & Gladi Bersih Upacara Hari Guru",
      desc: "Kamis besok seluruh siswa wajib memakai seragam Batik Daerah. Sepatu tetap hitam polos. Perwakilan kelas kumpul di aula jam 14.00.",
      category: "urgent",
      date: "18 Nov 2026",
      author: "Mikael Kevin (Ketua Kelas)"
    },
    {
      id: "ann-2",
      title: "Jam Kosong Mapel Kimia Hari Rabu (Tugas Mandiri)",
      desc: "Bu Diana izin menghadiri seminar MGMP. Siswa diminta merangkum Bab 4 di LKS halaman 50 dan kumpulkan di meja guru sebelum pulang.",
      category: "academic",
      date: "17 Nov 2026",
      author: "Alby Fabian (Sekretaris)"
    },
    {
      id: "ann-3",
      title: "Rencana Foto Buku Tahunan & Jaket Angkatan",
      desc: "Voting desain jaket kelas sudah dibuka di grup WA. Harap mengisi form ukuran sebelum hari Jumat minggu ini.",
      category: "social",
      date: "15 Nov 2026",
      author: "Mufid Al-Haq (Humas Kelas)"
    }
  ],

  // 6. Profil Siswa
  students: [
    {
      no: 1,
      name: "Alby Fabian",
      role: "Sekretaris I & Developer",
      quote: "Code your dream into reality.",
      bday: "14 Maret",
      ig: "alby_fabian",
      wa: "6281234567890",
      avatarColor: "#3b82f6"
    },
    {
      no: 2,
      name: "Bella Safira",
      role: "Seksi Kebersihan",
      quote: "Bersih pangkal nyaman belajar.",
      bday: "22 November", // Near birthday!
      ig: "bellasfr",
      wa: "6281234567891",
      avatarColor: "#ec4899"
    },
    {
      no: 3,
      name: "Citra Kirana",
      role: "Bendahara I",
      quote: "Kas lancar, kegiatan kelas aman sentosa.",
      bday: "05 Januari",
      ig: "citrakrn",
      wa: "6281234567892",
      avatarColor: "#10b981"
    },
    {
      no: 4,
      name: "Mikael Kevin",
      role: "Ketua Kelas & Developer",
      quote: "Memimpin dengan aksi, bukan sekadar kata.",
      bday: "19 November", // Tomorrow / Very soon!
      ig: "mikael_kevin",
      wa: "6281234567894",
      avatarColor: "#8b5cf6"
    },
    {
      no: 5,
      name: "Mufid Al-Haq",
      role: "Wakil Ketua Kelas & Developer",
      quote: "Solidaritas tanpa batas untuk kelas tercinta.",
      bday: "10 Agustus",
      ig: "mufid_alhaq",
      wa: "6281234567895",
      avatarColor: "#06b6d4"
    },
    {
      no: 6,
      name: "Nafidz Maulana",
      role: "Seksi Dokumentasi & Developer",
      quote: "Abadikan setiap detik cerita masa putih abu-abu.",
      bday: "28 November", // This month!
      ig: "nafidz_mln",
      wa: "6281234567896",
      avatarColor: "#f59e0b"
    },
    {
      no: 7,
      name: "Sarah Zahra",
      role: "Bendahara II",
      quote: "Transparan dan amanah dalam setiap rupiah.",
      bday: "18 November", // Today!
      ig: "sarahzhra",
      wa: "6281234567898",
      avatarColor: "#f43f5e"
    },
    {
      no: 8,
      name: "Yoga Pratama",
      role: "Seksi Olahraga",
      quote: "Men sana in corpore sano.",
      bday: "30 Desember",
      ig: "yogapratama",
      wa: "6281234567899",
      avatarColor: "#84cc16"
    }
  ],

  // 7. Bank Materi
  materi: [
    {
      id: "mat-1",
      subject: "Informatika",
      title: "Slide PPT: Dasar HTML5 Semantic & CSS Grid",
      teacher: "Pak Hendra, S.Kom",
      type: "ppt",
      url: "https://drive.google.com"
    },
    {
      id: "mat-2",
      subject: "Matematika",
      title: "Modul Ringkasan Rumus SPLTV & SPLDV Lengkap",
      teacher: "Pak Joko, M.Pd",
      type: "pdf",
      url: "https://drive.google.com"
    },
    {
      id: "mat-3",
      subject: "Fisika",
      title: "Kumpulan Latihan Soal UTS Fisika Beserta Pembahasan",
      teacher: "Pak Budi Santoso, M.Si",
      type: "pdf",
      url: "https://drive.google.com"
    },
    {
      id: "mat-4",
      subject: "Bahasa Inggris",
      title: "Catatan Grammar: Simple Past vs Present Perfect Tense",
      teacher: "Miss Clara, M.Hum",
      type: "note",
      url: "https://drive.google.com"
    }
  ],

  // 8. Galeri Kegiatan
  gallery: [
    {
      id: "gal-1",
      title: "Kemenangan Tim Futsal Kelas X di Classmeeting",
      category: "Classmeeting",
      date: "10 Nov 2026",
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Praktikum Kimia: Reaksi Asam Basa di Lab",
      category: "Belajar",
      date: "04 Nov 2026",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Kerja Bakti & Dekorasi Ruang Kelas Bersama",
      category: "Kegiatan",
      date: "28 Okt 2026",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Study Tour Museum Sejarah & Edukasi Budaya",
      category: "Study Tour",
      date: "14 Okt 2026",
      img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // 9. Menfess & Aspirasi
  menfess: [
    {
      id: "mnf-1",
      type: "aspirasi",
      from: "Anonim X",
      to: "Pengurus Kelas",
      msg: "Tolong dong ac ruang kelas belakang sering bocor air, tolong laporin ke sarpras sekolah ya min.",
      date: "18 Nov 2026",
      approved: true
    },
    {
      id: "mnf-2",
      type: "menfess",
      from: "Secret Admirer",
      to: "Dinda (Absen 12)",
      msg: "Semangat ya yang tadi presentasi Biologi, suaramu jelas banget dan keren!",
      date: "17 Nov 2026",
      approved: true
    },
    {
      id: "mnf-3",
      type: "music",
      from: "Anak Bangku Belakang",
      to: "DJ Jam Kosong",
      msg: "Request puter lagu Hindia - Rumah ke Rumah pas jam istirahat kedua nanti dong!",
      date: "16 Nov 2026",
      approved: true
    },
    {
      id: "mnf-4",
      type: "aspirasi",
      from: "Siswa Biasa",
      to: "Seksi Kebersihan",
      msg: "Sapu di sudut kelas sudah patah gagangnya, bisa tolong dibelikan yang baru dari uang kas?",
      date: "18 Nov 2026",
      approved: false // Pending moderation
    }
  ]
};

// --- STATE MANAGEMENT ---
class AppState {
  constructor() {
    this.role = localStorage.getItem("webclass_role") || "siswa"; // "siswa" or "admin"
    this.adminPin = "1234";
    this.initStorage();
  }

  initStorage() {
    if (!localStorage.getItem("webclass_data")) {
      localStorage.setItem("webclass_data", JSON.stringify(DEFAULT_DATA));
    }
  }

  getData() {
    return JSON.parse(localStorage.getItem("webclass_data")) || DEFAULT_DATA;
  }

  saveData(data) {
    localStorage.setItem("webclass_data", JSON.stringify(data));
  }

  setRole(newRole) {
    this.role = newRole;
    localStorage.setItem("webclass_role", newRole);
    updateRoleUI();
  }

  isAdmin() {
    return this.role === "admin";
  }

  resetAllData() {
    localStorage.setItem("webclass_data", JSON.stringify(DEFAULT_DATA));
    location.reload();
  }
}

const state = new AppState();

// --- LIVE CLOCK & DATE ---
function updateLiveClock() {
  const clockEl = document.getElementById("liveClock");
  const dateEl = document.getElementById("liveDate");
  const dayNameEl = document.getElementById("liveDayName");

  const now = new Date();

  // Time format
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  if (clockEl) clockEl.textContent = `${hours}:${minutes}:${seconds} WIB`;

  // Indonesian Date Formatter
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const dayName = days[now.getDay()];
  const dateNum = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();

  if (dayNameEl) dayNameEl.textContent = `Hari ${dayName}`;
  if (dateEl) dateEl.textContent = `${dateNum} ${monthName} ${year}`;
}

// Current active schedule day (default to today if Monday-Friday, else Senin)
let activeScheduleDay = getTodayDayName();

function getTodayDayName() {
  const now = new Date();
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const today = days[now.getDay()];
  if (["Senin", "Selasa", "Rabu", "Kamis", "Jumat"].includes(today)) {
    return today;
  }
  return "Senin"; // Default to Senin on weekends
}

// --- RENDER FUNCTIONS ---

// 1. Render Jadwal & Piket
function renderSchedule() {
  const data = state.getData();
  const scheduleListEl = document.getElementById("scheduleList");
  const piketListEl = document.getElementById("piketTodayList");
  const activeDayBadge = document.getElementById("activeScheduleDayBadge");

  if (!scheduleListEl || !piketListEl) return;

  if (activeDayBadge) activeDayBadge.textContent = activeScheduleDay;

  // Render Lesson Timeline
  const lessons = data.schedule[activeScheduleDay] || [];
  if (lessons.length === 0) {
    scheduleListEl.innerHTML = `<p class="text-muted">Tidak ada jadwal pelajaran untuk hari ini.</p>`;
  } else {
    scheduleListEl.innerHTML = lessons.map(item => `
      <div class="timeline-item ${item.isBreak ? 'break-item' : ''}">
        <div class="lesson-info">
          <h4>${item.subject}</h4>
          <p><i class="fa-solid fa-user-tie"></i> ${item.teacher} &nbsp;|&nbsp; <i class="fa-solid fa-location-dot"></i> ${item.room}</p>
        </div>
        <div class="lesson-time">
          <i class="fa-regular fa-clock"></i> ${item.time}
        </div>
      </div>
    `).join('');
  }

  // Render Piket for this day
  const piketMembers = data.piket[activeScheduleDay] || [];
  piketListEl.innerHTML = piketMembers.map(name => `
    <span class="piket-chip"><i class="fa-solid fa-broom"></i> ${name}</span>
  `).join('');

  // Update tabs active class
  document.querySelectorAll(".day-tab").forEach(tab => {
    const day = tab.dataset.day;
    tab.classList.toggle("active", day === activeScheduleDay);
  });
}

// 2. Render Tasks & PR
let currentTaskFilter = "all";

function renderTasks() {
  const data = state.getData();
  const tasksGrid = document.getElementById("tasksGrid");
  const taskCountBadge = document.getElementById("pendingTasksCount");
  if (!tasksGrid) return;

  let tasks = [...data.tasks];

  // Filter
  if (currentTaskFilter === "pending") {
    tasks = tasks.filter(t => !t.completed);
  } else if (currentTaskFilter === "completed") {
    tasks = tasks.filter(t => t.completed);
  }

  const pendingCount = data.tasks.filter(t => !t.completed).length;
  if (taskCountBadge) taskCountBadge.textContent = `${pendingCount} Belum Selesai`;

  if (tasks.length === 0) {
    tasksGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem; background: #fff; border-radius: 12px; border: 1px dashed var(--border-color);">
        <i class="fa-regular fa-circle-check" style="font-size: 2rem; color: var(--success); margin-bottom: 0.5rem;"></i>
        <h4>Tidak ada tugas yang sesuai filter!</h4>
        <p style="color: var(--slate-500); font-size: 0.85rem;">Semua tugas telah diselesaikan atau belum ada data tugas baru.</p>
      </div>
    `;
    return;
  }

  tasksGrid.innerHTML = tasks.map(task => {
    const isUrgent = task.priority === "urgent";
    return `
      <div class="task-card ${task.completed ? 'completed' : ''}">
        <div>
          <div class="task-meta-top">
            <span class="task-subject">${task.subject}</span>
            <span class="${isUrgent ? 'task-badge-urgent' : 'task-badge-normal'}">
              <i class="fa-solid ${isUrgent ? 'fa-fire' : 'fa-calendar-day'}"></i> ${task.type}
            </span>
          </div>
          <h4 class="task-title">${task.title}</h4>
          <p class="task-desc">${task.desc}</p>
        </div>
        <div class="task-footer">
          <div class="task-deadline">
            <i class="fa-regular fa-clock"></i> Deadline: <b>${formatDateIndo(task.deadline)}</b>
          </div>
          <button class="task-check-btn ${task.completed ? 'checked' : ''}" onclick="toggleTaskCompletion('${task.id}')" title="Klik untuk ubah status tugas">
            <i class="fa-solid ${task.completed ? 'fa-check' : 'fa-circle'}"></i> ${task.completed ? 'Selesai' : 'Tandai Selesai'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function toggleTaskCompletion(taskId) {
  const data = state.getData();
  const task = data.tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    state.saveData(data);
    renderTasks();
    showToast(task.completed ? "Tugas ditandai selesai! 🎉" : "Status tugas dikembalikan ke belum selesai.", "success");
  }
}

// 3. Render Uang Kas
let currentKasTab = "transaksi";

function renderKas() {
  const data = state.getData();
  const kasBalanceEl = document.getElementById("kasBalance");
  const kasIncomeEl = document.getElementById("kasIncome");
  const kasExpenseEl = document.getElementById("kasExpense");

  if (kasBalanceEl) kasBalanceEl.textContent = formatRupiah(data.kas.balance);
  if (kasIncomeEl) kasIncomeEl.textContent = formatRupiah(data.kas.income);
  if (kasExpenseEl) kasExpenseEl.textContent = formatRupiah(data.kas.expense);

  const container = document.getElementById("kasTabContent");
  if (!container) return;

  if (currentKasTab === "transaksi") {
    container.innerHTML = `
      <div class="kas-table-card">
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Keterangan Transaksi</th>
                <th>Tipe</th>
                <th>Nominal</th>
              </tr>
            </thead>
            <tbody>
              ${data.kas.transactions.map(tx => `
                <tr>
                  <td><i class="fa-regular fa-calendar"></i> ${formatDateIndo(tx.date)}</td>
                  <td><b>${tx.desc}</b></td>
                  <td>
                    <span class="type-pill ${tx.type === 'in' ? 'type-in' : 'type-out'}">
                      <i class="fa-solid ${tx.type === 'in' ? 'fa-arrow-down' : 'fa-arrow-up'}"></i>
                      ${tx.type === 'in' ? 'Pemasukan' : 'Pengeluaran'}
                    </span>
                  </td>
                  <td style="font-weight: 800; color: ${tx.type === 'in' ? 'var(--success)' : 'var(--danger)'}">
                    ${tx.type === 'in' ? '+' : '-'} ${formatRupiah(tx.amount)}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    // Tab Status Bayar Siswa
    container.innerHTML = `
      <div class="kas-table-card">
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Absen</th>
                <th>Nama Siswa</th>
                <th>Minggu Terbayar</th>
                <th>Status Kas</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${data.kas.studentKas.map((st, idx) => `
                <tr>
                  <td>#${st.no}</td>
                  <td><b>${st.name}</b></td>
                  <td>${st.weeksPaid} / 4 Minggu</td>
                  <td>
                    <span class="status-badge ${st.status.toLowerCase().includes('lunas') ? 'status-lunas' : 'status-nunggak'}">
                      ${st.status}
                    </span>
                  </td>
                  <td>
                    <div style="display: flex; gap: 0.5rem; align-items: center;">
                      ${st.status.toLowerCase().includes('nunggak') ? `
                        <a href="https://wa.me/${st.phone}?text=Halo%20${encodeURIComponent(st.name)},%20jangan%20lupa%20bayar%20uang%20kas%20kelas%20ya!" target="_blank" class="btn btn-sm btn-outline" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;">
                          <i class="fa-brands fa-whatsapp" style="color: #25d366;"></i> Tagih
                        </a>
                      ` : ''}
                      ${state.isAdmin() ? `
                        <button class="btn btn-sm btn-secondary" onclick="toggleStudentKasStatus(${idx})" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;">
                          Toggle Lunas
                        </button>
                      ` : ''}
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

function toggleStudentKasStatus(index) {
  const data = state.getData();
  const st = data.kas.studentKas[index];
  if (st) {
    if (st.status === "Lunas") {
      st.status = "Nunggak 1 Minggu";
      st.weeksPaid = 3;
    } else {
      st.status = "Lunas";
      st.weeksPaid = 4;
    }
    state.saveData(data);
    renderKas();
    showToast(`Status kas ${st.name} berhasil diubah!`, "info");
  }
}

// 4. Render Announcements
function renderAnnouncements() {
  const data = state.getData();
  const container = document.getElementById("announcementsGrid");
  if (!container) return;

  container.innerHTML = data.announcements.map(ann => {
    let colorClass = "blue";
    let catLabel = "Akademik";
    let borderClass = "academic";

    if (ann.category === "urgent") {
      colorClass = "red";
      catLabel = "Penting / Mendesak";
      borderClass = "urgent";
    } else if (ann.category === "social") {
      colorClass = "yellow";
      catLabel = "Agenda Kelas";
      borderClass = "social";
    }

    return `
      <div class="announcement-card ${borderClass}">
        <div class="announcement-header">
          <span class="ann-tag ${colorClass}">${catLabel}</span>
          <span class="ann-date"><i class="fa-regular fa-clock"></i> ${ann.date}</span>
        </div>
        <h4 class="ann-title">${ann.title}</h4>
        <p class="ann-desc">${ann.desc}</p>
        <div class="ann-author">
          <i class="fa-solid fa-bullhorn" style="color: var(--primary);"></i> Diumumkan oleh: <b>${ann.author}</b>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Render Students Profile & Birthday Reminder
let studentSearchQuery = "";

function renderStudents() {
  const data = state.getData();
  const container = document.getElementById("studentsGrid");
  const bdayChipsContainer = document.getElementById("bdayChips");
  if (!container) return;

  // Birthday reminder (November as active current month)
  const novemberBdays = data.students.filter(s => s.bday.toLowerCase().includes("november"));
  if (bdayChipsContainer) {
    bdayChipsContainer.innerHTML = novemberBdays.map(s => `
      <span class="bday-chip"><i class="fa-solid fa-cake-candles"></i> <b>${s.name}</b> (${s.bday})</span>
    `).join('');
  }

  // Filter students by query
  let filtered = data.students;
  if (studentSearchQuery.trim()) {
    const q = studentSearchQuery.toLowerCase();
    filtered = filtered.filter(s => s.name.toLowerCase().includes(q) || s.role.toLowerCase().includes(q) || String(s.no) === q);
  }

  container.innerHTML = filtered.map(s => `
    <div class="student-card">
      <span class="student-absen">Absen #${s.no}</span>
      <div class="student-avatar" style="background: ${s.avatarColor || '#3b82f6'};">
        ${getInitials(s.name)}
      </div>
      <h4 class="student-name">${s.name}</h4>
      <div class="student-role">${s.role}</div>
      <p class="student-quote">"${s.quote}"</p>
      <div class="student-socials">
        <a href="https://instagram.com/${s.ig}" target="_blank" class="social-link-btn" title="Instagram @${s.ig}">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/${s.wa}" target="_blank" class="social-link-btn" title="Chat WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// 6. Render Bank Materi
function renderMateri() {
  const data = state.getData();
  const container = document.getElementById("materiGrid");
  if (!container) return;

  container.innerHTML = data.materi.map(m => {
    let icon = "fa-file-powerpoint";
    let iconClass = "file-ppt";

    if (m.type === "pdf") {
      icon = "fa-file-pdf";
      iconClass = "file-pdf";
    } else if (m.type === "note") {
      icon = "fa-book-open";
      iconClass = "file-note";
    }

    return `
      <div class="materi-card">
        <div>
          <div class="materi-top">
            <div class="materi-file-icon ${iconClass}">
              <i class="fa-solid ${icon}"></i>
            </div>
            <div>
              <span class="materi-subject-tag">${m.subject}</span>
              <h4 class="materi-title">${m.title}</h4>
            </div>
          </div>
          <p class="materi-teacher"><i class="fa-solid fa-chalkboard-user"></i> Pengajar: ${m.teacher}</p>
        </div>
        <a href="${m.url}" target="_blank" class="drive-btn">
          <i class="fa-brands fa-google-drive" style="color: #34a853;"></i> Akses Google Drive
        </a>
      </div>
    `;
  }).join('');
}

// 7. Render Galeri
function renderGallery() {
  const data = state.getData();
  const container = document.getElementById("galleryGrid");
  if (!container) return;

  container.innerHTML = data.gallery.map(g => `
    <div class="gallery-card" onclick="openLightbox('${g.img}', '${g.title}')">
      <img src="${g.img}" alt="${g.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-tag">${g.category}</span>
        <h4 class="gallery-title">${g.title}</h4>
        <span class="gallery-date"><i class="fa-regular fa-calendar"></i> ${g.date}</span>
      </div>
    </div>
  `).join('');
}

// 8. Render Menfess / Aspirasi
let currentMenfessTab = "approved"; // "approved" or "moderasi"

function renderMenfess() {
  const data = state.getData();
  const container = document.getElementById("menfessGrid");
  const modTabBtn = document.getElementById("menfessModTabBtn");
  if (!container) return;

  // Show moderation tab only if admin
  if (modTabBtn) {
    modTabBtn.style.display = state.isAdmin() ? "inline-block" : "none";
  }

  let items = data.menfess;
  if (currentMenfessTab === "approved") {
    items = items.filter(m => m.approved);
  } else {
    items = items.filter(m => !m.approved);
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; background: #fff; border-radius: 12px; border: 1px dashed var(--border-color);">
        <i class="fa-regular fa-paper-plane" style="font-size: 2.5rem; color: var(--slate-400); margin-bottom: 0.75rem;"></i>
        <h4>${currentMenfessTab === 'approved' ? 'Belum Ada Pesan yang Dipublikasikan' : 'Tidak Ada Pesan Pending Moderasi'}</h4>
        <p style="color: var(--slate-500); font-size: 0.85rem;">Kirim aspirasi atau pesan anonim kamu sekarang melalui formulir di samping!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(m => {
    let tagClass = "tag-menfess";
    let tagText = "Menfess";
    if (m.type === "aspirasi") {
      tagClass = "tag-aspirasi";
      tagText = "Aspirasi";
    } else if (m.type === "music") {
      tagClass = "tag-music";
      tagText = "Request Lagu";
    }

    return `
      <div class="menfess-card">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="menfess-tag ${tagClass}">${tagText}</span>
            <span style="font-size: 0.75rem; color: var(--slate-400);"><i class="fa-regular fa-clock"></i> ${m.date}</span>
          </div>
          <p class="menfess-msg">"${m.msg}"</p>
        </div>
        <div class="menfess-footer">
          <div>
            <span>Dari: <b>${m.from || 'Anonim'}</b></span><br>
            ${m.to ? `<span style="font-size: 0.75rem; color: var(--slate-400);">Untuk: <b>${m.to}</b></span>` : ''}
          </div>
          ${!m.approved && state.isAdmin() ? `
            <div style="display: flex; gap: 0.35rem;">
              <button class="btn btn-sm btn-success" onclick="approveMenfess('${m.id}')" title="Setujui dan tampilkan"><i class="fa-solid fa-check"></i></button>
              <button class="btn btn-sm btn-danger" onclick="deleteMenfess('${m.id}')" title="Tolak dan hapus"><i class="fa-solid fa-trash"></i></button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function approveMenfess(id) {
  const data = state.getData();
  const item = data.menfess.find(m => m.id === id);
  if (item) {
    item.approved = true;
    state.saveData(data);
    renderMenfess();
    showToast("Pesan berhasil disetujui & dipublikasikan!", "success");
  }
}

function deleteMenfess(id) {
  const data = state.getData();
  data.menfess = data.menfess.filter(m => m.id !== id);
  state.saveData(data);
  renderMenfess();
  showToast("Pesan telah dihapus.", "info");
}

// --- ROLE SYSTEM & ACCESS CONTROL ---
function updateRoleUI() {
  const roleBadgeText = document.getElementById("roleBadgeText");
  const roleBtn = document.getElementById("roleBadgeBtn");
  const adminOnlyElements = document.querySelectorAll(".admin-only");

  if (state.isAdmin()) {
    if (roleBadgeText) roleBadgeText.textContent = "Pengurus";
    if (roleBtn) {
      roleBtn.className = "role-badge-btn role-admin";
      roleBtn.title = "Mode Pengurus Aktif. Klik untuk kembali ke Mode Siswa.";
    }
    adminOnlyElements.forEach(el => el.style.display = "inline-flex");
  } else {
    if (roleBadgeText) roleBadgeText.textContent = "Siswa";
    if (roleBtn) {
      roleBtn.className = "role-badge-btn role-siswa";
      roleBtn.title = "Mode Siswa. Klik untuk masuk sebagai Pengurus.";
    }
    adminOnlyElements.forEach(el => el.style.display = "none");
  }

  // Re-render components that have role-dependent views
  renderKas();
  renderMenfess();
}

function handleRoleToggle() {
  if (state.isAdmin()) {
    state.setRole("siswa");
    showToast("Beralih ke Mode Siswa.", "info");
  } else {
    openModal("roleModal");
  }
}

function verifyAdminPin() {
  const pinInput = document.getElementById("adminPinInput");
  if (!pinInput) return;

  if (pinInput.value === state.adminPin) {
    state.setRole("admin");
    closeModal("roleModal");
    pinInput.value = "";
    showToast("Berhasil masuk sebagai Pengurus Kelas! Akses manajemen aktif.", "success");
  } else {
    showToast("PIN salah! Coba gunakan PIN default: 1234", "error");
    pinInput.focus();
  }
}

// --- MODAL HELPERS ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function openLightbox(imgSrc, title) {
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  if (lightboxImg) lightboxImg.src = imgSrc;
  if (lightboxCaption) lightboxCaption.textContent = title;
  openModal("lightboxModal");
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "error") icon = "fa-triangle-exclamation";

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- HELPER UTILITIES ---
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
}

function formatDateIndo(dateStr) {
  if (!dateStr) return "-";
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
      return `${parseInt(parts[2])} ${months[parseInt(parts[1]) - 1]} ${parts[0]}`;
    }
    return dateStr;
  } catch (e) {
    return dateStr;
  }
}

function getInitials(name) {
  if (!name) return "X";
  const words = name.split(" ");
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

// --- FORM HANDLERS ---
function initForms() {
  // Menfess Submit Form
  const menfessForm = document.getElementById("menfessForm");
  if (menfessForm) {
    menfessForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const type = document.getElementById("menfessType").value;
      const from = document.getElementById("menfessSender").value.trim() || "Anonim";
      const to = document.getElementById("menfessTarget").value.trim();
      const msg = document.getElementById("menfessContent").value.trim();

      if (!msg) {
        showToast("Pesan tidak boleh kosong!", "error");
        return;
      }

      const data = state.getData();
      const now = new Date();
      const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
      const dateStr = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

      data.menfess.unshift({
        id: "mnf-" + Date.now(),
        type: type,
        from: from,
        to: to,
        msg: msg,
        date: dateStr,
        approved: false // Must be moderated by admin!
      });

      state.saveData(data);
      menfessForm.reset();
      renderMenfess();
      showToast("Pesan terkirim! Menunggu moderasi dari pengurus kelas.", "success");
    });
  }

  // Add Task Form (Admin)
  const taskForm = document.getElementById("addTaskForm");
  if (taskForm) {
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const subject = document.getElementById("taskSubject").value;
      const title = document.getElementById("taskTitle").value;
      const desc = document.getElementById("taskDesc").value;
      const deadline = document.getElementById("taskDeadline").value;
      const type = document.getElementById("taskType").value;
      const priority = document.getElementById("taskPriority").value;

      const data = state.getData();
      data.tasks.unshift({
        id: "tsk-" + Date.now(),
        subject,
        title,
        desc,
        deadline,
        type,
        priority,
        completed: false
      });

      state.saveData(data);
      closeModal("taskModal");
      taskForm.reset();
      renderTasks();
      showToast("Tugas baru berhasil ditambahkan!", "success");
    });
  }

  // Add Announcement Form (Admin)
  const annForm = document.getElementById("addAnnouncementForm");
  if (annForm) {
    annForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("annTitle").value;
      const desc = document.getElementById("annDesc").value;
      const category = document.getElementById("annCategory").value;
      const author = document.getElementById("annAuthor").value || "Pengurus Kelas";

      const data = state.getData();
      const now = new Date();
      const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
      const dateStr = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

      data.announcements.unshift({
        id: "ann-" + Date.now(),
        title,
        desc,
        category,
        date: dateStr,
        author
      });

      state.saveData(data);
      closeModal("announcementModal");
      annForm.reset();
      renderAnnouncements();
      showToast("Pengumuman baru berhasil diposting!", "success");
    });
  }

  // Add Kas Transaction Form (Admin)
  const kasForm = document.getElementById("addKasForm");
  if (kasForm) {
    kasForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const desc = document.getElementById("kasDesc").value;
      const amount = parseInt(document.getElementById("kasAmount").value);
      const type = document.getElementById("kasType").value;
      const date = document.getElementById("kasDate").value || new Date().toISOString().split("T")[0];

      if (isNaN(amount) || amount <= 0) {
        showToast("Nominal kas tidak valid!", "error");
        return;
      }

      const data = state.getData();
      if (type === "in") {
        data.kas.income += amount;
        data.kas.balance += amount;
      } else {
        data.kas.expense += amount;
        data.kas.balance -= amount;
      }

      data.kas.transactions.unshift({
        id: "tx-" + Date.now(),
        date,
        desc,
        amount,
        type
      });

      state.saveData(data);
      closeModal("kasModal");
      kasForm.reset();
      renderKas();
      showToast("Catatan kas berhasil diperbarui!", "success");
    });
  }
}

// --- EVENT LISTENERS & SETUP ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Clock interval
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // 2. Day selector click events
  document.querySelectorAll(".day-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      activeScheduleDay = tab.dataset.day;
      renderSchedule();
    });
  });

  // 3. Task filter click events
  document.querySelectorAll(".task-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".task-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTaskFilter = btn.dataset.filter;
      renderTasks();
    });
  });

  // 4. Kas tab toggle
  document.querySelectorAll(".kas-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".kas-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentKasTab = btn.dataset.tab;
      renderKas();
    });
  });

  // 5. Menfess tab toggle
  document.querySelectorAll(".menfess-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".menfess-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMenfessTab = btn.dataset.tab;
      renderMenfess();
    });
  });

  // 6. Student search input
  const studentSearchInput = document.getElementById("studentSearch");
  if (studentSearchInput) {
    studentSearchInput.addEventListener("input", (e) => {
      studentSearchQuery = e.target.value;
      renderStudents();
    });
  }

  // 7. Mobile Drawer toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");

  function toggleDrawer(open) {
    if (mobileDrawer) mobileDrawer.classList.toggle("open", open);
    if (drawerOverlay) drawerOverlay.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "auto";
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", () => toggleDrawer(true));
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", () => toggleDrawer(false));
  if (drawerOverlay) drawerOverlay.addEventListener("click", () => toggleDrawer(false));

  document.querySelectorAll(".drawer-links a").forEach(link => {
    link.addEventListener("click", () => toggleDrawer(false));
  });

  // 8. Role Button
  const roleBadgeBtn = document.getElementById("roleBadgeBtn");
  if (roleBadgeBtn) {
    roleBadgeBtn.addEventListener("click", handleRoleToggle);
  }

  // Initial UI Render
  updateRoleUI();
  renderSchedule();
  renderTasks();
  renderKas();
  renderAnnouncements();
  renderStudents();
  renderMateri();
  renderGallery();
  renderMenfess();
  initForms();
});
