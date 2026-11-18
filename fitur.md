# Daftar Fitur Web-Class Final Project

### 1. Flow Awal & Otentikasi Peran (Role Gateway)
- Portal pemilihan peran sebelum masuk: **Guru/Admin** atau **Siswa**.
- Form login khusus guru (NIP/Username & Password) dengan proteksi rute (`requireAuth`).
- Form login & login instan profil siswa (Mikhail, Alby, Mufid, Nafiz).
- Session storage berbasis peran (`role: 'guru'` / `'siswa'`).
- Penanganan redirect otomatis & fungsi Logout.

### 2. Dashboard Admin Guru (`dashboard-admin.html`)
- Header informasi identitas guru & status login.
- Kelola **Jadwal Pelajaran** (Tampilan jam, mata pelajaran, guru pengampu, tombol tambah/edit).
- Kelola **Jadwal Piket** (Daftar pembagian regu piket Senin - Jumat).
- Tombol aksi cepat: Buat Pengumuman & intip tampilan sisi siswa.

### 3. Dashboard Siswa (`dashboard-siswa.html`)
- Header profil siswa aktif (nama siswa & NIS).
- Sorotan **Jadwal Pelajaran Hari Ini** & tabel lengkap jadwal mingguan.
- Widget **Jadwal Piket Personal** (otomatis mendeteksi giliran hari piket siswa yang login).
- Papan **Pengumuman Kelas**.

---
*Catatan: Struktur HTML, CSS, dan JS dibuat modular agar sangat mudah dirombak saat desain UI/UX baru diserahkan.*
