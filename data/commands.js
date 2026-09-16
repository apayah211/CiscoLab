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
