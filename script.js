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
