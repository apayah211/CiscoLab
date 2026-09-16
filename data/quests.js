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
