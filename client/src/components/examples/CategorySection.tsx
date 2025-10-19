import CategorySection from '../CategorySection';
import makroutImage from '@assets/generated_images/Makrout_pastry_product_shot_0763bde5.png';
import kalbImage from '@assets/generated_images/Kalb_el_louz_product_b199f32e.png';
import baklawaImage from '@assets/generated_images/Baklawa_pastry_product_c928d97d.png';

export default function CategorySectionExample() {
  const products = [
    {
      id: '1',
      name: 'Makrout',
      description: 'Pâtisserie traditionnelle à la semoule et aux dattes',
      price: 150,
      image: makroutImage,
      category: 'patisserie' as const
    },
    {
      id: '2',
      name: 'Kalb el Louz',
      description: 'Gâteau moelleux aux amandes et semoule',
      price: 200,
      image: kalbImage,
      category: 'patisserie' as const
    },
    {
      id: '3',
      name: 'Baklawa',
      description: 'Feuilleté croustillant aux pistaches et miel',
      price: 180,
      image: baklawaImage,
      category: 'patisserie' as const
    },
  ];

  return (
    <CategorySection
      id="patisseries"
      title="Pâtisseries Kabyles"
      description="Découvrez nos délicieuses pâtisseries traditionnelles de Béjaïa"
      products={products}
      onAddToCart={(p) => console.log('Added to cart:', p.name)}
    />
  );
}
