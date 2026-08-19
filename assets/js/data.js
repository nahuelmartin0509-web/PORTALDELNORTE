/**
 * PORTAL DEL NORTE — Data Structure
 * Implementos Agrícolas
 * 
 * Fuente de verdad del catálogo de productos.
 * Para agregar nuevos productos: copiar un objeto del array CATALOG y modificar sus campos.
 */

// ============================================================
// CONFIGURACIÓN GLOBAL
// ============================================================
const CONFIG = {
  whatsapp: 'COMPLETAR_WHATSAPP',   // Ej: '5491112345678'
  whatsappBase: 'https://wa.me/',
  email: '',                          // Completar con email oficial
  instagram: 'https://www.instagram.com/portaldelnorte.agro/',
  address: '',                        // Completar con dirección
  hours: '',                          // Completar con horarios de atención
  defaultWhatsappMsg: 'Hola, visité la web de Portal del Norte y quiero hacer una consulta.',
};

// ============================================================
// MARCAS
// ============================================================
const BRANDS = [
  {
    slug: 'agrochery',
    name: 'AgroChery',
    displayName: 'AgroChery Tractores',
    logo: 'assets/img/marcas/agrochery.jpeg',
    description: 'Tractores agrícolas de alta performance.',
    featured: true,
  },
  {
    slug: 'gimetal',
    name: 'Gimetal',
    displayName: 'Gimetal',
    logo: 'assets/img/marcas/gimetal.jpg',
    description: 'Implementos y tolvas para cosecha.',
    featured: true,
  },
  {
    slug: 'secman',
    name: 'Secman',
    displayName: 'Secman',
    logo: 'assets/img/marcas/secman.png',
    description: 'Implementos de labranza y subsoladores.',
    featured: true,
  },
  {
    slug: 'sinomach',
    name: 'Sinomach',
    displayName: 'Sinomach',
    logo: 'assets/img/marcas/sinomach.jpeg',
    description: 'Maquinaria de movimiento de suelos.',
    featured: true,
  },
];

// ============================================================
// CATEGORÍAS
// ============================================================
const CATEGORIES = [
  { slug: 'tractores',       name: 'Tractores' },
  { slug: 'tolvas',          name: 'Tolvas' },
  { slug: 'palas',           name: 'Palas Cargadoras' },
  { slug: 'subsoladores',    name: 'Subsoladores' },
  { slug: 'implementos',     name: 'Implementos' },
];

