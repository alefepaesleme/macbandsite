/* =========================================================
   MAC BAND IMPRESSOS — dados e interações
   ========================================================= */

// --- DADOS DOS PRODUTOS ---------------------------------------------
// Cada produto tem um array `images`. A primeira imagem do array é a que
// aparece como miniatura no catálogo. Para adicionar mais fotos no futuro,
// basta incluir mais entradas no array `images` do produto desejado que o
// slideshow do modal passa a exibi-las automaticamente.
const PRODUCTS = [
  {
    id: "adesivo-redondo",
    tag: "Adesivos",
    name: "Adesivo Redondo",
    short: "Vinil no formato bola, acabamento em verniz.",
    desc: "Adesivo de vinil no formato bola, com acabamento em verniz para maior durabilidade e brilho da impressão.",
    formats: ["Bola de 20cm", "Bola de 30cm", "Bola de 45cm"],
    images: [
      "assets/img/adesivo-redondo-01.jpg",
      "assets/img/adesivo-redondo-02.jpg",
      "assets/img/adesivo-redondo-03.jpg",
      "assets/img/adesivo-redondo-04.jpg"
    ]
  },
  {
    id: "adesivo-corte-reto",
    tag: "Adesivos",
    name: "Adesivo de Corte Reto",
    short: "Vinil retangular, acabamento em verniz.",
    desc: "Adesivo de vinil no formato retangular, com acabamento em verniz para maior durabilidade e brilho da impressão.",
    formats: ["30cm x 10cm", "45cm x 10cm", "65cm x 10cm"],
    images: ["assets/img/adesivo-corte-reto-01.jpg"]
  },
  {
    id: "praguinhas-adesivas",
    tag: "Adesivos",
    name: "Praguinhas Adesivas",
    short: "Impressão flexográfica, rolo de 1.000 unidades.",
    desc: "Praguinhas adesivas feitas com impressão flexográfica, ideais para distribuição em massa. Vendidas em rolo com 1.000 unidades.",
    formats: ["Bola de 6cm", "Bola de 7cm", "Bola de 8cm"],
    images: [
      "assets/img/praguinhas-adesivas-01.jpg",
      "assets/img/praguinhas-adesivas-02.jpg",
      "assets/img/praguinhas-adesivas-03.jpg",
      "assets/img/praguinhas-adesivas-04.jpg"
    ]
  },
  {
    id: "folder-dobras",
    tag: "Impressos",
    name: "Folder com Dobras",
    short: "Acabamento premium, três dobras, seis páginas.",
    desc: "Folder com acabamento premium e três dobras, totalizando seis páginas para apresentar propostas, pautas e biografia com espaço de sobra.",
    formats: ["Três dobras · 6 páginas"],
    images: [
      "assets/img/folder-dobras-01.jpg",
      "assets/img/folder-dobras-02.jpg",
      "assets/img/folder-dobras-03.jpg",
      "assets/img/folder-dobras-04.jpg"
    ]
  },
  {
    id: "faixa-banner",
    tag: "Sinalização",
    name: "Faixa ou Banner Plástico",
    short: "Faixas e banners impressos em folha plástica.",
    desc: "Faixas e banners impressos em folhas plásticas, resistentes para uso externo em eventos, comícios e caminhadas.",
    formats: [
      "Bandeira 30cm x 45cm — mastro de 50cm",
      "Bandeira 40cm x 50cm — mastro de 57cm",
      "Bandeira 40cm x 60cm — mastro de 57cm"
    ],
    images: [
      "assets/img/faixa-banner-01.jpg",
      "assets/img/faixa-banner-02.jpg"
    ]
  },
  {
    id: "bandeiras-plasticas",
    tag: "Sinalização",
    name: "Bandeiras Plásticas",
    short: "Impressas em folha plástica, com mastro.",
    desc: "Bandeiras impressas em folhas plásticas, já com mastro incluído — prontas para carreatas e ruas de campanha.",
    formats: [
      "Bandeira 30cm x 45cm — mastro de 50cm",
      "Bandeira 40cm x 50cm — mastro de 57cm",
      "Bandeira 40cm x 60cm — mastro de 57cm"
    ],
    images: [
      "assets/img/bandeiras-plasticas-01.jpg",
      "assets/img/bandeiras-plasticas-02.jpg",
      "assets/img/bandeiras-plasticas-03.jpg",
      "assets/img/bandeiras-plasticas-04.jpg"
    ]
  },
  {
    id: "bandeiras-tecido",
    tag: "Sinalização",
    name: "Bandeiras de Tecido",
    short: "Impressas em tecido, com mastro.",
    desc: "Bandeiras impressas em tecido, com mastro incluído. Mais leves e com caimento diferenciado para desfilar ao vento.",
    formats: ["70cm x 100cm", "100cm x 140cm"],
    images: [
      "assets/img/bandeiras-tecido-01.jpg",
      "assets/img/bandeiras-tecido-02.jpg",
      "assets/img/bandeiras-tecido-03.jpg",
      "assets/img/bandeiras-tecido-04.jpg"
    ]
  }
];

