// Desapego Mudança — carrega o catálogo de data/products.json e monta a
// grade de produtos, os filtros de categoria e o modal de detalhes.

const PRODUCTS_URL = 'data/products.json';

const STATUS_LABELS = {
  disponivel: 'Disponível',
  reservado: 'Reservado',
};

const STATUS_CARD_BADGE_CLASSES = {
  disponivel: 'bg-tertiary-container/90 backdrop-blur-sm text-tertiary-fixed',
  reservado: 'bg-secondary-container/90 backdrop-blur-sm text-on-secondary-container',
};

const STATUS_MODAL_BADGE_CLASSES = {
  disponivel: 'bg-tertiary-container text-tertiary-fixed',
  reservado: 'bg-secondary-container text-on-secondary-container',
};

const CAT_BTN_BASE = 'cat-filter-btn px-space-md py-1.5 rounded-full font-label-specs text-label-specs whitespace-nowrap transition-all shrink-0';
const CAT_BTN_ACTIVE = `${CAT_BTN_BASE} bg-primary text-on-primary font-semibold`;
const CAT_BTN_INACTIVE = `${CAT_BTN_BASE} bg-surface-container text-on-surface hover:bg-surface-container-high`;

let products = [];
let activeCategory = 'all';
let currentActiveProduct = null;
let currentCarouselIndex = 0;

const categoryFilterContainer = document.getElementById('categoryFilterContainer');
const productsGrid = document.getElementById('productsGrid');

const modal = document.getElementById('productDetailModal');
const modalDialogBox = document.getElementById('modalDialogBox');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalMainImage = document.getElementById('modalMainImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalPriceOriginal = document.getElementById('modalPriceOriginal');
const modalPriceHero = document.getElementById('modalPriceHero');
const modalDescription = document.getElementById('modalDescription');
const modalSpecsList = document.getElementById('modalSpecsList');
const modalStatusBadge = document.getElementById('modalStatusBadge');
const modalVoltageBadge = document.getElementById('modalVoltageBadge');
const modalConditionBadge = document.getElementById('modalConditionBadge');
const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
const thumbnailsContainer = document.getElementById('thumbnailsContainer');
const carouselCounter = document.getElementById('carouselCounter');
const carouselPrevBtn = document.getElementById('carouselPrevBtn');
const carouselNextBtn = document.getElementById('carouselNextBtn');

async function init() {
  const res = await fetch(PRODUCTS_URL);
  products = await res.json();

  renderCategoryFilters();
  renderProducts();
  bindModalEvents();
}

function renderCategoryFilters() {
  const seen = new Map();
  products.forEach(p => {
    if (!seen.has(p.categorySlug)) seen.set(p.categorySlug, p.category);
  });

  const chips = [`<button class="${CAT_BTN_ACTIVE}" data-cat="all">Todos (${products.length})</button>`];
  seen.forEach((label, slug) => {
    chips.push(`<button class="${CAT_BTN_INACTIVE}" data-cat="${slug}">${label}</button>`);
  });
  categoryFilterContainer.innerHTML = chips.join('');

  categoryFilterContainer.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilterContainer.querySelectorAll('.cat-filter-btn').forEach(b => {
        b.className = CAT_BTN_INACTIVE;
      });
      btn.className = CAT_BTN_ACTIVE;
      activeCategory = btn.getAttribute('data-cat');
      renderProducts();
    });
  });
}

