import ProductCard, { type Product } from "./ProductCard";

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

export default function CategorySection({
  id,
  title,
  description,
  products,
  onAddToCart,
}: CategorySectionProps) {
  return (
    <section id={id} className="py-12 md:py-20 scroll-mt-20" data-testid={`section-${id}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold" data-testid={`text-title-${id}`}>
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid={`text-description-${id}`}>
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