// --- DADOS DAS REGIÕES ------------------------------------------------
// Números fornecidos pelo cliente. Alguns aparentam ser placeholders
// (ex: "0000-0000") — trocar pelo número real antes de publicar.
const REGIONS = [
  { name: "Norte",        contact: "Roberto Luna",      phone: "5550000000" },
  { name: "Nordeste",     contact: "João da Silva",     phone: "5550000000" },
  { name: "Centro-Oeste", contact: "Marina Soares",     phone: "5550000000" },
  { name: "Sul",          contact: "Peixoto Bragança",  phone: "5550000000" },
  { name: "Sudeste",      contact: "Carminha Frufru",   phone: "5550000000" }
];

const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Mac Band Impressos e gostaria de um orçamento.";

// --- RENDER: GRID DO CATÁLOGO -----------------------------------------
const gridCatalogo = document.getElementById("grid-catalogo");

PRODUCTS.forEach((product) => {
  const card = document.createElement("button");
  card.className = "card-produto";
  card.type = "button";
  card.setAttribute("data-id", product.id);
  card.innerHTML = `
    <div class="card-produto__img">
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
    </div>
    <div class="card-produto__body">
      <span class="card-produto__tag">${product.tag}</span>
      <h3 class="card-produto__nome">${product.name}</h3>
      <span class="card-produto__hint">Ver detalhes</span>
    </div>
  `;
  card.addEventListener("click", () => openModal(product.id));
  gridCatalogo.appendChild(card);
});

// --- RENDER: BOTÕES DE REGIÃO ------------------------------------------
const gridRegioes = document.getElementById("grid-regioes");

REGIONS.forEach((region) => {
  const url = `https://wa.me/${region.phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const el = document.createElement("div");
  el.className = "card-regiao";
  el.innerHTML = `
    <span class="card-regiao__nome">${region.name}</span>
    <span class="card-regiao__contato">${region.contact}</span>
    <a class="card-regiao__btn" href="${url}" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.26-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z"/>
      </svg>
      Falar no WhatsApp
    </a>
  `;
  gridRegioes.appendChild(el);
});

// --- MODAL DE PRODUTO ---------------------------------------------------
const modal = document.getElementById("productModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalSlides = document.getElementById("modalSlides");
const modalDots = document.getElementById("modalDots");
const slidePrev = document.getElementById("slidePrev");
const slideNext = document.getElementById("slideNext");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalFormats = document.getElementById("modalFormats");

let currentSlide = 0;
let currentImages = [];
let lastFocusedEl = null;

function openModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  lastFocusedEl = document.activeElement;

  modalTag.textContent = product.tag;
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.desc;

  modalFormats.innerHTML = product.formats
    .map((f) => `<li>${f}</li>`)
    .join("");

  currentImages = product.images;
  currentSlide = 0;

  modalSlides.innerHTML = currentImages
    .map((src) => `<img src="${src}" alt="${product.name}">`)
    .join("");

  // Garante que o trilho tenha largura = nº de fotos × 100% e cada foto
  // ocupe exatamente uma "página", para que só uma apareça por vez.
  const slideCount = currentImages.length;
  modalSlides.style.width = `${slideCount * 100}%`;
  [...modalSlides.children].forEach((img) => {
    img.style.width = `${100 / slideCount}%`;
  });

  modalDots.innerHTML = currentImages
    .map((_, i) => `<button data-slide="${i}" aria-label="Foto ${i + 1}"></button>`)
    .join("");

  const showArrows = currentImages.length > 1;
  slidePrev.style.display = showArrows ? "flex" : "none";
  slideNext.style.display = showArrows ? "flex" : "none";
  modalDots.style.display = showArrows ? "flex" : "none";

  updateSlidePosition();

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

function updateSlidePosition() {
  const slideCount = currentImages.length || 1;
  modalSlides.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`;
  [...modalDots.children].forEach((dot, i) => {
    dot.classList.toggle("is-active", i === currentSlide);
  });
}

function goToSlide(index) {
  const total = currentImages.length;
  currentSlide = (index + total) % total;
  updateSlidePosition();
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
slidePrev.addEventListener("click", () => goToSlide(currentSlide - 1));
slideNext.addEventListener("click", () => goToSlide(currentSlide + 1));
modalDots.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-slide]");
  if (btn) goToSlide(Number(btn.dataset.slide));
});

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("is-open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") goToSlide(currentSlide - 1);
  if (e.key === "ArrowRight") goToSlide(currentSlide + 1);
});

// --- MENU MOBILE ---------------------------------------------------------
const menuToggle = document.getElementById("menuToggle");
const headerNav = document.getElementById("headerNav");

function headerNavClose() {
  headerNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = headerNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

headerNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", headerNavClose);
});

// --- LOGO: VOLTAR AO TOPO --------------------------------------------------
const logoHome = document.getElementById("logoHome");
logoHome.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  headerNavClose();
});

// --- RODAPÉ: ANO ATUAL -----------------------------------------------------
document.getElementById("ano").textContent = new Date().getFullYear();
