import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "patisserie" | "pizza" | "cafe";
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-product-${product.id}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          data-testid={`img-product-${product.id}`}
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold" data-testid={`text-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-description-${product.id}`}>
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
            {product.price.toFixed(2)} DA
          </span>
          <Button
            onClick={() => onAddToCart?.(product)}
            className="gap-2"
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <Plus className="h-4 w-4" />
            Ajouter
          </Button>
        </div>
      </div>
    </Card>
  );
}