function productCardHTML(item) {
  const statusLabel = STATUS_LABELS[item.status] || item.status;
  const statusClasses = STATUS_CARD_BADGE_CLASSES[item.status] || STATUS_CARD_BADGE_CLASSES.disponivel;
  const cover = item.images[0] || '';

  return `
    <article class="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer" data-cat="${item.categorySlug}" data-id="${item.id}" data-status="${item.status}">
      <div>
        <div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-space-sm">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${item.title}" loading="lazy" src="${cover}">
          <div class="absolute top-2 left-2 flex flex-col gap-1">
            <span class="${statusClasses} px-space-xs py-0.5 rounded font-label-badge text-label-badge uppercase font-bold">${statusLabel}</span>
          </div>
          <div class="absolute top-2 right-2">
            <span class="bg-primary-container/90 backdrop-blur-sm text-on-primary px-space-xs py-0.5 rounded font-label-specs text-label-specs">${item.voltage} • ${item.condition}</span>
          </div>
        </div>
        <div class="space-y-space-2xs">
          <span class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">${item.category}</span>
          <h3 class="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">${item.title}</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">${item.description}</p>
        </div>
      </div>
      <div class="mt-space-md pt-space-xs flex items-center justify-between">
        <div><span class="font-label-specs text-label-specs text-on-surface-variant block">Valor</span><div class="font-price-hero text-price-hero text-primary">${item.price}</div></div>
        <button class="btn-open-modal flex items-center gap-space-2xs bg-surface-container hover:bg-primary hover:text-on-primary text-primary px-space-sm py-2 rounded-lg font-label-specs text-label-specs transition-colors" type="button">
          <span class="material-symbols-outlined text-[16px]">visibility</span>
          <span>Ver detalhes</span>
        </button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const visible = products.filter(p => activeCategory === 'all' || p.categorySlug === activeCategory);
  productsGrid.innerHTML = visible.map(productCardHTML).join('');

  productsGrid.querySelectorAll('.product-card').forEach(card => {
    const id = Number(card.getAttribute('data-id'));
    card.addEventListener('click', () => openProductModal(id));
  });
}

function openProductModal(productId) {
  const item = products.find(p => p.id === productId);
  if (!item) return;

  currentActiveProduct = item;
  currentCarouselIndex = 0;

  modalTitle.textContent = item.title;
  modalCategory.textContent = item.category;
  modalPriceOriginal.textContent = item.priceOriginal;
  modalPriceHero.textContent = item.price;
  modalDescription.textContent = item.description;

  modalStatusBadge.textContent = STATUS_LABELS[item.status] || item.status;
  modalStatusBadge.className = `${STATUS_MODAL_BADGE_CLASSES[item.status] || STATUS_MODAL_BADGE_CLASSES.disponivel} px-space-xs py-0.5 rounded font-label-badge text-label-badge uppercase font-bold`;

  modalVoltageBadge.textContent = item.voltage;
  modalConditionBadge.textContent = item.condition;

  modalSpecsList.innerHTML = '';
  item.specs.forEach(spec => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-space-xs';
    li.innerHTML = `<span class="material-symbols-outlined text-[16px] text-tertiary-container mt-0.5 shrink-0">check_circle</span><span>${spec}</span>`;
    modalSpecsList.appendChild(li);
  });

  const msg = encodeURIComponent(`Olá! Vi o anúncio do seu desapego de mudança e tenho interesse no item: "${item.title}" por ${item.price}. Ele ainda está disponível para retirada?`);
  modalWhatsAppBtn.href = `https://wa.me/5583987238658?text=${msg}`;

  updateCarousel();

  modal.classList.remove('pointer-events-none', 'opacity-0');
  modal.classList.add('pointer-events-auto', 'opacity-100');
  modalDialogBox.classList.remove('scale-95');
  modalDialogBox.classList.add('scale-100');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  modal.classList.remove('pointer-events-auto', 'opacity-100');
  modal.classList.add('pointer-events-none', 'opacity-0');
  modalDialogBox.classList.remove('scale-100');
  modalDialogBox.classList.add('scale-95');
  document.body.style.overflow = '';
}

function updateCarousel() {
  if (!currentActiveProduct) return;
  const images = currentActiveProduct.images;
  const total = images.length;

  modalMainImage.src = images[currentCarouselIndex];
  modalMainImage.alt = currentActiveProduct.title;
  carouselCounter.textContent = `Foto ${currentCarouselIndex + 1} de ${total}`;

  thumbnailsContainer.innerHTML = '';
  images.forEach((imgSrc, idx) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    const isActive = idx === currentCarouselIndex;
    thumb.className = `relative aspect-[4/3] rounded-lg overflow-hidden transition-all ${isActive ? 'ring-2 ring-primary scale-95' : 'opacity-70 hover:opacity-100'}`;
    thumb.innerHTML = `<img src="${imgSrc}" alt="${currentActiveProduct.title}" class="w-full h-full object-cover" />`;
    thumb.addEventListener('click', () => {
      currentCarouselIndex = idx;
      updateCarousel();
    });
    thumbnailsContainer.appendChild(thumb);
  });
}

function bindModalEvents() {
  carouselPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentActiveProduct) return;
    const total = currentActiveProduct.images.length;
    currentCarouselIndex = (currentCarouselIndex - 1 + total) % total;
    updateCarousel();
  });

  carouselNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentActiveProduct) return;
    const total = currentActiveProduct.images.length;
    currentCarouselIndex = (currentCarouselIndex + 1) % total;
    updateCarousel();
  });

  modalCloseBtn.addEventListener('click', closeProductModal);
  modalBackdrop.addEventListener('click', closeProductModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
}

init();
