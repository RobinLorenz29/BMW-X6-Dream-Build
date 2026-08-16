(function () {
  "use strict";

  const IMG_BASE = "assets/images/";

  /* ---------------- helpers ---------------- */

  function imgUrl(filename) {
    return IMG_BASE + filename;
  }

  /** Preloads an image; resolves true/false instead of throwing. */
  function preload(filename) {
    return new Promise((resolve) => {
      if (!filename) return resolve(false);
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imgUrl(filename);
    });
  }

  /* ---------------- populate spec list ---------------- */

  function renderSpecs() {
    const list = document.getElementById("specList");
    list.innerHTML = SPECS.map((spec) => `<li>${spec}</li>`).join("");
  }

  /* ---------------- main view backgrounds ---------------- */

  async function loadMainViews() {
    const map = {
      front: "exterior-front.jpg",
      rear: "exterior-rear.jpg",
      interior: "interior-main.jpg",
    };
    const panels = document.querySelectorAll("[data-role='view-panel']");
    for (const panel of panels) {
      const section = panel.getAttribute("data-section");
      const file = map[section];
      const ok = await preload(file);
      if (ok) {
        panel.style.backgroundImage = `url(${imgUrl(file)})`;
        panel.classList.add("has-image");
      }
    }

    // Hero background reuses the front view once available, else stays a styled placeholder.
    const heroOk = await preload(map.front);
    if (heroOk) {
      document.querySelector("[data-role='hero-bg']").style.backgroundImage =
        `linear-gradient(rgba(8,9,11,0.55), rgba(8,9,11,0.9)), url(${imgUrl(map.front)})`;
      document.querySelector("[data-role='hero-bg']").style.backgroundSize = "cover";
      document.querySelector("[data-role='hero-bg']").style.backgroundPosition = "center";
    }
  }

  /* ---------------- hotspots ---------------- */

  function renderHotspots() {
    const panels = document.querySelectorAll("[data-role='view-panel']");
    panels.forEach((panel) => {
      const section = panel.getAttribute("data-section");
      const items = HOTSPOTS.filter((h) => h.section === section);
      items.forEach((spot) => {
        const el = document.createElement("button");
        el.className = "hotspot";
        el.style.left = spot.x + "%";
        el.style.top = spot.y + "%";
        el.setAttribute("aria-label", spot.title);
        el.innerHTML = `
          <span class="hotspot-ring"></span>
          <span class="hotspot-core"></span>
          <span class="hotspot-label">${spot.title}</span>
        `;
        el.addEventListener("click", () => openModal(spot));
        panel.appendChild(el);
      });
    });
  }

  /* ---------------- view switch (front / rear) ---------------- */

  function initViewSwitch() {
    const buttons = document.querySelectorAll(".view-btn");
    const stage = document.getElementById("exteriorStage");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.getAttribute("data-view");
        buttons.forEach((b) => b.classList.toggle("active", b === btn));
        stage.querySelectorAll("[data-role='view-panel']").forEach((panel) => {
          panel.classList.toggle("active", panel.getAttribute("data-section") === view);
        });
      });
    });
  }

  /* ---------------- modal ---------------- */

  const modalOverlay = document.getElementById("modalOverlay");
  const modalMedia = document.getElementById("modalMedia");
  const modalEyebrow = document.getElementById("modalEyebrow");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalSpecs = document.getElementById("modalSpecs");

  async function openModal(spot) {
    modalEyebrow.textContent = sectionLabel(spot.section);
    modalTitle.textContent = spot.title;
    modalSubtitle.textContent = spot.subtitle || "";
    modalSubtitle.style.display = spot.subtitle ? "block" : "none";
    modalDesc.textContent = spot.description || "";
    modalSpecs.innerHTML = (spot.specs || []).map((s) => `<li>${s}</li>`).join("");

    modalMedia.innerHTML = "";
    modalMedia.classList.remove("no-image");
    const ok = await preload(spot.image);
    if (ok) {
      const img = document.createElement("img");
      img.src = imgUrl(spot.image);
      img.alt = spot.title;
      img.addEventListener("click", () => openLightbox(imgUrl(spot.image), spot.title));
      modalMedia.appendChild(img);
    } else {
      modalMedia.classList.add("no-image");
    }

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function sectionLabel(section) {
    if (section === "front") return "Exterior · Front";
    if (section === "rear") return "Exterior · Rear";
    if (section === "interior") return "Interior";
    return "";
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  /* ---------------- lightbox ---------------- */

  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxImg = document.getElementById("lightboxImg");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightboxOverlay.classList.add("open");
  }
  function closeLightbox() {
    lightboxOverlay.classList.remove("open");
  }
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeModal();
    }
  });

  /* ---------------- mobile nav ---------------- */

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });

  /* ---------------- scroll reveal ---------------- */

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => obs.observe(item));
  }

  /* ---------------- init ---------------- */

  document.addEventListener("DOMContentLoaded", () => {
    renderSpecs();
    renderHotspots();
    initViewSwitch();
    initReveal();
    loadMainViews();
  });
})();
