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

