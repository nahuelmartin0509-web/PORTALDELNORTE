/**
 * PORTAL DEL NORTE — Catalog JS
 * Lógica de filtros, renderizado y navegación del catálogo
 */

document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
});

function initCatalog() {
  const grid = document.getElementById('catalog-grid');
  const emptyState = document.getElementById('catalog-empty');
  const countDisplay = document.getElementById('catalog-count');
  if (!grid) return;

  // Leer filtros desde URL
  const params = new URLSearchParams(window.location.search);
  let activeCondition = params.get('condition') || 'all';
  let activeBrand = params.get('brand') || 'all';
  let activeCategory = params.get('category') || 'all';

  // Sincronizar tabs de condición
  const conditionTabs = document.querySelectorAll('.condition-tab');
  conditionTabs.forEach(tab => {
    if (tab.dataset.condition === activeCondition) {
      tab.classList.add('active');
    }
    tab.addEventListener('click', () => {
      conditionTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCondition = tab.dataset.condition;
      trackEvent('filter_condition', { condition: activeCondition });
      applyFilters();
    });
  });

  // Sincronizar chips de marca
  const brandChips = document.querySelectorAll('.filter-chip[data-brand]');
  brandChips.forEach(chip => {
    if (chip.dataset.brand === activeBrand) chip.classList.add('active');
    chip.addEventListener('click', () => {
      brandChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeBrand = chip.dataset.brand;
      trackEvent('filter_brand', { brand: activeBrand });
      applyFilters();
    });
  });

  // Sincronizar chips de categoría
  const categoryChips = document.querySelectorAll('.filter-chip[data-category]');
  categoryChips.forEach(chip => {
    if (chip.dataset.category === activeCategory) chip.classList.add('active');
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      trackEvent('filter_category', { category: activeCategory });
      applyFilters();
    });
  });

  // Botón reset en empty state
  const resetBtn = document.getElementById('catalog-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCondition = 'all';
      activeBrand = 'all';
      activeCategory = 'all';
      conditionTabs.forEach(t => t.classList.toggle('active', t.dataset.condition === 'all'));
      brandChips.forEach(c => c.classList.toggle('active', c.dataset.brand === 'all'));
      categoryChips.forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
      applyFilters();
    });
  }

  function applyFilters() {
    const filtered = filterProducts({
      condition: activeCondition,
      brand: activeBrand,
      category: activeCategory,
    });

    renderGrid(filtered);
    updateCount(filtered.length);

    // Update URL without reload
    const newParams = new URLSearchParams();
    if (activeCondition !== 'all') newParams.set('condition', activeCondition);
    if (activeBrand !== 'all') newParams.set('brand', activeBrand);
    if (activeCategory !== 'all') newParams.set('category', activeCategory);
    const newUrl = `${window.location.pathname}${newParams.toString() ? '?' + newParams.toString() : ''}`;
    history.replaceState(null, '', newUrl);
  }

  function renderGrid(products) {
    if (products.length === 0) {
      grid.innerHTML = '';
      grid.style.display = 'none';
      if (emptyState) emptyState.classList.add('visible');
    } else {
      grid.style.display = '';
      if (emptyState) emptyState.classList.remove('visible');
      grid.innerHTML = products.map(p => renderProductCard(p)).join('');
      // Re-trigger scroll animations
      setTimeout(() => initScrollAnimations(), 50);
    }
  }

  function updateCount(count) {
    if (countDisplay) {
      countDisplay.innerHTML = `<strong>${count}</strong> ${count === 1 ? 'equipo encontrado' : 'equipos encontrados'}`;
    }
  }

  // Initial render
  applyFilters();
}
