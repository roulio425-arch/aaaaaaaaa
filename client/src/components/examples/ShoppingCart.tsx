import { useState } from 'react';
import ShoppingCart from '../ShoppingCart';
import { Button } from '@/components/ui/button';
import makroutImage from '@assets/generated_images/Makrout_pastry_product_shot_0763bde5.png';
import pizzaImage from '@assets/generated_images/Margherita_pizza_product_fd2b0f4f.png';

export default function ShoppingCartExample() {
  const [open, setOpen] = useState(true);
  
  const items = [
    {
      id: '1',
      name: 'Makrout',
      description: 'Pâtisserie traditionnelle',
      price: 150,
      image: makroutImage,
      category: 'patisserie' as const,
      quantity: 2
    },
    {
      id: '2',
      name: 'Pizza Margherita',
      description: 'Pizza classique',
      price: 800,
      image: pizzaImage,
      category: 'pizza' as const,
      quantity: 1
    }
  ];

  return (
    <div className="p-4">
      <Button onClick={() => setOpen(true)}>Open Cart</Button>
      <ShoppingCart
        open={open}
        onOpenChange={setOpen}
        items={items}
        onUpdateQuantity={(id, qty) => console.log('Update quantity:', id, qty)}
        onRemoveItem={(id) => console.log('Remove item:', id)}
        onCheckout={() => console.log('Checkout')}
      />
    </div>
  );
}
