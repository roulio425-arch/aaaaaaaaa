import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { type Product } from "./ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items?: CartItem[];
  onUpdateQuantity?: (productId: string, quantity: number) => void;
  onRemoveItem?: (productId: string) => void;
  onCheckout?: () => void;
}

export default function ShoppingCart({
  open,
  onOpenChange,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: ShoppingCartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col" data-testid="sheet-cart">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2" data-testid="text-cart-title">
            <ShoppingBag className="h-5 w-5" />
            Panier ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4" data-testid="text-empty-cart">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/50" />
              <p className="text-muted-foreground">Votre panier est vide</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="space-y-3" data-testid={`cart-item-${item.id}`}>
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                      data-testid={`img-cart-${item.id}`}
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-sm" data-testid={`text-cart-name-${item.id}`}>
                          {item.name}
                        </h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 -mt-1"
                          onClick={() => onRemoveItem?.(item.id)}
                          data-testid={`button-remove-${item.id}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity?.(item.id, Math.max(0, item.quantity - 1))}
                            data-testid={`button-decrease-${item.id}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium min-w-[2ch] text-center" data-testid={`text-quantity-${item.id}`}>
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                            data-testid={`button-increase-${item.id}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="font-bold text-primary" data-testid={`text-item-total-${item.id}`}>
                          {(item.price * item.quantity).toFixed(2)} DA
                        </span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>

            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-2xl text-primary" data-testid="text-cart-total">
                  {total.toFixed(2)} DA
                </span>
              </div>
              <Button
                className="w-full"
                size="lg"
                onClick={onCheckout}
                data-testid="button-checkout"
              >
                Commander
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
