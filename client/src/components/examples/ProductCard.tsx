import ProductCard from '../ProductCard';
import makroutImage from '@assets/generated_images/Makrout_pastry_product_shot_0763bde5.png';

export default function ProductCardExample() {
  const product = {
    id: '1',
    name: 'Makrout',
    description: 'Pâtisserie traditionnelle à la semoule et aux dattes, dorée et parfumée au miel',
    price: 150,
    image: makroutImage,
    category: 'patisserie' as const
  };

  return (
    <div className="max-w-sm">
      <ProductCard 
        product={product} 
        onAddToCart={(p) => console.log('Added to cart:', p.name)} 
      />
    </div>
  );
}
