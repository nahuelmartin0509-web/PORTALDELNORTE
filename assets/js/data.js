/**
 * PORTAL DEL NORTE — Data Structure v3.0
 * Implementos Agrícolas
 */

// ============================================================
// CONFIGURACIÓN GLOBAL
// ============================================================
const CONFIG = {
  whatsapp: '',
  whatsappBase: 'https://wa.me/',
  email: '',
  instagram: 'https://www.instagram.com/portaldelnorte.agro/',
  facebook: 'https://www.facebook.com/share/19Gstw5Ut2/?mibextid=wwXIfr',
  address: '',
  hours: '',
  defaultWhatsappMsg: 'Hola, visité la web de Portal del Norte y quiero hacer una consulta.',
  waSunchales: 'https://wa.link/t2tt31',
  waFranck: 'https://wa.link/2463ko',
};

// ============================================================
// MARCAS
// ============================================================
const BRANDS = [
  { slug: 'agrochery',  name: 'AgroChery', logo: 'assets/img/marcas/agrochery.jpeg', featured: true },
  { slug: 'gimetal',    name: 'Gimetal',   logo: 'assets/img/marcas/gimetal.jpg',    featured: true },
  { slug: 'secman',     name: 'Secman',    logo: 'assets/img/marcas/secman.png',     featured: true },
  { slug: 'sinomach',   name: 'Sinomach',  logo: 'assets/img/marcas/sinomach.jpeg',  featured: true },
];

// ============================================================
// CATEGORÍAS
// ============================================================
const CATEGORIES = [
  { slug: 'tractores',        name: 'Tractores' },
  { slug: 'tractores-usados', name: 'Tractores Usados' },
  { slug: 'implementos',      name: 'Implementos Agrícolas' },
  { slug: 'pasturas',         name: 'Para Pasturas' },
  { slug: 'pulverizadoras',   name: 'Pulverizadoras' },
  { slug: 'maquinaria-vial',  name: 'Maquinaria Vial' },
  { slug: 'tolvas',           name: 'Tolvas' },
  { slug: 'vehiculos',        name: 'Vehículos' },
];

