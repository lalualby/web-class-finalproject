# Web-Class Final Project

Proyek kolaborasi oleh **Alby, Mufid, Mikhail, dan Nafiz** bertema **Web-Class** sebagai tugas akhir/final project.

---

## 🚀 Alur Sistem (Flow Awal)

Sebelum masuk ke tampilan utama website kelas, pengunjung disambut oleh halaman **Portal Masuk**:

```
                 ┌────────────────────────────────┐
                 │       PORTAL UTAMA             │
                 │        index.html              │
                 └──────────────┬─────────────────┘
                                │
               ┌────────────────┴────────────────┐
               │                                 │
     [Masuk sebagai Guru]              [Masuk sebagai Siswa]
               │                                 │
               ▼                                 ▼
   ┌───────────────────────┐         ┌───────────────────────┐
   │  dashboard-admin.html │         │ dashboard-siswa.html  │
   │  - Kelola Jadwal      │         │ - Jadwal Hari Ini     │
   │  - Kelola Piket       │         │ - Deteksi Piket Kamu  │
   │  - Manajemen Kelas    │         │ - Pengumuman Kelas    │
   └───────────────────────┘         └───────────────────────┘
```

---

## 🔑 Akun Demo Siap Pakai

### 1. Akun Guru / Admin
- **Username:** `guru` (atau `admin`)
- **Password:** `123`
- *Tersedia tombol "1-Klik Masuk sebagai Guru Demo"*

### 2. Akun Siswa
- **Username:** `mikhail` / `alby` / `mufid` / `nafiz` / `siswa`
- **Password:** `123`
- *Tersedia tombol profil 1-klik untuk tiap nama anggota tim!*

---

## 📂 Struktur File

- **`index.html`**: Halaman portal awal / gerbang login dengan pemisah peran (Guru vs Siswa).
- **`dashboard-admin.html`**: Dashboard admin khusus guru/wali kelas (dilengkapi route protection).
- **`dashboard-siswa.html`**: Dashboard siswa untuk memantau jadwal dan piket.
- **`css/style.css`**: Styling utama (mudah disesuaikan saat revisi UI/UX).
- **`js/auth.js`**: Manajemen sesi, kredensial, role checking, dan redirect.
- **`fitur.md`**: Daftar fitur dan status pengembangannya.

---

## 🎨 Catatan untuk Integrasi Desain UI/UX

File HTML dan CSS telah dipisahkan secara modular dan dilengkapi ID serta semantic class yang jelas. Saat file Figma atau revisi desain UI/UX dikirimkan, tampilan bisa langsung diperbarui tanpa mengubah logika auth dan routing yang sudah berjalan.