// ============================================================
// CATÁLOGO DE PRODUCTOS
// ============================================================
const CATALOG = [
  {
    id: 'agrochery-rk704',
    brand: 'AgroChery',
    brandSlug: 'agrochery',
    brandLogo: 'assets/img/marcas/agrochery.jpeg',
    model: 'RK704',
    displayName: 'AgroChery RK704',
    category: 'Tractores',
    categorySlug: 'tractores',
    condition: '0km',                   // '0km' | 'usado'
    power: '70 HP',
    image: 'assets/img/catalogo/tractor-agrochery-rk704.jpeg',
    gallery: [
      'assets/img/catalogo/tractor-agrochery-rk704.jpeg',
    ],
    description: 'El AgroChery RK704 es un tractor compacto y versátil diseñado para responder a las demandas del productor moderno. Con 70 HP de potencia, cabina integral y transmisión eficiente, se adapta a una amplia variedad de tareas agrícolas con rendimiento constante en campo.',
    specifications: {
      'Potencia': '70 HP',
      'Motor': '4 cilindros',
      'Transmisión': 'Mecánica sincronizada',
      'Tracción': '4WD (4x4)',
      'Estado': '0 KM',
      'Cabina': 'Integral con climatización',
    },
    applications: [
      'Labranza primaria',
      'Siembra',
      'Pulverización',
      'Transporte rural',
      'Uso general agrícola',
    ],
    featured: true,
    price: null,                        // null = mostrar "Consultar precio"
    financing: true,
    whatsappMessage: 'Hola, quiero consultar por el Tractor AgroChery RK704 70HP (0 KM).',
    metaTitle: 'Tractor AgroChery RK704 70HP - 0 KM | Portal del Norte',
    metaDescription: 'Tractor AgroChery RK704 70HP, 4x4, cabina integral, 0 KM. Consultá disponibilidad y precio en Portal del Norte.',
  },
  {
    id: 'gimetal-ac22000',
    brand: 'Gimetal',
    brandSlug: 'gimetal',
    brandLogo: 'assets/img/marcas/gimetal.jpg',
    model: 'AC22000',
    displayName: 'Gimetal AC22000',
    category: 'Tolvas',
    categorySlug: 'tolvas',
    condition: '0km',
    power: null,
    image: 'assets/img/catalogo/tolva-gimetal-ac22000.jpeg',
    gallery: [
      'assets/img/catalogo/tolva-gimetal-ac22000.jpeg',
    ],
    description: 'La tolva Gimetal AC22000 es un implemento de alto rendimiento para el traslado y descarga de granos. Con capacidad de 22.000 kg, estructura robusta y sistema de descarga eficiente, es la solución ideal para optimizar la logística de cosecha en campos de mediana y gran escala.',
    specifications: {
      'Capacidad': '22.000 kg',
      'Tipo': 'Tolva autodescargable',
      'Carro': 'Tándem',
      'Estado': '0 KM',
      'Material': 'Acero de alta resistencia',
    },
    applications: [
      'Transporte de granos',
      'Cosecha gruesa',
      'Cosecha fina',
      'Logística de campo',
    ],
    featured: true,
    price: null,
    financing: true,
    whatsappMessage: 'Hola, quiero consultar por la Tolva Gimetal AC22000 (0 KM).',
    metaTitle: 'Tolva Gimetal AC22000 - 22.000 kg - 0 KM | Portal del Norte',
    metaDescription: 'Tolva autodescargable Gimetal AC22000, 22.000 kg de capacidad, 0 KM. Consultá disponibilidad y precio en Portal del Norte.',
  },
  {
    id: 'sinomach-907h',
    brand: 'Sinomach',
    brandSlug: 'sinomach',
    brandLogo: 'assets/img/marcas/sinomach.jpeg',
    model: '907H',
    displayName: 'Sinomach 907H',
    category: 'Palas Cargadoras',
    categorySlug: 'palas',
    condition: '0km',
    power: '125 HP',
    image: 'assets/img/catalogo/pala-sinomach-907h.jpeg',
    gallery: [
      'assets/img/catalogo/pala-sinomach-907h.jpeg',
    ],
    description: 'La pala cargadora Sinomach 907H es una máquina de alta capacidad operativa, ideal para el movimiento de suelos, granos y materiales a granel. Con 125 HP de potencia y estructura reforzada, ofrece rendimiento confiable en las condiciones más exigentes del trabajo rural.',
    specifications: {
      'Potencia': '125 HP',
      'Tipo': 'Pala cargadora de ruedas',
      'Capacidad de cuchara': 'Consultar',
      'Tracción': '4WD',
      'Estado': '0 KM',
      'Cabina': 'ROPS certificada',
    },
    applications: [
      'Movimiento de suelos',
      'Manejo de granos',
      'Carga y descarga',
      'Trabajos civiles rurales',
      'Silos y acopios',
    ],
    featured: true,
    price: null,
    financing: true,
    whatsappMessage: 'Hola, quiero consultar por la Pala Cargadora Sinomach 907H 125HP (0 KM).',
    metaTitle: 'Pala Cargadora Sinomach 907H 125HP - 0 KM | Portal del Norte',
    metaDescription: 'Pala cargadora Sinomach 907H, 125HP, 4WD, 0 KM. Ideal para movimiento de suelos y granos. Portal del Norte.',
  },
  {
    id: 'secman-m3200',
    brand: 'Secman',
    brandSlug: 'secman',
    brandLogo: 'assets/img/marcas/secman.png',
    model: 'M3200',
    displayName: 'Secman M3200',
    category: 'Subsoladores',
    categorySlug: 'subsoladores',
    condition: '0km',
    power: null,
    image: 'assets/img/catalogo/subsolador-secman-m3200.jpeg',
    gallery: [
      'assets/img/catalogo/subsolador-secman-m3200.jpeg',
    ],
    description: 'El subsolador Secman M3200 es un implemento de labranza profunda diseñado para romper el piso de arado y mejorar la infiltración de agua en el perfil del suelo. Con geometría de trabajo optimizada y puntas intercambiables, permite mayor profundidad de labor y un acabado de superficie de calidad.',
    specifications: {
      'Tipo': 'Subsolador a cincel',
      'Modelo': 'M3200',
      'Puntas': 'Intercambiables de alta resistencia',
      'Estado': '0 KM',
      'Acople': '3 puntos categoría II/III',
    },
    applications: [
      'Labranza profunda',
      'Rotura de piso de arado',
      'Mejora de infiltración',
      'Preparación de suelos compactos',
      'Agricultura de secano y regadío',
    ],
    featured: true,
    price: null,
    financing: true,
    whatsappMessage: 'Hola, quiero consultar por el Subsolador Secman M3200 (0 KM).',
    metaTitle: 'Subsolador Secman M3200 - 0 KM | Portal del Norte',
    metaDescription: 'Subsolador Secman M3200 para labranza profunda y rotura de piso de arado. 0 KM. Portal del Norte.',
  },
];

// ============================================================
// HELPERS
// ============================================================

/**
 * Genera URL de WhatsApp con mensaje personalizado
 */
function getWhatsAppUrl(message = CONFIG.defaultWhatsappMsg) {
  const number = CONFIG.whatsapp;
  if (!number || number === 'COMPLETAR_WHATSAPP') {
    // Fallback: abre WhatsApp sin número si no está configurado
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  }
  return `${CONFIG.whatsappBase}${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Obtiene producto por ID
 */
function getProductById(id) {
  return CATALOG.find(p => p.id === id) || null;
}

/**
 * Filtra productos por condición, marca y categoría
 */
function filterProducts({ condition = 'all', brand = 'all', category = 'all' } = {}) {
  return CATALOG.filter(p => {
    const matchCondition = condition === 'all' || p.condition === condition;
    const matchBrand = brand === 'all' || p.brandSlug === brand;
    const matchCategory = category === 'all' || p.categorySlug === category;
    return matchCondition && matchBrand && matchCategory;
  });
}

/**
 * Obtiene productos destacados
 */
function getFeaturedProducts() {
  return CATALOG.filter(p => p.featured);
}

/**
 * Obtiene marca por slug
 */
function getBrandBySlug(slug) {
  return BRANDS.find(b => b.slug === slug) || null;
}

/**
 * Registra evento analítico (preparado para GA4 u otro sistema)
 */
function trackEvent(eventName, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
  // Fallback: log en consola en desarrollo
  console.log('[Analytics]', eventName, params);
}
