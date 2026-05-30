  const icons = {
    calendar: `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>`,
    users: `<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    search: `<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>`,
    chevronDown: `<svg class="icon small chevron" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>`,
    chevronLeft: `<svg class="icon small" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>`,
    chevronRight: `<svg class="icon small" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>`,
    mic: `<svg class="icon blue" viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><path d="M12 19v3"></path></svg>`,
    mic2: `<svg class="icon" viewBox="0 0 24 24"><path d="M9 9v3a3 3 0 0 0 6 0V9"></path><path d="M12 2a3 3 0 0 0-3 3v4h6V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><path d="M12 19v3"></path></svg>`,
    clock: `<svg class="icon small" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,
    bass: `<svg class="icon purple" viewBox="0 0 24 24"><path d="M15 3h4v4l-3 3"></path><path d="M14 9 5 18"></path><path d="M7 16a3.2 3.2 0 1 0 4.5 4.5 3.2 3.2 0 0 0-4.5-4.5Z"></path><path d="M12 14c1.4 1.7 1.7 3.7.4 5"></path><path d="M16 5l3 3"></path></svg>`,
    acoustic: `<svg class="icon orange" viewBox="0 0 24 24"><path d="M15 4h5v5"></path><path d="M13 11 5 19"></path><path d="M8 15a4 4 0 1 0 5 5 4 4 0 0 0-5-5Z"></path><circle cx="10.5" cy="17.5" r="1.2"></circle><path d="M15 8l2 2"></path></svg>`,
    electric: `<svg class="icon purple" viewBox="0 0 24 24"><path d="m17 3 4 4-5 5"></path><path d="M14 10 6 18"></path><path d="M7 15 4 18l2 2 3-1 1 3 3-3-3-3Z"></path><path d="M18 6l2 2"></path></svg>`,
    drum: `<svg class="icon red" viewBox="0 0 24 24"><circle cx="8" cy="10" r="3"></circle><circle cx="16" cy="10" r="3"></circle><path d="M6 15h12v3a6 2.5 0 0 1-12 0Z"></path><path d="m4 4 4 4M20 4l-4 4"></path></svg>`,
    keyboard: `<svg class="icon blue" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M7 6v12M11 6v7M15 6v7M19 6v12"></path><path d="M3 13h18"></path></svg>`,
    piano: `<svg class="icon blue" viewBox="0 0 24 24"><path d="M4 6h16v12H4z"></path><path d="M7 6v12M10 6v8M13 6v8M16 6v8"></path><path d="M4 14h16"></path></svg>`,
    sax: `<svg class="icon green" viewBox="0 0 24 24"><path d="M9 3c3 2 5 6 5 10v3"></path><path d="M13 16c0 3-2 5-5 5-2 0-4-1-4-3s2-3 4-2"></path><path d="M14 13h4l2 4"></path><path d="M9 3h4"></path></svg>`,
    trumpet: `<svg class="icon orange" viewBox="0 0 24 24"><path d="M3 11h10"></path><path d="M13 8v6l7 3V5Z"></path><path d="M6 8v6M9 8v6"></path><path d="M4 14c0 2 2 3 4 3"></path></svg>`,
    violin: `<svg class="icon purple" viewBox="0 0 24 24"><path d="M12 3v18"></path><path d="M8 7c-3 1-4 5-1 7 1 1 1 3 0 4 3 1 6-1 5-4"></path><path d="M16 7c3 1 4 5 1 7-1 1-1 3 0 4-3 1-6-1-5-4"></path><path d="M5 5l14 14"></path></svg>`,
    flute: `<svg class="icon green" viewBox="0 0 24 24"><path d="M3 13h18"></path><circle cx="8" cy="13" r="1"></circle><circle cx="12" cy="13" r="1"></circle><circle cx="16" cy="13" r="1"></circle><path d="M20 10v6"></path></svg>`,
    cajon: `<svg class="icon orange" viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="2"></rect><circle cx="12" cy="11" r="2"></circle><path d="M9 18h6"></path></svg>`,
    percussion: `<svg class="icon orange" viewBox="0 0 24 24"><path d="M6 8h12v11a6 2 0 0 1-12 0Z"></path><path d="M6 8a6 2 0 0 0 12 0"></path><path d="m7 3 4 4M17 3l-4 4"></path></svg>`,
    cake: `<svg class="icon pink birthday-icon" viewBox="0 0 24 24"><path d="M4 21h16"></path><path d="M5 21V11h14v10"></path><path d="M8 11V7M12 11V7M16 11V7"></path><path d="M8 7c0-1 1-2 1-3 0 0 1 1 1 2a2 2 0 0 1-2 1ZM12 7c0-1 1-2 1-3 0 0 1 1 1 2a2 2 0 0 1-2 1ZM16 7c0-1 1-2 1-3 0 0 1 1 1 2a2 2 0 0 1-2 1Z"></path></svg>`,
    tag: `<svg class="icon" viewBox="0 0 24 24"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z"></path><circle cx="7" cy="7" r="1"></circle></svg>`,
    shirt: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="uniform-shape" d="M8 4 4 6l-2 5 4 2 2-3v10h8V10l2 3 4-2-2-5-4-2-2 3h-4Z"></path></svg>`,
    blouse: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="uniform-shape" d="M8 4 5 6 3 12l4 1 1-3 1 10h6l1-10 1 3 4-1-2-6-3-2-4 4Z"></path></svg>`,
    pants: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="uniform-shape" d="M8 3h8l2 18h-5l-1-10-1 10H6Z"></path><path class="uniform-detail" d="M12 4v7"></path></svg>`,
    skirt: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="uniform-shape" d="M8 4h8l3 17H5Z"></path><path class="uniform-detail" d="M9 4v17M15 4v17"></path></svg>`,
    dress: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="uniform-shape" d="M8 2.8 11 9h2l3-6.2 4 1.4-1.7 4.5-2.2.9L21 22H3l4.9-12.4-2.2-.9L4 4.2Z"></path><path class="uniform-detail" d="M6.5 10h11M5 21h14"></path><circle class="uniform-dot" cx="8.8" cy="12.6" r=".55"></circle><circle class="uniform-dot" cx="14.2" cy="13.8" r=".55"></circle><circle class="uniform-dot" cx="11" cy="16.7" r=".55"></circle><circle class="uniform-dot" cx="16.4" cy="18.8" r=".5"></circle></svg>`,
    galaDress: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="uniform-shape" d="M8 2.8 11 9h2l3-6.2 4 1.4-1.7 4.5-2.2.9L21 22H3l4.9-12.4-2.2-.9L4 4.2Z"></path><path class="uniform-detail" d="M6.5 10h11M5 21h14"></path></svg>`,
    galaShirt: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="uniform-shape" d="M7.5 4.2h9L20 8.5c.8 1.5 1.2 4.6 1 9.2C18.5 19.2 15.5 20 12 20s-6.5-.8-9-2.3c-.2-4.6.2-7.7 1-9.2Z"></path><path class="uniform-detail" d="M8.2 4.7 12 18.5l3.8-13.8"></path><path class="uniform-tie" d="M10.7 6.2h2.6L12 8.1l1.6 6.2L12 18.5l-1.6-4.2L12 8.1Z"></path></svg>`,
    x: `<svg class="icon small" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg>`,
    note: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="M8 8h8M8 12h8M8 16h5"></path></svg>`,
    crown: `<svg class="icon" viewBox="0 0 24 24"><path d="m2 8 5 4 5-7 5 7 5-4-2 11H4Z"></path></svg>`
  };

  function instrumentIcon(role, missing = false) {
    const classFor = (slug) => `instrument-icon ${slug}${missing ? " missing" : ""}`;
    const key = role
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const map = {
      bajo: `<svg class="${classFor("bajo")}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15.5 3.5 20.5 8.5"/><path d="M18 6 9.5 14.5"/><path d="M7.8 10.8c-2.8.7-4.5 2.9-3.9 5.6.7 3 3.7 4.8 6.6 4 2.2-.6 3.3-2.2 3-4-.2-1.1-.9-1.8-2-2.2"/><path d="M8.1 16.2h.01"/><path d="M11 13 14 16"/><path d="M19.5 4.5h1.5v1.5"/></svg>`,
      bateria: `<svg class="${classFor("bateria")}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="15" r="4"/><path d="M8 15v3c0 1.5 1.8 2.5 4 2.5s4-1 4-2.5v-3"/><path d="M5 10h5"/><path d="M14 10h5"/><path d="M7.5 10v3"/><path d="M16.5 10v3"/><path d="M6 5l4 4"/><path d="M18 5l-4 4"/></svg>`,
      guitarra: `<svg class="${classFor("guitarra")}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15.5 3.5 20.5 8.5"/><path d="M18 6 10 14"/><path d="M8.3 10.8c-2.7.4-4.6 2.5-4.3 5.1.4 3 3.2 5.1 6.1 4.7 2.3-.3 3.7-1.9 3.5-3.7-.1-1.1-.8-1.9-1.8-2.4"/><circle cx="8.8" cy="16.3" r=".8"/><path d="M11.5 13.5 14.5 16.5"/><path d="M20 4h1v1"/></svg>`,
      electrica: `<svg class="${classFor("electrica")}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 3 5 5-6 6"/><path d="M14 11 8 17"/><path d="M7 13 3.5 16.5 6 18l-1 3 4-2 2 2 2-4-3-3Z"/><path d="M18.5 5.5 20 4"/><path d="M9.5 14.5 12.5 17.5"/></svg>`,
      piano: `<svg class="${classFor("piano")}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 6v12"/><path d="M11 6v12"/><path d="M15 6v12"/><path d="M19 6v12"/><path d="M9 6v6"/><path d="M13 6v6"/><path d="M17 6v6"/></svg>`,
      teclado: `<svg class="${classFor("teclado")}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M6 9h12"/><path d="M7 12v5"/><path d="M10 12v5"/><path d="M13 12v5"/><path d="M16 12v5"/><circle cx="7" cy="7" r=".5"/><circle cx="10" cy="7" r=".5"/></svg>`,
      saxofon: `<svg class="${classFor("saxofon")}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3c2 2 2.4 4.8 1.2 7.4"/><path d="M16.2 10.4c-1 2.2-3 3.6-5.7 4"/><path d="M10.5 14.4c-2.7 0-4.5 1.6-4.5 3.8 0 2 1.6 3.3 3.9 3.3 3.6 0 6.1-2.6 7.6-6.4"/><path d="M13 5 17 2"/><path d="M17 2l3 3"/><path d="M9.5 12.5 6.5 9.5"/><path d="M6.5 9.5 4.5 11.5"/><circle cx="12" cy="12" r=".5"/><circle cx="14" cy="10" r=".5"/></svg>`,
      percusion: `<svg class="${classFor("percusion")}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="8" cy="7" rx="3.5" ry="1.8"/><path d="M4.5 7 5.5 18c.2 1.3 1.3 2.2 2.5 2.2s2.3-.9 2.5-2.2l1-11"/><ellipse cx="16" cy="8" rx="3.5" ry="1.8"/><path d="M12.5 8 13.5 18c.2 1.2 1.3 2 2.5 2s2.3-.8 2.5-2l1-10"/><path d="M5.5 4 4 2"/><path d="M18.5 4 20 2"/></svg>`
    };
    if (key.includes("electrica")) return map.electrica;
    if (key.includes("teclado")) return map.teclado;
    if (key.includes("piano")) return map.piano;
    if (key.includes("bateria")) return map.bateria;
    if (key.includes("saxofon")) return map.saxofon;
    if (key.includes("percusion") || key.includes("percusiones")) return map.percusion;
    if (key.includes("guitarra")) return map.guitarra;
    if (key.includes("bajo")) return map.bajo;
    return icons.users;
  }

  const roleIcons = {
    "Bajo": instrumentIcon("Bajo"),
    "Batería": instrumentIcon("Batería"),
    "Piano": instrumentIcon("Piano"),
    "Guitarra": instrumentIcon("Guitarra"),
    "Guitarra eléctrica": instrumentIcon("Guitarra eléctrica"),
    "Saxofón": instrumentIcon("Saxofón"),
    "Trompeta": icons.trumpet,
    "Violín": icons.violin,
    "Percusiones": instrumentIcon("Percusiones"),
    "Percusión": instrumentIcon("Percusión"),
    "Cajón": icons.cajon,
    "Flauta": icons.flute,
    "Teclado": instrumentIcon("Teclado")
  };

  const schedule = APP_DATA.schedule;
  const birthdays = APP_DATA.birthdays;
  const state = {
    selectedFilters: new Set(),
    search: "",
    selectedDate: "",
    selectedServiceIndex: 0,
    detailAnchor: null,
    view: "month",
    selectedWeek: 0
  };

  const byDate = new Map();
  schedule.forEach(service => {
    if (!byDate.has(service.date)) byDate.set(service.date, []);
    byDate.get(service.date).push(service);
  });

  const birthdaysByDate = new Map();
  birthdays.forEach(item => {
    if (!birthdaysByDate.has(item.date)) birthdaysByDate.set(item.date, []);
    birthdaysByDate.get(item.date).push(item);
  });

  const weekdayGrid = document.querySelector("#weekdayGrid");
  const calendarGrid = document.querySelector("#calendarGrid");
  const detailMount = document.querySelector("#serviceDetailMount");
  const calendarWrapper = document.querySelector("#calendarWrapper");
  const filterStatus = document.querySelector("#filterStatus");
  const filterContent = document.querySelector("#filterContent");
  const mobileFilterContent = document.querySelector("#mobileFilterContent");
  const filterDrawer = document.querySelector("#filterDrawer");
  const openFilters = document.querySelector("#openFilters");
  const closeFilters = document.querySelector("#closeFilters");
  const weekSelector = document.querySelector("#weekSelector");
  const mobileMedia = window.matchMedia("(max-width: 768px)");
  const mobileScrollLocks = new Set();
  let lockedScrollY = 0;

  const longDate = new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  function applyMobileScrollLock() {
    const shouldLock = mobileMedia.matches && mobileScrollLocks.size > 0;
    if (shouldLock && !document.body.classList.contains("mobile-scroll-locked")) {
      lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      document.body.classList.add("mobile-scroll-locked");
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockedScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      return;
    }

    if (!shouldLock && document.body.classList.contains("mobile-scroll-locked")) {
      document.body.classList.remove("mobile-scroll-locked");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, lockedScrollY);
    }
  }

  function setMobileScrollLock(key, enabled) {
    if (enabled) mobileScrollLocks.add(key);
    else mobileScrollLocks.delete(key);
    applyMobileScrollLock();
  }

  function openMobileFilters() {
    filterDrawer?.classList.add("is-open");
    bindContainedScroll(filterDrawer);
    setMobileScrollLock("filters", true);
  }

  function closeMobileFilters() {
    filterDrawer?.classList.remove("is-open");
    setMobileScrollLock("filters", false);
  }

  function resetCalendarFilters() {
    state.selectedFilters.clear();
    state.search = "";
    state.selectedDate = "";
    state.selectedServiceIndex = 0;
    state.detailAnchor = null;
    closeMobileFilters();
    closeDetail();
    renderFilters(filterContent);
    renderFilters(mobileFilterContent);
    renderCalendar();
    renderDetail();
  }

  function bindContainedScroll(element) {
    if (!element || element.dataset.scrollContained === "true") return;
    element.dataset.scrollContained = "true";
    let startY = 0;

    element.addEventListener("touchstart", event => {
      startY = event.touches[0]?.clientY || 0;
    }, { passive: true });

    element.addEventListener("touchmove", event => {
      if (!mobileMedia.matches) return;
      const currentY = event.touches[0]?.clientY || 0;
      const deltaY = currentY - startY;
      const atTop = element.scrollTop <= 0;
      const atBottom = Math.ceil(element.scrollTop + element.clientHeight) >= element.scrollHeight;

      if ((atTop && deltaY > 0) || (atBottom && deltaY < 0)) {
        event.preventDefault();
      }
    }, { passive: false });
  }

  function isSunday(dateKey) {
    return new Date(`${dateKey}T12:00:00`).getDay() === 0;
  }

  function initials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
  }

  function peopleForService(service) {
    return [
      service.principal,
      ...service.voices,
      ...Object.values(service.musicians)
    ].filter(name => name && name !== "No asignado");
  }

  function serviceMatchesFilters(service) {
    if (!state.selectedFilters.size) return true;
    const people = new Set(peopleForService(service));
    return [...state.selectedFilters].some(name => people.has(name));
  }

  function selectedMinisterName() {
    return [...state.selectedFilters][0] || "";
  }

  function renderFilterStatus() {
    if (!filterStatus) return;
    const name = selectedMinisterName();
    filterStatus.classList.toggle("is-visible", Boolean(name));
    filterStatus.innerHTML = name ? `Seleccionaste el ministro: <strong>${name}</strong>` : "";
  }

  function visibleServicesForDate(dateKey) {
    const services = byDate.get(dateKey) || [];
    return services.filter(serviceMatchesFilters);
  }

  function calendarCells() {
    const all = [{ date: "2026-05-31", day: 31, outside: true }];
    for (let day = 1; day <= 30; day++) all.push({ date: `2026-06-${String(day).padStart(2, "0")}`, day, outside: false });
    for (let day = 1; day <= 4; day++) all.push({ date: `2026-07-${String(day).padStart(2, "0")}`, day, outside: true });
    if (state.view === "week") {
      const start = state.selectedWeek * 7;
      return all.slice(start, start + 7);
    }
    return all;
  }

  function colorInfo(name = "") {
    const key = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
    const map = {
      ROJO: { fill: "#DC2626", stroke: "#991B1B", text: "Rojo" },
      NEGRO: { fill: "#111827", stroke: "#020617", text: "Negro" },
      GRIS: { fill: "#9CA3AF", stroke: "#6B7280", text: "Gris" },
      BLANCO: { fill: "#FFFFFF", stroke: "#D1D5DB", text: "Blanco" },
      AZUL: { fill: "#2563EB", stroke: "#1D4ED8", text: "Azul" },
      VERDE: { fill: "#16A34A", stroke: "#15803D", text: "Verde" },
      AMARILLO: { fill: "#FACC15", stroke: "#CA8A04", text: "Amarillo" },
      NARANJA: { fill: "#F97316", stroke: "#C2410C", text: "Naranja" },
      LILA: { fill: "#C4B5FD", stroke: "#7C3AED", text: "Lila" },
      DORADO: { fill: "#D97706", stroke: "#B45309", text: "Dorado" },
      BEIGE: { fill: "#D6C3A5", stroke: "#A78B65", text: "Beige" },
      CAFE: { fill: "#92400E", stroke: "#78350F", text: "Café" },
      MORADO: { fill: "#7C3AED", stroke: "#6D28D9", text: "Morado" },
      ROSADO: { fill: "#EC4899", stroke: "#DB2777", text: "Rosado" }
    };
    return map[key] || null;
  }

  function parseUniform(uniform = "") {
    const text = uniform.trim();
    if (!text || /no asignado/i.test(text) || text.length > 34) return null;
    const parts = text.split(/\s+Y\s+|\s*,\s*|\s*\/\s*/i).map(part => part.trim()).filter(Boolean);
    const top = colorInfo(parts[0]);
    const bottom = colorInfo(parts[1] || parts[0]);
    if (!top || !bottom) return null;
    return { top, bottom };
  }

  function uniformPiece(icon, label, color) {
    return `
      <div class="uniform-piece" style="--piece-fill:${color.fill}; --piece-stroke:${color.stroke};">
        ${icon}
        <span>${label}<small>${color.text}</small></span>
      </div>
    `;
  }

  function uniformIconOnly(icon, color, accent = "#111827") {
    return `
      <div class="uniform-piece icon-only" style="--piece-fill:${color.fill}; --piece-stroke:${color.stroke}; --piece-accent:${accent};">
        ${icon}
      </div>
    `;
  }

  function uniformLabel(uniform) {
    const text = String(uniform || "").trim();
    if (!text || /no asignado/i.test(text)) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  function renderUniform(uniform) {
    const key = String(uniform || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
    if (key === "NUEVO") {
      const black = colorInfo("NEGRO");
      const beige = colorInfo("BEIGE");
      return `
        <div class="uniform-visual uniform-nuevo">
          <div class="uniform-stack">
            ${uniformPiece(icons.shirt, "Camisa", black)}
          ${uniformPiece(icons.pants, "Pantalón", beige)}
          </div>
          ${uniformIconOnly(icons.dress, black)}
        </div>
      `;
    }
    if (key === "GALA") {
      const shirt = colorInfo("AZUL");
      const dress = colorInfo("NARANJA") || { fill: "#F97316", stroke: "#C2410C", text: "Naranja" };
      return `
        <div class="uniform-visual uniform-gala">
          ${uniformIconOnly(icons.galaShirt, shirt, "#F8FAFC")}
          ${uniformIconOnly(icons.galaDress, dress)}
        </div>
      `;
    }
    const parsed = parseUniform(uniform);
    if (!parsed) return `<div class="uniform-fallback">${uniform || "Uniforme no asignado."}</div>`;
    return `
      <div class="uniform-visual">
        ${uniformPiece(icons.shirt, "Camisa", parsed.top)}
        ${uniformPiece(icons.blouse, "Blusa", parsed.top)}
        ${uniformPiece(icons.pants, "Pantalón", parsed.bottom)}
        ${uniformPiece(icons.skirt, "Falda", parsed.bottom)}
      </div>
    `;
  }

  function uniqueSorted(values) {
    return [...new Set(values.filter(Boolean).filter(v => v !== "No asignado"))].sort((a, b) => a.localeCompare(b, "es"));
  }

  function filterGroups() {
    const principals = uniqueSorted(schedule.map(s => s.principal));
    const support = uniqueSorted(schedule.flatMap(s => s.voices));
    const musicianRoleMap = new Map();
    schedule.forEach(service => {
      Object.entries(service.musicians).forEach(([role, name]) => {
        if (!name || name === "No asignado") return;
        if (!musicianRoleMap.has(name)) musicianRoleMap.set(name, new Set());
        musicianRoleMap.get(name).add(role);
      });
    });
    const musicians = [...musicianRoleMap.entries()]
      .map(([name, roles]) => ({ name, roles: [...roles].sort() }))
      .sort((a, b) => a.name.localeCompare(b.name, "es"));
    return { principals, support, musicians };
  }

  function visibleBySearch(name) {
    return name.toLowerCase().includes(state.search.trim().toLowerCase());
  }

  function filterRow(name, category, extra = "") {
    const checked = state.selectedFilters.has(name) ? "checked" : "";
    const selectedClass = checked ? " is-selected" : "";
    const icon = category === "principal" ? icons.mic : category === "support" ? icons.mic2 : extra;
    return `
      <label class="filter-row filter-row-${category}${selectedClass}" data-filter-name="${name}" title="${name}">
        <input type="checkbox" value="${name}" ${checked}>
        ${icon}
        <span>${name}</span>
      </label>
    `;
  }

  function renderFilters(target) {
    const groups = filterGroups();
    const principalRows = groups.principals.filter(visibleBySearch).map(name => filterRow(name, "principal")).join("");
    const supportRows = groups.support.filter(visibleBySearch).map(name => filterRow(name, "support")).join("");
    const musicianRows = groups.musicians
      .filter(item => visibleBySearch(item.name))
      .map(item => filterRow(item.name, "musician", roleIcons[item.roles[0]] || icons.users))
      .join("");
    const birthdayRows = birthdays.length
      ? birthdays.map(item => `
        <div class="birthday-item">
          <span class="icon pink">${icons.cake}</span>
          <span>${item.name}</span>
          <span class="birthday-date">${item.label}</span>
        </div>
      `).join("")
      : `<p class="empty-state">No hay cumpleaños registrados este mes.</p>`;

    target.innerHTML = `
      <p class="section-label">Filtros de ministros</p>
      <div class="search-wrap">
        ${icons.search}
        <input class="filter-search" type="search" placeholder="Buscar ministro..." value="${state.search}">
      </div>
      <section class="accordion" data-group="principals">
        <button class="accordion-button" type="button">
          <span class="accordion-title">${icons.mic} Vocalistas principales</span>
          <span class="chevron">${icons.chevronDown}</span>
        </button>
        <div class="accordion-content">${principalRows || '<p class="empty-state">Sin coincidencias.</p>'}</div>
      </section>
      <section class="accordion" data-group="support">
        <button class="accordion-button" type="button">
          <span class="accordion-title">${icons.mic2} Voces de apoyo</span>
          <span class="chevron">${icons.chevronDown}</span>
        </button>
        <div class="accordion-content">${supportRows || '<p class="empty-state">Sin coincidencias.</p>'}</div>
      </section>
      <section class="accordion" data-group="musicians">
        <button class="accordion-button" type="button">
          <span class="accordion-title">${icons.acoustic} Músicos</span>
          <span class="chevron">${icons.chevronDown}</span>
        </button>
        <div class="accordion-content">${musicianRows || '<p class="empty-state">Sin coincidencias.</p>'}</div>
      </section>
      <section class="birthdays-section">
        <p class="section-label">${icons.cake} Cumpleaños</p>
        <div class="birthday-list">${birthdayRows}</div>
      </section>
    `;

    target.querySelectorAll(".filter-search").forEach(input => {
      input.addEventListener("input", event => {
        const caret = event.target.selectionStart ?? event.target.value.length;
        state.search = event.target.value;
        renderFilters(target);
        const nextInput = target.querySelector(".filter-search");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(caret, caret);
        }
      });
    });

    target.querySelectorAll(".accordion-button").forEach(button => {
      button.addEventListener("click", () => {
        button.closest(".accordion").classList.toggle("is-collapsed");
      });
    });

    target.querySelectorAll('.filter-row input').forEach(input => {
      input.addEventListener("change", event => {
        const name = event.target.value;
        const shouldCloseMobileFilters = target === mobileFilterContent && mobileMedia.matches;
        state.selectedFilters.clear();
        if (event.target.checked) state.selectedFilters.add(name);
        state.selectedDate = "";
        state.selectedServiceIndex = 0;
        renderFilters(filterContent);
        renderFilters(mobileFilterContent);
        renderCalendar();
        closeDetail();
        if (shouldCloseMobileFilters) closeMobileFilters();
      });
    });
  }

  function serviceCard(service, index) {
    const variant = isSunday(service.date) ? "sunday" : "wednesday";
    return `
      <button class="service-card ${variant}" type="button" data-date="${service.date}" data-index="${index}">
        <span class="service-time">${service.time.split(" - ")[0].toUpperCase()}</span>
        <span class="service-name">${service.principal}</span>
      </button>
    `;
  }

  function renderCalendar() {
    const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    weekdayGrid.innerHTML = weekdays.map(day => `<div class="calendar-day-header">${day}</div>`).join("");
    const cells = calendarCells();
    calendarWrapper.classList.toggle("week-view", state.view === "week");
    renderFilterStatus();

    calendarGrid.innerHTML = cells.map(cell => {
      const allServices = byDate.get(cell.date) || [];
      const services = visibleServicesForDate(cell.date);
      const hasBirthday = birthdaysByDate.has(cell.date);
      const filteredOut = state.selectedFilters.size && allServices.length && !services.length;
      const selected = state.selectedDate === cell.date;
      return `
        <div class="calendar-cell ${cell.outside ? "outside-month" : ""} ${hasBirthday ? "has-birthday" : ""} ${filteredOut ? "filtered-out" : ""}">
          <div class="day-top">
            <span class="day-number ${selected ? "selected" : ""}">${cell.day}</span>
            <span class="birthday-markers">${hasBirthday ? icons.cake : ""}</span>
          </div>
          <div class="service-list">
            ${services.map((service, index) => serviceCard(service, index)).join("")}
          </div>
        </div>
      `;
    }).join("");

    calendarGrid.querySelectorAll(".service-card").forEach(card => {
      card.addEventListener("click", event => openDetail(card.dataset.date, Number(card.dataset.index), event.currentTarget));
    });
  }

  function detailRow(icon, label, value, iconClass = "", allowEmpty = true) {
    if (!allowEmpty && (!value || value === "No asignado")) return "";
    const isUnassigned = !value || value === "No asignado";
    return `
      <div class="detail-row">
        <span class="${iconClass}">${icon}</span>
        <strong>${label}</strong>
        <span class="muted ${isUnassigned ? "unassigned" : ""}">${isUnassigned ? "No asignado" : value}</span>
      </div>
    `;
  }

  function musicianRow(role, name) {
    const isUnassigned = !name || name === "No asignado";
    return detailRow(instrumentIcon(role, isUnassigned), role, name, "", true);
  }

  function rememberDetailAnchor(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    state.detailAnchor = {
      left: rect.left,
      right: rect.right,
      top: rect.top,
      bottom: rect.bottom
    };
  }

  function positionDetailPanel() {
    const panel = detailMount.querySelector(".service-detail-floating");
    if (!panel || !state.detailAnchor || window.matchMedia("(max-width: 768px)").matches) return;
    const gap = 12;
    const margin = 16;
    const panelWidth = panel.offsetWidth;
    const panelHeight = panel.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    let left = state.detailAnchor.right + gap;
    if (left + panelWidth > viewportWidth - margin) {
      left = state.detailAnchor.left - panelWidth - gap;
    }
    if (left < margin) {
      left = Math.min(Math.max(state.detailAnchor.left, margin), viewportWidth - panelWidth - margin);
    }
    let top = state.detailAnchor.top;
    if (top + panelHeight > viewportHeight - margin) {
      top = viewportHeight - panelHeight - margin;
    }
    if (top < margin) top = margin;
    panel.style.setProperty("--detail-left", `${Math.round(left)}px`);
    panel.style.setProperty("--detail-top", `${Math.round(top)}px`);
  }

  function renderDetail() {
    if (!state.selectedDate) {
      detailMount.innerHTML = "";
      calendarWrapper.classList.remove("has-detail");
      setMobileScrollLock("detail", false);
      return;
    }
    const services = visibleServicesForDate(state.selectedDate);
    if (!services.length) {
      detailMount.innerHTML = "";
      calendarWrapper.classList.remove("has-detail");
      setMobileScrollLock("detail", false);
      return;
    }
    const active = services[state.selectedServiceIndex] || services[0];
    const activeIndex = services.indexOf(active);
    const dateLabel = longDate.format(new Date(`${active.date}T12:00:00`));
    const uniformName = uniformLabel(active.uniform);
    detailMount.innerHTML = `
      <aside class="service-detail-floating" aria-label="Detalle del servicio">
        <div class="detail-header">
          <div class="detail-date-line">
            <span class="${isSunday(active.date) ? 'icon yellow' : 'icon blue'}">${icons.calendar}</span>
            <span>${dateLabel}</span>
          </div>
          <button class="close-detail" type="button" aria-label="Cerrar detalle">${icons.x}</button>
        </div>
        <div class="service-time-tabs">
          ${services.map((service, index) => `<button class="service-time-tab ${index === activeIndex ? "active" : ""}" type="button" data-index="${index}">${service.time.split(" - ")[0].toUpperCase()}</button>`).join("")}
        </div>
        <div class="detail-date-line" style="margin-bottom:18px;">${icons.clock || ""}<span>${active.time}</span></div>
        <section class="principal-block">
          <span class="principal-icon">${icons.mic}</span>
          <div>
            <h2 class="principal-name">${active.principal}</h2>
            <div class="principal-role">Vocalista Principal</div>
          </div>
        </section>
        <section class="detail-section">
          <h3 class="detail-section-title">Voces de apoyo</h3>
          <div class="detail-list">
            ${active.voices.filter(name => name && name !== "No asignado").map(name => `
              <div class="detail-row">
                <span>${icons.mic2}</span>
                <strong>${name}</strong>
                <span></span>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="detail-section">
          <h3 class="detail-section-title">Equipo de músicos</h3>
          <div class="detail-list">
            ${Object.entries(active.musicians).map(([role, name]) => musicianRow(role, name)).join("")}
          </div>
        </section>
        <section class="uniform-section">
          <strong>${icons.tag} Uniforme${uniformName ? ` ${uniformName}` : ""}</strong>
          ${renderUniform(active.uniform)}
        </section>
      </aside>
    `;
    const panel = detailMount.querySelector(".service-detail-floating");
    calendarWrapper.classList.add("has-detail");
    if (panel) {
      panel.scrollTop = 0;
      bindContainedScroll(panel);
    }
    detailMount.querySelector(".close-detail").addEventListener("click", closeDetail);
    detailMount.querySelectorAll(".service-time-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        state.selectedServiceIndex = Number(tab.dataset.index);
        renderDetail();
      });
    });
    positionDetailPanel();
    setMobileScrollLock("detail", true);
  }

  function openDetail(date, index, anchorElement = null) {
    rememberDetailAnchor(anchorElement);
    state.selectedDate = date;
    state.selectedServiceIndex = index;
    renderCalendar();
    renderDetail();
  }

  function closeDetail() {
    const panel = detailMount.querySelector(".service-detail-floating");
    if (!panel) return;
    panel.classList.add("is-closing");
    window.setTimeout(() => {
      state.selectedDate = "";
      state.selectedServiceIndex = 0;
      state.detailAnchor = null;
      renderCalendar();
      renderDetail();
    }, 150);
  }

  document.addEventListener("pointerdown", event => {
    const panel = detailMount.querySelector(".service-detail-floating");
    if (!panel) return;
    if (panel.contains(event.target)) return;
    if (event.target.closest(".service-card")) return;
    closeDetail();
  });

  window.addEventListener("resize", () => {
    positionDetailPanel();
    applyMobileScrollLock();
  });

  function renderAll(includeFilters = true) {
    if (includeFilters) {
      renderFilters(filterContent);
      renderFilters(mobileFilterContent);
    } else {
      renderFilters(filterContent);
      renderFilters(mobileFilterContent);
    }
    renderCalendar();
    renderDetail();
  }

  document.querySelectorAll(".view-toggle button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".view-toggle button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      state.view = button.dataset.view || "month";
      weekSelector.classList.toggle("is-visible", state.view === "week");
      state.selectedDate = "";
      state.selectedServiceIndex = 0;
      renderCalendar();
      renderDetail();
    });
  });

  weekSelector?.addEventListener("change", event => {
    state.selectedWeek = Number(event.target.value);
    state.selectedDate = "";
    state.selectedServiceIndex = 0;
    renderCalendar();
    renderDetail();
  });

  openFilters?.addEventListener("click", openMobileFilters);
  closeFilters?.addEventListener("click", closeMobileFilters);
  filterDrawer?.addEventListener("click", event => {
    if (event.target === filterDrawer) closeMobileFilters();
  });

  document.querySelectorAll(".calendar-reset").forEach(button => {
    button.addEventListener("click", resetCalendarFilters);
  });

  renderAll();
