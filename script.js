// ===================================================================
// CISCOLAB TKJ - ALL-IN-ONE STANDALONE ENGINE
// Menggabungkan Seluruh Data (Modul, Kamus, Kuis, Quest) & Logika Interaktif
// Standalone Bundle - Anti 404 Error pada GitHub Pages & Local Hosting
// ===================================================================

// ===================================================================
// 1. DATA: MODUL PRAKTIKUM CISCO IOS
// ===================================================================
// ===================================================================
// DATABASE MODUL PRAKTIKUM CISCO PACKET TRACER (SMK TKJ)
// ===================================================================

const modulesData = [
  {
    id: "modul-1",
    number: 1,
    title: "Pengenalan Mode Cisco IOS & Konfigurasi Dasar",
    category: "basic",
    categoryLabel: "Dasar Cisco IOS",
    level: "Pemula (Dasar)",
    levelClass: "badge-level-basic",
    estTime: "30 Menit",
    description: "Mempelajari hierarki mode CLI Cisco (User, Privileged, Global Config) serta konfigurasi hostname, password console, enable secret, dan banner MOTD.",
    icon: "terminal",
    devices: ["Router 2911", "Switch 2960", "PC Admin"],
    topology: {
      type: "visual-svg",
      summary: "1 PC Admin terhubung ke Cisco Router 2911 via kabel Console (RS232) dan kabel Ethernet (Gig0/0) untuk konfigurasi awal.",
      svg: `
<svg viewBox="0 0 740 220" xmlns="http://www.w3.org/2000/svg" class="topo-svg-img">
  <defs>
    <linearGradient id="g-blue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="g-router" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0070ba"/>
      <stop offset="100%" stop-color="#049fd9"/>
    </linearGradient>
    <linearGradient id="g-pc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0b2545" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Zone Bubble -->
  <rect x="20" y="20" width="700" height="180" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
  <text x="40" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#64748b" letter-spacing="1">ADMIN MANAGEMENT ZONE</text>

  <!-- Cables -->
  <!-- Blue Ethernet Cable -->
  <path d="M 190 100 L 530 100" stroke="#0284c7" stroke-width="3.5" stroke-dasharray="0" fill="none"/>
  <!-- Light Blue Console Cable (Curved) -->
  <path d="M 190 120 C 300 160, 420 160, 530 120" stroke="#00bceb" stroke-width="3" stroke-dasharray="5 5" fill="none"/>

  <!-- Cable Badges -->
  <rect x="305" y="86" width="130" height="24" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="370" y="102" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Straight-Through (LAN)</text>

  <rect x="315" y="145" width="110" height="22" rx="6" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
  <text x="370" y="160" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Console (RS232/RJ45)</text>

  <!-- DEVICE 1: PC ADMIN (Left) -->
  <g transform="translate(90, 60)" filter="url(#shadow)">
    <!-- Monitor Body -->
    <rect x="0" y="0" width="100" height="68" rx="8" fill="url(#g-pc)" stroke="#475569" stroke-width="2"/>
    <!-- Screen -->
    <rect x="7" y="7" width="86" height="52" rx="4" fill="#0f172a"/>
    <!-- Screen Graphics -->
    <path d="M 15 20 L 30 20 M 15 28 L 45 28 M 15 36 L 40 36" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="60" y="18" width="22" height="14" rx="2" fill="#0284c7"/>
    <!-- Stand -->
    <rect x="42" y="68" width="16" height="12" fill="#475569"/>
    <rect x="30" y="80" width="40" height="4" rx="2" fill="#334155"/>
    <!-- Labels -->
    <text x="50" y="104" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">PC-Admin</text>
    <rect x="5" y="112" width="90" height="18" rx="4" fill="#e2e8f0"/>
    <text x="50" y="125" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#0284c7" text-anchor="middle">192.168.1.10</text>
    <!-- Port Tag -->
    <circle cx="100" cy="40" r="4" fill="#10b981"/>
    <text x="108" y="38" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#475569">Fa0</text>
  </g>

  <!-- DEVICE 2: CISCO ROUTER (Right) -->
  <g transform="translate(530, 65)" filter="url(#shadow)">
    <!-- Router Cylinder Body -->
    <ellipse cx="60" cy="40" rx="55" ry="32" fill="url(#g-router)" stroke="#005073" stroke-width="2"/>
    <!-- Cisco 4-Arrows Cross -->
    <path d="M 60 22 L 60 58 M 38 40 L 82 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    <path d="M 54 26 L 60 20 L 66 26" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 54 54 L 60 60 L 66 54" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 44 34 L 36 40 L 44 46" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 76 34 L 84 40 L 76 46" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/>
    <!-- Labels -->
    <text x="60" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">R1-TKJ (Cisco 2911)</text>
    <rect x="15" y="106" width="90" height="18" rx="4" fill="#e0f2fe"/>
    <text x="60" y="119" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Gig0/0: .1.1</text>
    <!-- Port Tag -->
    <circle cx="0" cy="35" r="4" fill="#10b981"/>
    <text x="-12" y="32" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#475569" text-anchor="end">Gig0/0</text>
  </g>
</svg>
      `
    },
    ipTable: [
      { device: "Router-1", iface: "Gig0/0", ip: "192.168.1.1", netmask: "255.255.255.0", gateway: "-" },
      { device: "PC-Admin", iface: "FastEthernet0", ip: "192.168.1.10", netmask: "255.255.255.0", gateway: "192.168.1.1" }
    ],
    theory: {
      title: "Hierarki Mode Cisco IOS CLI",
      explanation: `
        Perangkat Cisco (Router & Switch) menggunakan sistem operasi berbasis command-line bernama <strong>Cisco IOS</strong>. 
        Ada 3 tingkatan mode hierarki utama yang wajib dipahami anak TKJ:
      `,
      points: [
        {
          term: "1. User EXEC Mode (Prompt: Router>)",
          desc: "Mode awal dengan hak akses terbatas. Hanya bisa menjalankan perintah monitoring dasar seperti <code>ping</code> dan <code>traceroute</code>."
        },
        {
          term: "2. Privileged EXEC Mode (Prompt: Router#)",
          desc: "Diakses dengan mengetik perintah <code>enable</code>. Digunakan untuk melihat seluruh informasi konfigurasi dengan perintah <code>show</code> (seperti <code>show running-config</code>) dan menyimpan konfigurasi (<code>write memory</code>)."
        },
        {
          term: "3. Global Configuration Mode (Prompt: Router(config)#)",
          desc: "Diakses dengan mengetik <code>configure terminal</code>. Mode untuk mengubah parameter sistem global seperti hostname, password, routing, dan masuk ke sub-mode interface."
        }
      ]
    },
    cliSteps: [
      {
        device: "Router-1 (R1)",
        deviceId: "r1",
        description: "Konfigurasi Hostname, Password Keamanan, Banner MOTD, dan IP Interface",
        commands: [
          { cmd: "enable", note: "Masuk dari User Mode ke Privileged Mode" },
          { cmd: "configure terminal", note: "Masuk ke Global Configuration Mode" },
          { cmd: "hostname R1-TKJ", note: "Mengganti nama router menjadi R1-TKJ" },
          { cmd: "enable secret cisco123", note: "Mengamankan akses privileged mode dengan enkripsi MD5 kuat" },
          { cmd: "line console 0", note: "Masuk ke konfigurasi port kabel console" },
          { cmd: "password admin123", note: "Menentukan password saat login kabel console" },
          { cmd: "login", note: "Mengaktifkan verifikasi password saat koneksi console" },
          { cmd: "exit", note: "Kembali ke mode global config" },
          { cmd: "banner motd # DILARANG MASUK TANPA IZIN ADMIN TKJ! #", note: "Membuat pesan peringatan keamanan saat login" },
          { cmd: "interface GigabitEthernet0/0", note: "Masuk ke sub-mode interface Gig0/0" },
          { cmd: "ip address 192.168.1.1 255.255.255.0", note: "Memberikan alamat IP dan Subnet Mask pada port" },
          { cmd: "no shutdown", note: "Wajib! Mengaktifkan port interface (default Cisco adalah shutdown/mati)" },
          { cmd: "exit", note: "Keluar dari interface" },
          { cmd: "do write memory", note: "Menyimpan konfigurasi dari RAM (running-config) ke NVRAM (startup-config)" }
        ]
      }
    ],
    verification: [
      {
        cmd: "show ip interface brief",
        purpose: "Mengecek status interface (apakah status dan protocol sudah 'up/up')",
        sampleOutput: `Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0     192.168.1.1     YES manual up                    up
GigabitEthernet0/1     unassigned      YES unset  administratively down down`
      },
      {
        cmd: "show running-config",
        purpose: "Melihat konfigurasi aktif yang sedang berjalan di RAM",
        sampleOutput: `hostname R1-TKJ
enable secret 5 $1$mERr$jLbv...
!`
      }
    ],
    quiz: {
      question: "Perintah apa yang wajib diketikkan agar port interface pada Router Cisco menyala (lampu indikator berubah menjadi hijau)?",
      options: [
        "enable",
        "no shutdown",
        "power on",
        "start interface"
      ],
      correctIndex: 1,
      explanation: "Port interface pada Router Cisco secara default berstatus 'administratively down'. Perintah 'no shutdown' digunakan untuk mengaktifkan port tersebut."
    }
  },

  {
    id: "modul-2",
    number: 2,
    title: "VLAN (Virtual LAN) & Switchport Trunking (802.1Q)",
    category: "switching",
    categoryLabel: "Switching (VLAN)",
    level: "Menengah",
    levelClass: "badge-level-intermediate",
    estTime: "45 Menit",
    description: "Memisahkan broadcast domain jaringan lokal ke dalam VLAN berbeda (VLAN 10 Guru, VLAN 20 Siswa) dan menghubungkan antar Switch melalui jalur Trunk.",
    icon: "layers",
    devices: ["Switch 2960 (2 Unit)", "PC Siswa (2 Unit)", "PC Guru (2 Unit)"],
    topology: {
      type: "visual-svg",
      summary: "Dua Switch Cisco 2960 terhubung via Trunk Fa0/1. PC Guru (VLAN 10) dan PC Siswa (VLAN 20) saling terhubung lintas switch.",
      svg: `
<svg viewBox="0 0 760 310" xmlns="http://www.w3.org/2000/svg" class="topo-svg-img">
  <defs>
    <linearGradient id="g-sw" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0070ba"/>
    </linearGradient>
  </defs>

  <!-- Zone VLAN 10 (Cyan Bubble) -->
  <rect x="20" y="15" width="340" height="130" rx="14" fill="#ecfeff" stroke="#a5f3fc" stroke-width="2"/>
  <text x="35" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0891b2">VLAN 10: GURU (192.168.10.0/24)</text>

  <!-- Zone VLAN 20 (Yellow Bubble) -->
  <rect x="20" y="160" width="340" height="135" rx="14" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
  <text x="35" y="183" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#d97706">VLAN 20: SISWA (192.168.20.0/24)</text>

  <!-- Right Zone VLAN 10 & 20 -->
  <rect x="400" y="15" width="340" height="130" rx="14" fill="#ecfeff" stroke="#a5f3fc" stroke-width="2"/>
  <text x="415" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0891b2">VLAN 10: GURU (SW2)</text>

  <rect x="400" y="160" width="340" height="135" rx="14" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
  <text x="415" y="183" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#d97706">VLAN 20: SISWA (SW2)</text>

  <!-- Trunk Link Between Switches -->
  <path d="M 270 150 L 490 150" stroke="#7c3aed" stroke-width="5" fill="none"/>
  <rect x="330" y="137" width="100" height="26" rx="6" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="380" y="154" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#6d28d9" text-anchor="middle">Trunk Fa0/1</text>

  <!-- Access Links Left -->
  <path d="M 120 90 L 210 135" stroke="#0891b2" stroke-width="2.5" fill="none"/>
  <path d="M 120 220 L 210 165" stroke="#d97706" stroke-width="2.5" fill="none"/>

  <!-- Access Links Right -->
  <path d="M 550 135 L 640 90" stroke="#0891b2" stroke-width="2.5" fill="none"/>
  <path d="M 550 165 L 640 220" stroke="#d97706" stroke-width="2.5" fill="none"/>

  <!-- SWITCH 1 -->
  <g transform="translate(195, 125)">
    <rect x="0" y="0" width="85" height="48" rx="6" fill="url(#g-sw)" stroke="#0b2545" stroke-width="2"/>
    <!-- Switch Arrows Icon -->
    <path d="M 20 24 L 65 24 M 35 15 L 20 24 L 35 33 M 50 15 L 65 24 L 50 33" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <text x="42" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Switch-1 (SW1)</text>
  </g>

  <!-- SWITCH 2 -->
  <g transform="translate(480, 125)">
    <rect x="0" y="0" width="85" height="48" rx="6" fill="url(#g-sw)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 20 24 L 65 24 M 35 15 L 20 24 L 35 33 M 50 15 L 65 24 L 50 33" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <text x="42" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Switch-2 (SW2)</text>
  </g>

  <!-- PC GURU 1 -->
  <g transform="translate(50, 50)">
    <rect x="0" y="0" width="70" height="45" rx="5" fill="#1e293b"/>
    <rect x="5" y="5" width="60" height="35" rx="3" fill="#0891b2"/>
    <text x="35" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">PC-Guru-1</text>
    <text x="35" y="72" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0891b2" text-anchor="middle">.10.2 (Fa0/2)</text>
  </g>

  <!-- PC SISWA 1 -->
  <g transform="translate(50, 195)">
    <rect x="0" y="0" width="70" height="45" rx="5" fill="#1e293b"/>
    <rect x="5" y="5" width="60" height="35" rx="3" fill="#d97706"/>
    <text x="35" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">PC-Siswa-1</text>
    <text x="35" y="72" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#d97706" text-anchor="middle">.20.2 (Fa0/3)</text>
  </g>

  <!-- PC GURU 2 -->
  <g transform="translate(635, 50)">
    <rect x="0" y="0" width="70" height="45" rx="5" fill="#1e293b"/>
    <rect x="5" y="5" width="60" height="35" rx="3" fill="#0891b2"/>
    <text x="35" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">PC-Guru-2</text>
    <text x="35" y="72" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0891b2" text-anchor="middle">.10.3 (Fa0/2)</text>
  </g>

  <!-- PC SISWA 2 -->
  <g transform="translate(635, 195)">
    <rect x="0" y="0" width="70" height="45" rx="5" fill="#1e293b"/>
    <rect x="5" y="5" width="60" height="35" rx="3" fill="#d97706"/>
    <text x="35" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">PC-Siswa-2</text>
    <text x="35" y="72" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#d97706" text-anchor="middle">.20.3 (Fa0/3)</text>
  </g>
</svg>
      `
    },
    ipTable: [
      { device: "PC-Guru-1", iface: "Fa0", ip: "192.168.10.2", netmask: "255.255.255.0", gateway: "192.168.10.1" },
      { device: "PC-Guru-2", iface: "Fa0", ip: "192.168.10.3", netmask: "255.255.255.0", gateway: "192.168.10.1" },
      { device: "PC-Siswa-1", iface: "Fa0", ip: "192.168.20.2", netmask: "255.255.255.0", gateway: "192.168.20.1" },
      { device: "PC-Siswa-2", iface: "Fa0", ip: "192.168.20.3", netmask: "255.255.255.0", gateway: "192.168.20.1" }
    ],
    theory: {
      title: "Konsep Dasar VLAN & Mode Port Switch",
      explanation: `
        <strong>VLAN (Virtual Local Area Network)</strong> adalah teknologi untuk memecah satu switch fisik menjadi beberapa broadcast domain logika terpisah.
        Manfaatnya: keamanan data, efisiensi lalu lintas broadcast, dan manajemen departemen yang rapi.
      `,
      points: [
        {
          term: "Access Port (Mode Access)",
          desc: "Port yang terhubung langsung ke perangkat akhir (PC/Laptop/Printer). Port ini hanya membawa lalu lintas untuk <strong>1 VLAN tunggal</strong> tanpa tag identitas 802.1Q."
        },
        {
          term: "Trunk Port (Mode Trunk)",
          desc: "Port yang menjadi jembatan antar Switch atau Switch ke Router. Mampu membawa lalu lintas <strong>banyak VLAN sekaligus</strong> dengan menyisipkan tag VLAN ID (standar IEEE 802.1Q)."
        }
      ]
    },
    cliSteps: [
      {
        device: "Switch-1 (SW1)",
        deviceId: "sw1",
        description: "Membuat VLAN Database, mendaftarkan Access Port, dan mengaktifkan Trunk Port",
        commands: [
          { cmd: "enable", note: "Masuk mode privileged" },
          { cmd: "configure terminal", note: "Masuk global config" },
          { cmd: "hostname SW1", note: "Ganti nama switch" },
          { cmd: "vlan 10", note: "Membuat ID VLAN 10 di database switch" },
          { cmd: "name GURU", note: "Memberi nama VLAN 10 sebagai GURU" },
          { cmd: "exit", note: "Keluar dari sub-mode vlan" },
          { cmd: "vlan 20", note: "Membuat ID VLAN 20" },
          { cmd: "name SISWA", note: "Memberi nama VLAN 20 sebagai SISWA" },
          { cmd: "exit", note: "Keluar dari sub-mode vlan" },
          { cmd: "interface FastEthernet0/2", note: "Masuk ke port yang terhubung ke PC Guru" },
          { cmd: "switchport mode access", note: "Mengatur port menjadi mode access (perangkat end-device)" },
          { cmd: "switchport access vlan 10", note: "Memasukkan port Fa0/2 ke dalam anggota VLAN 10" },
          { cmd: "exit", note: "Keluar interface" },
          { cmd: "interface FastEthernet0/3", note: "Masuk ke port yang terhubung ke PC Siswa" },
          { cmd: "switchport mode access", note: "Mengatur port menjadi mode access" },
          { cmd: "switchport access vlan 20", note: "Memasukkan port Fa0/3 ke dalam anggota VLAN 20" },
          { cmd: "exit", note: "Keluar interface" },
          { cmd: "interface FastEthernet0/1", note: "Masuk ke port penghubung antar switch" },
          { cmd: "switchport mode trunk", note: "Mengubah port menjadi TRUNK agar bisa lewat semua VLAN" },
          { cmd: "exit", note: "Keluar interface" },
          { cmd: "do write memory", note: "Simpan konfigurasi" }
        ]
      },
      {
        device: "Switch-2 (SW2)",
        deviceId: "sw2",
        description: "Lakukan konfigurasi yang sama persis di Switch-2",
        commands: [
          { cmd: "enable", note: "Masuk mode privileged" },
          { cmd: "configure terminal", note: "Masuk global config" },
          { cmd: "hostname SW2", note: "Ganti nama switch" },
          { cmd: "vlan 10", note: "Buat VLAN 10" },
          { cmd: "name GURU", note: "Beri nama GURU" },
          { cmd: "vlan 20", note: "Buat VLAN 20" },
          { cmd: "name SISWA", note: "Beri nama SISWA" },
          { cmd: "interface FastEthernet0/2", note: "Pilih port PC Guru" },
          { cmd: "switchport mode access", note: "Mode access" },
          { cmd: "switchport access vlan 10", note: "Set ke VLAN 10" },
          { cmd: "interface FastEthernet0/3", note: "Pilih port PC Siswa" },
          { cmd: "switchport mode access", note: "Mode access" },
          { cmd: "switchport access vlan 20", note: "Set ke VLAN 20" },
          { cmd: "interface FastEthernet0/1", note: "Pilih port penghubung" },
          { cmd: "switchport mode trunk", note: "Set port trunk" },
          { cmd: "do write memory", note: "Simpan konfigurasi" }
        ]
      }
    ],
    verification: [
      {
        cmd: "show vlan brief",
        purpose: "Melihat daftar VLAN aktif dan port mana saja yang menjadi anggotanya",
        sampleOutput: `VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/4, Fa0/5, Fa0/6...
10   GURU                             active    Fa0/2
20   SISWA                            active    Fa0/3`
      },
      {
        cmd: "show interfaces trunk",
        purpose: "Mengecek apakah port Fa0/1 berhasil berstatus Trunking (802.1q)",
        sampleOutput: `Port        Mode         Encapsulation  Status        Native vlan
Fa0/1       on           802.1q         trunking      1`
      }
    ],
    quiz: {
      question: "Apa perintah yang digunakan untuk mengizinkan sebuah port switch membawa lalu lintas banyak VLAN sekaligus ke switch lain?",
      options: [
        "switchport mode access",
        "switchport mode multi",
        "switchport mode trunk",
        "switchport allowed all"
      ],
      correctIndex: 2,
      explanation: "Mode 'trunk' digunakan untuk membuat jalur trunking antar switch/router yang mengizinkan banyak VLAN lewat melalui tagging frame IEEE 802.1Q."
    }
  },

  {
    id: "modul-3",
    number: 3,
    title: "Static Routing (ip route) & Multi-Router Connection",
    category: "routing",
    categoryLabel: "Routing (Static)",
    level: "Menengah (Wajib UKK)",
    levelClass: "badge-level-intermediate",
    estTime: "50 Menit",
    description: "Memahami sintaks dan logika kerja perintah 'ip route' untuk menghubungkan dua atau lebih jaringan LAN yang berbeda subnet melalui beberapa router.",
    icon: "git-commit",
    devices: ["Router 2911 (2 Unit)", "Switch (2 Unit)", "PC Client (2 Unit)"],
    topology: {
      type: "visual-svg",
      summary: "Router-1 (LAN 192.168.10.0/24) terhubung ke Router-2 (LAN 192.168.20.0/24) via WAN Serial/Gigabit Link (10.10.10.0/30).",
      svg: `
<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" class="topo-svg-img">
  <defs>
    <linearGradient id="g-rtr" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0070ba"/>
      <stop offset="100%" stop-color="#049fd9"/>
    </linearGradient>
    <linearGradient id="g-sw" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0070ba"/>
    </linearGradient>
  </defs>

  <!-- Left LAN 1 Bubble -->
  <rect x="15" y="20" width="230" height="220" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
  <text x="30" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">LAN 1 (192.168.10.0/24)</text>

  <!-- Right LAN 2 Bubble -->
  <rect x="515" y="20" width="230" height="220" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
  <text x="530" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">LAN 2 (192.168.20.0/24)</text>

  <!-- Middle WAN Cable (Red Lightning Line) -->
  <path d="M 285 110 L 475 110" stroke="#e2231a" stroke-width="4" stroke-dasharray="6 4" fill="none"/>
  <!-- Next Hop Badges -->
  <rect x="315" y="96" width="130" height="28" rx="6" fill="#fef2f2" stroke="#e2231a" stroke-width="1.5"/>
  <text x="380" y="114" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">WAN 10.10.10.0/30</text>

  <!-- Left LAN Connections -->
  <path d="M 75 160 L 75 105 L 225 105" stroke="#0284c7" stroke-width="2.5" fill="none"/>

  <!-- Right LAN Connections -->
  <path d="M 535 105 L 685 105 L 685 160" stroke="#0284c7" stroke-width="2.5" fill="none"/>

  <!-- PC 1 -->
  <g transform="translate(45, 150)">
    <rect x="0" y="0" width="60" height="40" rx="5" fill="#1e293b"/>
    <rect x="4" y="4" width="52" height="32" rx="3" fill="#0284c7"/>
    <text x="30" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">PC-1</text>
    <text x="30" y="67" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">.10.10</text>
  </g>

  <!-- ROUTER 1 (R1) -->
  <g transform="translate(225, 80)">
    <ellipse cx="40" cy="30" rx="36" ry="24" fill="url(#g-rtr)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 40 18 L 40 42 M 26 30 L 54 30" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <text x="40" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Router-1 (R1)</text>
    <text x="-10" y="24" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7">Gig0/0 (.10.1)</text>
    <text x="50" y="24" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#dc2626">Gig0/1 (.10.1)</text>
  </g>

  <!-- ROUTER 2 (R2) -->
  <g transform="translate(455, 80)">
    <ellipse cx="40" cy="30" rx="36" ry="24" fill="url(#g-rtr)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 40 18 L 40 42 M 26 30 L 54 30" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <text x="40" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Router-2 (R2)</text>
    <text x="-15" y="24" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#dc2626">Gig0/1 (.10.2)</text>
    <text x="55" y="24" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7">Gig0/0 (.20.1)</text>
  </g>

  <!-- PC 2 -->
  <g transform="translate(655, 150)">
    <rect x="0" y="0" width="60" height="40" rx="5" fill="#1e293b"/>
    <rect x="4" y="4" width="52" height="32" rx="3" fill="#0284c7"/>
    <text x="30" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">PC-2</text>
    <text x="30" y="67" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">.20.10</text>
  </g>

  <!-- Next Hop Annotations Below -->
  <path d="M 290 145 L 430 145" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" fill="none"/>
  <text x="380" y="165" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">ip route 192.168.20.0 255.255.255.0 10.10.10.2</text>
</svg>
      `
    },
    ipTable: [
      { device: "Router-1", iface: "Gig0/0 (LAN 1)", ip: "192.168.10.1", netmask: "255.255.255.0", gateway: "-" },
      { device: "Router-1", iface: "Gig0/1 (WAN)", ip: "10.10.10.1", netmask: "255.255.255.252", gateway: "-" },
      { device: "Router-2", iface: "Gig0/0 (LAN 2)", ip: "192.168.20.1", netmask: "255.255.255.0", gateway: "-" },
      { device: "Router-2", iface: "Gig0/1 (WAN)", ip: "10.10.10.2", netmask: "255.255.255.252", gateway: "-" },
      { device: "PC-1", iface: "FastEthernet0", ip: "192.168.10.10", netmask: "255.255.255.0", gateway: "192.168.10.1" },
      { device: "PC-2", iface: "FastEthernet0", ip: "192.168.20.10", netmask: "255.255.255.0", gateway: "192.168.20.1" }
    ],
    theory: {
      title: "Bedah Tuntas Perintah 'ip route' (Static Routing)",
      explanation: `
        Secara default, sebuah router <strong>hanya mengenal jaringan yang terhubung langsung ke dirinya (Directly Connected)</strong>. 
        Jika PC-1 ingin mengirim paket ke PC-2 di subnet lain, Router-1 akan membuang paket tersebut karena tidak ada jalur di tabel routingnya!
        <br><br>
        Untuk memberitahu router ke mana harus mengirim paket, kita menggunakan perintah <strong>Static Route</strong>:
      `,
      points: [
        {
          term: "Rumus Sintaks: ip route <Network_Tujuan> <SubnetMask_Tujuan> <Next_Hop_IP>",
          desc: `
            Contoh: <code>ip route 192.168.20.0 255.255.255.0 10.10.10.2</code><br>
            Artinya: <em>"Wahai Router-1, jika ada paket yang ditujukan ke jaringan <strong>192.168.20.0/24</strong>, tolong lempar/oper paket itu ke tetangga sebelah (Router-2) yang beralamat IP <strong>10.10.10.2</strong>"</em>.
          `
        },
        {
          term: "Apa itu Next-Hop IP?",
          desc: "Alamat IP pada interface router tetangga (pintu masuk router berikutnya). Ingat: Jangan masukkan IP router kita sendiri sebagai next-hop!"
        },
        {
          term: "Konsep Routing 2 Arah (Wajib Bolak-Balik!)",
          desc: "Kesalahan umum anak TKJ: hanya mengonfigurasi routing di Router-1, tapi lupa mengonfigurasi jalur pulang di Router-2. Akibatnya pesan ICMP Echo Request sampai, tapi Echo Reply tidak bisa kembali!"
        },
        {
          term: "Default Route (0.0.0.0 0.0.0.0)",
          desc: "Jalur cadangan untuk semua tujuan yang tidak ada di tabel routing (biasanya diarahkan ke ISP/Internet): <code>ip route 0.0.0.0 0.0.0.0 10.10.10.2</code>."
        }
      ]
    },
    cliSteps: [
      {
        device: "Router-1 (R1)",
        deviceId: "r1",
        description: "Konfigurasi IP Interface dan Static Route menuju LAN 2",
        commands: [
          { cmd: "enable", note: "Masuk mode privileged" },
          { cmd: "configure terminal", note: "Masuk global config" },
          { cmd: "hostname R1", note: "Ganti nama router" },
          { cmd: "interface GigabitEthernet0/0", note: "Masuk interface LAN 1" },
          { cmd: "ip address 192.168.10.1 255.255.255.0", note: "Set IP Gateway untuk PC LAN 1" },
          { cmd: "no shutdown", note: "Nyalakan port Gig0/0" },
          { cmd: "exit", note: "Keluar interface" },
          { cmd: "interface GigabitEthernet0/1", note: "Masuk interface WAN penghubung antar router" },
          { cmd: "ip address 10.10.10.1 255.255.255.252", note: "Set IP WAN subnet /30" },
          { cmd: "no shutdown", note: "Nyalakan port Gig0/1" },
          { cmd: "exit", note: "Keluar interface" },
          { cmd: "ip route 192.168.20.0 255.255.255.0 10.10.10.2", note: "PERINTAH KUNCI: Menambah rute ke LAN 2 via Next-Hop R2" },
          { cmd: "do write memory", note: "Simpan konfigurasi" }
        ]
      },
      {
        device: "Router-2 (R2)",
        deviceId: "r2",
        description: "Konfigurasi IP Interface dan Static Route pulang menuju LAN 1",
        commands: [
          { cmd: "enable", note: "Masuk mode privileged" },
          { cmd: "configure terminal", note: "Masuk global config" },
          { cmd: "hostname R2", note: "Ganti nama router" },
          { cmd: "interface GigabitEthernet0/0", note: "Masuk interface LAN 2" },
          { cmd: "ip address 192.168.20.1 255.255.255.0", note: "Set IP Gateway untuk PC LAN 2" },
          { cmd: "no shutdown", note: "Nyalakan port Gig0/0" },
          { cmd: "exit", note: "Keluar interface" },
          { cmd: "interface GigabitEthernet0/1", note: "Masuk interface WAN penghubung" },
          { cmd: "ip address 10.10.10.2 255.255.255.252", note: "Set IP WAN subnet /30" },
          { cmd: "no shutdown", note: "Nyalakan port Gig0/1" },
          { cmd: "exit", note: "Keluar interface" },
          { cmd: "ip route 192.168.10.0 255.255.255.0 10.10.10.1", note: "PERINTAH KUNCI: Menambah rute balik ke LAN 1 via Next-Hop R1" },
          { cmd: "do write memory", note: "Simpan konfigurasi" }
        ]
      }
    ],
    verification: [
      {
        cmd: "show ip route",
        purpose: "Melihat tabel routing di Router. Pastikan ada kode 'S' (Static Route)",
        sampleOutput: `Gateway of last resort is not set

     10.0.0.0/30 is subnetted, 1 subnets
C       10.10.10.0 is directly connected, GigabitEthernet0/1
C    192.168.10.0/24 is directly connected, GigabitEthernet0/0
S    192.168.20.0/24 [1/0] via 10.10.10.2`
      },
      {
        cmd: "ping 192.168.20.10 (Dari Command Prompt PC-1)",
        purpose: "Menguji konektivitas end-to-end antar komputer beda jaringan",
        sampleOutput: `Pinging 192.168.20.10 with 32 bytes of data:
Reply from 192.168.20.10: bytes=32 time<1ms TTL=126
Reply from 192.168.20.10: bytes=32 time<1ms TTL=126
Ping statistics: Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)`
      }
    ],
    quiz: {
      question: "Pada perintah 'ip route 172.16.0.0 255.255.0.0 192.168.1.2', apa arti dari alamat '192.168.1.2'?",
      options: [
        "IP address PC pengirim",
        "IP address Gateway tujuan",
        "Next-Hop IP (IP interface router tetangga tujuan pengiriman paket)",
        "Subnet mask jaringan lokal"
      ],
      correctIndex: 2,
      explanation: "Parameter ketiga pada perintah 'ip route' adalah Next-Hop IP, yaitu alamat IP interface router tetangga yang akan menerima dan meneruskan paket tersebut."
    }
  },

  {
    id: "modul-4",
    number: 4,
    title: "Inter-VLAN Routing (Router-on-a-Stick / Sub-Interfaces)",
    category: "switching",
    categoryLabel: "Inter-VLAN Routing",
    level: "Menengah ke Atas",
    levelClass: "badge-level-intermediate",
    estTime: "40 Menit",
    description: "Menghubungkan komunikasi antar VLAN yang berbeda menggunakan 1 kabel fisik ke Router dengan teknik Sub-Interface enkapsulasi dot1Q.",
    icon: "git-pull-request",
    devices: ["Router 2911 (1 Unit)", "Switch 2960 (1 Unit)", "PC VLAN 10 & 20"],
    topology: {
      type: "visual-svg",
      summary: "Router-on-a-Stick: 1 Kabel Trunk menghubungkan Switch 2960 ke Router 2911 (Gig0/0.10 dan Gig0/0.20).",
      svg: `
<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" class="topo-svg-img">
  <defs>
    <linearGradient id="g-rtr" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0070ba"/>
      <stop offset="100%" stop-color="#049fd9"/>
    </linearGradient>
    <linearGradient id="g-sw" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0070ba"/>
    </linearGradient>
  </defs>

  <!-- ROUTER AT TOP -->
  <g transform="translate(330, 20)">
    <ellipse cx="40" cy="28" rx="38" ry="24" fill="url(#g-rtr)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 40 16 L 40 40 M 26 28 L 54 28" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <text x="40" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Router 2911 (ROAS)</text>
    <text x="40" y="78" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">Sub-IF: Gig0/0.10 &amp; .20</text>
  </g>

  <!-- TRUNK CABLE (Middle Vertical) -->
  <path d="M 370 70 L 370 140" stroke="#7c3aed" stroke-width="5" fill="none"/>
  <rect x="385" y="95" width="130" height="24" rx="5" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="450" y="111" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="800" fill="#6d28d9" text-anchor="middle">1 Trunk Line (802.1Q)</text>

  <!-- SWITCH IN MIDDLE -->
  <g transform="translate(325, 140)">
    <rect x="0" y="0" width="90" height="42" rx="6" fill="url(#g-sw)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 22 21 L 68 21 M 38 12 L 22 21 L 38 30 M 52 12 L 68 21 L 52 30" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <text x="45" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Switch 2960</text>
  </g>

  <!-- ACCESS CABLES TO CLIENTS -->
  <path d="M 325 160 L 170 200" stroke="#0891b2" stroke-width="2.5" fill="none"/>
  <path d="M 415 160 L 570 200" stroke="#d97706" stroke-width="2.5" fill="none"/>

  <!-- PC 1 (VLAN 10) -->
  <g transform="translate(110, 185)">
    <rect x="0" y="0" width="120" height="75" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/>
    <text x="60" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0891b2" text-anchor="middle">PC-1 (VLAN 10 GURU)</text>
    <text x="60" y="42" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">IP: 192.168.10.10</text>
    <text x="60" y="58" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">GW: 192.168.10.1</text>
  </g>

  <!-- PC 2 (VLAN 20) -->
  <g transform="translate(510, 185)">
    <rect x="0" y="0" width="120" height="75" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="60" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#d97706" text-anchor="middle">PC-2 (VLAN 20 SISWA)</text>
    <text x="60" y="42" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">IP: 192.168.20.10</text>
    <text x="60" y="58" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">GW: 192.168.20.1</text>
  </g>
</svg>
      `
    },
    ipTable: [
      { device: "Router-1", iface: "Gig0/0.10", ip: "192.168.10.1", netmask: "255.255.255.0", gateway: "-" },
      { device: "Router-1", iface: "Gig0/0.20", ip: "192.168.20.1", netmask: "255.255.255.0", gateway: "-" },
      { device: "PC-1", iface: "Fa0 (VLAN 10)", ip: "192.168.10.10", netmask: "255.255.255.0", gateway: "192.168.10.1" },
      { device: "PC-2", iface: "Fa0 (VLAN 20)", ip: "192.168.20.10", netmask: "255.255.255.0", gateway: "192.168.20.1" }
    ],
    theory: {
      title: "Konsep Router-on-a-Stick (ROAS)",
      explanation: `
        Secara default, komputer di <strong>VLAN 10 tidak bisa berkomunikasi dengan VLAN 20</strong> karena terpisah broadcast domain di Layer 2. 
        Untuk menghubungkannya dibutuhkan perangkat Layer 3 (Router).
        <br><br>
        Alih-alih memakai banyak kabel fisik, kita menggunakan teknik <strong>Router-on-a-Stick</strong>:
      `,
      points: [
        {
          term: "Sub-Interface (Port Virtual)",
          desc: "Membagi satu port fisik router (contoh: Gig0/0) menjadi beberapa interface virtual logis seperti <code>Gig0/0.10</code> dan <code>Gig0/0.20</code>."
        },
        {
          term: "Enkapsulasi 802.1Q (encapsulation dot1Q)",
          desc: "Memberitahu sub-interface router untuk mengenali dan memproses tag VLAN tertentu (contoh: <code>encapsulation dot1Q 10</code> untuk membaca paket dari VLAN 10)."
        }
      ]
    },
    cliSteps: [
      {
        device: "Router-1 (R1)",
        deviceId: "r1",
        description: "Nyalakan port utama tanpa IP, buat sub-interface dot1Q",
        commands: [
          { cmd: "enable", note: "Masuk privileged mode" },
          { cmd: "configure terminal", note: "Masuk global config" },
          { cmd: "interface GigabitEthernet0/0", note: "Masuk ke port fisik utama" },
          { cmd: "no shutdown", note: "Nyalakan port fisik (JANGAN beri IP di port utama!)" },
          { cmd: "exit", note: "Keluar interface utama" },
          { cmd: "interface GigabitEthernet0/0.10", note: "Membuat sub-interface virtual untuk VLAN 10" },
          { cmd: "encapsulation dot1Q 10", note: "Mengaktifkan enkapsulasi trunk 802.1Q untuk VLAN ID 10" },
          { cmd: "ip address 192.168.10.1 255.255.255.0", note: "Memberikan IP Gateway untuk VLAN 10" },
          { cmd: "exit", note: "Keluar sub-interface" },
          { cmd: "interface GigabitEthernet0/0.20", note: "Membuat sub-interface virtual untuk VLAN 20" },
          { cmd: "encapsulation dot1Q 20", note: "Mengaktifkan enkapsulasi untuk VLAN ID 20" },
          { cmd: "ip address 192.168.20.1 255.255.255.0", note: "Memberikan IP Gateway untuk VLAN 20" },
          { cmd: "exit", note: "Keluar sub-interface" },
          { cmd: "do write memory", note: "Simpan konfigurasi" }
        ]
      },
      {
        device: "Switch-1 (SW1)",
        deviceId: "sw1",
        description: "Pastikan port yang mengarah ke router diset ke mode TRUNK",
        commands: [
          { cmd: "enable", note: "Masuk privileged" },
          { cmd: "configure terminal", note: "Masuk config" },
          { cmd: "interface FastEthernet0/1", note: "Port switch yang nyolok ke Gig0/0 Router" },
          { cmd: "switchport mode trunk", note: "Wajib diset TRUNK agar semua tag VLAN bisa lewat ke Router" },
          { cmd: "do write memory", note: "Simpan konfigurasi" }
        ]
      }
    ],
    verification: [
      {
        cmd: "show ip route",
        purpose: "Mengecek apakah sub-interface sudah directly connected di tabel routing",
        sampleOutput: `C    192.168.10.0/24 is directly connected, GigabitEthernet0/0.10
C    192.168.20.0/24 is directly connected, GigabitEthernet0/0.20`
      }
    ],
    quiz: {
      question: "Sebelum memberikan alamat IP pada sub-interface 'Gig0/0.10', perintah apa yang wajib diketik terlebih dahulu?",
      options: [
        "no shutdown",
        "encapsulation dot1Q 10",
        "switchport mode access",
        "ip routing"
      ],
      correctIndex: 1,
      explanation: "Perintah 'encapsulation dot1Q <vlan-id>' harus dijalankan terlebih dahulu sebelum perintah 'ip address' dapat diterima pada sub-interface Cisco Router."
    }
  },

  {
    id: "modul-5",
    number: 5,
    title: "DHCP Server & IP Helper-Address pada Cisco Router",
    category: "services",
    categoryLabel: "Network Services",
    level: "Menengah",
    levelClass: "badge-level-intermediate",
    estTime: "35 Menit",
    description: "Mengonfigurasi Cisco Router agar dapat membagikan IP Address, Default Gateway, dan DNS Server secara otomatis ke seluruh PC klien.",
    icon: "server",
    devices: ["Router 2911 (DHCP Server)", "Switch 2960", "Laptop & PC Client"],
    topology: {
      type: "visual-svg",
      summary: "Router 2911 bertindak sebagai Gateway & DHCP Server yang membagikan IP address pool (192.168.1.0/24) ke PC/Laptop klien.",
      svg: `
<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" class="topo-svg-img">
  <defs>
    <linearGradient id="g-rtr" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0070ba"/>
      <stop offset="100%" stop-color="#049fd9"/>
    </linearGradient>
    <linearGradient id="g-sw" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0070ba"/>
    </linearGradient>
  </defs>

  <!-- ROUTER DHCP SERVER TOP -->
  <g transform="translate(330, 20)">
    <ellipse cx="40" cy="28" rx="38" ry="24" fill="url(#g-rtr)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 40 16 L 40 40 M 26 28 L 54 28" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <text x="40" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Router 2911 (DHCP Server)</text>
    <text x="40" y="78" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#059669" text-anchor="middle">Pool: 192.168.1.0/24</text>
  </g>

  <!-- Uplink Line -->
  <path d="M 370 70 L 370 135" stroke="#0284c7" stroke-width="3.5" fill="none"/>
  <text x="380" y="105" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7">Gig0/0 (192.168.1.1)</text>

  <!-- SWITCH -->
  <g transform="translate(325, 135)">
    <rect x="0" y="0" width="90" height="40" rx="6" fill="url(#g-sw)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 22 20 L 68 20 M 38 11 L 22 20 L 38 29 M 52 11 L 68 20 L 52 29" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <text x="45" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">Switch 2960</text>
  </g>

  <!-- Downlink Cables -->
  <path d="M 330 155 L 140 205" stroke="#10b981" stroke-width="2.5" fill="none"/>
  <path d="M 370 175 L 370 205" stroke="#10b981" stroke-width="2.5" fill="none"/>
  <path d="M 410 155 L 600 205" stroke="#10b981" stroke-width="2.5" fill="none"/>

  <!-- PC 1 -->
  <g transform="translate(85, 195)">
    <rect x="0" y="0" width="110" height="65" rx="6" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
    <text x="55" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">PC-1 (DHCP)</text>
    <text x="55" y="38" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">IP: 192.168.1.11</text>
    <text x="55" y="52" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600" fill="#64748b" text-anchor="middle">GW: 192.168.1.1</text>
  </g>

  <!-- PC 2 -->
  <g transform="translate(315, 195)">
    <rect x="0" y="0" width="110" height="65" rx="6" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
    <text x="55" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">PC-2 (DHCP)</text>
    <text x="55" y="38" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">IP: 192.168.1.12</text>
    <text x="55" y="52" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600" fill="#64748b" text-anchor="middle">GW: 192.168.1.1</text>
  </g>

  <!-- LAPTOP -->
  <g transform="translate(545, 195)">
    <rect x="0" y="0" width="110" height="65" rx="6" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
    <text x="55" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">Laptop (DHCP)</text>
    <text x="55" y="38" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">IP: 192.168.1.13</text>
    <text x="55" y="52" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="600" fill="#64748b" text-anchor="middle">GW: 192.168.1.1</text>
  </g>
</svg>
      `
    },
    ipTable: [
      { device: "Router-1", iface: "Gig0/0", ip: "192.168.1.1", netmask: "255.255.255.0", gateway: "-" },
      { device: "PC Klien", iface: "DHCP Mode", ip: "192.168.1.11 - .254", netmask: "255.255.255.0", gateway: "192.168.1.1" }
    ],
    theory: {
      title: "Prinsip Kerja DHCP Server di Cisco IOS",
      explanation: `
        <strong>DHCP (Dynamic Host Configuration Protocol)</strong> mengotomatiskan pemberian alamat IP ke perangkat klien melalui proses 4 tahap <strong>DORA</strong> (Discover, Offer, Request, Acknowledge).
      `,
      points: [
        {
          term: "Excluded Address (Pengecualian IP)",
          desc: "Alamat IP yang tidak boleh dibagikan ke klien karena digunakan oleh router, printer, atau server: <code>ip dhcp excluded-address 192.168.1.1 192.168.1.10</code>."
        },
        {
          term: "DHCP Pool (Kumpulan Alamat IP)",
          desc: "Wadah pendefinisian subnet, gateway, dan DNS server: <code>network</code>, <code>default-router</code>, dan <code>dns-server</code>."
        }
      ]
    },
    cliSteps: [
      {
        device: "Router-1 (DHCP Server)",
        deviceId: "r1",
        description: "Membuat IP Excluded dan Konfigurasi DHCP Pool",
        commands: [
          { cmd: "enable", note: "Masuk privileged" },
          { cmd: "configure terminal", note: "Masuk global config" },
          { cmd: "ip dhcp excluded-address 192.168.1.1 192.168.1.10", note: "PENTING: Amankan IP .1 s/d .10 agar tidak dibagikan ke klien" },
          { cmd: "ip dhcp pool POOL-TKJ-LAN", note: "Membuat pool baru bernama POOL-TKJ-LAN" },
          { cmd: "network 192.168.1.0 255.255.255.0", note: "Menentukan subnet jaringan yang akan dibagikan" },
          { cmd: "default-router 192.168.1.1", note: "Menentukan alamat Default Gateway untuk klien" },
          { cmd: "dns-server 8.8.8.8 1.1.1.1", note: "Menentukan alamat DNS Server (Google & Cloudflare)" },
          { cmd: "exit", note: "Keluar dari sub-mode dhcp config" },
          { cmd: "do write memory", note: "Simpan konfigurasi" }
        ]
      }
    ],
    verification: [
      {
        cmd: "show ip dhcp binding",
        purpose: "Melihat daftar IP yang telah berhasil dipinjamkan (leased) ke PC klien lengkap dengan MAC Addressnya",
        sampleOutput: `IP address       Client-ID/              Lease expiration        Type
                 Hardware address
192.168.1.11     0001.42A3.8B21         --                      Automatic
192.168.1.12     0050.7966.0B03         --                      Automatic`
      }
    ],
    quiz: {
      question: "Perintah apa yang digunakan untuk mencegah router membagikan IP Gateway 192.168.1.1 ke komputer klien?",
      options: [
        "ip dhcp block 192.168.1.1",
        "ip dhcp excluded-address 192.168.1.1",
        "no ip dhcp pool 192.168.1.1",
        "ip dhcp deny 192.168.1.1"
      ],
      correctIndex: 1,
      explanation: "Perintah 'ip dhcp excluded-address' digunakan untuk mengecualikan satu atau rentang alamat IP agar tidak dibagikan secara otomatis oleh DHCP Server."
    }
  },

  {
    id: "modul-6",
    number: 6,
    title: "Dynamic Routing OSPF (Open Shortest Path First)",
    category: "routing",
    categoryLabel: "Routing (Dinamis)",
    level: "Mahir (Advanced)",
    levelClass: "badge-level-advanced",
    estTime: "55 Menit",
    description: "Konfigurasi protokol routing dinamis Link-State OSPF Single Area (Area 0) dengan perhitungan Wildcard Mask untuk jaringan skala besar.",
    icon: "activity",
    devices: ["Router 2911 (3 Unit)", "Switch (3 Unit)", "PC Client (3 Unit)"],
    topology: {
      type: "visual-svg",
      summary: "3 Router Cisco terhubung dalam topologi segitiga (Mesh WAN) di Backbone Area 0 OSPF.",
      svg: `
<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" class="topo-svg-img">
  <defs>
    <linearGradient id="g-rtr" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0070ba"/>
      <stop offset="100%" stop-color="#049fd9"/>
    </linearGradient>
  </defs>

  <!-- Area 0 Backbone Bubble -->
  <ellipse cx="380" cy="150" rx="350" ry="135" fill="#fdf4ff" stroke="#f0abfc" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="380" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#c026d3" text-anchor="middle">OSPF BACKBONE AREA 0</text>

  <!-- Triangle WAN Links -->
  <path d="M 380 75 L 200 210" stroke="#e2231a" stroke-width="3.5" stroke-dasharray="6 4" fill="none"/>
  <path d="M 380 75 L 560 210" stroke="#e2231a" stroke-width="3.5" stroke-dasharray="6 4" fill="none"/>
  <path d="M 200 210 L 560 210" stroke="#e2231a" stroke-width="3.5" stroke-dasharray="6 4" fill="none"/>

  <!-- WAN Labels -->
  <rect x="230" y="115" width="95" height="22" rx="4" fill="#ffffff" stroke="#e2231a"/>
  <text x="277" y="130" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">10.10.10.0/30</text>

  <rect x="435" y="115" width="95" height="22" rx="4" fill="#ffffff" stroke="#e2231a"/>
  <text x="482" y="130" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">20.20.20.0/30</text>

  <rect x="332" y="218" width="95" height="22" rx="4" fill="#ffffff" stroke="#e2231a"/>
  <text x="380" y="233" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">30.30.30.0/30</text>

  <!-- ROUTER 1 (Top) -->
  <g transform="translate(345, 45)">
    <ellipse cx="35" cy="25" rx="32" ry="20" fill="url(#g-rtr)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 35 15 L 35 35 M 22 25 L 48 25" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
    <text x="35" y="-5" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">R1-TKJ (ID: 1.1.1.1)</text>
    <text x="35" y="58" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">LAN: 192.168.10.0/24</text>
  </g>

  <!-- ROUTER 2 (Bottom Left) -->
  <g transform="translate(165, 185)">
    <ellipse cx="35" cy="25" rx="32" ry="20" fill="url(#g-rtr)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 35 15 L 35 35 M 22 25 L 48 25" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
    <text x="35" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">R2-TKJ (ID: 2.2.2.2)</text>
    <text x="35" y="70" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">LAN: .20.0/24</text>
  </g>

  <!-- ROUTER 3 (Bottom Right) -->
  <g transform="translate(525, 185)">
    <ellipse cx="35" cy="25" rx="32" ry="20" fill="url(#g-rtr)" stroke="#0b2545" stroke-width="2"/>
    <path d="M 35 15 L 35 35 M 22 25 L 48 25" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
    <text x="35" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">R3-TKJ (ID: 3.3.3.3)</text>
    <text x="35" y="70" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">LAN: .30.0/24</text>
  </g>
</svg>
      `
    },
    ipTable: [
      { device: "Router-1", iface: "Gig0/0 (LAN)", ip: "192.168.10.1", netmask: "255.255.255.0", gateway: "-" },
      { device: "Router-2", iface: "Gig0/0 (LAN)", ip: "192.168.20.1", netmask: "255.255.255.0", gateway: "-" },
      { device: "Router-3", iface: "Gig0/0 (LAN)", ip: "192.168.30.1", netmask: "255.255.255.0", gateway: "-" }
    ],
    theory: {
      title: "Konsep OSPF & Cara Menghitung Wildcard Mask",
      explanation: `
        <strong>OSPF (Open Shortest Path First)</strong> adalah protokol routing dinamis berbasis <em>Link-State</em> yang menggunakan algoritma Dijkstra (Shortest Path First) untuk mencari jalur tercepat berdasarkan metric Cost/Bandwidth.
      `,
      points: [
        {
          term: "Apa itu Process ID & Area 0?",
          desc: "<code>router ospf 10</code> (10 adalah process id lokal). <code>area 0</code> adalah Area Backbone wajib tempat seluruh router bertukar paket LSA."
        },
        {
          term: "Cara Menghitung Wildcard Mask (Kebalikan Subnet Mask)",
          desc: `
            Rumus: <code>255.255.255.255 dikurangi [Subnet Mask]</code><br>
            - Untuk /24 (255.255.255.0) = <code>0.0.0.255</code><br>
            - Untuk /30 (255.255.255.252) = <code>0.0.0.3</code><br>
            - Untuk /16 (255.255.0.0) = <code>0.0.255.255</code>
          `
        }
      ]
    },
    cliSteps: [
      {
        device: "Router-1 (R1)",
        deviceId: "r1",
        description: "Mengaktifkan proses OSPF dan mendaftarkan jaringan LAN serta WAN",
        commands: [
          { cmd: "enable", note: "Masuk privileged mode" },
          { cmd: "configure terminal", note: "Masuk global config" },
          { cmd: "router ospf 10", note: "Mengaktifkan routing OSPF dengan Process ID 10" },
          { cmd: "router-id 1.1.1.1", note: "Memberikan identitas unik Router-ID 1.1.1.1" },
          { cmd: "network 192.168.10.0 0.0.0.255 area 0", note: "Daftarkan LAN 1 (Wildcard /24) ke Backbone Area 0" },
          { cmd: "network 10.10.10.0 0.0.0.3 area 0", note: "Daftarkan WAN R1-R2 (Wildcard /30) ke Area 0" },
          { cmd: "network 20.20.20.0 0.0.0.3 area 0", note: "Daftarkan WAN R1-R3 (Wildcard /30) ke Area 0" },
          { cmd: "exit", note: "Keluar OSPF config" },
          { cmd: "do write memory", note: "Simpan konfigurasi" }
        ]
      }
    ],
    verification: [
      {
        cmd: "show ip ospf neighbor",
        purpose: "Mengecek apakah router tetangga sudah terdeteksi dan berstatus 'FULL/DR' atau 'FULL/BDR'",
        sampleOutput: `Neighbor ID     Pri   State           Dead Time   Address         Interface
2.2.2.2           1   FULL/DR         00:00:33    10.10.10.2      GigabitEthernet0/1
3.3.3.3           1   FULL/BDR        00:00:38    20.20.20.2      GigabitEthernet0/2`
      },
      {
        cmd: "show ip route",
        purpose: "Mengecek tabel routing. Rute yang dipelajari via OSPF akan ditandai dengan huruf 'O'",
        sampleOutput: `O    192.168.20.0/24 [110/2] via 10.10.10.2, 00:02:15, GigabitEthernet0/1
O    192.168.30.0/24 [110/2] via 20.20.20.2, 00:02:15, GigabitEthernet0/2`
      }
    ],
    quiz: {
      question: "Berapakah nilai Wildcard Mask yang tepat untuk subnet mask 255.255.255.240 (/28)?",
      options: [
        "0.0.0.255",
        "0.0.0.15",
        "0.0.0.31",
        "255.255.255.0"
      ],
      correctIndex: 1,
      explanation: "Wildcard mask dihitung dengan 255.255.255.255 - 255.255.255.240 = 0.0.0.15."
    }
  }
];


