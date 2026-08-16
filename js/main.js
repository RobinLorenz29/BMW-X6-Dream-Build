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

  /** Preloads an image and resolves its natural dimensions, or null if it fails to load. */
  function preloadDimensions(filename) {
    return new Promise((resolve) => {
      if (!filename) return resolve(null);
      const img = new Image();
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = () => resolve(null);
      img.src = imgUrl(filename);
    });
  }

  /* ---------------- populate spec list ---------------- */

  function renderSpecs() {
    const list = document.getElementById("specList");
    list.innerHTML = SPECS.map((spec) => `<li>${spec}</li>`).join("");
  }

  async function renderKeyCard() {
    document.getElementById("keyCardTitle").textContent = KEY_INFO.title;
    document.getElementById("keyCardDesc").textContent = KEY_INFO.description;
    document.getElementById("keyShowcaseLabel").textContent = KEY_INFO.title;

    const ok = await preload(KEY_INFO.image);
    if (!ok) return;

    [document.getElementById("keyCardMedia"), document.getElementById("keyShowcaseMedia")].forEach((media) => {
      media.style.backgroundImage = `url(${imgUrl(KEY_INFO.image)})`;
      media.style.backgroundSize = "cover";
      media.style.backgroundPosition = "center";
      media.style.backgroundRepeat = "no-repeat";
      media.classList.add("has-image");
      media.addEventListener("click", () => openLightbox(imgUrl(KEY_INFO.image), KEY_INFO.title));
    });
  }

  /* ---------------- main view backgrounds ---------------- */

  // Natural pixel dimensions of each loaded view image, keyed by section.
  // Hotspot x/y percentages are authored against these exact images, so the
  // stage that hosts a view is resized to match its aspect ratio — this way
  // "background-size: cover" never crops the image and a hotspot's percent
  // position always lands on the same physical point in the photo.
  const viewDimensions = {};

  function applyStageAspect(stageEl, section) {
    const dims = viewDimensions[section];
    if (dims) {
      stageEl.style.aspectRatio = `${dims.w} / ${dims.h}`;
    }
  }

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
      const dims = await preloadDimensions(file);
      if (dims) {
        viewDimensions[section] = dims;
        panel.style.backgroundImage = `url(${imgUrl(file)})`;
        panel.style.backgroundSize = "cover";
        panel.style.backgroundPosition = "center";
        panel.style.backgroundRepeat = "no-repeat";
        panel.classList.add("has-image");
      }
    }

    const exteriorStage = document.getElementById("exteriorStage");
    const activeExteriorView = exteriorStage.querySelector(".view-panel.active");
    applyStageAspect(exteriorStage, activeExteriorView.getAttribute("data-section"));
    applyStageAspect(document.getElementById("interiorStage"), "interior");

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
        applyStageAspect(stage, view);
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
    modalMedia.classList.remove("no-image", "modal-media-grid");
    const gallery = (spot.gallery && spot.gallery.length ? spot.gallery : [spot.image]).filter(Boolean);
    const results = await Promise.all(gallery.map(preload));
    const available = gallery.filter((_, i) => results[i]);

    if (!available.length) {
      modalMedia.classList.add("no-image");
    } else if (spot.galleryLayout === "grid" && available.length > 1) {
      // Show every image at once, side by side, instead of a single-image + thumbnail switcher.
      modalMedia.classList.add("modal-media-grid");
      available.forEach((file) => {
        const img = document.createElement("img");
        img.src = imgUrl(file);
        img.alt = spot.title;
        img.addEventListener("click", () => openLightbox(imgUrl(file), spot.title));
        modalMedia.appendChild(img);
      });
    } else {
      renderModalImage(available[0], spot.title);
      if (available.length > 1) {
        const strip = document.createElement("div");
        strip.className = "modal-gallery";
        available.forEach((file, i) => {
          const thumb = document.createElement("button");
          thumb.className = "modal-gallery-thumb" + (i === 0 ? " active" : "");
          thumb.style.backgroundImage = `url(${imgUrl(file)})`;
          thumb.addEventListener("click", () => {
            renderModalImage(file, spot.title);
            strip.querySelectorAll(".modal-gallery-thumb").forEach((t) => t.classList.remove("active"));
            thumb.classList.add("active");
          });
          strip.appendChild(thumb);
        });
        modalMedia.appendChild(strip);
      }
    }

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function renderModalImage(file, alt) {
    let img = modalMedia.querySelector("img");
    if (!img) {
      img = document.createElement("img");
      img.addEventListener("click", () => openLightbox(img.src, img.alt));
      modalMedia.insertBefore(img, modalMedia.firstChild);
    }
    img.src = imgUrl(file);
    img.alt = alt;
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
    lightboxImg.classList.remove("zoomed");
    lightboxOverlay.classList.add("open");
  }
  function closeLightbox() {
    lightboxOverlay.classList.remove("open");
    lightboxImg.classList.remove("zoomed");
  }
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
  });
  // Click the image itself to toggle between fit-to-screen and full native size (scrollable).
  lightboxImg.addEventListener("click", (e) => {
    e.stopPropagation();
    lightboxImg.classList.toggle("zoomed");
  });

  document.getElementById("posterBtn").addEventListener("click", () => {
    openLightbox("assets/source/poster.jpg", "Original Dream Build Poster");
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
    renderKeyCard();
    renderHotspots();
    initViewSwitch();
    initReveal();
    loadMainViews();
  });
})();
