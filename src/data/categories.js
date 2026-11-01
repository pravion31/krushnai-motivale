// ============================================================
// KRUSHNAI MOTIVALE — Categories Data
// ============================================================

import tanmaniImg from '../assets/images/category_tanmani.png';
import kanacheVelImg from '../assets/images/category_kanache_vel.png';
import chinchpetiImg from '../assets/images/category_chinchpeti.png';
import motiBanglesImg from '../assets/images/category_moti_bangles.png';
import bajubandImg from '../assets/images/category_bajuband.png';
import jhumakeImg from '../assets/images/category_jhumake.png';
import nathImg from '../assets/images/category_nath.png';

export const categories = [
  {
    id: 'medium-tanmani',
    slug: 'medium-tanmani',
    name: 'Medium Tanmani',
    nameMarathi: 'मेडियम तनमणी',
    description: 'Exquisite pearl and gold necklaces in traditional Maharashtrian style',
    shortDesc: 'Traditional pearl necklaces',
    image: tanmaniImg,
    productCount: 12,
    featured: true,
    color: '#8B1A3A',
  },
  {
    id: 'kanache-vel',
    slug: 'kanache-vel',
    name: 'Kanache Vel',
    nameMarathi: 'कानाचे वेल',
    description: 'Delicate traditional ear chain sets with intricate gold and pearl work',
    shortDesc: 'Traditional ear chain sets',
    image: kanacheVelImg,
    productCount: 8,
    featured: true,
    color: '#7A5C3A',
  },
  {
    id: 'chinchpeti',
    slug: 'chinchpeti',
    name: 'Chinchpeti',
    nameMarathi: 'चिंचपेटी',
    description: 'Authentic Maharashtrian tamarind seed necklaces crafted with traditional techniques',
    shortDesc: 'Traditional tamarind necklaces',
    image: chinchpetiImg,
    productCount: 10,
    featured: true,
    color: '#5C3A1A',
  },
  {
    id: 'moti-bangles',
    slug: 'moti-bangles',
    name: 'Moti Bangles',
    nameMarathi: 'मोती बांगड्या',
    description: 'Elegant pearl bangles in traditional Maharashtrian craftsmanship',
    shortDesc: 'Traditional pearl bangles',
    image: motiBanglesImg,
    productCount: 15,
    featured: true,
    color: '#3A1A5C',
  },
  {
    id: 'bajuband',
    slug: 'bajuband',
    name: 'Bajuband',
    nameMarathi: 'बाजूबंद',
    description: 'Royal upper arm bracelets with traditional Maharashtrian royal design',
    shortDesc: 'Traditional arm bracelets',
    image: bajubandImg,
    productCount: 6,
    featured: false,
    color: '#1A3A5C',
  },
  {
    id: 'jhumake',
    slug: 'jhumake',
    name: 'Jhumake',
    nameMarathi: 'झुमके',
    description: 'Beautiful traditional earrings with delicate bells and pearl drops',
    shortDesc: 'Traditional bell earrings',
    image: jhumakeImg,
    productCount: 20,
    featured: true,
    color: '#3A5C1A',
  },
  {
    id: 'nath',
    slug: 'nath',
    name: 'Nath',
    nameMarathi: 'नाथ',
    description: 'Majestic nose rings in traditional Maharashtrian bridal style',
    shortDesc: 'Traditional nose rings',
    image: nathImg,
    productCount: 9,
    featured: false,
    color: '#5C1A3A',
  },
];

export const getCategoryBySlug = (slug) => categories.find(c => c.slug === slug);
