/**
 * PORTAL DEL NORTE — Main JS
 * UI global, header, animaciones, formularios
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initScrollAnimations();
  initMobileNav();
  initWhatsAppFloating();
  setActiveNavLink();
});

// ============================================================
// HEADER — Scroll effect + active link
// ============================================================
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link[data-page]');
  navLinks.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });
}

// ============================================================
// MOBILE NAV — Hamburger toggle
// ============================================================
function initMobileNav() {
  const hamburger = document.querySelector('.header__hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const lines = document.querySelectorAll('.hamburger__line');
  if (!hamburger || !mobileNav) return;

  let isOpen = false;

  const toggle = () => {
    isOpen = !isOpen;
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    // Animate hamburger lines
    if (isOpen) {
      lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    }
  };

  hamburger.addEventListener('click', toggle);

  // Close on nav link click
  mobileNav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggle();
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      toggle();
    }
  });
}

// ============================================================
// SCROLL ANIMATIONS — Intersection Observer
// ============================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ============================================================
// WHATSAPP FLOATING BUTTON
// ============================================================
function initWhatsAppFloating() {
  const btn = document.querySelector('.whatsapp-float');
  if (!btn) return;
  btn.href = getWhatsAppUrl();
  btn.addEventListener('click', () => {
    trackEvent('click_whatsapp_float', { page: window.location.pathname });
  });
}

// ============================================================
// LEAD FORM — Validation + Submission
// ============================================================
function initLeadForm(formId = 'lead-form') {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const data = new FormData(form);
    const name = data.get('name') || '';
    const brand = data.get('brand') || '';
    const model = data.get('model') || '';
    const condition = data.get('condition') || '';
    const message = data.get('message') || '';
    const phone = data.get('phone') || '';

    // Build WhatsApp message
    let waMsg = `Hola, soy ${name}`;
    if (phone) waMsg += `, mi teléfono es ${phone}`;
    waMsg += `.`;
    if (brand || model) {
      waMsg += ` Estoy interesado/a en`;
      if (brand) waMsg += ` ${brand}`;
      if (model) waMsg += ` ${model}`;
      if (condition) waMsg += ` (${condition === '0km' ? '0 KM' : 'Usado'})`;
      waMsg += `.`;
    }
    if (message) waMsg += ` Mensaje: ${message}`;

    // Track event
    trackEvent('form_submit', { brand, model, condition });

    // Show success state
    const formBody = form.querySelector('.form-body');
    const formSuccess = form.querySelector('.form-success');
    if (formBody) formBody.style.display = 'none';
    if (formSuccess) formSuccess.classList.add('visible');

    // Open WhatsApp after short delay
    setTimeout(() => {
      window.open(getWhatsAppUrl(waMsg), '_blank');
    }, 800);
  });
}

function validateForm(form) {
  let valid = true;
  const required = form.querySelectorAll('[required]');

  required.forEach(field => {
    const wrapper = field.closest('.form-field');
    field.classList.remove('error');
    if (wrapper) wrapper.classList.remove('error');

    if (!field.value.trim()) {
      field.classList.add('error');
      if (wrapper) wrapper.classList.add('error');
      valid = false;
    }
  });

  // Email validation
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      emailField.classList.add('error');
      valid = false;
    }
  }

  if (!valid) {
    const firstError = form.querySelector('.error');
    if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return valid;
}

// Add form error styles
const errorStyle = document.createElement('style');
errorStyle.textContent = `
  .form-input.error, .form-select.error, .form-textarea.error {
    border-color: #E53E3E;
    box-shadow: 0 0 0 3px rgba(229,62,62,0.10);
  }
`;
document.head.appendChild(errorStyle);

// ============================================================
// PRODUCT CARD RENDERER
// ============================================================
function renderProductCard(product, options = {}) {
  const { showFullCTA = true } = options;
  const conditionLabel = product.condition === '0km' ? '0 KM' : 'Usado';
  const conditionClass = product.condition === '0km' ? '0km' : 'usado';
  const priceHtml = product.price
    ? `<div class="product-card__price">$${product.price.toLocaleString('es-AR')}</div>`
    : `<div class="product-card__price--consultar">Consultar precio</div>`;

  const specsHtml = Object.entries(product.specifications || {})
    .slice(0, 3)
    .map(([key, val]) => `<span class="spec-chip">${val}</span>`)
    .join('');

  return `
    <article class="product-card fade-in" data-id="${product.id}" data-brand="${product.brandSlug}" data-category="${product.categorySlug}" data-condition="${product.condition}">
      <div class="product-card__image-wrap">
        <img 
          src="${product.image}" 
          alt="${product.displayName} - ${product.category} | Portal del Norte" 
          class="product-card__image"
          loading="lazy"
        />
        <span class="product-card__badge product-card__badge--${conditionClass}">${conditionLabel}</span>
        <img src="${product.brandLogo}" alt="${product.brand}" class="product-card__brand-logo" loading="lazy" />
      </div>
      <div class="product-card__body">
        <div class="product-card__brand">${product.brand}</div>
        <div class="product-card__model">${product.model}</div>
        <div class="product-card__category">${product.category}${product.power ? ' · ' + product.power : ''}</div>
        <div class="product-card__specs">${specsHtml}</div>
        ${priceHtml}
      </div>
      <div class="product-card__footer">
        <a 
          href="producto.html?id=${product.id}" 
          class="btn btn--outline btn--sm"
          style="flex:1"
          onclick="trackEvent('click_product_card', {product_id: '${product.id}', brand: '${product.brandSlug}'})"
        >
          Ver detalles
        </a>
        <a 
          href="${getWhatsAppUrl(product.whatsappMessage)}" 
          target="_blank" 
          rel="noopener"
          class="btn btn--whatsapp btn--sm"
          style="flex:1"
          onclick="trackEvent('click_whatsapp_product', {product_id: '${product.id}', brand: '${product.brandSlug}'})"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Consultar
        </a>
      </div>
    </article>
  `;
}

// ============================================================
// BRAND CARD RENDERER
// ============================================================
function renderBrandCard(brand) {
  return `
    <a 
      href="catalogo.html?brand=${brand.slug}" 
      class="brand-card fade-in"
      onclick="trackEvent('click_brand', {brand: '${brand.slug}'})"
      title="Ver productos ${brand.name}"
    >
      <img src="${brand.logo}" alt="${brand.name} - Implementos Agrícolas Portal del Norte" class="brand-card__logo" loading="lazy" />
      <span class="brand-card__name">${brand.name}</span>
    </a>
  `;
}

// ============================================================
// SCROLL TO TOP ON PAGE LOAD
// ============================================================
window.addEventListener('load', () => {
  // Re-trigger animations after fonts load
  initScrollAnimations();
});
