# 🌐 CiscoLab TKJ — Packet Tracer Learning Hub & Lab Guide

Aplikasi web interaktif pembelajaran **Cisco Packet Tracer** yang dirancang khusus untuk siswa SMK Jurusan Teknik Komputer & Jaringan (TKJ).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cisco](https://img.shields.io/badge/Cisco_Packet_Tracer-1BA0D7?style=for-the-badge&logo=cisco&logoColor=white)

---

## 🚀 Fitur Utama

1. 📖 **6 Modul Praktikum Lengkap TKJ**:
   - Modul 1: Pengenalan Mode Cisco IOS & Konfigurasi Dasar
   - Modul 2: VLAN (Virtual LAN) & Switchport Trunking (802.1Q)
   - Modul 3: Static Routing (`ip route`) & Multi-Router Connection
   - Modul 4: Inter-VLAN Routing (*Router-on-a-Stick* / Sub-Interfaces)
   - Modul 5: DHCP Server & IP Helper-Address pada Cisco Router
   - Modul 6: Dynamic Routing OSPF Single Area (Area 0)

2. 🖼️ **Diagram Topologi Grafis Interaktif (SVG HD)**:
   - Simbol resmi router, switch, monitor PC, dan kabel berwarna (*Straight, WAN Serial, Trunk 802.1Q, Console*).
   - Fitur **Modal Zoom Fullscreen** untuk melihat detail interface dan alokasi IP tanpa buram atau terpotong.

3. 🎮 **Lab Quest (Game Praktikum Mandiri)**:
   - Skenario tugas mandiri untuk dikerjakan langsung di software **Cisco Packet Tracer laptop siswa**.
   - Dilengkapi **Clue / Petunjuk Pembimbing**.
   - Sesi **Verifikasi Hasil Lab**: 2 soal Pilihan Ganda hasil observasi dan 1 soal Esai perintah CLI kunci.
   - Sistem **Unlock Level**: Menyelesaikan misi membuka level berikutnya dan memberikan XP serta Badge!

4. 🏆 **Kuis Interaktif Cisco (Endless / Adaptive Mode)**:
   - 28+ bank soal pilihan ganda seputar Cisco IOS, subnetting, wildcard mask, dan troubleshooting.
   - Otomatis mengganti soal baru saat menjawab salah untuk latihan berkelanjutan tanpa henti.
   - Statistik HUD: Skor XP, 🔥 Streak Combo, dan Akurasi Jawaban.

5. 💻 **Kamus Perintah CLI Cisco IOS**:
   - 16+ perintah penting dengan penjelasan mode hierarki (`User`, `Privileged`, `Config`, `Interface`), sintaks baku, dan tips ujian TKJ.

6. 🧮 **Subnetting & Route Helper**:
   - Kalkulator otomatis Network ID, Subnet Mask, Wildcard Mask OSPF, Broadcast, dan rentang IP.
   - Generator otomatis perintah `ip route` siap salin (1-click copy).

7. 📱 **100% Responsif di Smartphone**:
   - Bottom navigation 5 tab khusus layar HP.
   - Quick module dropdown selector.

---

## 🛠️ Cara Menjalankan Secara Lokal

Cukup clone repository ini dan buka berkas `index.html` di browser Anda:

```bash
git clone https://github.com/<username>/<nama-repo>.git
cd <nama-repo>
python3 -m http.server 8080
```
Buka browser di: `http://localhost:8080`

---

## 👨‍💻 Kontribusi & Lisensi
Dibuat untuk mempermudah praktikum siswa SMK TKJ di seluruh Indonesia.  
© 2026 CiscoLab TKJ.
