// ============================================================
// KRUSHNAI MOTIVALE — Product Data
// ============================================================

// Image imports — replace these paths with actual product photos
import tanmani1 from '../assets/images/category_tanmani.png';
import kanacheVel1 from '../assets/images/category_kanache_vel.png';
import chinchpeti1 from '../assets/images/category_chinchpeti.png';
import motiBangles1 from '../assets/images/category_moti_bangles.png';
import bajuband1 from '../assets/images/category_bajuband.png';
import jhumake1 from '../assets/images/category_jhumake.png';
import nath1 from '../assets/images/category_nath.png';

export const products = [
  // Medium Tanmani
  {
    id: 1,
    name: 'Bridal Pearl Tanmani Necklace',
    nameMarathi: 'ब्राइडल पर्ल तनमणी',
    category: 'medium-tanmani',
    categoryLabel: 'Medium Tanmani',
    price: 2499,
    originalPrice: 3200,
    image: tanmani1,
    images: [tanmani1],
    isNew: true,
    isBestseller: true,
    description: 'A stunning traditional Maharashtrian tanmani necklace featuring hand-strung natural pearls with intricate gold-toned spacers. This elegant piece captures the essence of traditional Peshwai jewellery craftsmanship.',
    material: 'Pearls, Gold-Tone Alloy',
    weight: 'Approximately 45g',
    length: '18 inches',
    variants: ['Standard'],
    inStock: true,
    tags: ['tanmani', 'necklace', 'pearl', 'bridal', 'traditional'],
  },
  {
    id: 2,
    name: 'Classic Gold Tanmani Set',
    nameMarathi: 'क्लासिक गोल्ड तनमणी सेट',
    category: 'medium-tanmani',
    categoryLabel: 'Medium Tanmani',
    price: 1899,
    originalPrice: null,
    image: tanmani1,
    images: [tanmani1],
    isNew: false,
    isBestseller: true,
    description: 'Timeless medium tanmani necklace set with matching earrings. Perfect for festive occasions and traditional ceremonies.',
    material: 'Gold-Tone Alloy, Pearl Beads',
    weight: 'Approximately 40g',
    length: '18 inches',
    variants: ['Standard'],
    inStock: true,
    tags: ['tanmani', 'necklace', 'set', 'festive'],
  },

  // Kanache Vel
  {
    id: 3,
    name: 'Maharashtrian Ear Chain Set',
    nameMarathi: 'महाराष्ट्रियन कानाचे वेल',
    category: 'kanache-vel',
    categoryLabel: 'Kanache Vel',
    price: 1299,
    originalPrice: 1600,
    image: kanacheVel1,
    images: [kanacheVel1],
    isNew: true,
    isBestseller: false,
    description: 'Traditional Maharashtrian kanache vel ear chain set with delicate pearl drops and intricate gold-work. A traditional piece that enhances any festive look.',
    material: 'Gold-Tone Alloy, Pearls',
    weight: 'Approximately 15g (pair)',
    variants: ['Standard'],
    inStock: true,
    tags: ['kanache vel', 'ear chain', 'earrings', 'traditional'],
  },
  {
    id: 4,
    name: 'Pearl Drop Ear Chain',
    nameMarathi: 'पर्ल ड्रॉप कानाचे वेल',
    category: 'kanache-vel',
    categoryLabel: 'Kanache Vel',
    price: 999,
    originalPrice: null,
    image: kanacheVel1,
    images: [kanacheVel1],
    isNew: false,
    isBestseller: true,
    description: 'Elegant pearl drop ear chain with traditional Maharashtrian design. Light-weight and comfortable for all-day wear.',
    material: 'Gold-Tone Alloy, Pearl Beads',
    weight: 'Approximately 12g (pair)',
    variants: ['Standard'],
    inStock: true,
    tags: ['kanache vel', 'ear chain', 'pearl drop'],
  },

  // Chinchpeti
  {
    id: 5,
    name: 'Traditional Chinchpeti Necklace',
    nameMarathi: 'पारंपरिक चिंचपेटी हार',
    category: 'chinchpeti',
    categoryLabel: 'Chinchpeti',
    price: 2199,
    originalPrice: 2800,
    image: chinchpeti1,
    images: [chinchpeti1],
    isNew: false,
    isBestseller: true,
    description: 'Authentic Maharashtrian chinchpeti necklace with tamarind seed-shaped gold beads. A traditional piece that represents the rich cultural heritage of Maharashtra.',
    material: 'Gold-Tone Alloy',
    weight: 'Approximately 50g',
    length: '16 inches',
    variants: ['Standard'],
    inStock: true,
    tags: ['chinchpeti', 'necklace', 'traditional', 'gold'],
  },
  {
    id: 6,
    name: 'Peshwai Chinchpeti Set',
    nameMarathi: 'पेशवाई चिंचपेटी सेट',
    category: 'chinchpeti',
    categoryLabel: 'Chinchpeti',
    price: 2799,
    originalPrice: null,
    image: chinchpeti1,
    images: [chinchpeti1],
    isNew: true,
    isBestseller: false,
    description: 'Royal Peshwai-inspired chinchpeti set with matching earrings. Perfect for weddings and traditional ceremonies.',
    material: 'Gold-Tone Alloy, Ruby-Red Stones',
    weight: 'Approximately 60g',
    length: '16 inches',
    variants: ['Standard'],
    inStock: true,
    tags: ['chinchpeti', 'set', 'peshwai', 'bridal'],
  },

  // Moti Bangles
  {
    id: 7,
    name: 'Classic Pearl Bangles Set',
    nameMarathi: 'क्लासिक मोती बांगड्या',
    category: 'moti-bangles',
    categoryLabel: 'Moti Bangles',
    price: 1499,
    originalPrice: 1800,
    image: motiBangles1,
    images: [motiBangles1],
    isNew: false,
    isBestseller: true,
    description: 'Beautiful set of 4 pearl bangles with traditional gold-tone work. Crafted with care using natural-looking pearls, these bangles are perfect for festive wear.',
    material: 'Pearls, Gold-Tone Alloy',
    weight: 'Approximately 60g (set of 4)',
    variants: ['2.4', '2.6', '2.8'],
    inStock: true,
    tags: ['bangles', 'pearl', 'moti', 'set'],
  },
  {
    id: 8,
    name: 'Bridal Pearl Bangle Set',
    nameMarathi: 'ब्राइडल मोती बांगड्या सेट',
    category: 'moti-bangles',
    categoryLabel: 'Moti Bangles',
    price: 2199,
    originalPrice: null,
    image: motiBangles1,
    images: [motiBangles1],
    isNew: true,
    isBestseller: false,
    description: 'Premium bridal pearl bangle set in traditional Maharashtrian style. A must-have for the modern bride who loves traditional jewellery.',
    material: 'High-Quality Pearls, Gold-Tone Metal',
    weight: 'Approximately 80g (set of 6)',
    variants: ['2.4', '2.6', '2.8'],
    inStock: true,
    tags: ['bangles', 'bridal', 'pearl', 'set'],
  },

  // Bajuband
  {
    id: 9,
    name: 'Traditional Gold Bajuband',
    nameMarathi: 'पारंपरिक सोनेरी बाजूबंद',
    category: 'bajuband',
    categoryLabel: 'Bajuband',
    price: 1799,
    originalPrice: 2200,
    image: bajuband1,
    images: [bajuband1],
    isNew: false,
    isBestseller: false,
    description: 'Elegant traditional Maharashtrian bajuband armlet with intricate gold-work. An exquisite piece of traditional jewellery for weddings and special occasions.',
    material: 'Gold-Tone Alloy, Pearls',
    weight: 'Approximately 35g',
    variants: ['Small', 'Medium', 'Large'],
    inStock: true,
    tags: ['bajuband', 'armlet', 'traditional', 'wedding'],
  },

  // Jhumake
  {
    id: 10,
    name: 'Classic Maharashtrian Jhumke',
    nameMarathi: 'क्लासिक महाराष्ट्रियन झुमके',
    category: 'jhumake',
    categoryLabel: 'Jhumake',
    price: 899,
    originalPrice: 1200,
    image: jhumake1,
    images: [jhumake1],
    isNew: false,
    isBestseller: true,
    description: 'Traditional Maharashtrian jhumke earrings with multiple layers of delicate golden bells and pearl drops. A timeless classic for every traditional outfit.',
    material: 'Gold-Tone Alloy, Pearl Drops',
    weight: 'Approximately 20g (pair)',
    variants: ['Standard'],
    inStock: true,
    tags: ['jhumke', 'earrings', 'traditional', 'bells'],
  },
  {
    id: 11,
    name: 'Pearl Drop Jhumke Set',
    nameMarathi: 'पर्ल ड्रॉप झुमके',
    category: 'jhumake',
    categoryLabel: 'Jhumake',
    price: 1199,
    originalPrice: null,
    image: jhumake1,
    images: [jhumake1],
    isNew: true,
    isBestseller: true,
    description: 'Stunning pearl drop jhumke with traditional Maharashtrian craftsmanship. Perfect for festivals, weddings, and cultural events.',
    material: 'Gold-Tone Alloy, Pearls',
    weight: 'Approximately 25g (pair)',
    variants: ['Standard'],
    inStock: true,
    tags: ['jhumke', 'earrings', 'pearl drop'],
  },

  // Nath
  {
    id: 12,
    name: 'Maharashtrian Bridal Nath',
    nameMarathi: 'महाराष्ट्रियन ब्राइडल नाथ',
    category: 'nath',
    categoryLabel: 'Nath',
    price: 1599,
    originalPrice: 2000,
    image: nath1,
    images: [nath1],
    isNew: false,
    isBestseller: true,
    description: 'Traditional Maharashtrian bridal nath nose ring with intricate gold-work and pearl drop. An essential piece for the Maharashtrian bride.',
    material: 'Gold-Tone Alloy, Pearl, Ruby-Red Stone',
    weight: 'Approximately 8g',
    variants: ['Standard'],
    inStock: true,
    tags: ['nath', 'nose ring', 'bridal', 'traditional'],
  },
  {
    id: 13,
    name: 'Peshwai Nath with Chain',
    nameMarathi: 'पेशवाई नाथ विथ चेन',
    category: 'nath',
    categoryLabel: 'Nath',
    price: 1999,
    originalPrice: null,
    image: nath1,
    images: [nath1],
    isNew: true,
    isBestseller: false,
    description: 'Grand Peshwai-style nath with ear chain. A majestic piece of traditional Maharashtrian jewellery, ideal for weddings and cultural celebrations.',
    material: 'Gold-Tone Alloy, Pearls, Rubies',
    weight: 'Approximately 12g',
    variants: ['Standard'],
    inStock: true,
    tags: ['nath', 'nose ring', 'peshwai', 'chain'],
  },
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export const getProductsByCategory = (category) =>
  products.filter(p => p.category === category);

export const getBestsellers = () => products.filter(p => p.isBestseller);

export const getNewArrivals = () => products.filter(p => p.isNew);

export const searchProducts = (query) => {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.nameMarathi.includes(q) ||
    p.category.includes(q) ||
    p.tags.some(tag => tag.includes(q))
  );
};

export const sortProducts = (prods, sortBy) => {
  switch (sortBy) {
    case 'price-asc': return [...prods].sort((a, b) => a.price - b.price);
    case 'price-desc': return [...prods].sort((a, b) => b.price - a.price);
    case 'name-asc': return [...prods].sort((a, b) => a.name.localeCompare(b.name));
    case 'newest': return [...prods].sort((a, b) => b.isNew - a.isNew);
    default: return prods;
  }
};