// ============================================================
// CATÁLOGO DE PRODUCTOS
// ============================================================
const CATALOG = [

  // ── TRACTORES 0KM ─────────────────────────────────────────

  {
    id: 'chery-rk704',
    brand: 'AgroChery', brandSlug: 'agrochery', brandLogo: 'assets/img/marcas/agrochery.jpeg',
    model: 'RK704', displayName: 'Tractor Chery RK704',
    category: 'Tractores', categorySlug: 'tractores', condition: '0km', power: '70 HP',
    image: 'assets/img/catalogo/Tractor CHERY RK704.jpeg',
    gallery: ['assets/img/catalogo/Tractor CHERY RK704.jpeg'],
    description: 'Tractor AgroChery RK704 0 KM. Motor tecnología Perkins de alta eficiencia. Transmisión 12x12, tracción 4x4, toma de fuerza y doble salida hidráulica.',
    specifications: { 'Potencia': '70 HP', 'Tracción': '4x4', 'Transmisión': '12x12', 'Motor': 'Tecnología Perkins', 'Toma de Fuerza': 'Sí', 'Salida Hidráulica': 'Doble', 'Enganche': '3 puntos', 'Rodado': '9,5-24 / 14,9-30', 'Estado': '0 KM' },
    applications: ['Labranza primaria', 'Siembra', 'Pulverización', 'Transporte rural'],
    featured: true, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por el Tractor AgroChery RK704 70HP (0 KM).',
  },

  {
    id: 'chery-rk704-cabina',
    brand: 'AgroChery', brandSlug: 'agrochery', brandLogo: 'assets/img/marcas/agrochery.jpeg',
    model: 'RK704 Cabina Full', displayName: 'Tractor Chery RK704 Cabina Full',
    category: 'Tractores', categorySlug: 'tractores', condition: '0km', power: '70 HP',
    image: 'assets/img/catalogo/TRACTOR CHERY RK704 CABINA FULL.jpeg',
    gallery: ['assets/img/catalogo/TRACTOR CHERY RK704 CABINA FULL.jpeg'],
    description: 'Tractor AgroChery RK704 con cabina full y aire acondicionado. Motor tecnología Perkins, tracción 4x4, transmisión 12x12.',
    specifications: { 'Potencia': '70 HP', 'Tracción': '4x4', 'Transmisión': '12x12', 'Motor': 'Tecnología Perkins', 'Toma de Fuerza': 'Sí', 'Salida Hidráulica': 'Doble', 'Enganche': '3 puntos', 'Rodado': '9,5-24 / 14,9-30', 'Cabina': 'Full con Aire Acondicionado', 'Estado': '0 KM' },
    applications: ['Labranza primaria', 'Siembra', 'Pulverización', 'Jornadas extendidas'],
    featured: true, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por el Tractor AgroChery RK704 Cabina Full 70HP (0 KM).',
  },

  {
    id: 'chery-rk504-cabina',
    brand: 'AgroChery', brandSlug: 'agrochery', brandLogo: 'assets/img/marcas/agrochery.jpeg',
    model: 'RK504 Cabina Full', displayName: 'Tractor Chery RK504 Cabina Full',
    category: 'Tractores', categorySlug: 'tractores', condition: '0km', power: '55 HP',
    image: 'assets/img/catalogo/TRACTOR CHERY RK504 CABINA FULL.jpeg',
    gallery: ['assets/img/catalogo/TRACTOR CHERY RK504 CABINA FULL.jpeg'],
    description: 'Tractor AgroChery RK504 con cabina full y aire acondicionado. Motor tecnología Perkins, tracción 4x4, transmisión 8x8.',
    specifications: { 'Potencia': '55 HP', 'Tracción': '4x4', 'Transmisión': '8x8', 'Motor': 'Tecnología Perkins', 'Toma de Fuerza': 'Sí', 'Salida Hidráulica': 'Doble', 'Enganche': '3 puntos', 'Rodado': '9,5-20 / 13,6-28', 'Cabina': 'Full con Aire Acondicionado', 'Estado': '0 KM' },
    applications: ['Labranza', 'Siembra', 'Parquizado', 'Quintas', 'Ganadería'],
    featured: true, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por el Tractor AgroChery RK504 Cabina Full 55HP (0 KM).',
  },

  {
    id: 'chery-rc1104-cabina',
    brand: 'AgroChery', brandSlug: 'agrochery', brandLogo: 'assets/img/marcas/agrochery.jpeg',
    model: 'RC1104 Cabinado', displayName: 'Tractor Chery RC1104 Cabinado',
    category: 'Tractores', categorySlug: 'tractores', condition: '0km', power: '115 HP',
    image: 'assets/img/catalogo/TRACTOR CHERY RC1104 CABINADO.jpeg',
    gallery: ['assets/img/catalogo/TRACTOR CHERY RC1104 CABINADO.jpeg'],
    description: 'Tractor AgroChery RC1104 cabinado 0 KM. 115HP, tracción 4x4, motor tecnología Perkins. Toma de fuerza y doble salida hidráulica. Enganche 3 puntos.',
    specifications: { 'Potencia': '115 HP', 'Tracción': '4x4', 'Motor': 'Tecnología Perkins', 'Toma de Fuerza': 'Sí', 'Salida Hidráulica': 'Doble', 'Enganche': '3 puntos', 'Cabina': 'Sí', 'Estado': '0 KM' },
    applications: ['Labranza pesada', 'Siembra', 'Grandes superficies', 'Implementos varios'],
    featured: true, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por el Tractor AgroChery RC1104 Cabinado 115HP (0 KM).',
  },

  {
    id: 'chery-904f-cabinado',
    brand: 'AgroChery', brandSlug: 'agrochery', brandLogo: 'assets/img/marcas/agrochery.jpeg',
    model: '904F Cabinado', displayName: 'Tractor Chery 904F Cabinado',
    category: 'Tractores', categorySlug: 'tractores', condition: '0km', power: '92 HP',
    image: 'assets/img/catalogo/TRACTOR CHERY 904F CABINADO.jpeg',
    gallery: ['assets/img/catalogo/TRACTOR CHERY 904F CABINADO.jpeg'],
    description: 'Tractor AgroChery 904F cabinado 0 KM. 92HP, tracción 4x4, motor tecnología Perkins. Toma de fuerza y doble salida hidráulica. Enganche 3 puntos.',
    specifications: { 'Potencia': '92 HP', 'Tracción': '4x4', 'Motor': 'Tecnología Perkins', 'Toma de Fuerza': 'Sí', 'Salida Hidráulica': 'Doble', 'Enganche': '3 puntos', 'Cabina': 'Sí', 'Estado': '0 KM' },
    applications: ['Labranza', 'Siembra', 'Implementos varios', 'Transporte rural'],
    featured: true, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por el Tractor AgroChery 904F Cabinado 92HP (0 KM).',
  },

  {
    id: 'chery-904f-techado',
    brand: 'AgroChery', brandSlug: 'agrochery', brandLogo: 'assets/img/marcas/agrochery.jpeg',
    model: '904F Techado', displayName: 'Tractor Chery 904F Techado',
    category: 'Tractores', categorySlug: 'tractores', condition: '0km', power: '92 HP',
    image: 'assets/img/catalogo/TRACTOR CHERY 904F TECHADO.jpeg',
    gallery: ['assets/img/catalogo/TRACTOR CHERY 904F TECHADO.jpeg'],
    description: 'Tractor AgroChery 904F techado 0 KM. 92HP, tracción 4x4, motor tecnología Perkins. Toma de fuerza y doble salida hidráulica. Enganche 3 puntos.',
    specifications: { 'Potencia': '92 HP', 'Tracción': '4x4', 'Motor': 'Tecnología Perkins', 'Toma de Fuerza': 'Sí', 'Salida Hidráulica': 'Doble', 'Enganche': '3 puntos', 'Cabina': 'Techado', 'Estado': '0 KM' },
    applications: ['Labranza', 'Siembra', 'Implementos varios'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por el Tractor AgroChery 904F Techado 92HP (0 KM).',
  },

  // ── TRACTORES USADOS ──────────────────────────────────────

  {
    id: 'chery-usado-desmalezadora',
    brand: 'AgroChery', brandSlug: 'agrochery', brandLogo: 'assets/img/marcas/agrochery.jpeg',
    model: 'Chery Usado + Desmalezadora', displayName: 'Tractor Chery usado + Desmalezadora',
    category: 'Tractores Usados', categorySlug: 'tractores-usados', condition: 'usado', power: '25 HP',
    image: 'assets/img/catalogo/TRACTOR CHERY + DESMALEZADORA.jpeg',
    gallery: ['assets/img/catalogo/TRACTOR CHERY + DESMALEZADORA.jpeg'],
    description: 'Tractor Chery usado 25HP 4x2 con desmalezadora de 1,2 metros incluida. Ideal para parquizado, quintas y predios.',
    specifications: { 'Potencia': '25 HP', 'Tracción': '4x2', 'Transmisión': '6x1', 'Rodado': 'Parquero 8,5-12 / 9,5-16', 'Enganche': '3 puntos', 'Incluye': 'Desmalezadora 1,2 m', 'Estado': 'Usado' },
    applications: ['Parquizado', 'Quintas', 'Ganadería', 'Desmalezado'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Tractor Chery Usado 25HP + Desmalezadora.',
  },

  {
    id: 'hanomag-r55',
    brand: 'Hanomag', brandSlug: 'otras', brandLogo: '',
    model: 'Hanomag R55', displayName: 'Tractor Hanomag R55',
    category: 'Tractores Usados', categorySlug: 'tractores-usados', condition: 'usado', power: '55 HP',
    image: 'assets/img/catalogo/HONOMAG R55.jpeg',
    gallery: ['assets/img/catalogo/HONOMAG R55.jpeg'],
    description: 'Tractor Hanomag R55 usado. Motor diesel 4 cilindros con inyección directa. Toma de fuerza y enganche.',
    specifications: { 'Potencia': '55 HP', 'Tracción': '4x2', 'Motor': 'Diesel 4 cil. inyección directa', 'Toma de Fuerza': 'Sí', 'Enganche': 'Sí', 'Estado': 'Usado' },
    applications: ['Labranza', 'Transporte rural', 'Implementos varios'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Tractor Hanomag R55 Usado.',
  },

  {
    id: 'hanomag-r60',
    brand: 'Hanomag', brandSlug: 'otras', brandLogo: '',
    model: 'Hanomag R60', displayName: 'Tractor Hanomag R60',
    category: 'Tractores Usados', categorySlug: 'tractores-usados', condition: 'usado', power: null,
    image: 'assets/img/catalogo/HANOMAG R60.jpeg',
    gallery: ['assets/img/catalogo/HANOMAG R60.jpeg'],
    description: 'Tractor Hanomag R60 en excelente estado. Con salida hidráulica, toma de fuerza y enganche. Consultanos para conocer el valor.',
    specifications: { 'Salida Hidráulica': 'Sí', 'Toma de Fuerza': 'Sí', 'Enganche': 'Sí', 'Estado': 'Excelente estado' },
    applications: ['Labranza', 'Transporte rural', 'Implementos varios'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar valor',
    whatsappMessage: 'Hola, quiero consultar por el Tractor Hanomag R60.',
  },

  {
    id: 'fiat-500',
    brand: 'Fiat', brandSlug: 'otras', brandLogo: '',
    model: 'Fiat 500', displayName: 'Tractor Fiat 500',
    category: 'Tractores Usados', categorySlug: 'tractores-usados', condition: 'usado', power: '50 HP',
    image: 'assets/img/catalogo/FIAT 500.jpeg',
    gallery: ['assets/img/catalogo/FIAT 500.jpeg'],
    description: 'Tractor Fiat 500 usado. Motor diesel 3 cilindros, toma de fuerza y enganche 3 puntos.',
    specifications: { 'Potencia': '50 HP', 'Tracción': '4x2', 'Motor': 'Diesel 3 cilindros', 'Toma de Fuerza': 'Sí', 'Enganche': '3 puntos', 'Estado': 'Usado' },
    applications: ['Labranza', 'Transporte rural', 'Implementos varios'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Tractor Fiat 500 Usado.',
  },

  {
    id: 'fiat-780',
    brand: 'Fiat', brandSlug: 'otras', brandLogo: '',
    model: 'Fiat 780', displayName: 'Tractor Fiat 780',
    category: 'Tractores Usados', categorySlug: 'tractores-usados', condition: 'usado', power: null,
    image: 'assets/img/catalogo/FIAT 780.jpeg',
    gallery: ['assets/img/catalogo/FIAT 780.jpeg'],
    description: 'Tractor Fiat 780 usado. Consultanos para conocer disponibilidad y valor.',
    specifications: { 'Estado': 'Usado' },
    applications: ['Labranza', 'Implementos varios'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precio y financiación',
    whatsappMessage: 'Hola, quiero consultar por el Tractor Fiat 780 Usado.',
  },

  {
    id: 'massey-ferguson-165',
    brand: 'Massey Ferguson', brandSlug: 'otras', brandLogo: '',
    model: 'Massey Ferguson 165', displayName: 'Tractor Massey Ferguson 165',
    category: 'Tractores Usados', categorySlug: 'tractores-usados', condition: 'usado', power: '60 HP',
    image: 'assets/img/catalogo/TRACTOR MASSEY FERGUSON 165 60HP.jpeg',
    gallery: ['assets/img/catalogo/TRACTOR MASSEY FERGUSON 165 60HP.jpeg'],
    description: 'Tractor Massey Ferguson 165, 60HP. Dirección hidráulica, motor Perkins 4 cilindros y enganche 3 puntos.',
    specifications: { 'Potencia': '60 HP', 'Motor': 'Perkins 4 cilindros', 'Dirección': 'Hidráulica', 'Enganche': '3 puntos', 'Estado': 'Usado' },
    applications: ['Labranza', 'Implementos varios', 'Transporte rural'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Tractor Massey Ferguson 165 60HP.',
  },

  {
    id: 'pauny-540',
    brand: 'Pauny', brandSlug: 'otras', brandLogo: '',
    model: 'Pauny 540', displayName: 'Tractor Pauny 540',
    category: 'Tractores Usados', categorySlug: 'tractores-usados', condition: 'usado', power: '240 HP',
    image: 'assets/img/catalogo/PAUNY 540.jpeg',
    gallery: ['assets/img/catalogo/PAUNY 540.jpeg'],
    description: 'Tractor Pauny 540, 240HP, año 2015. Con piloto automático y duales.',
    specifications: { 'Potencia': '240 HP', 'Año': '2015', 'Piloto': 'Sí', 'Duales': 'Sí', 'Estado': 'Usado' },
    applications: ['Labranza de alta potencia', 'Grandes superficies', 'Cosecha gruesa'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Tractor Pauny 540 240HP (2015).',
  },

  {
    id: 'new-holland-8030',
    brand: 'New Holland', brandSlug: 'otras', brandLogo: '',
    model: 'New Holland 8030', displayName: 'Tractor New Holland 8030',
    category: 'Tractores Usados', categorySlug: 'tractores-usados', condition: 'usado', power: null,
    image: 'assets/img/catalogo/NEW HOLLAND 8030.jpeg',
    gallery: ['assets/img/catalogo/NEW HOLLAND 8030.jpeg'],
    description: 'Tractor New Holland 8030, 4x4, cabinado. Año 2015, 6.500 horas.',
    specifications: { 'Tracción': '4x4', 'Cabina': 'Sí', 'Horas': '6.500 hs', 'Año': '2015', 'Estado': 'Usado' },
    applications: ['Labranza', 'Siembra', 'Transporte rural'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Tractor New Holland 8030 4x4 (2015, 6500hs).',
  },

  // ── PARA PASTURAS ─────────────────────────────────────────

  {
    id: 'bellmaq-t5r',
    brand: 'Bellmaq Maccari', brandSlug: 'otras', brandLogo: '',
    model: 'Bellmaq Maccari T5R', displayName: 'Transportador de Rollos Bellmaq Maccari T5R',
    category: 'Para Pasturas', categorySlug: 'pasturas', condition: '0km', power: null,
    image: 'assets/img/catalogo/TRANSPORTADOR  DE ROLLOS BELLMAQ MACCARI T5R.jpeg',
    gallery: ['assets/img/catalogo/TRANSPORTADOR  DE ROLLOS BELLMAQ MACCARI T5R.jpeg'],
    description: 'Transportador de rollos Bellmaq Maccari T5R. Capacidad para 5 rollos de 1,50 m o 6 rollos de 1,20 m. Sistema 100% hidráulico.',
    specifications: { 'Capacidad': '5 rollos 1,50 m / 6 rollos 1,20 m', 'Sistema': '100% Hidráulico', 'Carga': 'Lateral o posterior' },
    applications: ['Pasturas', 'Ganadería', 'Transporte de rollos'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precio, financiación y descuentos de contado',
    whatsappMessage: 'Hola, quiero consultar por el Transportador de Rollos Bellmaq Maccari T5R.',
  },

  {
    id: 'gimetal-tdr-6700',
    brand: 'Gimetal', brandSlug: 'gimetal', brandLogo: 'assets/img/marcas/gimetal.jpg',
    model: 'Gimetal TDR 6700', displayName: 'Transportador de Rollos GIMETAL TDR 6700',
    category: 'Para Pasturas', categorySlug: 'pasturas', condition: '0km', power: null,
    image: 'assets/img/catalogo/TRANSPORTADOR DE ROLLOS GIMETAL TDR 6700.jpeg',
    gallery: ['assets/img/catalogo/TRANSPORTADOR DE ROLLOS GIMETAL TDR 6700.jpeg'],
    description: 'Transportador de rollos GIMETAL TDR 6700. Capacidad para 6 rollos de 1,50 mts. Sistema 100% hidráulico.',
    specifications: { 'Capacidad': '6 rollos de 1,50 m', 'Sistema': '100% Hidráulico' },
    applications: ['Pasturas', 'Ganadería', 'Transporte de rollos'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precio, financiación y descuentos de contado',
    whatsappMessage: 'Hola, quiero consultar por el Transportador de Rollos GIMETAL TDR 6700.',
  },

  {
    id: 'vagon-forrajero-vf4510',
    brand: 'Fraga', brandSlug: 'otras', brandLogo: '',
    model: 'VF4510 Fraga', displayName: 'Vagón Forrajero VF4510 FRAGA',
    category: 'Para Pasturas', categorySlug: 'pasturas', condition: '0km', power: null,
    image: 'assets/img/catalogo/VAGON FORRAJERO VF4510 FRAGA.jpeg',
    gallery: ['assets/img/catalogo/VAGON FORRAJERO VF4510 FRAGA.jpeg'],
    description: 'Vagón Forrajero VF4510 FRAGA. Capacidad 14 m³ / 5.000 kg. Prolongación de noria hidráulica, techo rígido y balanza electrónica.',
    specifications: { 'Capacidad': '14 m³ — 5.000 kg', 'Noria': 'Prolongación hidráulica', 'Techo': 'Rígido', 'Balanza': 'Electrónica' },
    applications: ['Pasturas', 'Ganadería', 'Distribución de forraje'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar valor y financiación',
    whatsappMessage: 'Hola, quiero consultar por el Vagón Forrajero VF4510 FRAGA.',
  },

  {
    id: 'recolectora-rf958-fraga',
    brand: 'Fraga', brandSlug: 'otras', brandLogo: '',
    model: 'RF958 Fraga', displayName: 'Recolectora de Forrajes RF958 FRAGA',
    category: 'Para Pasturas', categorySlug: 'pasturas', condition: '0km', power: null,
    image: 'assets/img/catalogo/VAGON FORRAJERO VF4510 FRAGA.jpeg',
    gallery: ['assets/img/catalogo/VAGON FORRAJERO VF4510 FRAGA.jpeg'],
    description: 'Recolectora de Forrajes RF958 FRAGA. Ancho de corte 250 cm. Altura de corte de 3 a 50 cm. Sistema totalmente hidráulico.',
    specifications: { 'Ancho de corte': '250 cm', 'Altura de corte': '3 a 50 cm', 'Sistema': 'Totalmente hidráulico' },
    applications: ['Pasturas', 'Ganadería', 'Recolección de forraje'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar valor y financiación',
    whatsappMessage: 'Hola, quiero consultar por la Recolectora de Forrajes RF958 FRAGA.',
  },

  // ── PULVERIZADORAS ────────────────────────────────────────

  {
    id: 'pla-map-ii-3250',
    brand: 'PLA', brandSlug: 'otras', brandLogo: '',
    model: 'PLA MAP II 3250', displayName: 'Pulverizadora Autopropulsada PLA MAP II 3250',
    category: 'Pulverizadoras', categorySlug: 'pulverizadoras', condition: 'usado', power: null,
    image: 'assets/img/catalogo/PUVERIZADORA AUTOPROPULSADA PLA MAP II 3250.jpeg',
    gallery: ['assets/img/catalogo/PUVERIZADORA AUTOPROPULSADA PLA MAP II 3250.jpeg'],
    description: 'Pulverizadora autopropulsada PLA MAP II 3250. Tanque 3.250 litros, agua limpia 200 litros. Ancho de labor 28 metros.',
    specifications: { 'Tanque principal': '3.250 litros', 'Agua limpia': '200 litros', 'Ancho de labor': '28 metros', 'Tipo': 'Autopropulsada' },
    applications: ['Pulverización', 'Fumigación', 'Grandes superficies'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por la Pulverizadora PLA MAP II 3250.',
  },

  // ── IMPLEMENTOS AGRÍCOLAS ─────────────────────────────────

  {
    id: 'corti-serie-2000',
    brand: 'Corti', brandSlug: 'otras', brandLogo: '',
    model: 'Corti Serie 2000', displayName: 'Rastra de Disco Desencontrado Corti Serie 2000',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/RASTRA DE DISCO DESENCONTRADO CORTI SERIE 2000.jpeg',
    gallery: ['assets/img/catalogo/RASTRA DE DISCO DESENCONTRADO CORTI SERIE 2000.jpeg'],
    description: 'Rastra de disco desencontrado Corti Serie 2000. 48 discos de 24".',
    specifications: { 'Discos': '48 de 24"', 'Tipo': 'Desencontrado' },
    applications: ['Labranza primaria', 'Preparación de suelo'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precio y financiación',
    whatsappMessage: 'Hola, quiero consultar por la Rastra de Disco Desencontrado Corti Serie 2000.',
  },

  {
    id: 'tanques-rotor',
    brand: 'Rotor', brandSlug: 'otras', brandLogo: '',
    model: 'Tanques Plásticos Rotor', displayName: 'Tanques Plásticos ROTOR',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/TANQUES PLASTICOS ROTOR.jpeg',
    gallery: ['assets/img/catalogo/TANQUES PLASTICOS ROTOR.jpeg'],
    description: 'Tanques plásticos ROTOR desde 3.500 hasta 26.000 litros. Ideales para todo tipo de líquidos, resistentes a rayos UV.',
    specifications: { 'Capacidad': '3.500 a 26.000 litros', 'Material': 'Plástico UV', 'Uso': 'Todo tipo de líquidos' },
    applications: ['Almacenaje de agua', 'Agroquímicos', 'Combustible'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precios y financiaciones',
    whatsappMessage: 'Hola, quiero consultar por los Tanques Plásticos ROTOR.',
  },

  {
    id: 'mixer-tecnocampo-tc7000',
    brand: 'Tecno Campo', brandSlug: 'otras', brandLogo: '',
    model: 'Tecno Campo TC7000', displayName: 'Mixer Horizontal Tecno Campo TC7000',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/MIXER HORIZONTAL TECNO CAMPO TC7000.jpeg',
    gallery: ['assets/img/catalogo/MIXER HORIZONTAL TECNO CAMPO TC7000.jpeg'],
    description: 'Mixer Horizontal Tecno Campo TC7000. Capacidad 7 m³. Con balanza y cubiertas.',
    specifications: { 'Capacidad': '7 m³', 'Tipo': 'Horizontal', 'Balanza': 'Incluida', 'Cubiertas': 'Incluidas' },
    applications: ['Ganadería', 'Producción lechera', 'Mezcla de raciones'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Mixer Horizontal Tecno Campo TC7000 7m³.',
  },

  {
    id: 'mixer-juarez-mvj-1400',
    brand: 'Juárez', brandSlug: 'otras', brandLogo: '',
    model: 'Juárez MVJ 1400', displayName: 'Mixer Vertical Juárez MVJ 1400',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/MIXER VERTIZAL JUAREZ MVJ 1400.jpeg',
    gallery: ['assets/img/catalogo/MIXER VERTIZAL JUAREZ MVJ 1400.jpeg'],
    description: 'Mixer Vertical Juárez MVJ 1400. Capacidad 14 m³. Con sinfín de mezclado, cuchillas laterales, balanza y cubiertas.',
    specifications: { 'Capacidad': '14 m³', 'Tipo': 'Vertical', 'Sinfín': 'Mezclado', 'Cuchillas': 'Laterales', 'Balanza': 'Incluida' },
    applications: ['Ganadería', 'Producción lechera', 'Mezcla de raciones'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Mixer Vertical Juárez MVJ 1400 14m³.',
  },

  {
    id: 'mixer-juarez-usado',
    brand: 'Juárez', brandSlug: 'otras', brandLogo: '',
    model: 'Mixer Vertical Juárez Usado', displayName: 'Mixer Vertical Juárez — Usado',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: 'usado', power: null,
    image: 'assets/img/catalogo/MIXER VERTICAL JUAREZ.jpeg',
    gallery: ['assets/img/catalogo/MIXER VERTICAL JUAREZ.jpeg'],
    description: 'Mixer Vertical usado Juárez. Equipado con balanza. Financiación hasta 24 meses.',
    specifications: { 'Tipo': 'Vertical', 'Balanza': 'Incluida', 'Estado': 'Usado' },
    applications: ['Ganadería', 'Producción lechera', 'Mezcla de raciones'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Financiación en 24 meses',
    whatsappMessage: 'Hola, quiero consultar por el Mixer Vertical Juárez Usado (con balanza).',
  },

  {
    id: 'mixer-montecor-vertical',
    brand: 'Montecor', brandSlug: 'otras', brandLogo: '',
    model: 'Mixer Vertical Montecor', displayName: 'Mixer Vertical Montecor',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/MIXER VERTICAL MONTECOR.jpeg',
    gallery: ['assets/img/catalogo/MIXER VERTICAL MONTECOR.jpeg'],
    description: 'Mixer Vertical Montecor. Consultanos para conocer especificaciones y disponibilidad.',
    specifications: { 'Tipo': 'Vertical' },
    applications: ['Ganadería', 'Mezcla de raciones'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por el Mixer Vertical Montecor.',
  },

  {
    id: 'gimetal-edr-1500',
    brand: 'Gimetal', brandSlug: 'gimetal', brandLogo: 'assets/img/marcas/gimetal.jpg',
    model: 'Gimetal EDR 1500', displayName: 'Fertilizadora GIMETAL EDR 1500',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/FERTILIZADORA GIMETAL EDR 1500.jpeg',
    gallery: ['assets/img/catalogo/FERTILIZADORA GIMETAL EDR 1500.jpeg'],
    description: 'Fertilizadora GIMETAL EDR 1500. Capacidad 1.500 litros. Trocha 1,60 m. Ancho máximo de labor 18 m. Con cubiertas.',
    specifications: { 'Capacidad': '1.500 litros', 'Trocha': '1,60 m', 'Ancho de labor': '18 m', 'Cubiertas': 'Incluidas' },
    applications: ['Fertilización', 'Siembra', 'Grandes superficies'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precio y financiación',
    whatsappMessage: 'Hola, quiero consultar por la Fertilizadora GIMETAL EDR 1500.',
  },

  {
    id: 'bellmaq-rtx160',
    brand: 'Bellmaq', brandSlug: 'otras', brandLogo: '',
    model: 'Bellmaq RTX160', displayName: 'Rastra Bellmaq RTX160',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/RASTRA BELLMAQ RTX160.jpeg',
    gallery: ['assets/img/catalogo/RASTRA BELLMAQ RTX160.jpeg'],
    description: 'Rastra Bellmaq RTX160 de tiro excéntrico 3 puntos. 16 discos de 22". Separación 225 mm. Ancho de labor 1,70 m.',
    specifications: { 'Tipo': 'Tiro excéntrico 3 puntos', 'Discos': '16 de 22"', 'Separación': '225 mm', 'Ancho de labor': '1,70 m' },
    applications: ['Labranza', 'Preparación de suelo'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precio y financiación',
    whatsappMessage: 'Hola, quiero consultar por la Rastra Bellmaq RTX160.',
  },

  {
    id: 'secman-m3600',
    brand: 'Secman', brandSlug: 'secman', brandLogo: 'assets/img/marcas/secman.png',
    model: 'Secman M3600', displayName: 'Descompactador de Suelos Secman M3600',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/DESCOMPACTADOR DE SUELOS SECMAN M3600.jpeg',
    gallery: ['assets/img/catalogo/DESCOMPACTADOR DE SUELOS SECMAN M3600.jpeg'],
    description: 'Descompactador de suelos Secman M3600. Ancho de labor 3,60 m, peso 2.200 kg. Lanza articulada regulable por cilindro hidráulico. 6 timones.',
    specifications: { 'Ancho de labor': '3,60 m', 'Peso': '2.200 kg', 'Lanza': 'Articulada hidráulica', 'Timones': '6' },
    applications: ['Descompactación', 'Labranza profunda'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precio y financiaciones',
    whatsappMessage: 'Hola, quiero consultar por el Descompactador de Suelos Secman M3600.',
  },

  {
    id: 'quebradora-richiger',
    brand: 'Richiger', brandSlug: 'otras', brandLogo: '',
    model: 'Quebradora de Granos Richiger', displayName: 'Quebradora de Granos Richiger',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/QUEBRADORA DE GRANOS RICHIGER.jpeg',
    gallery: ['assets/img/catalogo/QUEBRADORA DE GRANOS RICHIGER.jpeg'],
    description: 'Quebradora de granos Richiger. Consultanos para conocer especificaciones y disponibilidad.',
    specifications: { 'Marca': 'Richiger' },
    applications: ['Procesado de granos', 'Ganadería', 'Producción lechera'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar precio y financiación',
    whatsappMessage: 'Hola, quiero consultar por la Quebradora de Granos Richiger.',
  },

  {
    id: 'richiger-r6e-plus',
    brand: 'Richiger', brandSlug: 'otras', brandLogo: '',
    model: 'Richiger R6E Plus', displayName: 'Quebradora y Embolsadora Richiger R6E Plus',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/RICHIGER R6E PLUS.jpeg',
    gallery: ['assets/img/catalogo/RICHIGER R6E PLUS.jpeg'],
    description: 'Quebradora y embolsadora de granos Richiger R6E Plus. Bolsa de 6 pies. Para todo tipo de grano.',
    specifications: { 'Bolsa': '6 pies', 'Grano': 'Todo tipo', 'Marca': 'Richiger' },
    applications: ['Embolsado de grano', 'Acopio', 'Post-cosecha'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por la Quebradora y Embolsadora Richiger R6E Plus.',
  },

  {
    id: 'embolsadora-ascanelli-grub',
    brand: 'Ascanelli', brandSlug: 'otras', brandLogo: '',
    model: 'Ascanelli Grub', displayName: 'Embolsadora de Grano ASCANELLI GRUB — Usada',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: 'usado', power: null,
    image: 'assets/img/catalogo/EMBOLSADORA DE GRANOS ACANELLI GRUB USADA.jpeg',
    gallery: ['assets/img/catalogo/EMBOLSADORA DE GRANOS ACANELLI GRUB USADA.jpeg'],
    description: 'Embolsadora de grano ASCANELLI GRUB usada. Bolsa de 9 pies. Capacidad de embolsado 8.000 kg/min. Capacidad de recepción 20.000 litros.',
    specifications: { 'Bolsa': '9 pies', 'Capacidad embolsado': '8.000 kg/min', 'Recepción': '20.000 litros', 'Estado': 'Usado' },
    applications: ['Embolsado de grano', 'Acopio', 'Post-cosecha'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar valor y financiación',
    whatsappMessage: 'Hola, quiero consultar por la Embolsadora ASCANELLI GRUB Usada.',
  },

  {
    id: 'desmalezadora-bellmaq-3p',
    brand: 'Bellmaq', brandSlug: 'otras', brandLogo: '',
    model: 'Desmalezadora 3 Puntos Bellmaq', displayName: 'Desmalezadora 3 Puntos Bellmaq 1,5 mts',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/DESMALEZADORA 3 PUNTOS BELLMAQ 1,5MTS.jpeg',
    gallery: ['assets/img/catalogo/DESMALEZADORA 3 PUNTOS BELLMAQ 1,5MTS.jpeg'],
    description: 'Desmalezadora de 3 puntos Bellmaq. Ancho de corte 1,5 metros. Ideal para parquizado, quintas y predios.',
    specifications: { 'Ancho': '1,5 metros', 'Enganche': '3 puntos' },
    applications: ['Parquizado', 'Quintas', 'Desmalezado'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por la Desmalezadora 3 Puntos Bellmaq 1,5 mts.',
  },

  {
    id: 'pala-niveladora-n4-tbeh',
    brand: 'TBeH', brandSlug: 'otras', brandLogo: '',
    model: 'Pala Niveladora N4 TBeH', displayName: 'Pala Niveladora de Arrastre N4 TBeH',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/PALA SINOMACH 937H.jpeg',
    gallery: ['assets/img/catalogo/PALA SINOMACH 937H.jpeg'],
    description: 'Pala niveladora de arrastre N4 TBeH. Capacidad 1.300 kg + 200 opcionales. 3,66 m (12 pies).',
    specifications: { 'Capacidad': '1.300 kg + 200 opc.', 'Largo': '3,66 m (12 pies)', 'Tipo': 'Arrastre' },
    applications: ['Nivelación de terrenos', 'Obras rurales', 'Movimiento de suelos'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar valores y financiación',
    whatsappMessage: 'Hola, quiero consultar por la Pala Niveladora de Arrastre N4 TBeH.',
  },

  {
    id: 'batea-centenario',
    brand: 'Centenario', brandSlug: 'otras', brandLogo: '',
    model: 'Batea Volcadora Centenario', displayName: 'Batea Volcadora CENTENARIO',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/TOLVA GIMETAL DISTINTAS CAPACIDADES.jpeg',
    gallery: ['assets/img/catalogo/TOLVA GIMETAL DISTINTAS CAPACIDADES.jpeg'],
    description: 'Batea volcadora CENTENARIO de 6 a 15 Tn. Con sistema guillotina para volcado preciso. Financiación en 12 meses.',
    specifications: { 'Capacidad': '6 a 15 Tn', 'Volcado': 'Sistema guillotina' },
    applications: ['Transporte de granos', 'Logística rural', 'Acopio'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Financiación en 12 meses',
    whatsappMessage: 'Hola, quiero consultar por la Batea Volcadora CENTENARIO (6 a 15 Tn).',
  },

  {
    id: 'tolva-semillera-sinfin',
    brand: 'Sin marca', brandSlug: 'otras', brandLogo: '',
    model: 'Tolva Semillera con Sinfín', displayName: 'Tolva Semillera con Sinfín',
    category: 'Implementos Agrícolas', categorySlug: 'implementos', condition: '0km', power: null,
    image: 'assets/img/catalogo/TOLVA SEMILLINERA CON SINFIN.jpeg',
    gallery: ['assets/img/catalogo/TOLVA SEMILLINERA CON SINFIN.jpeg'],
    description: 'Tolva semillera con sinfín. Consultanos para conocer capacidad, disponibilidad y precios.',
    specifications: { 'Tipo': 'Semillera con sinfín' },
    applications: ['Siembra', 'Almacenaje de semillas'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por la Tolva Semillera con Sinfín.',
  },

  // ── MAQUINARIA VIAL ───────────────────────────────────────

  {
    id: 'sinomach-937h',
    brand: 'Sinomach', brandSlug: 'sinomach', brandLogo: 'assets/img/marcas/sinomach.jpeg',
    model: 'Sinomach 937H', displayName: 'Pala Sinomach 937H',
    category: 'Maquinaria Vial', categorySlug: 'maquinaria-vial', condition: '0km', power: '135 HP',
    image: 'assets/img/catalogo/PALA SINOMACH 937H.jpeg',
    gallery: ['assets/img/catalogo/PALA SINOMACH 937H.jpeg'],
    description: 'Pala cargadora Sinomach 937H. Capacidad de carga 3.000–3.500 kg. Balde 2,0 m³. Tracción 4x4, peso 10.200 kg, motor Weichai 135HP. Cabina full.',
    specifications: { 'Potencia': '135 HP', 'Motor': 'Weichai', 'Capacidad carga': '3.000–3.500 kg', 'Capacidad balde': '2,0 m³', 'Tracción': '4x4', 'Peso': '10.200 kg', 'Cabina': 'Full' },
    applications: ['Movimiento de suelos', 'Carga y descarga', 'Obras viales'],
    featured: true, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación',
    whatsappMessage: 'Hola, quiero consultar por la Pala Sinomach 937H 135HP.',
  },

  {
    id: 'hyundai-hl730-7',
    brand: 'Hyundai', brandSlug: 'otras', brandLogo: '',
    model: 'Hyundai HL730-7', displayName: 'Pala Cargadora HYUNDAI HL730-7 — Usada',
    category: 'Maquinaria Vial', categorySlug: 'maquinaria-vial', condition: 'usado', power: '120 HP',
    image: 'assets/img/catalogo/PALA CARGADORA HYUNDAI HL730-7 usada.jpeg',
    gallery: ['assets/img/catalogo/PALA CARGADORA HYUNDAI HL730-7 usada.jpeg'],
    description: 'Pala cargadora HYUNDAI HL730-7 usada. Peso operativo 9.700 kg. Motor Cummins 4 cil. turbo 120HP. Balde 1,8 m³. Transmisión Powershift automática (4+3 marchas).',
    specifications: { 'Potencia': '120 HP', 'Motor': 'Cummins 4 cil. turbo', 'Peso operativo': '9.700 kg', 'Capacidad balde': '1,8 m³', 'Transmisión': 'Powershift automática 4+3', 'Estado': 'Usado' },
    applications: ['Movimiento de suelos', 'Carga y descarga', 'Obras rurales'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Consultar financiación y descuento de contado',
    whatsappMessage: 'Hola, quiero consultar por la Pala Cargadora HYUNDAI HL730-7 Usada.',
  },

  // ── TOLVAS ────────────────────────────────────────────────

  {
    id: 'gimetal-tolva',
    brand: 'Gimetal', brandSlug: 'gimetal', brandLogo: 'assets/img/marcas/gimetal.jpg',
    model: 'Tolva GIMETAL', displayName: 'Tolva GIMETAL — Distintas capacidades',
    category: 'Tolvas', categorySlug: 'tolvas', condition: '0km', power: null,
    image: 'assets/img/catalogo/TOLVA GIMETAL DISTINTAS CAPACIDADES.jpeg',
    gallery: ['assets/img/catalogo/TOLVA GIMETAL DISTINTAS CAPACIDADES.jpeg'],
    description: 'Tolvas GIMETAL en distintas capacidades. Con chimango y motor hidráulico. Posibilidad de pago en cuotas o pago directo en 2027.',
    specifications: { 'Capacidad': 'Distintas opciones', 'Chimango': 'Incluido', 'Motor': 'Hidráulico' },
    applications: ['Transporte de granos', 'Cosecha', 'Logística de campo'],
    featured: true, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Pago en cuotas o pago directo en 2027',
    whatsappMessage: 'Hola, quiero consultar por las Tolvas GIMETAL.',
  },

  // ── VEHÍCULOS ─────────────────────────────────────────────

  {
    id: 'amarok-2018',
    brand: 'Volkswagen', brandSlug: 'otras', brandLogo: '',
    model: 'Amarok Comfortline 2018', displayName: 'Volkswagen Amarok Comfortline 2018',
    category: 'Vehículos', categorySlug: 'vehiculos', condition: 'usado', power: null,
    image: 'assets/img/catalogo/VOLSKWAGEN AMAROK MOD2018.jpeg',
    gallery: ['assets/img/catalogo/VOLSKWAGEN AMAROK MOD2018.jpeg'],
    description: 'Volkswagen Amarok Comfortline 2018. Caja manual, tracción 4x2. 98.000 km. Aceptamos permuta.',
    specifications: { 'Modelo': 'Comfortline 2018', 'Caja': 'Manual', 'Tracción': '4x2', 'Kilometraje': '98.000 km', 'Permuta': 'Aceptamos', 'Estado': 'Usado' },
    applications: ['Transporte', 'Uso rural', 'Campo'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Aceptamos permuta. Consultar financiación.',
    whatsappMessage: 'Hola, quiero consultar por la Volkswagen Amarok Comfortline 2018.',
  },

  {
    id: 'peugeot-partner-2017',
    brand: 'Peugeot', brandSlug: 'otras', brandLogo: '',
    model: 'Partner Patagónica 2017', displayName: 'Peugeot Partner Patagónica 2017 Full',
    category: 'Vehículos', categorySlug: 'vehiculos', condition: 'usado', power: null,
    image: 'assets/img/catalogo/PEUGEOT PARTNER PATAGONICA 2017 FULL MOTOR HDI.jpeg',
    gallery: ['assets/img/catalogo/PEUGEOT PARTNER PATAGONICA 2017 FULL MOTOR HDI.jpeg'],
    description: 'Peugeot Partner Patagónica 2017 Full. Motor HDI. 110.000 km. Aceptamos permuta.',
    specifications: { 'Modelo': 'Patagónica Full 2017', 'Motor': 'HDI', 'Kilometraje': '110.000 km', 'Permuta': 'Aceptamos', 'Estado': 'Usado' },
    applications: ['Transporte', 'Uso rural', 'Utilitario'],
    featured: false, price: null, priceUnit: null, priceLabel: null,
    financing: true, financingNote: 'Aceptamos permuta. Consultar financiación.',
    whatsappMessage: 'Hola, quiero consultar por la Peugeot Partner Patagónica 2017 Full HDI.',
  },

];

// ============================================================
// HELPERS
// ============================================================
function getWhatsAppUrl(message = CONFIG.defaultWhatsappMsg) {
  const number = CONFIG.whatsapp;
  if (!number) return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  return `${CONFIG.whatsappBase}${number}?text=${encodeURIComponent(message)}`;
}

function getProductById(id) {
  return CATALOG.find(p => p.id === id) || null;
}

function filterProducts({ condition = 'all', brand = 'all', category = 'all' } = {}) {
  return CATALOG.filter(p => {
    const matchCondition = condition === 'all' || p.condition === condition;
    const matchBrand     = brand === 'all'     || p.brandSlug === brand;
    const matchCategory  = category === 'all'  || p.categorySlug === category;
    return matchCondition && matchBrand && matchCategory;
  });
}

function getFeaturedProducts() {
  return CATALOG.filter(p => p.featured);
}

function getBrandBySlug(slug) {
  return BRANDS.find(b => b.slug === slug) || null;
}

function trackEvent(eventName, params = {}) {
  if (typeof gtag === 'function') gtag('event', eventName, params);
}