// ===================================================================
// 2. DATA: KAMUS PERINTAH CISCO IOS CLI
// ===================================================================
// ===================================================================
// KAMUS PERINTAH CISCO IOS CLI (SMK TKJ CHEAT SHEET)
// ===================================================================

const ciscoCommands = [
  {
    category: "routing",
    command: "ip route <network> <netmask> <next-hop / exit-int>",
    mode: "Global Configuration (config)",
    purpose: "Menambahkan rute statis (Static Route) ke tabel routing untuk jaringan tertentu.",
    syntax: "ip route 192.168.2.0 255.255.255.0 10.10.10.2",
    explanation: "Memberitahu router bahwa jika ada paket yang menuju ke subnet 192.168.2.0/24, kirimkan paket tersebut ke router tetangga di IP 10.10.10.2.",
    tips: "Next-hop adalah IP interface router tetangga yang terhubung langsung, BUKAN IP router lokal."
  },
  {
    category: "routing",
    command: "ip route 0.0.0.0 0.0.0.0 <next-hop>",
    mode: "Global Configuration (config)",
    purpose: "Menentukan jalur Default Route (Gateway of Last Resort).",
    syntax: "ip route 0.0.0.0 0.0.0.0 192.168.1.254",
    explanation: "Jalur cadangan untuk semua alamat IP tujuan di luar subnet internal yang tidak terdaftar di tabel routing (biasanya diarahkan ke ISP/Internet).",
    tips: "0.0.0.0 0.0.0.0 mewakili 'seluruh dunia / any network'."
  },
  {
    category: "switching",
    command: "switchport mode trunk",
    mode: "Interface Configuration (config-if)",
    purpose: "Mengubah port switch menjadi mode Trunk (IEEE 802.1Q).",
    syntax: "interface fa0/1\nswitchport mode trunk",
    explanation: "Mengizinkan port membawa lalu lintas banyak VLAN sekaligus antar-switch atau dari switch ke router.",
    tips: "Wajib digunakan pada kabel penghubung antar-switch atau kabel Router-on-a-Stick."
  },
  {
    category: "switching",
    command: "switchport mode access",
    mode: "Interface Configuration (config-if)",
    purpose: "Mengubah port switch menjadi mode Access untuk perangkat akhir (PC/Printer).",
    syntax: "interface fa0/2\nswitchport mode access\nswitchport access vlan 10",
    explanation: "Port hanya membawa data untuk 1 VLAN tunggal tanpa tag 802.1Q ke komputer pengguna.",
    tips: "Gunakan 'switchport access vlan <id>' setelah mengatur mode access."
  },
  {
    category: "switching",
    command: "vlan <vlan-id>",
    mode: "Global Configuration (config)",
    purpose: "Membuat ID VLAN baru di database switch.",
    syntax: "vlan 20\nname SISWA_LAB",
    explanation: "Membuat segmentasi broadcast domain logika baru pada switch dengan ID antara 1 s/d 4094.",
    tips: "Berikan nama yang deskriptif dengan perintah 'name <nama>' agar mudah diidentifikasi."
  },
  {
    category: "routing",
    command: "encapsulation dot1Q <vlan-id>",
    mode: "Sub-Interface Configuration (config-subif)",
    purpose: "Mengaktifkan enkapsulasi trunk 802.1Q pada sub-interface Router-on-a-Stick.",
    syntax: "interface gig0/0.10\nencapsulation dot1Q 10\nip address 192.168.10.1 255.255.255.0",
    explanation: "Wajib dijalankan sebelum memberi IP pada sub-interface agar router mengenali tag paket dari VLAN tertentu.",
    tips: "Angka setelah dot1Q harus sesuai dengan ID VLAN di switch."
  },
  {
    category: "basic",
    command: "no shutdown",
    mode: "Interface Configuration (config-if)",
    purpose: "Mengaktifkan (menyalakan) port interface yang sebelumnya mati.",
    syntax: "interface gig0/0\nno shutdown",
    explanation: "Port Cisco Router secara bawaan pabrik dalam status mati (administratively down). Perintah ini mengubah status menjadi UP/UP.",
    tips: "Gunakan 'shutdown' jika ingin mematikan port untuk keamanan atau perbaikan."
  },
  {
    category: "basic",
    command: "enable secret <password>",
    mode: "Global Configuration (config)",
    purpose: "Mengamankan akses Privileged Mode (Router#) dengan enkripsi MD5 / SHA-256.",
    syntax: "enable secret tkj2026aman",
    explanation: "Password dienkripsi secara otomatis sehingga tidak terbaca dalam teks polos di file running-config.",
    tips: "Lebih aman dibandingkan 'enable password' yang tidak terenkripsi."
  },
  {
    category: "basic",
    command: "write memory (wr) / copy running-config startup-config",
    mode: "Privileged EXEC (#)",
    purpose: "Menyimpan konfigurasi aktif dari RAM ke penyimpanan permanen NVRAM.",
    syntax: "write memory",
    explanation: "Jika router mati lampu atau direstart, konfigurasi tidak akan hilang karena sudah tersimpan di startup-config.",
    tips: "Dapat disingkat dengan mengetik 'wr' di mode privileged (#), atau 'do wr' di mode config."
  },
  {
    category: "monitoring",
    command: "show ip interface brief",
    mode: "Privileged EXEC (#)",
    purpose: "Melihat ringkasan status seluruh port, alamat IP, dan status protocol Layer 1 & 2.",
    syntax: "show ip interface brief",
    explanation: "Perintah diagnostik terpenting di Cisco. Memastikan port 'up' dan protocol 'up'.",
    tips: "Ketik 'do show ip interface brief' jika sedang berada di mode config."
  },
  {
    category: "monitoring",
    command: "show ip route",
    mode: "Privileged EXEC (#)",
    purpose: "Menampilkan tabel routing aktif beserta kode sumber (C=Connected, S=Static, O=OSPF, R=RIP).",
    syntax: "show ip route",
    explanation: "Melihat rute apa saja yang diketahui oleh router untuk meneruskan paket ke tujuan.",
    tips: "Jika rute tidak muncul, periksa apakah interface gateway/next-hop dalam kondisi UP."
  },
  {
    category: "monitoring",
    command: "show vlan brief",
    mode: "Privileged EXEC (#)",
    purpose: "Menampilkan daftar seluruh VLAN aktif di switch beserta alokasi portnya.",
    syntax: "show vlan brief",
    explanation: "Mengecek apakah VLAN 10, 20, dll sudah terdaftar dan port PC sudah masuk ke VLAN yang benar.",
    tips: "Port Trunk tidak akan muncul di tabel ini, melainkan di 'show interfaces trunk'."
  },
  {
    category: "services",
    command: "ip dhcp pool <nama-pool>",
    mode: "Global Configuration (config)",
    purpose: "Membuat kumpulan alamat IP otomatis (DHCP Server Pool).",
    syntax: "ip dhcp pool POOL-GURU\nnetwork 192.168.10.0 255.255.255.0\ndefault-router 192.168.10.1\ndns-server 8.8.8.8",
    explanation: "Mendefinisikan subnet, gateway, dan DNS server yang akan dibagikan ke PC klien secara otomatis.",
    tips: "Jangan lupa amankan IP Gateway dengan 'ip dhcp excluded-address' sebelum mengaktifkan pool."
  },
  {
    category: "routing",
    command: "router ospf <process-id>",
    mode: "Global Configuration (config)",
    purpose: "Mengaktifkan protokol routing dinamis OSPF Link-State.",
    syntax: "router ospf 1\nnetwork 192.168.1.0 0.0.0.255 area 0",
    explanation: "Mengaktifkan OSPF dan mendaftarkan jaringan menggunakan Wildcard Mask ke Backbone Area 0.",
    tips: "Process ID (misal 1) bersifat lokal dan tidak harus sama antar router."
  },
  {
    category: "routing",
    command: "router rip",
    mode: "Global Configuration (config)",
    purpose: "Mengaktifkan protokol routing dinamis RIP Distance Vector.",
    syntax: "router rip\nversion 2\nno auto-summary\nnetwork 192.168.1.0\nnetwork 10.0.0.0",
    explanation: "Mengaktifkan RIP versi 2 yang mendukung subnetting Classless (VLSM) dan menonaktifkan summarization otomatis.",
    tips: "Selalu tambahkan 'version 2' dan 'no auto-summary' agar mendukung subnet modern."
  },
  {
    category: "services",
    command: "ip nat inside source list <acl> interface <wan-if> overload",
    mode: "Global Configuration (config)",
    purpose: "Mengaktifkan NAT Overload / PAT (Port Address Translation) untuk membagi akses internet.",
    syntax: "access-list 1 permit 192.168.1.0 0.0.0.255\nip nat inside source list 1 interface gig0/1 overload",
    explanation: "Menerjemahkan ratusan IP private lokal ke satu IP public WAN router agar semua PC bisa browsing internet.",
    tips: "Wajib menentukan 'ip nat inside' pada interface LAN dan 'ip nat outside' pada interface WAN."
  }
];


