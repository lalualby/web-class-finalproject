/**
 * ========================================================
 * WEB-CLASS - AUTHENTICATION & SESSION CONTROLLER (auth.js)
 * ========================================================
 * File ini mengontrol alur login, session storage,
 * pemeriksaan peran (Role Guard), dan pengalihan rute (redirect).
 */

const AUTH_STORAGE_KEY = 'webclass_active_session';

// Data akun demo untuk pengujian alur
const DEMO_USERS = {
  guru: [
    {
      username: 'guru',
      password: '123',
      nama: 'Bapak/Ibu Guru (Wali Kelas)',
      role: 'guru',
      identitas: 'NIP: 19850115 201001 1 002',
      email: 'guru@sekolah.sch.id'
    },
    {
      username: 'admin',
      password: '123',
      nama: 'Admin Kelas',
      role: 'guru',
      identitas: 'ID: ADM-KELAS-01',
      email: 'admin@sekolah.sch.id'
    }
  ],
  siswa: [
    {
      username: 'mikhail',
      password: '123',
      nama: 'Mikhail',
      role: 'siswa',
      identitas: 'NIS: 24001 - No. Absen 01',
      kelas: 'Web-Class Project'
    },
    {
      username: 'alby',
      password: '123',
      nama: 'Alby',
      role: 'siswa',
      identitas: 'NIS: 24002 - No. Absen 02',
      kelas: 'Web-Class Project'
    },
    {
      username: 'mufid',
      password: '123',
      nama: 'Mufid',
      role: 'siswa',
      identitas: 'NIS: 24003 - No. Absen 03',
      kelas: 'Web-Class Project'
    },
    {
      username: 'nafiz',
      password: '123',
      nama: 'Nafiz',
      role: 'siswa',
      identitas: 'NIS: 24004 - No. Absen 04',
      kelas: 'Web-Class Project'
    },
    {
      username: 'siswa',
      password: '123',
      nama: 'Siswa Contoh',
      role: 'siswa',
      identitas: 'NIS: 24005 - No. Absen 05',
      kelas: 'Web-Class Project'
    }
  ]
};

const Auth = {
  /**
   * Mengambil sesi login saat ini
   */
  getSession() {
    const raw = sessionStorage.getItem(AUTH_STORAGE_KEY) || localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  },

  /**
   * Menyimpan sesi login
   */
  setSession(userData) {
    const sessionData = {
      ...userData,
      loginTime: new Date().toISOString()
    };
    // Simpan di sessionStorage (prioritas) dan localStorage (cadangan)
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionData));
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionData));
  },

  /**
   * Menghapus sesi login (Logout)
   */
  logout() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.location.href = 'index.html';
  },

  /**
   * Memproses login dengan username & password
   * Otomatis mendeteksi role jika akun valid
   */
  login(username, password, role) {
    const trimmedUser = (username || '').trim().toLowerCase();
    const trimmedPass = (password || '').trim();

    if (!trimmedUser || !trimmedPass) {
      return { success: false, message: 'Harap isi username/NIS dan password!' };
    }

    let matched = null;
    // Coba cari di role yang dipilih terlebih dahulu
    if (role && DEMO_USERS[role]) {
      matched = DEMO_USERS[role].find(
        (acc) => acc.username.toLowerCase() === trimmedUser && acc.password === trimmedPass
      );
    }

    // Jika tidak ditemukan di role terpilih, coba cari di seluruh akun (auto-detection)
    if (!matched) {
      const allAccounts = [...DEMO_USERS.guru, ...DEMO_USERS.siswa];
      matched = allAccounts.find(
        (acc) => acc.username.toLowerCase() === trimmedUser && acc.password === trimmedPass
      );
    }

    if (matched) {
      this.setSession(matched);
      return {
        success: true,
        user: matched,
        targetUrl: matched.role === 'guru' ? 'dashboard-admin.html' : 'dashboard-siswa.html'
      };
    } else {
      return {
        success: false,
        message: 'Username atau password salah! Silakan periksa kembali akun demo Anda.'
      };
    }
  },

  /**
   * Quick Login 1-klik untuk kemudahan demo
   */
  quickLogin(username, role) {
    let matched = null;
    if (role && DEMO_USERS[role]) {
      matched = DEMO_USERS[role].find((acc) => acc.username.toLowerCase() === username.toLowerCase());
    }
    if (!matched) {
      const allAccounts = [...DEMO_USERS.guru, ...DEMO_USERS.siswa];
      matched = allAccounts.find((acc) => acc.username.toLowerCase() === username.toLowerCase());
    }
    if (matched) {
      this.setSession(matched);
      window.location.href = matched.role === 'guru' ? 'dashboard-admin.html' : 'dashboard-siswa.html';
    }
  },

  /**
   * Route Guard: Memastikan hanya user yang berhak yang bisa mengakses halaman tertentu
   */
  requireAuth(expectedRole) {
    const session = this.getSession();

    // 1. Belum login sama sekali
    if (!session) {
      alert('Akses Dibatasi: Silakan login terlebih dahulu melalui tombol Login di beranda!');
      window.location.href = 'index.html';
      return null;
    }

    // 2. Jika halaman mewajibkan role 'guru' tapi yang login adalah 'siswa'
    if (expectedRole === 'guru' && session.role !== 'guru') {
      alert('Akses Ditolak: Halaman Dashboard Admin hanya dapat diakses oleh Guru/Wali Kelas.');
      window.location.href = 'dashboard-siswa.html';
      return null;
    }

    // Berhasil lolos guard
    return session;
  }
};

// Global expose agar bisa dipanggil dari inline onclick atau file JS lain
window.Auth = Auth;
window.DEMO_USERS = DEMO_USERS;
