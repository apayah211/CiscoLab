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