// ===================================================================
// 3. DATA: BANK SOAL KUIS ADAPTIF TKJ
// ===================================================================
// ===================================================================
// CISCOLAB TKJ - BANK SOAL KUIS ADAPTIF & ENDLESS PRACTICE
// ===================================================================

const ciscoQuizBank = [
  // --- KATEGORI: DASAR CISCO & IOS CLI ---
  {
    id: "q-basic-1",
    category: "basic",
    categoryLabel: "Dasar Cisco IOS",
    difficulty: "Mudah",
    question: "Perintah apa yang digunakan untuk berpindah dari 'User EXEC Mode' (Router>) ke 'Privileged EXEC Mode' (Router#)?",
    options: [
      "enable",
      "configure terminal",
      "login",
      "system-view"
    ],
    correctIndex: 0,
    explanation: "Perintah 'enable' digunakan untuk masuk ke Privileged EXEC Mode yang ditandai dengan prompt tanda pagar (#). Dari mode ini teknisi bisa melihat konfigurasi router.",
    conceptTip: "Mode hierarki Cisco: User Mode (>) -> Privileged Mode (#) -> Global Config ((config)#)."
  },
  {
    id: "q-basic-2",
    category: "basic",
    categoryLabel: "Dasar Cisco IOS",
    difficulty: "Mudah",
    question: "Perintah mana yang paling aman untuk mengenkripsi password Privileged Mode menggunakan algoritma MD5?",
    options: [
      "enable secret <password>",
      "enable password <password>",
      "service password-encryption",
      "crypto key generate rsa"
    ],
    correctIndex: 0,
    explanation: "'enable secret' mengenkripsi password dengan hash MD5 yang kuat, sedangkan 'enable password' hanya menyimpannya dalam bentuk teks biasa (plain text).",
    conceptTip: "Selalu utamakan 'enable secret' daripada 'enable password' di ujian kompetensi TKJ."
  },
  {
    id: "q-basic-3",
    category: "basic",
    categoryLabel: "Dasar Cisco IOS",
    difficulty: "Mudah",
    question: "Untuk menyimpan konfigurasi dari RAM (running-config) ke NVRAM (startup-config) agar tidak hilang saat mati lampu, perintahnya adalah...",
    options: [
      "write memory (atau copy running-config startup-config)",
      "save config running-to-startup",
      "reload immediate",
      "commit changes"
    ],
    correctIndex: 0,
    explanation: "Perintah 'write memory' atau 'copy running-config startup-config' di Privileged Mode menyalin konfigurasi aktif di RAM ke memori non-volatile (NVRAM).",
    conceptTip: "Jika lupa menjalankan 'write memory' dan router dimatikan, semua settingan akan kembali kosong!"
  },
  {
    id: "q-basic-4",
    category: "basic",
    categoryLabel: "Dasar Cisco IOS",
    difficulty: "Mudah",
    question: "Apa fungsi perintah 'no shutdown' pada sub-mode konfigurasi interface Cisco Router?",
    options: [
      "Mengaktifkan interface yang secara default dalam kondisi mati (administratively down)",
      "Menghapus IP address pada interface tersebut",
      "Me-restart router secara otomatis",
      "Menonaktifkan lampu LED indikator port"
    ],
    correctIndex: 0,
    explanation: "Port/interface pada Cisco Router secara default berstatus 'administratively down'. Perintah 'no shutdown' wajib diketik untuk menghidupkan port tersebut.",
    conceptTip: "Ingat: Port Router butuh 'no shutdown', sedangkan port Switch Cisco secara default sudah aktif (up)."
  },
  {
    id: "q-basic-5",
    category: "basic",
    categoryLabel: "Dasar Cisco IOS",
    difficulty: "Sedang",
    question: "Perintah CLI untuk menampilkan ringkasan status seluruh interface beserta IP address yang terpasang adalah...",
    options: [
      "show ip interface brief",
      "show interface summary",
      "display ip interface",
      "show running-config interface"
    ],
    correctIndex: 0,
    explanation: "'show ip interface brief' menampilkan tabel cepat berisi nama port, IP address, status Layer 1 (Status: up/down), dan status Layer 2 (Protocol: up/down).",
    conceptTip: "Ini adalah perintah nomor 1 yang paling sering dipakai saat troubleshooting jaringan!"
  },

  // --- KATEGORI: IP ADDRESSING & SUBNETTING ---
  {
    id: "q-subnet-1",
    category: "subnet",
    categoryLabel: "Subnetting & IP",
    difficulty: "Sedang",
    question: "Berapa Subnet Mask untuk prefix CIDR /27 pada IPv4?",
    options: [
      "255.255.255.224",
      "255.255.255.240",
      "255.255.255.192",
      "255.255.255.248"
    ],
    correctIndex: 0,
    explanation: "Prefix /27 memiliki 3 bit subnet (11100000 di oktet ke-4). Nilai desimalnya adalah 128 + 64 + 32 = 224. Jadi Subnet Mask = 255.255.255.224.",
    conceptTip: "Tabel bit oktet 4: /25=128, /26=192, /27=224, /28=240, /29=248, /30=252."
  },
  {
    id: "q-subnet-2",
    category: "subnet",
    categoryLabel: "Subnetting & IP",
    difficulty: "Sedang",
    question: "Untuk menghubungkan 2 Router secara Point-to-Point (kabel WAN Serial / Gigabit /30), berapa jumlah IP host yang valid dapat digunakan?",
    options: [
      "2 Host (karena 2^2 - 2 = 2)",
      "4 Host",
      "6 Host",
      "1 Host"
    ],
    correctIndex: 0,
    explanation: "Prefix /30 memiliki 2 bit host (2^2 = 4 total IP). 1 IP untuk Network ID, 1 IP untuk Broadcast, sehingga tersisa tepat 2 IP host valid (cocok untuk link 2 router).",
    conceptTip: "Link point-to-point antar router selalu menggunakan subnet /30 agar hemat alamat IP."
  },
  {
    id: "q-subnet-3",
    category: "subnet",
    categoryLabel: "Subnetting & IP",
    difficulty: "Sedang",
    question: "Berapakah Broadcast Address dari network 192.168.10.64/26?",
    options: [
      "192.168.10.127",
      "192.168.10.128",
      "192.168.10.255",
      "192.168.10.63"
    ],
    correctIndex: 0,
    explanation: "Blok subnet /26 memiliki kelipatan 64 (256 - 192 = 64). Subnet 1: 0-63, Subnet 2: 64-127. Maka Network ID = .64, dan Broadcast = .127.",
    conceptTip: "Broadcast address selalu merupakan IP terakhir sebelum network ID blok berikutnya."
  },
  {
    id: "q-subnet-4",
    category: "subnet",
    categoryLabel: "Subnetting & IP",
    difficulty: "Sedang",
    question: "Berapa Wildcard Mask dari subnet mask 255.255.255.240 (/28)?",
    options: [
      "0.0.0.15",
      "0.0.0.31",
      "0.0.0.240",
      "0.0.0.255"
    ],
    correctIndex: 0,
    explanation: "Wildcard mask dihitung dengan mengurangi 255.255.255.255 dengan Subnet Mask: (255-255).(255-255).(255-255).(255-240) = 0.0.0.15.",
    conceptTip: "Wildcard Mask = Kebalikan dari Subnet Mask (digunakan pada OSPF & ACL Cisco)."
  },

  // --- KATEGORI: VLAN & SWITCHING ---
  {
    id: "q-vlan-1",
    category: "vlan",
    categoryLabel: "VLAN & Trunking",
    difficulty: "Sedang",
    question: "Protokol standar internasional IEEE yang digunakan untuk membungkus (tagging) frame VLAN pada jalur Trunk adalah...",
    options: [
      "IEEE 802.1Q (dot1Q)",
      "IEEE 802.3",
      "IEEE 802.11",
      "ISL (Inter-Switch Link)"
    ],
    correctIndex: 0,
    explanation: "IEEE 802.1Q (sering disebut dot1q) adalah protokol standar terbuka untuk VLAN tagging 4-byte pada frame Ethernet melintasi port Trunk.",
    conceptTip: "ISL adalah protokol trunking lawas milik Cisco (proprietary), sedangkan 802.1Q adalah standar industri saat ini."
  },
  {
    id: "q-vlan-2",
    category: "vlan",
    categoryLabel: "VLAN & Trunking",
    difficulty: "Sedang",
    question: "Perintah untuk menetapkan port FastEthernet0/2 pada Switch menjadi anggota VLAN 10 (Access Port) adalah...",
    options: [
      "switchport mode access, lalu switchport access vlan 10",
      "switchport mode trunk vlan 10",
      "vlan 10 add port fa0/2",
      "interface vlan 10 enable fa0/2"
    ],
    correctIndex: 0,
    explanation: "Untuk menghubungkan PC ke VLAN tertentu, port switch harus diubah ke mode access ('switchport mode access') lalu dimasukkan ke VLAN ('switchport access vlan 10').",
    conceptTip: "Mode 'access' untuk perangkat akhir (PC/Printer), mode 'trunk' untuk kabel penghubung antar-switch atau switch-to-router."
  },
  {
    id: "q-vlan-3",
    category: "vlan",
    categoryLabel: "VLAN & Trunking",
    difficulty: "Mudah",
    question: "Secara default, seluruh port pada Switch Cisco yang belum dikonfigurasi berada di dalam...",
    options: [
      "VLAN 1 (Default VLAN)",
      "VLAN 0",
      "VLAN 100",
      "VLAN 99"
    ],
    correctIndex: 0,
    explanation: "Semua port Switch Cisco secara bawaan (pabrik) berada pada VLAN 1, dengan nama default 'default'. VLAN 1 tidak dapat dihapus atau diubah namanya.",
    conceptTip: "Praktik keamanan yang baik menyarankan memindahkan port aktif dari VLAN 1 ke VLAN khusus lainnya."
  },
  {
    id: "q-vlan-4",
    category: "vlan",
    categoryLabel: "VLAN & Trunking",
    difficulty: "Sulit",
    question: "Pada teknik Inter-VLAN Routing 'Router-on-a-Stick', apa perintah yang wajib diketik di sub-interface Gig0/0.10 sebelum memasang IP address?",
    options: [
      "encapsulation dot1Q 10",
      "switchport mode trunk 10",
      "vlan enable 10",
      "ip routing encapsulation 10"
    ],
    correctIndex: 0,
    explanation: "Cisco Router menolak pemasangan IP address pada sub-interface sebelum enkapsulasi 802.1Q ditentukan dengan perintah 'encapsulation dot1Q <vlan-id>'.",
    conceptTip: "Urutan wajib: 'interface gig0/0.10' -> 'encapsulation dot1Q 10' -> 'ip address 192.168.10.1 255.255.255.0'."
  },

  // --- KATEGORI: ROUTING (STATIC & DYNAMIC OSPF) ---
  {
    id: "q-route-1",
    category: "routing",
    categoryLabel: "Routing Cisco",
    difficulty: "Sedang",
    question: "Manakah sintaks yang benar untuk membuat rute statis menuju network 192.168.20.0/24 melalui IP router tetangga 10.10.10.2?",
    options: [
      "ip route 192.168.20.0 255.255.255.0 10.10.10.2",
      "route static 192.168.20.0 255.255.255.0 10.10.10.2",
      "ip route 10.10.10.2 255.255.255.0 192.168.20.0",
      "ip static-route 192.168.20.0/24 next-hop 10.10.10.2"
    ],
    correctIndex: 0,
    explanation: "Format baku Cisco IOS: 'ip route [network_tujuan] [subnet_mask] [ip_next_hop]'.",
    conceptTip: "Next-hop adalah IP interface router tetangga yang terhubung langsung, bukan IP router sendiri."
  },
  {
    id: "q-route-2",
    category: "routing",
    categoryLabel: "Routing Cisco",
    difficulty: "Sedang",
    question: "Apa arti dari perintah 'ip route 0.0.0.0 0.0.0.0 192.168.1.254'?",
    options: [
      "Membuat Default Route (Gateway of Last Resort) yang mengarahkan seluruh lalu lintas tidak dikenal ke 192.168.1.254",
      "Menghapus seluruh tabel routing pada router",
      "Membatasi semua paket IP agar bernilai 0",
      "Mengaktifkan firewall DHCP di IP 192.168.1.254"
    ],
    correctIndex: 0,
    explanation: "0.0.0.0 0.0.0.0 mewakili 'any network' (semua alamat IP di dunia). Ini adalah rute cadangan utama (Default Gateway router ke ISP/Internet).",
    conceptTip: "Default route biasanya dipasang pada router edge/gateway yang mengarah ke modem internet."
  },
  {
    id: "q-route-3",
    category: "routing",
    categoryLabel: "Routing Cisco",
    difficulty: "Sedang",
    question: "Protokol routing OSPF (Open Shortest Path First) menggunakan algoritma apa untuk menentukan jalur terbaik?",
    options: [
      "Dijkstra (Shortest Path First / SPF)",
      "Bellman-Ford",
      "DUAL (Diffusing Update Algorithm)",
      "Floyd-Warshall"
    ],
    correctIndex: 0,
    explanation: "OSPF adalah protokol Link-State yang menggunakan algoritma Dijkstra SPF untuk menghitung rute pohon terpendek berdasarkan metric Cost (Bandwidth).",
    conceptTip: "Bellman-Ford dipakai RIP, DUAL dipakai EIGRP, dan Dijkstra dipakai OSPF & IS-IS."
  },
  {
    id: "q-route-4",
    category: "routing",
    categoryLabel: "Routing Cisco",
    difficulty: "Sulit",
    question: "Perintah OSPF yang benar untuk mendaftarkan network 192.168.10.0/24 ke dalam OSPF Backbone Area 0 adalah...",
    options: [
      "network 192.168.10.0 0.0.0.255 area 0",
      "network 192.168.10.0 255.255.255.0 area 0",
      "router ospf network 192.168.10.0 /24 area 0",
      "ospf area 0 add 192.168.10.0 0.0.0.255"
    ],
    correctIndex: 0,
    explanation: "OSPF menggunakan format: 'network <network-id> <wildcard-mask> area <area-id>'. Untuk /24, wildcard mask-nya adalah 0.0.0.255.",
    conceptTip: "Jangan masukkan Subnet Mask biasa pada OSPF Cisco, selalu gunakan Wildcard Mask!"
  },
  {
    id: "q-route-5",
    category: "routing",
    categoryLabel: "Routing Cisco",
    difficulty: "Mudah",
    question: "Perintah untuk melihat isi tabel routing lengkap pada Cisco Router adalah...",
    options: [
      "show ip route",
      "show route table",
      "display ip routing-table",
      "show ip forwarding"
    ],
    correctIndex: 0,
    explanation: "'show ip route' menampilkan seluruh daftar rute (C = Connected, S = Static, O = OSPF, R = RIP, D = EIGRP).",
    conceptTip: "Huruf 'S*' menandakan rute Candidate Default (Static Default Route)."
  },

  // --- KATEGORI: DHCP & NETWORK SERVICES ---
  {
    id: "q-dhcp-1",
    category: "dhcp",
    categoryLabel: "DHCP & Services",
    difficulty: "Sedang",
    question: "Urutan 4 tahap proses komunikasi pertukaran paket DHCP antara Client dan Server yang benar adalah...",
    options: [
      "Discover -> Offer -> Request -> Acknowledgment (DORA)",
      "Request -> Offer -> Discover -> Accept",
      "Broadcast -> Unicast -> Lease -> Confirm",
      "Discover -> Accept -> Request -> Complete"
    ],
    correctIndex: 0,
    explanation: "Singkatan DORA: 1. DHCP Discover (Client mencari server), 2. DHCP Offer (Server menawarkan IP), 3. DHCP Request (Client meminta IP terpilih), 4. DHCP ACK (Server mengonfirmasi peminjaman).",
    conceptTip: "Hafalkan jembatan keledai: D-O-R-A (Discover, Offer, Request, ACK)."
  },
  {
    id: "q-dhcp-2",
    category: "dhcp",
    categoryLabel: "DHCP & Services",
    difficulty: "Sedang",
    question: "Perintah Cisco Router untuk mengecualikan rentang IP 192.168.1.1 sampai 192.168.1.10 agar tidak dibagikan ke PC klien DHCP adalah...",
    options: [
      "ip dhcp excluded-address 192.168.1.1 192.168.1.10",
      "ip dhcp exclude 192.168.1.1 - 192.168.1.10",
      "no ip dhcp pool 192.168.1.1 192.168.1.10",
      "dhcp block-range 192.168.1.1 192.168.1.10"
    ],
    correctIndex: 0,
    explanation: "Perintah 'ip dhcp excluded-address <ip-awal> <ip-akhir>' di Global Config mengamankan IP statis (seperti Router, Server, Printer) agar tidak bentrok dengan IP dinamis klien.",
    conceptTip: "Selalu pasang perintah excluded-address SEBELUM membuat pool DHCP!"
  },
  {
    id: "q-dhcp-3",
    category: "dhcp",
    categoryLabel: "DHCP & Services",
    difficulty: "Sedang",
    question: "Di dalam sub-mode 'dhcp-config', perintah untuk menentukan Default Gateway yang akan diterima klien adalah...",
    options: [
      "default-router <ip-gateway>",
      "gateway <ip-gateway>",
      "ip default-gateway <ip>",
      "router-gateway <ip>"
    ],
    correctIndex: 0,
    explanation: "Di dalam konfigurasi DHCP pool, 'default-router <ip>' digunakan untuk memberitahu klien alamat IP gateway jaringan mereka.",
    conceptTip: "Bedakan: 'default-router' dipakai di DHCP pool, sedangkan 'ip default-gateway' dipakai pada Switch Layer-2."
  },

  // --- KATEGORI: TROUBLESHOOTING & NETWORK FUNDAMENTAL ---
  {
    id: "q-trouble-1",
    category: "troubleshoot",
    categoryLabel: "Troubleshooting",
    difficulty: "Sedang",
    question: "Jika saat 'show ip interface brief' status interface tertulis: 'Status: administratively down, Protocol: down', apa penyebabnya?",
    options: [
      "Interface belum diketik perintah 'no shutdown' oleh administrator",
      "Kabel UTP terputus secara fisik",
      "IP Address interface salah subnet",
      "Router kehabisan memori RAM"
    ],
    correctIndex: 0,
    explanation: "'Administratively down' artinya port secara sengaja dimatikan oleh sistem/admin melalui perintah 'shutdown'. Solusinya cukup ketik 'no shutdown'.",
    conceptTip: "Jika 'Status: up, Protocol: down', biasanya masalah ada di Layer 2 (seperti beda clock rate kabel serial atau enkapsulasi mismatch)."
  },
  {
    id: "q-trouble-2",
    category: "troubleshoot",
    categoryLabel: "Troubleshooting",
    difficulty: "Sulit",
    question: "Dua PC pada VLAN berbeda (VLAN 10 dan VLAN 20) tidak bisa saling ping meskipun Router-on-a-Stick sudah dikonfigurasi. Kemungkinan penyebab terbesarnya adalah...",
    options: [
      "Port switch yang terhubung ke router lupa diubah menjadi mode Trunk ('switchport mode trunk')",
      "Kabel UTP yang digunakan adalah kabel Crossover",
      "Router Cisco tidak mendukung protokol ICMP ping",
      "Subnet Mask kedua VLAN harus sama persis"
    ],
    correctIndex: 0,
    explanation: "Kabel penghubung Switch ke Router pada topologi Router-on-a-Stick HARUS berstatus TRUNK agar bisa membawa paket tagged 802.1Q dari semua VLAN ke router.",
    conceptTip: "Ingat prinsip: Switch-to-Router (ROAS) = Mode Trunk. Switch-to-PC = Mode Access."
  },
  {
    id: "q-trouble-3",
    category: "troubleshoot",
    categoryLabel: "Troubleshooting",
    difficulty: "Sedang",
    question: "Perintah untuk menguji rute hop-by-hop dan mengetahui di titik router mana paket data terhenti adalah...",
    options: [
      "traceroute (atau tracert pada Windows cmd)",
      "ping -t",
      "show cdp neighbors",
      "arp -a"
    ],
    correctIndex: 0,
    explanation: "'traceroute' mengirimkan paket dengan nilai TTL bertahap (1, 2, 3, ...) untuk melacak setiap router perantara (hop) yang dilalui paket menuju tujuan.",
    conceptTip: "'ping' hanya menguji ketersediaan ujung ke ujung (end-to-end), sedangkan 'traceroute' mengidentifikasi letak titik kegagalan di tengah jalan."
  },
  {
    id: "q-vlan-5",
    category: "vlan",
    categoryLabel: "VLAN & Trunking",
    difficulty: "Sedang",
    question: "Rentang nomor VLAN standar (Normal Range VLAN) yang dapat dikonfigurasi pada Switch Cisco 2960 adalah...",
    options: [
      "VLAN 1 sampai 1005",
      "VLAN 1 sampai 255",
      "VLAN 1006 sampai 4094",
      "VLAN 1 sampai 10"
    ],
    correctIndex: 0,
    explanation: "Normal range VLAN adalah 1-1005 (tersimpan di vlan.dat pada flash memory). Extended range VLAN adalah 1006-4094 (tersimpan di running-config).",
    conceptTip: "VLAN 1002-1005 dicadangkan oleh Cisco untuk legacy network (Token Ring & FDDI)."
  },
  {
    id: "q-route-6",
    category: "routing",
    categoryLabel: "Routing Cisco",
    difficulty: "Sulit",
    question: "Bagaimana cara Cisco Router menentukan Router-ID (RID) pada proses OSPF jika perintah 'router-id' tidak diketik secara manual?",
    options: [
      "Mengambil IP address tertinggi dari interface Loopback yang aktif, atau jika tidak ada, IP tertinggi dari physical interface yang UP",
      "Mengambil IP address terkecil dari interface Gig0/0",
      "Mengambil alamat MAC address terkecil",
      "Dipilih secara acak oleh algoritma Dijkstra"
    ],
    correctIndex: 0,
    explanation: "Hierarki Router ID OSPF: 1. Perintah manual 'router-id', 2. IP tertinggi di interface Loopback, 3. IP tertinggi di physical interface yang berstatus UP.",
    conceptTip: "Selalu buat interface Loopback (misal Loopback 0: 1.1.1.1) untuk Router-ID OSPF yang stabil!"
  },
  {
    id: "q-basic-6",
    category: "basic",
    categoryLabel: "Dasar Cisco IOS",
    difficulty: "Mudah",
    question: "Kombinasi tombol shortcut keyboard pada CLI Cisco untuk menghentikan proses ping atau traceroute yang sedang berjalan (break sequence) adalah...",
    options: [
      "Ctrl + Shift + 6",
      "Ctrl + C",
      "Ctrl + Z",
      "Esc + Tab"
    ],
    correctIndex: 0,
    explanation: "Di CLI Cisco IOS, tombol 'Ctrl + Shift + 6' adalah interrupt break sequence untuk menghentikan ping loop atau DNS lookup yang stuck.",
    conceptTip: "Hafalkan shortcut ini: 'Ctrl + Shift + 6' untuk stop proses, 'Ctrl + Z' untuk langsung kembali ke Privileged Mode."
  },
  {
    id: "q-dhcp-4",
    category: "dhcp",
    categoryLabel: "DHCP & Services",
    difficulty: "Sedang",
    question: "Jika DHCP Server berada di luar subnet lokal (di seberang router lain), perintah apa yang harus dipasang pada interface router lokal sebagai perantara relay?",
    options: [
      "ip helper-address <ip-dhcp-server>",
      "dhcp relay enable",
      "forward dhcp-broadcast <ip>",
      "ip forward-protocol udp 67"
    ],
    correctIndex: 0,
    explanation: "Perintah 'ip helper-address <ip-server>' mengubah paket broadcast DHCP Discover (port 67) dari klien lokal menjadi paket unicast yang diteruskan ke DHCP Server di router lain.",
    conceptTip: "'ip helper-address' dipasang di interface LAN lokal tempat klien berada (bukan di router DHCP server)."
  }
];

if (typeof module !== "undefined") {
  module.exports = { ciscoQuizBank };
}



// ===================================================================
// 4. DATA: TUGAS MANDIRI LAB QUEST LEVEL
// ===================================================================
// ===================================================================
// CISCOLAB TKJ - LAB QUEST & TUGAS PRAKTIKUM LAPTOP
// ===================================================================

const ciscoQuestLevels = [
  {
    level: 1,
    id: "quest-lvl-1",
    title: "Inisialisasi & Pengamanan Router Lab (Cisco 2911)",
    category: "Dasar IOS & Keamanan",
    difficulty: "Pemula (Dasar)",
    xpReward: 50,
    badgeName: "🛡️ Certified SysAdmin",
    story: "Kamu diminta oleh guru pembimbing lab TKJ untuk melakukan konfigurasi awal pada 1 Router Cisco 2911 baru di software Cisco Packet Tracer laptopmu sebelum router dimasukkan ke jaringan utama.",
    tasks: [
      "Buka software Cisco Packet Tracer di laptopmu.",
      "Ambil 1 Router Cisco 2911 dan 1 PC Admin.",
      "Hubungkan port RS232 PC ke port Console Router menggunakan Kabel Console (Light Blue).",
      "Masuk ke tab Desktop PC -> Terminal (9600 baud, 8 data bits).",
      "Ubah Hostname Router menjadi: R1-TKJ",
      "Pasang password keamanan Privileged Mode terenkripsi MD5: cisco123 (menggunakan perintah enable secret).",
      "Pasang Banner MOTD: 'DILARANG MASUK TANPA IZIN ADMIN TKJ!'",
      "Simpan konfigurasi ke NVRAM menggunakan perintah write memory."
    ],
    hint: "Masuk dari User Mode (Router>) ke Privileged Mode (Router#) dengan 'enable', lalu masuk ke Global Config dengan 'configure terminal'. Gunakan 'hostname R1-TKJ', 'enable secret cisco123', dan 'banner motd #pesan#'. Di akhir, simpan dengan 'write memory'.",
    verification: {
      pgQuestions: [
        {
          id: "q1",
          question: "Setelah selesai konfigurasi dan kamu mengetik perintah 'exit' sampai kembali ke User Mode (R1-TKJ>), lalu kamu mengetik 'enable', apa respon yang muncul di layar terminal?",
          options: [
            "Router meminta Password (ketik 'cisco123' untuk masuk)",
            "Router langsung masuk ke Privileged Mode tanpa meminta password",
            "Router melakukan restart/reboot otomatis",
            "Muncul pesan error '% Invalid input detected'"
          ],
          correctIndex: 0,
          explanation: "Karena kamu telah memasang 'enable secret cisco123', router mewajibkan memasukkan password sebelum memberi hak akses penuh ke Privileged Mode."
        },
        {
          id: "q2",
          question: "Saat kamu memeriksa konfigurasi dengan perintah 'show running-config', bagaimana tampilan password enable secret di layar terminal?",
          options: [
            "Terenkripsi dalam bentuk karakter acak hash MD5 (seperti: enable secret 5 $1$mERr$...)",
            "Tertulis jelas berupa teks biasa: enable secret cisco123",
            "Password disembunyikan dan tidak muncul di running-config",
            "Tertulis angka 0 di depan kata sandi"
          ],
          correctIndex: 0,
          explanation: "Perintah 'enable secret' otomatis menggunakan enkripsi hash MD5 tipe 5 sehingga tidak terbaca oleh orang yang melihat running-config."
        }
      ],
      essayQuestion: {
        id: "essay1",
        question: "Tuliskan perintah CLI Cisco yang kamu gunakan untuk menyimpan seluruh konfigurasi dari RAM ke NVRAM agar tidak hilang saat router mati lampu:",
        placeholder: "Contoh: write memory atau copy running-config startup-config",
        validKeywords: ["write memory", "write", "wr", "copy running-config startup-config", "copy run start", "copy running startup"],
        correctAnswerDesc: "'write memory' (atau 'copy running-config startup-config')",
        explanation: "Perintah ini menyalin konfigurasi aktif di memori RAM ke memori non-volatile (NVRAM) sehingga tersimpan permanen."
      }
    }
  },
  {
    level: 2,
    id: "quest-lvl-2",
    title: "Konfigurasi IP Interface & Pengujian Ping PC ke Gateway",
    category: "IP & Interface",
    difficulty: "Pemula (Dasar)",
    xpReward: 75,
    badgeName: "⚡ Port Activator",
    story: "Sambungkan PC Admin ke router melalui kabel jaringan LAN Ethernet dan pastikan PC dapat berkomunikasi langsung dengan interface Router di Packet Tracer laptopmu.",
    tasks: [
      "Di Cisco Packet Tracer, sambungkan PC Admin (FastEthernet0) ke Router (GigabitEthernet0/0) dengan kabel Straight-Through (Copper Straight-Through warna tembaga/hitam).",
      "Atur IP pada PC Admin di tab Desktop -> IP Configuration:\n   - IP Address: 192.168.1.10\n   - Subnet Mask: 255.255.255.0\n   - Default Gateway: 192.168.1.1",
      "Buka CLI Router, masuk ke interface GigabitEthernet0/0.",
      "Pasang IP Address: 192.168.1.1 255.255.255.0",
      "Ketik perintah 'no shutdown' untuk menyalakan interface router.",
      "Buka Desktop PC Admin -> Command Prompt, lakukan uji: ping 192.168.1.1"
    ],
    hint: "Port Router Cisco secara default berstatus 'administratively down'. Wajib ketik perintah 'no shutdown' di sub-mode interface (config-if) agar lampu port berubah hijau.",
    verification: {
      pgQuestions: [
        {
          id: "q1",
          question: "Apa warna lampu indikator link kabel antara PC dan Router di Packet Tracer setelah perintah 'no shutdown' berhasil dijalankan?",
          options: [
            "Berubah menjadi Hijau (Link Up & Aktif)",
            "Tetap berwarna Merah (Link Down)",
            "Berubah menjadi Kuning/Oranye permanen",
            "Berkedip Biru"
          ],
          correctIndex: 0,
          explanation: "Warna hijau menandakan Layer 1 (Physical) dan Layer 2 (Data Link) interface telah aktif."
        },
        {
          id: "q2",
          question: "Bagaimana hasil pengujian saat kamu mengetik 'ping 192.168.1.1' di Command Prompt PC Admin?",
          options: [
            "Muncul balasan: 'Reply from 192.168.1.1: bytes=32 time=... TTL=255' (Success)",
            "Muncul pesan: 'Request timed out' sebanyak 4 kali",
            "Muncul pesan: 'Destination host unreachable'",
            "Muncul pesan: 'Bad command or file name'"
          ],
          correctIndex: 0,
          explanation: "Ping sukses menunjukkan PC dan Gateway Router sudah berada di subnet yang sama dan kabel telah terhubung sempurna."
        }
      ],
      essayQuestion: {
        id: "essay1",
        question: "Tuliskan perintah CLI yang wajib kamu ketik di sub-mode interface GigabitEthernet0/0 untuk menghidupkan port tersebut dari status mati:",
        placeholder: "Contoh: no shutdown",
        validKeywords: ["no shutdown", "no shut"],
        correctAnswerDesc: "'no shutdown'",
        explanation: "'no shutdown' mengaktifkan port yang secara default dimatikan oleh sistem operasi Cisco IOS."
      }
    }
  },
  {
    level: 3,
    id: "quest-lvl-3",
    title: "Segmentasi VLAN 10 (GURU) & VLAN 20 (SISWA) pada Switch",
    category: "VLAN & Switching",
    difficulty: "Menengah (Intermediate)",
    xpReward: 100,
    badgeName: "🏗️ VLAN Architect",
    story: "Buat pemisahan broadcast domain jaringan lab TKJ di Packet Tracer laptopmu. Pisahkan komputer Guru ke dalam VLAN 10 dan komputer Siswa ke dalam VLAN 20 pada Switch Cisco 2960.",
    tasks: [
      "Di Packet Tracer, ambil 1 Switch 2960 dan 4 PC (PC-Guru-1, PC-Guru-2, PC-Siswa-1, PC-Siswa-2).",
      "Hubungkan PC ke port Switch dengan kabel Straight-Through:\n   - PC-Guru-1 ke Fa0/1, PC-Guru-2 ke Fa0/2\n   - PC-Siswa-1 ke Fa0/3, PC-Siswa-2 ke Fa0/4",
      "Atur IP Address masing-masing PC:\n   - PC-Guru-1: 192.168.10.2/24, PC-Guru-2: 192.168.10.3/24\n   - PC-Siswa-1: 192.168.20.2/24, PC-Siswa-2: 192.168.20.3/24",
      "Di CLI Switch, buat VLAN 10 dengan nama GURU dan VLAN 20 dengan nama SISWA.",
      "Masukkan port Fa0/1 & Fa0/2 ke VLAN 10 (mode access).",
      "Masukkan port Fa0/3 & Fa0/4 ke VLAN 20 (mode access).",
      "Lakukan uji ping sesama VLAN (PC-Guru-1 ke PC-Guru-2) dan beda VLAN (PC-Guru-1 ke PC-Siswa-1)."
    ],
    hint: "Gunakan 'vlan 10' -> 'name GURU', lalu di interface gunakan 'switchport mode access' dan 'switchport access vlan 10'. Lakukan hal yang sama untuk VLAN 20.",
    verification: {
      pgQuestions: [
        {
          id: "q1",
          question: "Berdasarkan hasil uji ping di Packet Tracer, apa yang terjadi saat PC-Guru-1 (VLAN 10) melakukan ping ke PC-Siswa-1 (VLAN 20)?",
          options: [
            "Request timed out (Gagal), karena berbeda VLAN dan broadcast domain tanpa adanya router",
            "Reply from 192.168.20.2 (Langsung Berhasil)",
            "Switch mengalami crash dan restart",
            "PC-Guru-1 otomatis berpindah ke VLAN 20"
          ],
          correctIndex: 0,
          explanation: "VLAN memisahkan broadcast domain pada Layer 2 Switch sehingga lalu lintas antar VLAN terisolasi total tanpa router."
        },
        {
          id: "q2",
          question: "Perintah 'show' apa yang digunakan di Switch untuk melihat tabel daftar seluruh VLAN beserta port yang menjadi anggotanya?",
          options: [
            "show vlan brief",
            "show ip route",
            "show interface trunk",
            "show mac address-table vlan"
          ],
          correctIndex: 0,
          explanation: "'show vlan brief' menampilkan nomor VLAN, nama VLAN, status, dan port mana saja yang aktif di VLAN tersebut."
        }
      ],
      essayQuestion: {
        id: "essay1",
        question: "Tuliskan perintah CLI yang kamu gunakan di interface Fa0/1 untuk menetapkan port tersebut menjadi anggota VLAN 10:",
        placeholder: "Contoh: switchport access vlan 10",
        validKeywords: ["switchport access vlan 10", "sw acc vl 10", "sw access vlan 10"],
        correctAnswerDesc: "'switchport access vlan 10'",
        explanation: "'switchport access vlan <id>' memasukkan interface access ke VLAN yang ditentukan."
      }
    }
  },
  {
    level: 4,
    id: "quest-lvl-4",
    title: "Konfigurasi Port Trunking Antar-Switch (IEEE 802.1Q)",
    category: "Trunking 802.1Q",
    difficulty: "Menengah (Intermediate)",
    xpReward: 125,
    badgeName: "🚀 Trunk Navigator",
    story: "Hubungkan Switch Lab 1 dan Switch Lab 2 di Packet Tracer laptopmu melalui 1 kabel Trunk agar PC Guru di Lab 1 bisa saling berkirim data dengan PC Guru di Lab 2.",
    tasks: [
      "Di Packet Tracer, tambahkan Switch kedua (Switch-2) dan PC-Guru-2 (IP: 192.168.10.3/24).",
      "Hubungkan Switch-1 port FastEthernet0/24 ke Switch-2 port FastEthernet0/24 menggunakan kabel Straight/Crossover.",
      "Di Switch-1 dan Switch-2, buat VLAN 10 (GURU).",
      "Di Switch-1, atur interface Fa0/24 menjadi mode Trunk: switchport mode trunk.",
      "Di Switch-2, pastikan interface Fa0/24 juga berstatus Trunk.",
      "Hubungkan PC-Guru-2 ke port Fa0/2 Switch-2 dan masukkan ke VLAN 10.",
      "Lakukan uji ping dari PC-Guru-1 (Switch-1) ke PC-Guru-2 (Switch-2)."
    ],
    hint: "Port penghubung antar-switch harus diubah ke mode Trunk dengan 'switchport mode trunk' agar dapat membawa frame dari banyak VLAN sekaligus menggunakan enkapsulasi IEEE 802.1Q.",
    verification: {
      pgQuestions: [
        {
          id: "q1",
          question: "Saat kamu menjalankan perintah 'show interfaces trunk' di Switch-1, apa status port Fa0/24 yang ditampilkan?",
          options: [
            "Port Fa0/24 berstatus 'trunking' dengan enkapsulasi '802.1q'",
            "Port Fa0/24 berstatus 'access' di VLAN 1",
            "Port Fa0/24 berstatus 'disabled'",
            "Tabel trunk kosong tidak menampilkan apapun"
          ],
          correctIndex: 0,
          explanation: "'show interfaces trunk' membuktikan bahwa port Fa0/24 berhasil menegosiasikan jalur trunking 802.1Q."
        },
        {
          id: "q2",
          question: "Apakah pengujian ping dari PC-Guru-1 di Switch-1 ke PC-Guru-2 di Switch-2 berhasil?",
          options: [
            "Berhasil Reply (Success), karena jalur trunk mengizinkan lalu lintas VLAN 10 menyeberang antar switch",
            "Gagal Request Timed Out seluruhnya",
            "Muncul pesan Destination Host Unreachable",
            "Kabel otomatis terputus"
          ],
          correctIndex: 0,
          explanation: "Jalur trunk membungkus (tag) paket VLAN 10 dengan header 802.1Q saat melewati kabel Fa0/24 antar switch."
        }
      ],
      essayQuestion: {
        id: "essay1",
        question: "Tuliskan perintah CLI yang kamu ketik di interface Fa0/24 untuk mengubah port switch menjadi mode Trunk:",
        placeholder: "Contoh: switchport mode trunk",
        validKeywords: ["switchport mode trunk", "sw mo tr", "sw mode trunk"],
        correctAnswerDesc: "'switchport mode trunk'",
        explanation: "'switchport mode trunk' mengubah port switch menjadi port trunk 802.1Q."
      }
    }
  },
  {
    level: 5,
    id: "quest-lvl-5",
    title: "Inter-VLAN Routing (Router-on-a-Stick / Sub-Interfaces)",
    category: "Inter-VLAN Routing",
    difficulty: "Mahir (Advanced)",
    xpReward: 150,
    badgeName: "🎯 ROAS Specialist",
    story: "Gunakan 1 kabel dari Switch ke Router 2911 untuk menghubungkan komunikasi antara PC Guru (VLAN 10) dan PC Siswa (VLAN 20) melalui teknik Router-on-a-Stick.",
    tasks: [
      "Di Packet Tracer, hubungkan Switch port Gig0/1 ke Router port Gig0/0.",
      "Ubah port Gig0/1 di Switch menjadi mode TRUNK (switchport mode trunk).",
      "Di Router, aktifkan interface fisik Gig0/0 dengan perintah 'no shutdown' (tanpa memasang IP di interface fisik).",
      "Buat sub-interface VLAN 10 di Router:\n   - interface GigabitEthernet0/0.10\n   - encapsulation dot1Q 10\n   - ip address 192.168.10.1 255.255.255.0",
      "Buat sub-interface VLAN 20 di Router:\n   - interface GigabitEthernet0/0.20\n   - encapsulation dot1Q 20\n   - ip address 192.168.20.1 255.255.255.0",
      "Pastikan Gateway di PC Guru diisi 192.168.10.1 dan di PC Siswa diisi 192.168.20.1.",
      "Lakukan uji ping dari PC Guru (192.168.10.2) ke PC Siswa (192.168.20.2)."
    ],
    hint: "Urutan wajib pada sub-interface router: buat sub-interface (contoh 'interface gig0/0.10'), ketik 'encapsulation dot1Q 10', baru ketik 'ip address 192.168.10.1 255.255.255.0'. Jangan lupa port switch ke router harus TRUNK.",
    verification: {
      pgQuestions: [
        {
          id: "q1",
          question: "Apa yang terjadi jika kamu mencoba memasang IP address pada sub-interface Gig0/0.10 sebelum mengetik perintah 'encapsulation dot1Q 10'?",
          options: [
            "Router menolak dengan pesan error: '% Configuring IP routing on a LAN subinterface is only allowed if that subinterface is configured as part of a 802.10, 802.1Q...'",
            "Router langsung menerima IP tersebut tanpa masalah",
            "Router otomatis melakukan restart",
            "Interface fisik Gig0/0 langsung mati"
          ],
          correctIndex: 0,
          explanation: "Cisco IOS mewajibkan penetapan protokol enkapsulasi VLAN (802.1Q) terlebih dahulu pada sub-interface sebelum mengaktifkan routing IP."
        },
        {
          id: "q2",
          question: "Setelah seluruh konfigurasi ROAS selesai dan gateway sudah diatur, apakah PC Guru (VLAN 10) berhasil melakukan ping ke PC Siswa (VLAN 20)?",
          options: [
            "Berhasil Reply (paket pertama mungkin RTO karena proses ARP, lalu Reply 100%)",
            "Gagal Request Timed Out permanen",
            "Destination Protocol Unreachable",
            "PC mati"
          ],
          correctIndex: 0,
          explanation: "Router merutekan paket antar-VLAN melalui sub-interface virtual Gig0/0.10 dan Gig0/0.20."
        }
      ],
      essayQuestion: {
        id: "essay1",
        question: "Tuliskan perintah enkapsulasi IEEE 802.1Q untuk VLAN 10 yang kamu ketik di dalam sub-interface Gig0/0.10:",
        placeholder: "Contoh: encapsulation dot1Q 10",
        validKeywords: ["encapsulation dot1q 10", "encap dot1q 10", "encapsulation dot1Q 10", "encap dot1Q 10"],
        correctAnswerDesc: "'encapsulation dot1Q 10'",
        explanation: "'encapsulation dot1Q <vlan-id>' mengaitkan sub-interface router dengan ID tag VLAN yang sesuai."
      }
    }
  },
  {
    level: 6,
    id: "quest-lvl-6",
    title: "Static Routing (ip route) Menghubungkan 2 Kantor Cabang",
    category: "Static Routing",
    difficulty: "Mahir (Advanced)",
    xpReward: 200,
    badgeName: "🗺️ Route Pathfinder",
    story: "Hubungkan jaringan LAN Kantor Jakarta (192.168.10.0/24) dengan LAN Kantor Surabaya (192.168.20.0/24) yang terhubung melalui 2 Router via link WAN 10.10.10.0/30 di Packet Tracer laptopmu.",
    tasks: [
      "Di Packet Tracer, buat 2 Router (Router-Jakarta & Router-Surabaya) dan hubungkan port Gig0/1 antar-router dengan kabel WAN (Subnet: 10.10.10.0/30).\n   - Router-Jakarta Gig0/1: 10.10.10.1/30\n   - Router-Surabaya Gig0/1: 10.10.10.2/30",
      "Pasang LAN Jakarta (192.168.10.1/24 di Gig0/0) & LAN Surabaya (192.168.20.1/24 di Gig0/0).",
      "Di Router Jakarta, tambahkan Static Route ke LAN Surabaya:\n   ip route 192.168.20.0 255.255.255.0 10.10.10.2",
      "Di Router Surabaya, tambahkan Static Route balik ke LAN Jakarta:\n   ip route 192.168.10.0 255.255.255.0 10.10.10.1",
      "Di PC Jakarta, lakukan ping ke PC Surabaya (192.168.20.10)."
    ],
    hint: "Sintaks: 'ip route <network_tujuan> <subnet_mask> <ip_next_hop>'. Ingat: Routing statis wajib dikonfigurasi bolak-balik di kedua router agar paket bisa pergi dan kembali.",
    verification: {
      pgQuestions: [
        {
          id: "q1",
          question: "Saat kamu mengetik perintah 'show ip route' di Router Jakarta, kode huruf apa yang menandai baris rute statis menuju 192.168.20.0/24?",
          options: [
            "Huruf 'S' (Static)",
            "Huruf 'C' (Directly Connected)",
            "Huruf 'O' (OSPF)",
            "Huruf 'R' (RIP)"
          ],
          correctIndex: 0,
          explanation: "Huruf 'S' menandakan bahwa rute tersebut dimasukkan secara manual oleh administrator (Static Route)."
        },
        {
          id: "q2",
          question: "Jika kamu hanya mengonfigurasi static route di Router Jakarta, tetapi lupa memasang rute di Router Surabaya, apa hasil pengujian ping dari PC Jakarta ke PC Surabaya?",
          options: [
            "Request timed out (RTO), karena paket berhasil sampai di Surabaya tapi Router Surabaya tidak tahu rute jalan pulang ke Jakarta",
            "Ping langsung berhasil 100%",
            "Router Jakarta langsung mati",
            "Kabel WAN otomatis berwarna merah"
          ],
          correctIndex: 0,
          explanation: "Prinsip dasar routing jaringan adalah dua arah (symmetrical). Router pengirim dan router penerima keduanya harus memiliki rute di tabel routing masing-masing."
        }
      ],
      essayQuestion: {
        id: "essay1",
        question: "Tuliskan sintaks perintah static route lengkap yang kamu ketik di Router Jakarta untuk menjangkau network LAN Surabaya (192.168.20.0/24) via IP tetangga 10.10.10.2:",
        placeholder: "Contoh: ip route 192.168.20.0 255.255.255.0 10.10.10.2",
        validKeywords: ["ip route 192.168.20.0 255.255.255.0 10.10.10.2"],
        correctAnswerDesc: "'ip route 192.168.20.0 255.255.255.0 10.10.10.2'",
        explanation: "Format baku: 'ip route [network tujuan] [netmask] [next-hop IP]'."
      }
    }
  },
  {
    level: 7,
    id: "quest-lvl-7",
    title: "Membangun DHCP Server Otomatis pada Cisco Router",
    category: "DHCP Server",
    difficulty: "Mahir (Advanced)",
    xpReward: 250,
    badgeName: "🧙 DHCP Wizard",
    story: "Konfigurasikan Router 2911 di Packet Tracer laptopmu agar bertindak sebagai DHCP Server yang membagikan IP address, Subnet Mask, Default Gateway, dan DNS Server secara otomatis ke seluruh PC/Laptop klien.",
    tasks: [
      "Di Packet Tracer, hubungkan Router Gig0/0 (IP: 192.168.1.1/24) ke Switch 2960 dan sambungkan 3 PC Klien.",
      "Kecualikan IP Gateway dan IP Server agar tidak dibagikan ke klien:\n   ip dhcp excluded-address 192.168.1.1 192.168.1.10",
      "Buat DHCP Pool bernama TKJ-POOL:\n   ip dhcp pool TKJ-POOL",
      "Tentukan subnet network:\n   network 192.168.1.0 255.255.255.0",
      "Tentukan Default Gateway klien:\n   default-router 192.168.1.1",
      "Tentukan DNS Server:\n   dns-server 8.8.8.8",
      "Buka PC Klien -> Desktop -> IP Configuration, ubah pilihan dari 'Static' ke 'DHCP'."
    ],
    hint: "Urutan konfigurasi: 'ip dhcp excluded-address <awal> <akhir>' di Global Config, lalu 'ip dhcp pool <nama>', di dalam submode pool masukkan 'network <ip> <mask>' dan 'default-router <ip-gateway>'.",
    verification: {
      pgQuestions: [
        {
          id: "q1",
          question: "Saat kamu memilih opsi 'DHCP' pada jendela IP Configuration PC Klien di Packet Tracer, pesan konfirmasi apa yang muncul di bawahnya?",
          options: [
            "'DHCP request successful' (PC otomatis mendapatkan IP seperti 192.168.1.11, Subnet Mask, Gateway, dan DNS)",
            "'DHCP failed. APIPA is being used (169.254.x.x)'",
            "'Static IP configured successfully'",
            "'Connection refused by host'"
          ],
          correctIndex: 0,
          explanation: "Pesan 'DHCP request successful' menandakan 4 tahapan DORA (Discover, Offer, Request, ACK) berhasil diselesaikan."
        },
        {
          id: "q2",
          question: "Mengapa IP yang didapatkan oleh PC Klien pertama kali adalah 192.168.1.11 dan bukan 192.168.1.1?",
          options: [
            "Karena IP 192.168.1.1 sampai 192.168.1.10 sudah diamankan oleh perintah 'ip dhcp excluded-address'",
            "Karena router Cisco hanya bisa membagikan IP kelipatan 11",
            "Karena IP 192.168.1.1 rusak di Packet Tracer",
            "Karena angka 1 sampai 10 adalah nomor port bukan nomor IP"
          ],
          correctIndex: 0,
          explanation: "'ip dhcp excluded-address' mengamankan rentang IP agar tidak terjadi IP conflict dengan perangkat statis seperti Router atau Server."
        }
      ],
      essayQuestion: {
        id: "essay1",
        question: "Tuliskan perintah CLI di dalam sub-mode dhcp-config yang kamu gunakan untuk menentukan alamat IP Default Gateway yang dibagikan ke klien:",
        placeholder: "Contoh: default-router 192.168.1.1",
        validKeywords: ["default-router 192.168.1.1", "default-router"],
        correctAnswerDesc: "'default-router 192.168.1.1'",
        explanation: "Perintah 'default-router <ip>' menetapkan gateway default pada parameter DHCP yang dikirimkan ke PC klien."
      }
    }
  },
  {
    level: 8,
    id: "quest-lvl-8",
    title: "Final Boss: Dynamic Routing OSPF Single Area (Area 0)",
    category: "OSPF Dynamic Routing",
    difficulty: "Master (Expert)",
    xpReward: 500,
    badgeName: "👑 Master Network Engineer",
    story: "Tantangan Terakhir: Bangun topologi 3 Router Cisco di Packet Tracer laptopmu dan hubungkan seluruh jaringan gedung sekolah secara otomatis menggunakan protokol routing dinamis Link-State OSPF Process ID 10 pada Backbone Area 0!",
    tasks: [
      "Di Packet Tracer, buat topologi segitiga 3 Router (R1, R2, R3).\n   - Link WAN R1-R2: 10.10.10.0/30\n   - Link WAN R2-R3: 20.20.20.0/30\n   - Link WAN R1-R3: 30.30.30.0/30",
      "Pasang LAN pada masing-masing router:\n   - R1 LAN: 192.168.10.0/24\n   - R2 LAN: 192.168.20.0/24\n   - R3 LAN: 192.168.30.0/24",
      "Di R1, aktifkan OSPF dan daftarkan seluruh network yang terhubung langsung beserta Wildcard Mask-nya:\n   router ospf 10\n   network 192.168.10.0 0.0.0.255 area 0\n   network 10.10.10.0 0.0.0.3 area 0\n   network 30.30.30.0 0.0.0.3 area 0",
      "Lakukan konfigurasi OSPF serupa pada R2 dan R3.",
      "Periksa neighbor OSPF dengan 'show ip ospf neighbor'.",
      "Lakukan uji ping lintas seluruh PC di R1, R2, dan R3."
    ],
    hint: "Gunakan 'router ospf 10' lalu daftarkan interface dengan 'network <network-id> <wildcard-mask> area 0'. Ingat: Untuk subnet /24 wildcard mask-nya adalah 0.0.0.255, dan untuk /30 wildcard mask-nya adalah 0.0.0.3.",
    verification: {
      pgQuestions: [
        {
          id: "q1",
          question: "Perintah 'show' apa di Router Cisco yang digunakan untuk memverifikasi apakah router sudah membentuk relasi tetangga (adjacency) dengan status 'FULL' pada OSPF?",
          options: [
            "show ip ospf neighbor",
            "show ip route ospf-summary",
            "show cdp neighbors",
            "show mac address-table"
          ],
          correctIndex: 0,
          explanation: "'show ip ospf neighbor' menampilkan daftar router tetangga, status state (FULL/2-WAY), dan IP interface tetangga."
        },
        {
          id: "q2",
          question: "Pada tabel routing ('show ip route'), kode huruf apa yang menandai rute jaringan yang dipelajari secara otomatis melalui protokol OSPF?",
          options: [
            "Huruf 'O' (OSPF)",
            "Huruf 'S' (Static)",
            "Huruf 'D' (EIGRP)",
            "Huruf 'R' (RIP)"
          ],
          correctIndex: 0,
          explanation: "Huruf 'O' di awal baris rute menandakan rute internal OSPF yang dipelajari dari pertukaran paket LSA."
        }
      ],
      essayQuestion: {
        id: "essay1",
        question: "Berapa nilai Wildcard Mask untuk network subnet /24 (255.255.255.0) yang kamu masukkan pada perintah 'network 192.168.10.0 ... area 0'?",
        placeholder: "Contoh: 0.0.0.255",
        validKeywords: ["0.0.0.255"],
        correctAnswerDesc: "'0.0.0.255'",
        explanation: "Wildcard mask dihitung dari 255.255.255.255 dikurangi 255.255.255.0 = 0.0.0.255."
      }
    }
  }
];

if (typeof module !== "undefined") {
  module.exports = { ciscoQuestLevels };
}


// ===================================================================
// 5. LOGIKA APLIKASI & INTERAKTIF CONTROLLER ENGINE
// ===================================================================
// ===================================================================
// CISCOLAB TKJ - INTERACTIVE LOGIC & CONTROLLER ENGINE
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Helper untuk mendapatkan modulesData secara aman
  const getModules = () => (typeof modulesData !== "undefined" && Array.isArray(modulesData)) ? modulesData : [];

  // 1. Inisialisasi State Modul
  let currentModuleId = getModules()[0]?.id || "modul-1";
  let currentCategory = "all";
  let activeTabDeviceIndex = 0;

  // DOM Elements - Modul
  const modulesListContainer = document.getElementById("modulesListContainer");
  const moduleWorkspace = document.getElementById("moduleWorkspace");
  const filterChips = document.querySelectorAll(".filter-chip");
  const searchInput = document.getElementById("searchInput");
  const moduleCounter = document.getElementById("moduleCounter");
  
  // Section Navigation Elements
  const navBtns = document.querySelectorAll(".nav-btn");
  const mobileNavBtns = document.querySelectorAll(".mobile-nav-btn");
  const sectionModules = document.getElementById("sectionModules");
  const sectionQuest = document.getElementById("sectionQuest");
  const sectionQuiz = document.getElementById("sectionQuiz");
  const sectionDictionary = document.getElementById("sectionDictionary");
  const sectionCalculator = document.getElementById("sectionCalculator");
  const cmdCardsGrid = document.getElementById("cmdCardsGrid");
  const toastNotice = document.getElementById("toastNotice");

  // Topology Modal Elements
  const topologyModal = document.getElementById("topologyModal");
  const topoModalBody = document.getElementById("topoModalBody");
  const topoModalTitle = document.getElementById("topoModalTitle");
  const btnTopoModalClose = document.getElementById("btnTopoModalClose");
  const btnTopoModalDone = document.getElementById("btnTopoModalDone");
  const topoModalBackdrop = document.getElementById("topoModalBackdrop");

  // ===================================================================
  // 2. FUNGSI RENDER LIST MODUL DI SIDEBAR
  // ===================================================================
  function renderModulesSidebar(filteredList) {
    if (!modulesListContainer) return;
    modulesListContainer.innerHTML = "";

    if (filteredList.length === 0) {
      const isMissingData = typeof modulesData === "undefined";
      modulesListContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: var(--text-dim);">
          <i data-lucide="${isMissingData ? 'alert-triangle' : 'folder-search'}" style="width: 36px; height: 36px; margin: 0 auto 0.5rem; color: ${isMissingData ? 'var(--cisco-red)' : 'inherit'};"></i>
          <p style="font-size: 0.85rem; font-weight: 600;">${isMissingData ? 'Data modul (data/modules.js) belum termuat.<br/><span style="font-weight:400; font-size:0.8rem;">Pastikan folder <code>data/</code> ikut terupload ke GitHub.</span>' : 'Tidak ada modul yang sesuai pencarian.'}</p>
        </div>
      `;
      if (moduleWorkspace && isMissingData) {
        moduleWorkspace.innerHTML = `
          <div style="text-align: center; padding: 3rem 1.5rem;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚠️</div>
            <h2 style="color: var(--cisco-navy); margin-bottom: 0.5rem;">File Data Belum Terupload di GitHub</h2>
            <p style="color: var(--text-muted); max-width: 520px; margin: 0 auto 1.5rem; line-height: 1.6;">
              Browser tidak dapat menemukan file di folder <code>data/</code> (seperti <code>modules.js</code>, <code>commands.js</code>, <code>quiz.js</code>, <code>quests.js</code>).
            </p>
            <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; max-width: 520px; margin: 0 auto; text-align: left; font-size: 0.88rem;">
              <strong style="color: var(--cisco-navy);">Cara Mengatasinya di GitHub:</strong>
              <ol style="margin-left: 1.25rem; margin-top: 0.5rem; line-height: 1.7; color: var(--text-main);">
                <li>Buka halaman repository project Anda di <strong>GitHub</strong>.</li>
                <li>Periksa apakah folder <strong>data</strong> sudah ada di sana.</li>
                <li>Jika belum ada, klik <strong>Add file</strong> &rarr; <strong>Upload files</strong>, lalu seret folder <strong>data</strong> ke GitHub.</li>
                <li>Klik <strong>Commit changes</strong> dan tunggu GitHub Pages selesai memperbarui (1-2 menit).</li>
              </ol>
            </div>
          </div>
        `;
      }
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    filteredList.forEach((mod) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = `module-nav-item ${mod.id === currentModuleId ? "active" : ""}`;
      item.setAttribute("data-id", mod.id);

      item.innerHTML = `
        <div class="module-number-box">${mod.number}</div>
        <div class="module-item-meta">
          <h4 class="module-item-title">${mod.title}</h4>
          <div class="module-item-tags">
            <span class="${mod.levelClass}">${mod.level}</span>
            <span>•</span>
            <span>${mod.estTime}</span>
          </div>
        </div>
      `;

      item.addEventListener("click", () => {
        currentModuleId = mod.id;
        activeTabDeviceIndex = 0;
        updateActiveSidebar();
        renderWorkspace(mod);
      });

      modulesListContainer.appendChild(item);
    });

    // Populate Mobile Dropdown Select
    const mobileSelect = document.getElementById("mobileModuleSelect");
    if (mobileSelect) {
      mobileSelect.innerHTML = "";
      filteredList.forEach((mod) => {
        const opt = document.createElement("option");
        opt.value = mod.id;
        opt.textContent = `Modul ${mod.number}: ${mod.title}`;
        opt.selected = (mod.id === currentModuleId);
        mobileSelect.appendChild(opt);
      });
    }

    if (moduleCounter) {
      moduleCounter.textContent = `${filteredList.length} Modul`;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function updateActiveSidebar() {
    const allItems = document.querySelectorAll(".module-nav-item");
    allItems.forEach((btn) => {
      if (btn.getAttribute("data-id") === currentModuleId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const mobileSelect = document.getElementById("mobileModuleSelect");
    if (mobileSelect) {
      mobileSelect.value = currentModuleId;
    }
  }

  // Listener for Mobile Dropdown Selector
  const mobileSelect = document.getElementById("mobileModuleSelect");
  if (mobileSelect) {
    mobileSelect.addEventListener("change", (e) => {
      const selectedId = e.target.value;
      const allMods = getModules();
      const mod = allMods.find(m => m.id === selectedId);
      if (mod) {
        currentModuleId = mod.id;
        activeTabDeviceIndex = 0;
        updateActiveSidebar();
        renderWorkspace(mod);
      }
    });
  }

  // ===================================================================
  // 3. FUNGSI RENDER DETAIL WORKSPACE MODUL
  // ===================================================================
  function renderWorkspace(mod) {
    if (!mod || !moduleWorkspace) return;

    // Generate IP Table Rows
    const ipTableRows = mod.ipTable.map(row => `
      <tr>
        <td><strong>${row.device}</strong></td>
        <td><code>${row.iface}</code></td>
        <td><code>${row.ip}</code></td>
        <td><code>${row.netmask}</code></td>
        <td><code>${row.gateway}</code></td>
      </tr>
    `).join("");

    // Generate Device Chips
    const devicesChips = mod.devices.map(d => `
      <span class="device-chip"><i data-lucide="cpu" style="width: 14px; height: 14px;"></i> ${d}</span>
    `).join("");

    // Generate Theory Points
    const theoryPointsHtml = mod.theory.points.map(pt => `
      <div class="theory-point-item">
        <div class="theory-term">${pt.term}</div>
        <div class="theory-desc">${pt.desc}</div>
      </div>
    `).join("");

    // Generate Verification Items
    const verifyItemsHtml = mod.verification.map(v => `
      <div class="verify-item-box">
        <div class="verify-cmd-title"><i data-lucide="terminal" style="width: 16px; height: 16px;"></i> ${v.cmd}</div>
        <p class="verify-purpose">${v.purpose}</p>
        <pre class="verify-console-output">${v.sampleOutput}</pre>
      </div>
    `).join("");

    // Generate Device Tabs for CLI Steps
    const deviceTabsHtml = mod.cliSteps.map((step, idx) => `
      <button type="button" class="device-tab-btn ${idx === activeTabDeviceIndex ? "active" : ""}" data-index="${idx}">
        <i data-lucide="server" style="width: 14px; height: 14px;"></i> ${step.device}
      </button>
    `).join("");

    // Render HTML Framework into Workspace
    moduleWorkspace.innerHTML = `
      <div class="workspace-header">
        <div class="mod-header-tags">
          <span class="${mod.levelClass}">${mod.level}</span>
          <span class="badge-category">${mod.categoryLabel}</span>
          <div class="mod-est-time">
            <i data-lucide="clock" style="width: 14px; height: 14px;"></i>
            <span>Estimasi: ${mod.estTime}</span>
          </div>
        </div>
        <h1 class="workspace-title">${mod.title}</h1>
        <p class="workspace-desc">${mod.description}</p>
        
        <div class="devices-row">
          <span class="devices-label">Perangkat Dibutuhkan:</span>
          ${devicesChips}
        </div>
      </div>

      <!-- Topologi & Tabel IP -->
      <div class="content-card-box">
        <div class="card-box-header">
          <i data-lucide="network"></i> Topologi Jaringan & Alokasi IP Address
        </div>
        
        <div class="topology-visual-wrap">
          <div class="topo-toolbar-row">
            <span class="topo-toolbar-badge">
              <i data-lucide="layers" style="width: 14px; height: 14px;"></i> ${mod.devices.length} Perangkat Terhubung
            </span>
            <button type="button" class="btn-topo-zoom" id="btnOpenTopoZoom">
              <i data-lucide="maximize-2" style="width: 14px; height: 14px;"></i> Perbesar Topologi
            </button>
          </div>
          <div class="topo-svg-container" id="topoMainView">
            ${mod.topology.svg || `<pre class="topology-ascii-viewer">${mod.topology.ascii}</pre>`}
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          <i data-lucide="info" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle;"></i> 
          <strong>Keterangan Lab:</strong> ${mod.topology.summary}
        </p>

        <div class="custom-table-wrap">
          <table class="ip-table">
            <thead>
              <tr>
                <th>Perangkat</th>
                <th>Interface</th>
                <th>IP Address</th>
                <th>Subnet Mask</th>
                <th>Default Gateway</th>
              </tr>
            </thead>
            <tbody>
              ${ipTableRows}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Teori & Penjelasan Konsep -->
      <div class="content-card-box">
        <div class="card-box-header">
          <i data-lucide="book-open"></i> Teori & Penjelasan Konsep Inti
        </div>
        <div style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          ${mod.theory.explanation}
        </div>
        <div class="theory-points-grid">
          ${theoryPointsHtml}
        </div>
      </div>

      <!-- Langkah Konfigurasi CLI Cisco IOS -->
      <div class="content-card-box">
        <div class="card-box-header" style="justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="terminal"></i> Langkah Konfigurasi Cisco IOS CLI
          </div>
        </div>

        <div class="device-tabs-row" id="deviceTabsRow">
          ${deviceTabsHtml}
        </div>

        <div id="cliStepContainer">
          <!-- Diisi via renderActiveCliStep -->
        </div>
      </div>

      <!-- Verifikasi & Pengujian -->
      <div class="content-card-box">
        <div class="card-box-header">
          <i data-lucide="check-circle-2"></i> Langkah Verifikasi & Testing di Packet Tracer
        </div>
        <div class="verify-list-wrap">
          ${verifyItemsHtml}
        </div>
      </div>
    `;

    // Render active device CLI step
    renderActiveCliStep(mod);

    // Event listeners for Device Tabs
    const deviceTabBtns = moduleWorkspace.querySelectorAll(".device-tab-btn");
    deviceTabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        activeTabDeviceIndex = parseInt(btn.getAttribute("data-index"), 10);
        deviceTabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderActiveCliStep(mod);
      });
    });

    // Event listener for Topology Zoom Modal
    const btnZoom = document.getElementById("btnOpenTopoZoom");
    const topoMainView = document.getElementById("topoMainView");
    if (btnZoom) {
      btnZoom.addEventListener("click", () => openTopologyModal(mod));
    }
    if (topoMainView) {
      topoMainView.addEventListener("click", () => openTopologyModal(mod));
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ===================================================================
  // 4. TOPOLOGY FULLSCREEN ZOOM MODAL
  // ===================================================================
  function openTopologyModal(mod) {
    if (!topologyModal || !mod) return;
    if (topoModalTitle) topoModalTitle.textContent = `Diagram Topologi: ${mod.title}`;
    if (topoModalBody) topoModalBody.innerHTML = mod.topology.svg || `<pre class="topology-ascii-viewer">${mod.topology.ascii}</pre>`;
    topologyModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    if (window.lucide) window.lucide.createIcons();
  }

  function closeTopologyModal() {
    if (!topologyModal) return;
    topologyModal.style.display = "none";
    document.body.style.overflow = "";
  }

  if (btnTopoModalClose) btnTopoModalClose.addEventListener("click", closeTopologyModal);
  if (btnTopoModalDone) btnTopoModalDone.addEventListener("click", closeTopologyModal);
  if (topoModalBackdrop) topoModalBackdrop.addEventListener("click", closeTopologyModal);

  // ===================================================================
  // 5. RENDER CLI STEP TERMINAL PER PERANGKAT
  // ===================================================================
  function renderActiveCliStep(mod) {
    const cliContainer = document.getElementById("cliStepContainer");
    if (!cliContainer) return;

    const currentStep = mod.cliSteps[activeTabDeviceIndex] || mod.cliSteps[0];
    if (!currentStep) return;

    const allCmdsRaw = currentStep.commands.map(c => c.cmd).join("\n");

    const linesHtml = currentStep.commands.map((c) => `
      <div class="cli-line-row">
        <span class="cli-code-text">${c.cmd}</span>
        <span class="cli-note-text"># ${c.note}</span>
      </div>
    `).join("");

    cliContainer.innerHTML = `
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
        <strong>Perangkat:</strong> ${currentStep.device} — ${currentStep.description}
      </p>
      <div class="terminal-box">
        <div class="terminal-top-bar">
          <div class="terminal-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
            <span class="terminal-title-text" style="margin-left: 0.5rem;">Cisco IOS CLI — ${currentStep.device}</span>
          </div>
          <button type="button" class="btn-copy-all" id="btnCopyAllCli">
            <i data-lucide="copy" style="width: 13px; height: 13px;"></i> Salin Semua Perintah
          </button>
        </div>
        <div class="terminal-body-lines">
          ${linesHtml}
        </div>
      </div>
    `;

    const btnCopy = document.getElementById("btnCopyAllCli");
    if (btnCopy) {
      btnCopy.addEventListener("click", () => {
        copyToClipboard(allCmdsRaw, `Perintah CLI untuk ${currentStep.device} berhasil disalin!`);
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ===================================================================
  // 6. CISCO ADAPTIVE & ENDLESS QUIZ ENGINE
  // ===================================================================
  let quizScore = parseInt(localStorage.getItem("ciscolab_quiz_score") || "0", 10);
  let quizStreak = 0;
  let quizTotalAnswered = parseInt(localStorage.getItem("ciscolab_quiz_answered") || "0", 10);
  let quizCorrectCount = parseInt(localStorage.getItem("ciscolab_quiz_correct") || "0", 10);
  let currentQuizCategory = "all";
  let currentQuizItem = null;
  let isQuizAnswered = false;

  const quizXpVal = document.getElementById("quizXpVal");
  const quizStreakVal = document.getElementById("quizStreakVal");
  const quizAccuracyVal = document.getElementById("quizAccuracyVal");
  const quizCountVal = document.getElementById("quizCountVal");
  const quizFilterChips = document.querySelectorAll(".q-chip");
  const quizCardBox = document.getElementById("quizCardBox");

  function updateQuizStatsHUD() {
    if (quizXpVal) quizXpVal.textContent = `${quizScore} XP`;
    if (quizStreakVal) quizStreakVal.textContent = `🔥 ${quizStreak}x`;
    if (quizCountVal) quizCountVal.textContent = `${quizTotalAnswered} Soal`;
    
    if (quizAccuracyVal) {
      if (quizTotalAnswered === 0) {
        quizAccuracyVal.textContent = "100%";
      } else {
        const acc = Math.round((quizCorrectCount / quizTotalAnswered) * 100);
        quizAccuracyVal.textContent = `${acc}%`;
      }
    }
  }

  function getNextQuizQuestion(category, excludeId) {
    if (typeof ciscoQuizBank === "undefined" || !ciscoQuizBank.length) return null;
    let pool = ciscoQuizBank;
    if (category && category !== "all") {
      pool = ciscoQuizBank.filter(q => q.category === category);
    }
    if (pool.length === 0) pool = ciscoQuizBank;
    if (pool.length > 1 && excludeId) {
      pool = pool.filter(q => q.id !== excludeId);
    }
    const randIdx = Math.floor(Math.random() * pool.length);
    return pool[randIdx];
  }

  function renderQuizQuestionCard(qItem) {
    if (!quizCardBox || !qItem) return;
    currentQuizItem = qItem;
    isQuizAnswered = false;

    const diffClass = qItem.difficulty === "Mudah" ? "q-diff-mudah" : qItem.difficulty === "Sedang" ? "q-diff-sedang" : "q-diff-sulit";
    const letters = ["A", "B", "C", "D"];

    const optionsHtml = qItem.options.map((opt, idx) => `
      <button type="button" class="q-opt-btn" data-index="${idx}">
        <span class="q-opt-letter">${letters[idx]}</span>
        <span>${opt}</span>
      </button>
    `).join("");

    quizCardBox.innerHTML = `
      <div class="q-meta-row">
        <span class="q-badge-cat">${qItem.categoryLabel}</span>
        <span class="q-badge-diff ${diffClass}">Tingkat: ${qItem.difficulty}</span>
      </div>
      <h3 class="q-title-text">${qItem.question}</h3>
      <div class="q-options-grid" id="quizOptionsGrid">
        ${optionsHtml}
      </div>
      <div id="quizFeedbackContainer"></div>
    `;

    const optButtons = quizCardBox.querySelectorAll(".q-opt-btn");
    optButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const chosenIdx = parseInt(btn.getAttribute("data-index"), 10);
        handleQuizAnswer(chosenIdx);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function handleQuizAnswer(chosenIdx) {
    if (isQuizAnswered || !currentQuizItem) return;
    isQuizAnswered = true;

    const optButtons = quizCardBox.querySelectorAll(".q-opt-btn");
    optButtons.forEach(btn => btn.disabled = true);

    const isCorrect = (chosenIdx === currentQuizItem.correctIndex);
    const feedbackContainer = document.getElementById("quizFeedbackContainer");

    if (isCorrect) {
      quizStreak++;
      const bonusXp = 10 + (quizStreak >= 3 ? quizStreak * 5 : 0);
      quizScore += bonusXp;
      quizCorrectCount++;
      quizTotalAnswered++;

      localStorage.setItem("ciscolab_quiz_score", quizScore);
      localStorage.setItem("ciscolab_quiz_answered", quizTotalAnswered);
      localStorage.setItem("ciscolab_quiz_correct", quizCorrectCount);

      if (optButtons[chosenIdx]) {
        optButtons[chosenIdx].classList.add("correct");
      }

      feedbackContainer.innerHTML = `
        <div class="quiz-feedback-box is-correct">
          <div class="quiz-feedback-title">
            <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i>
            <span>Jawaban Tepat! (+${bonusXp} XP ${quizStreak >= 3 ? "🔥 Combo Streak!" : ""})</span>
          </div>
          <p class="quiz-feedback-desc">${currentQuizItem.explanation}</p>
          <div class="quiz-feedback-tip">
            💡 <strong>Tips Ujian TKJ:</strong> ${currentQuizItem.conceptTip}
          </div>
        </div>
        <div class="quiz-action-row">
          <button type="button" class="btn-quiz-next" id="btnNextQuiz">
            <span>Lanjut Soal Berikutnya</span>
            <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
          </button>
        </div>
      `;

      document.getElementById("btnNextQuiz").addEventListener("click", () => {
        const nextQ = getNextQuizQuestion(currentQuizCategory, currentQuizItem.id);
        renderQuizQuestionCard(nextQ);
      });

    } else {
      quizStreak = 0;
      quizTotalAnswered++;

      localStorage.setItem("ciscolab_quiz_answered", quizTotalAnswered);

      if (optButtons[chosenIdx]) {
        optButtons[chosenIdx].classList.add("wrong");
      }
      if (optButtons[currentQuizItem.correctIndex]) {
        optButtons[currentQuizItem.correctIndex].classList.add("correct");
      }

      feedbackContainer.innerHTML = `
        <div class="quiz-feedback-box is-wrong">
          <div class="quiz-feedback-title">
            <i data-lucide="x-circle" style="width: 18px; height: 18px;"></i>
            <span>Jawaban Belum Tepat!</span>
          </div>
          <p class="quiz-feedback-desc">${currentQuizItem.explanation}</p>
          <div class="quiz-feedback-tip">
            💡 <strong>Konsep yang Benar:</strong> ${currentQuizItem.conceptTip}
          </div>
        </div>
        <div class="quiz-action-row">
          <button type="button" class="btn-quiz-swap" id="btnSwapQuiz">
            <i data-lucide="refresh-cw" style="width: 16px; height: 16px;"></i>
            <span>Ganti Soal Baru (Lanjut Latihan)</span>
          </button>
        </div>
      `;

      document.getElementById("btnSwapQuiz").addEventListener("click", () => {
        const nextQ = getNextQuizQuestion(currentQuizCategory, currentQuizItem.id);
        renderQuizQuestionCard(nextQ);
      });
    }

    updateQuizStatsHUD();
    if (window.lucide) window.lucide.createIcons();
  }

  function initQuizEngine() {
    updateQuizStatsHUD();
    if (typeof ciscoQuizBank === "undefined" || !Array.isArray(ciscoQuizBank) || ciscoQuizBank.length === 0) {
      if (quizCardBox) {
        quizCardBox.innerHTML = `
          <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-dim);">
            <i data-lucide="alert-triangle" style="width: 36px; height: 36px; margin: 0 auto 0.5rem; color: var(--cisco-gold);"></i>
            <p style="font-weight: 700; color: var(--cisco-navy);">Data Bank Soal Kuis (data/quiz.js) belum termuat.</p>
            <p style="font-size: 0.85rem; margin-top: 0.25rem;">Pastikan file <code>data/quiz.js</code> ikut terupload ke repository GitHub Anda.</p>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
      return;
    }

    quizFilterChips.forEach(chip => {
      chip.addEventListener("click", () => {
        quizFilterChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        currentQuizCategory = chip.getAttribute("data-qcat");
        const nextQ = getNextQuizQuestion(currentQuizCategory, null);
        renderQuizQuestionCard(nextQ);
      });
    });

    const firstQ = getNextQuizQuestion(currentQuizCategory, null);
    renderQuizQuestionCard(firstQ);
  }

  // ===================================================================
  // 7. LAB QUEST - TUGAS PRAKTIKUM LAPTOP & VALIDASI PG/ESAI
  // ===================================================================
  let questUnlockedLevel = parseInt(localStorage.getItem("ciscolab_quest_unlocked") || "1", 10);
  let questTotalXp = parseInt(localStorage.getItem("ciscolab_quest_xp") || "0", 10);
  let activeQuestIndex = 0;
  let isWorkingStatus = false;
  let questEvaluationResult = null; // null or evaluation result object

  const questPlayerRank = document.getElementById("questPlayerRank");
  const questPlayerXp = document.getElementById("questPlayerXp");
  const questLevelProgressText = document.getElementById("questLevelProgressText");
  const questProgressBarFill = document.getElementById("questProgressBarFill");
  const questLevelsMap = document.getElementById("questLevelsMap");
  const questActiveArena = document.getElementById("questActiveArena");
  const btnResetQuest = document.getElementById("btnResetQuest");

  function getPlayerRankTitle(xp) {
    if (xp >= 1500) return "👑 CCNA Certified Master";
    if (xp >= 1000) return "🏆 Senior Network Engineer";
    if (xp >= 600) return "🚀 Network Administrator";
    if (xp >= 300) return "⚡ Cisco Lab Specialist";
    if (xp >= 100) return "🛠️ Junior Network Tech";
    return "🌱 Novice Student TKJ";
  }

  function updateQuestPlayerHUD() {
    if (questPlayerRank) questPlayerRank.textContent = getPlayerRankTitle(questTotalXp);
    if (questPlayerXp) questPlayerXp.textContent = `${questTotalXp} XP Diperoleh`;
    if (typeof ciscoQuestLevels !== "undefined") {
      if (questLevelProgressText) questLevelProgressText.textContent = `Level ${questUnlockedLevel} / ${ciscoQuestLevels.length}`;
      if (questProgressBarFill) {
        const pct = Math.min(100, Math.round((questUnlockedLevel / ciscoQuestLevels.length) * 100));
        questProgressBarFill.style.width = `${pct}%`;
      }
    }
  }

  function renderQuestLevelsMap() {
    if (!questLevelsMap || typeof ciscoQuestLevels === "undefined") return;
    questLevelsMap.innerHTML = "";

    ciscoQuestLevels.forEach((lvl, idx) => {
      const isCleared = lvl.level < questUnlockedLevel;
      const isCurrentActive = idx === activeQuestIndex;
      const isLocked = lvl.level > questUnlockedLevel;

      let stateClass = "";
      if (isCleared) stateClass = "cleared";
      if (isCurrentActive) stateClass += " active";
      if (isLocked) stateClass = "locked";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `quest-level-item ${stateClass}`;
      btn.disabled = isLocked;

      btn.innerHTML = `
        <div class="quest-level-num">
          ${isCleared ? `<i data-lucide="check" style="width: 16px; height: 16px;"></i>` : isLocked ? `<i data-lucide="lock" style="width: 14px; height: 14px;"></i>` : lvl.level}
        </div>
        <div class="quest-level-meta">
          <div class="quest-level-title">Lvl ${lvl.level}: ${lvl.title}</div>
          <div class="quest-level-sub">
            <span>+${lvl.xpReward} XP</span>
            <span>•</span>
            <span>${lvl.difficulty}</span>
          </div>
        </div>
      `;

      btn.addEventListener("click", () => {
        if (isLocked) return;
        activeQuestIndex = idx;
        isWorkingStatus = false;
        questEvaluationResult = null;
        renderQuestLevelsMap();
        renderActiveQuestArena();
      });

      questLevelsMap.appendChild(btn);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function renderActiveQuestArena() {
    if (!questActiveArena || typeof ciscoQuestLevels === "undefined") return;
    const lvl = ciscoQuestLevels[activeQuestIndex];
    if (!lvl) return;

    // Generate Tasks Checklist HTML
    const taskItemsHtml = lvl.tasks.map((task, idx) => `
      <div class="quest-task-item">
        <span class="quest-task-num">${idx + 1}</span>
        <span>${task.replace(/\n/g, "<br/>")}</span>
      </div>
    `).join("");

    // Generate PG 1 & PG 2 HTML
    const pg1 = lvl.verification.pgQuestions[0];
    const pg1OptionsHtml = pg1.options.map((opt, idx) => `
      <label class="quest-verify-opt-label">
        <input type="radio" name="quest_pg1" value="${idx}" />
        <span><strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}</span>
      </label>
    `).join("");

    const pg2 = lvl.verification.pgQuestions[1];
    const pg2OptionsHtml = pg2.options.map((opt, idx) => `
      <label class="quest-verify-opt-label">
        <input type="radio" name="quest_pg2" value="${idx}" />
        <span><strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}</span>
      </label>
    `).join("");

    // Determine verification / evaluation section
    let verificationSectionHtml = "";

    if (questEvaluationResult && questEvaluationResult.levelNum === lvl.level) {
      const res = questEvaluationResult;
      verificationSectionHtml = `
        <div class="quest-eval-card ${res.passed ? "passed" : "failed"}">
          <div class="quest-eval-title">
            <i data-lucide="${res.passed ? "check-circle" : "alert-circle"}" style="width: 22px; height: 22px;"></i>
            <span>${res.passed ? "🎉 SEMPURNA! VALIDASI HASIL LAB SESUAI (LULUS)" : "❌ HASIL LAB BELUM SESUAI (PERLU REVISI)"}</span>
          </div>
          <p class="quest-eval-desc">
            ${res.passed ? `Selamat! Seluruh hasil pengujian dan perintah yang kamu terapkan di Packet Tracer laptopmu telah valid 100%. Kamu mendapatkan <strong>+${lvl.xpReward} XP</strong> dan Badge <strong>${lvl.badgeName}</strong>!` : `Kamu berhasil menjawab <strong>${res.score} dari 3</strong> pertanyaan verifikasi. Simak hasil analisis di bawah dan perbaiki konfigurasi di Cisco Packet Tracer laptopmu:`}
          </p>

          <div class="quest-eval-breakdown-list">
            <!-- PG 1 Breakdown -->
            <div class="quest-eval-item ${res.pg1Correct ? "is-correct" : "is-wrong"}">
              <div class="quest-eval-item-title">
                ${res.pg1Correct ? "✅ [Soal 1 PG - Benar]" : "❌ [Soal 1 PG - Belum Tepat]"} ${pg1.question}
              </div>
              <div class="quest-eval-item-text">
                <strong>Jawaban yang Benar:</strong> ${pg1.options[pg1.correctIndex]}<br/>
                💡 <em>${pg1.explanation}</em>
              </div>
            </div>

            <!-- PG 2 Breakdown -->
            <div class="quest-eval-item ${res.pg2Correct ? "is-correct" : "is-wrong"}">
              <div class="quest-eval-item-title">
                ${res.pg2Correct ? "✅ [Soal 2 PG - Benar]" : "❌ [Soal 2 PG - Belum Tepat]"} ${pg2.question}
              </div>
              <div class="quest-eval-item-text">
                <strong>Jawaban yang Benar:</strong> ${pg2.options[pg2.correctIndex]}<br/>
                💡 <em>${pg2.explanation}</em>
              </div>
            </div>

            <!-- Essay Breakdown -->
            <div class="quest-eval-item ${res.essayCorrect ? "is-correct" : "is-wrong"}">
              <div class="quest-eval-item-title">
                ${res.essayCorrect ? "✅ [Soal Esai Perintah - Tepat]" : "❌ [Soal Esai Perintah - Kurang Tepat]"} ${lvl.verification.essayQuestion.question}
              </div>
              <div class="quest-eval-item-text">
                <strong>Jawaban yang kamu ketik:</strong> <code>${res.userEssay || "(kosong)"}</code><br/>
                <strong>Format Baku yang Diterima:</strong> <code>${lvl.verification.essayQuestion.correctAnswerDesc}</code><br/>
                💡 <em>${lvl.verification.essayQuestion.explanation}</em>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            ${res.passed ? `
              ${activeQuestIndex + 1 < ciscoQuestLevels.length ? `
                <button type="button" class="btn-quest-confirm-done" id="btnNextQuestLevel">
                  <span>Lanjut ke Level ${lvl.level + 1}</span>
                  <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
                </button>
              ` : `
                <div style="font-weight: 800; color: #059669; font-size: 1.1rem; padding: 0.5rem 0;">👑 SELURUH LEVEL LAB QUEST TELAH DITUNTASKAN DENGAN SUKSES!</div>
              `}
            ` : `
              <button type="button" class="btn-quest-confirm-done" id="btnRetryQuestValidation" style="background: linear-gradient(135deg, #0070ba, #049fd9);">
                <i data-lucide="rotate-ccw" style="width: 16px; height: 16px;"></i>
                <span>Coba Validasi Ulang Hasil Lab</span>
              </button>
            `}
          </div>
        </div>
      `;
    } else if (isWorkingStatus) {
      verificationSectionHtml = `
        <div class="quest-verify-section" id="questVerifyFormSection">
          <div class="quest-verify-header">
            <div class="quest-verify-title">
              <i data-lucide="clipboard-check" style="width: 20px; height: 20px;"></i>
              <span>Sesi Verifikasi & Validasi Hasil Lab di Laptop</span>
            </div>
            <p class="quest-verify-subtitle">Jawab 2 pertanyaan pilihan ganda hasil observasi pengujian dan 1 soal esai perintah kunci yang kamu terapkan di Cisco Packet Tracer:</p>
          </div>

          <form id="questVerifyForm">
            <!-- Soal PG 1 -->
            <div class="quest-verify-q-box">
              <div class="quest-verify-q-title">1. ${pg1.question}</div>
              <div class="quest-verify-options">
                ${pg1OptionsHtml}
              </div>
            </div>

            <!-- Soal PG 2 -->
            <div class="quest-verify-q-box">
              <div class="quest-verify-q-title">2. ${pg2.question}</div>
              <div class="quest-verify-options">
                ${pg2OptionsHtml}
              </div>
            </div>

            <!-- Soal Esai -->
            <div class="quest-verify-q-box">
              <div class="quest-verify-q-title">3. [Esai Perintah Kunci] ${lvl.verification.essayQuestion.question}</div>
              <input type="text" class="quest-essay-input" id="questEssayInput" placeholder="${lvl.verification.essayQuestion.placeholder}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required />
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 0.75rem; flex-wrap: wrap;">
              <button type="button" class="btn-quiz-swap" id="btnCancelVerify">Kembali ke Panduan Tugas</button>
              <button type="submit" class="btn-quest-submit-check">
                <i data-lucide="send" style="width: 16px; height: 16px;"></i>
                <span>Periksa & Validasi Jawaban Saya</span>
              </button>
            </div>
          </form>
        </div>
      `;
    } else {
      verificationSectionHtml = `
        <div class="quest-status-action-box">
          <div class="quest-status-title">Sudah Selesai Mempraktikkan di Cisco Packet Tracer Laptopmu?</div>
          <p class="quest-status-desc">
            Buka Cisco Packet Tracer di komputermu, ikuti langkah-langkah tugas dan petunjuk di atas. Jika kamu sudah selesai mempraktikkan dan melakukan pengujian ping, klik tombol konfirmasi di bawah untuk memverifikasi hasilnya!
          </p>
          <button type="button" class="btn-quest-confirm-done" id="btnConfirmDoneWorking">
            <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i>
            <span>Saya Sudah Selesai Mengerjakan di Packet Tracer! (Buka Validasi Hasil)</span>
          </button>
        </div>
      `;
    }

    questActiveArena.innerHTML = `
      <!-- Briefing Scenario & Header -->
      <div class="quest-briefing-card">
        <div class="quest-briefing-title">
          <i data-lucide="laptop" style="width: 18px; height: 18px;"></i>
          <span>Tugas Mandiri Praktikum Level ${lvl.level}: ${lvl.title}</span>
        </div>
        <p class="quest-briefing-story">${lvl.story}</p>
      </div>

      <!-- Tasks Checklist to do in Laptop -->
      <div class="quest-tasks-box">
        <div class="quest-tasks-header">
          <i data-lucide="list-checks" style="width: 18px; height: 18px;"></i>
          <span>Langkah Tugas Praktikum yang Harus Kamu Kerjakan di Packet Tracer:</span>
        </div>
        <div class="quest-task-list">
          ${taskItemsHtml}
        </div>
      </div>

      <!-- Clue Box -->
      <div class="quest-hint-box">
        <i data-lucide="lightbulb" class="quest-hint-icon" style="width: 18px; height: 18px;"></i>
        <div class="quest-hint-text">
          <strong>Petunjuk / Clue Pembimbing:</strong> ${lvl.hint}
        </div>
      </div>

      <!-- Action / Verification Section -->
      ${verificationSectionHtml}
    `;

    // Event handler: Click "Saya Sudah Selesai Mengerjakan"
    const btnConfirm = document.getElementById("btnConfirmDoneWorking");
    if (btnConfirm) {
      btnConfirm.addEventListener("click", () => {
        isWorkingStatus = true;
        questEvaluationResult = null;
        renderActiveQuestArena();
        const verifySection = document.getElementById("questVerifyFormSection");
        if (verifySection) {
          verifySection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Event handler: Cancel verify
    const btnCancel = document.getElementById("btnCancelVerify");
    if (btnCancel) {
      btnCancel.addEventListener("click", () => {
        isWorkingStatus = false;
        renderActiveQuestArena();
      });
    }

    // Event handler: Submit verification form
    const verifyForm = document.getElementById("questVerifyForm");
    if (verifyForm) {
      verifyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const pg1SelectedEl = verifyForm.querySelector('input[name="quest_pg1"]:checked');
        const pg2SelectedEl = verifyForm.querySelector('input[name="quest_pg2"]:checked');
        const essayInputEl = document.getElementById("questEssayInput");

        if (!pg1SelectedEl) {
          alert("Silakan pilih jawaban untuk Soal Pilihan Ganda No. 1!");
          return;
        }
        if (!pg2SelectedEl) {
          alert("Silakan pilih jawaban untuk Soal Pilihan Ganda No. 2!");
          return;
        }

        const pg1Val = parseInt(pg1SelectedEl.value, 10);
        const pg2Val = parseInt(pg2SelectedEl.value, 10);
        const essayVal = essayInputEl ? essayInputEl.value.trim() : "";

        evaluateQuestSubmission(lvl, pg1Val, pg2Val, essayVal);
      });
    }

    // Event handler: Next level button
    const btnNextLvl = document.getElementById("btnNextQuestLevel");
    if (btnNextLvl) {
      btnNextLvl.addEventListener("click", () => {
        if (activeQuestIndex + 1 < ciscoQuestLevels.length) {
          activeQuestIndex++;
          isWorkingStatus = false;
          questEvaluationResult = null;
          renderQuestLevelsMap();
          renderActiveQuestArena();
        }
      });
    }

    // Event handler: Retry validation button
    const btnRetry = document.getElementById("btnRetryQuestValidation");
    if (btnRetry) {
      btnRetry.addEventListener("click", () => {
        isWorkingStatus = true;
        questEvaluationResult = null;
        renderActiveQuestArena();
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function evaluateQuestSubmission(lvl, pg1Choice, pg2Choice, userEssay) {
    const pg1Correct = (pg1Choice === lvl.verification.pgQuestions[0].correctIndex);
    const pg2Correct = (pg2Choice === lvl.verification.pgQuestions[1].correctIndex);

    // Normalize essay string for lenient keyword comparison
    const normEssay = userEssay.toLowerCase().replace(/\s+/g, " ").trim();
    const essayCorrect = lvl.verification.essayQuestion.validKeywords.some(kw => {
      const normKw = kw.toLowerCase().trim();
      return normEssay === normKw || normEssay.includes(normKw);
    });

    const score = (pg1Correct ? 1 : 0) + (pg2Correct ? 1 : 0) + (essayCorrect ? 1 : 0);
    const passed = (score === 3);

    if (passed) {
      // Award XP
      questTotalXp += lvl.xpReward;
      // Unlock next level if currently on highest unlocked
      if (lvl.level === questUnlockedLevel && questUnlockedLevel < ciscoQuestLevels.length) {
        questUnlockedLevel++;
        localStorage.setItem("ciscolab_quest_unlocked", questUnlockedLevel);
      }
      localStorage.setItem("ciscolab_quest_xp", questTotalXp);
      updateQuestPlayerHUD();
      renderQuestLevelsMap();
      showToast(`🎉 Level ${lvl.level} Berhasil Dituntaskan! (+${lvl.xpReward} XP)`);
    }

    questEvaluationResult = {
      levelNum: lvl.level,
      passed,
      score,
      pg1Correct,
      pg2Correct,
      essayCorrect,
      userEssay
    };

    renderActiveQuestArena();
  }

  function initQuestGame() {
    updateQuestPlayerHUD();
    if (typeof ciscoQuestLevels === "undefined" || !Array.isArray(ciscoQuestLevels) || ciscoQuestLevels.length === 0) {
      if (questActiveArena) {
        questActiveArena.innerHTML = `
          <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-dim);">
            <i data-lucide="alert-triangle" style="width: 36px; height: 36px; margin: 0 auto 0.5rem; color: var(--cisco-gold);"></i>
            <p style="font-weight: 700; color: var(--cisco-navy);">Data Lab Quest (data/quests.js) belum termuat.</p>
            <p style="font-size: 0.85rem; margin-top: 0.25rem;">Pastikan file <code>data/quests.js</code> ikut terupload ke repository GitHub Anda.</p>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
      return;
    }

    renderQuestLevelsMap();
    renderActiveQuestArena();

    if (btnResetQuest) {
      btnResetQuest.addEventListener("click", () => {
        if (confirm("Apakah kamu yakin ingin mereset seluruh progres Lab Quest ke Level 1?")) {
          questUnlockedLevel = 1;
          questTotalXp = 0;
          activeQuestIndex = 0;
          isWorkingStatus = false;
          questEvaluationResult = null;
          localStorage.removeItem("ciscolab_quest_unlocked");
          localStorage.removeItem("ciscolab_quest_xp");
          initQuestGame();
          showToast("Progres Lab Quest berhasil direset ke Level 1.");
        }
      });
    }
  }

  // ===================================================================
  // 8. RENDER KAMUS PERINTAH CISCO IOS (DICTIONARY VIEW)
  // ===================================================================
  function renderDictionary(cmds) {
    if (!cmdCardsGrid) return;
    cmdCardsGrid.innerHTML = "";

    if (!cmds || !Array.isArray(cmds) || cmds.length === 0) {
      const isMissing = typeof ciscoCommands === "undefined";
      cmdCardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: var(--text-dim);">
          <i data-lucide="alert-circle" style="width: 36px; height: 36px; margin: 0 auto 0.5rem; color: var(--cisco-gold);"></i>
          <p style="font-weight: 700; color: var(--cisco-navy);">${isMissing ? 'Data Perintah CLI (data/commands.js) belum termuat.' : 'Tidak ada perintah yang sesuai pencarian.'}</p>
          ${isMissing ? '<p style="font-size: 0.85rem; margin-top: 0.25rem;">Pastikan file <code>data/commands.js</code> ikut terupload ke repository GitHub Anda.</p>' : ''}
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    cmds.forEach(item => {
      const card = document.createElement("div");
      card.className = "cmd-card";
      card.innerHTML = `
        <div>
          <div class="cmd-card-header">
            <span class="cmd-mode-badge">${item.mode}</span>
            <span class="badge-category">${item.category.toUpperCase()}</span>
          </div>
          <div class="cmd-name">${item.command}</div>
          <div class="cmd-purpose">${item.purpose}</div>
          <div class="cmd-syntax-box">${item.syntax}</div>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">${item.explanation}</p>
        </div>
        <div class="cmd-tips-text">
          <i data-lucide="lightbulb" style="width: 15px; height: 15px; flex-shrink: 0; margin-top: 2px;"></i>
          <span><strong>Tips TKJ:</strong> ${item.tips}</span>
        </div>
      `;
      cmdCardsGrid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // ===================================================================
  // 9. SUBNETTING & IP ROUTE CALCULATOR ENGINE
  // ===================================================================
  const calcIpInput = document.getElementById("calcIpInput");
  const calcCidrInput = document.getElementById("calcCidrInput");
  const calcNextHopInput = document.getElementById("calcNextHopInput");
  const btnCalculate = document.getElementById("btnCalculate");

  function calculateSubnetAndRoute() {
    const ipStr = calcIpInput ? calcIpInput.value.trim() || "192.168.10.0" : "192.168.10.0";
    const cidr = calcCidrInput ? parseInt(calcCidrInput.value, 10) || 24 : 24;
    const nextHop = calcNextHopInput ? calcNextHopInput.value.trim() || "10.10.10.2" : "10.10.10.2";

    // Validate IP
    const parts = ipStr.split(".").map(p => parseInt(p, 10));
    if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) {
      alert("Masukkan format IP Address yang valid (contoh: 192.168.10.0)");
      return;
    }

    // Calculate Subnet Mask & Wildcard
    const maskBinary = "".padStart(cidr, "1").padEnd(32, "0");
    const maskParts = [
      parseInt(maskBinary.substring(0, 8), 2),
      parseInt(maskBinary.substring(8, 16), 2),
      parseInt(maskBinary.substring(16, 24), 2),
      parseInt(maskBinary.substring(24, 32), 2)
    ];
    const subnetMaskStr = maskParts.join(".");

    const wildcardParts = maskParts.map(p => 255 - p);
    const wildcardStr = wildcardParts.join(".");

    // Calculate Network ID & Broadcast
    const ipNum = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
    const maskNum = (maskParts[0] << 24) | (maskParts[1] << 16) | (maskParts[2] << 8) | maskParts[3];
    
    const netNum = (ipNum & maskNum) >>> 0;
    const broadNum = (netNum | (~maskNum >>> 0)) >>> 0;

    const netIpStr = [
      (netNum >>> 24) & 255,
      (netNum >>> 16) & 255,
      (netNum >>> 8) & 255,
      netNum & 255
    ].join(".");

    const broadIpStr = [
      (broadNum >>> 24) & 255,
      (broadNum >>> 16) & 255,
      (broadNum >>> 8) & 255,
      broadNum & 255
    ].join(".");

    const totalHosts = cidr === 32 ? 1 : cidr === 31 ? 2 : Math.pow(2, 32 - cidr) - 2;

    let rangeStr = "-";
    if (cidr <= 30) {
      const firstHost = [
        (netNum >>> 24) & 255,
        (netNum >>> 16) & 255,
        (netNum >>> 8) & 255,
        (netNum & 255) + 1
      ].join(".");
      const lastHost = [
        (broadNum >>> 24) & 255,
        (broadNum >>> 16) & 255,
        (broadNum >>> 8) & 255,
        (broadNum & 255) - 1
      ].join(".");
      rangeStr = `${firstHost} - ${lastHost}`;
    }

    // Update DOM
    const resNet = document.getElementById("resNetwork");
    const resMask = document.getElementById("resSubnetMask");
    const resWild = document.getElementById("resWildcard");
    const resBroad = document.getElementById("resBroadcast");
    const resRange = document.getElementById("resUsableRange");
    const resHosts = document.getElementById("resTotalHosts");
    const resRoute = document.getElementById("resRouteCmd");

    if (resNet) resNet.textContent = netIpStr;
    if (resMask) resMask.textContent = subnetMaskStr;
    if (resWild) resWild.textContent = wildcardStr;
    if (resBroad) resBroad.textContent = broadIpStr;
    if (resRange) resRange.textContent = rangeStr;
    if (resHosts) resHosts.textContent = `${totalHosts > 0 ? totalHosts : 0} Host`;
    
    if (resRoute) {
      resRoute.textContent = `ip route ${netIpStr} ${subnetMaskStr} ${nextHop}`;
    }
  }

  if (btnCalculate) {
    btnCalculate.addEventListener("click", calculateSubnetAndRoute);
  }

  const btnCopyGenRoute = document.getElementById("btnCopyGenRoute");
  if (btnCopyGenRoute) {
    btnCopyGenRoute.addEventListener("click", () => {
      const cmdText = document.getElementById("resRouteCmd")?.textContent || "";
      copyToClipboard(cmdText, "Perintah 'ip route' berhasil disalin!");
    });
  }

  // ===================================================================
  // 10. FILTER & SEARCH HANDLER
  // ===================================================================
  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const allMods = getModules();

    const filtered = allMods.filter((mod) => {
      const matchCat = currentCategory === "all" || mod.category === currentCategory;
      const matchSearch =
        !query ||
        mod.title.toLowerCase().includes(query) ||
        mod.description.toLowerCase().includes(query) ||
        mod.devices.some(d => d.toLowerCase().includes(query)) ||
        mod.cliSteps.some(step => step.commands.some(c => c.cmd.toLowerCase().includes(query)));
      
      return matchCat && matchSearch;
    });

    renderModulesSidebar(filtered);

    const stillExists = filtered.find(m => m.id === currentModuleId);
    if (stillExists) {
      renderWorkspace(stillExists);
    } else if (filtered.length > 0) {
      currentModuleId = filtered[0].id;
      activeTabDeviceIndex = 0;
      updateActiveSidebar();
      renderWorkspace(filtered[0]);
    }

    if (typeof ciscoCommands !== "undefined" && Array.isArray(ciscoCommands)) {
      const filteredCmds = ciscoCommands.filter(c => 
        !query ||
        c.command.toLowerCase().includes(query) ||
        c.purpose.toLowerCase().includes(query) ||
        c.explanation.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query)
      );
      renderDictionary(filteredCmds);
    } else {
      renderDictionary([]);
    }
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.getAttribute("data-filter");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  // ===================================================================
  // 11. NAVIGATION VIEW SWITCHER (Desktop Nav & Mobile Bottom Nav)
  // ===================================================================
  function switchView(view) {
    // Update Desktop Nav
    navBtns.forEach((b) => {
      if (b.getAttribute("data-view") === view) b.classList.add("active");
      else b.classList.remove("active");
    });

    // Update Mobile Bottom Nav
    mobileNavBtns.forEach((b) => {
      if (b.getAttribute("data-view") === view) b.classList.add("active");
      else b.classList.remove("active");
    });

    // Hide all tab views first
    if (sectionModules) sectionModules.style.display = "none";
    if (sectionQuest) sectionQuest.style.display = "none";
    if (sectionQuiz) sectionQuiz.style.display = "none";
    if (sectionDictionary) sectionDictionary.classList.remove("active");
    if (sectionCalculator) sectionCalculator.classList.remove("active");

    if (view === "modules") {
      sectionModules.style.display = "block";
    } else if (view === "quest") {
      sectionQuest.style.display = "block";
      initQuestGame();
    } else if (view === "quiz") {
      sectionQuiz.style.display = "block";
      initQuizEngine();
    } else if (view === "dictionary") {
      sectionDictionary.classList.add("active");
      renderDictionary(typeof ciscoCommands !== "undefined" ? ciscoCommands : []);
    } else if (view === "calculator") {
      sectionCalculator.classList.add("active");
      calculateSubnetAndRoute();
    }
  }

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchView(btn.getAttribute("data-view"));
    });
  });

  mobileNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchView(btn.getAttribute("data-view"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // ===================================================================
  // 12. HELPER COPY TO CLIPBOARD & TOAST
  // ===================================================================
  function copyToClipboard(text, msg) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(msg || "Berhasil disalin ke clipboard!");
    }).catch(() => {
      showToast("Gagal menyalin perintah.");
    });
  }

  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.querySelector("span").textContent = msg;
    toastNotice.classList.add("show");
    setTimeout(() => {
      toastNotice.classList.remove("show");
    }, 2800);
  }

  // Initial Boot
  applyFilters();
  calculateSubnetAndRoute();
  renderDictionary(typeof ciscoCommands !== "undefined" ? ciscoCommands : []);
});
