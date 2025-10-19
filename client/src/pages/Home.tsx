import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ShoppingCart, { type CartItem } from "@/components/ShoppingCart";
import Footer from "@/components/Footer";
import { type Product } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";

import makroutImage from "@assets/generated_images/Makrout_pastry_product_shot_0763bde5.png";
import kalbImage from "@assets/generated_images/Kalb_el_louz_product_b199f32e.png";
import baklawaImage from "@assets/generated_images/Baklawa_pastry_product_c928d97d.png";
import tarteCitronImage from "@assets/generated_images/Tarte_au_citron_product_270419e1.png";
import millefeuilleImage from "@assets/generated_images/Millefeuille_pastry_product_dcebb4ba.png";
import croissantImage from "@assets/generated_images/Croissant_product_shot_80545d94.png";
import griwechImage from "@assets/generated_images/Griwech_Algerian_pastry_77117985.png";
import dziriettesImage from "@assets/generated_images/Dziriettes_cookies_product_b7129de1.png";
import margheritaImage from "@assets/generated_images/Margherita_pizza_product_fd2b0f4f.png";
import pepperoniImage from "@assets/generated_images/Pepperoni_pizza_product_768bfc09.png";
import pizzaHeroImage from "@assets/generated_images/Artisan_pizza_close-up_0ebca44e.png";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const patisseries: Product[] = [
    {
      id: "p1",
      name: "Makrout",
      description: "Pâtisserie traditionnelle kabyle à la semoule et aux dattes, dorée et parfumée au miel",
      price: 150,
      image: makroutImage,
      category: "patisserie",
    },
    {
      id: "p2",
      name: "Kalb el Louz",
      description: "Gâteau moelleux aux amandes et semoule, saupoudré de sucre glace",
      price: 200,
      image: kalbImage,
      category: "patisserie",
    },
    {
      id: "p3",
      name: "Baklawa",
      description: "Feuilleté croustillant aux pistaches et miel, finement préparé",
      price: 180,
      image: baklawaImage,
      category: "patisserie",
    },
    {
      id: "p4",
      name: "Griwech",
      description: "Pâtisserie algérienne torsadée aux graines de sésame, croustillante et sucrée",
      price: 140,
      image: griwechImage,
      category: "patisserie",
    },
    {
      id: "p5",
      name: "Dziriettes",
      description: "Délicieux biscuits aux amandes traditionnels, fondants et parfumés",
      price: 160,
      image: dziriettesImage,
      category: "patisserie",
    },
    {
      id: "p6",
      name: "Tarte au Citron",
      description: "Tarte française avec crème citronnée onctueuse et meringue légère",
      price: 350,
      image: tarteCitronImage,
      category: "patisserie",
    },
    {
      id: "p7",
      name: "Millefeuille",
      description: "Classique français avec couches de pâte feuilletée et crème pâtissière",
      price: 300,
      image: millefeuilleImage,
      category: "patisserie",
    },
    {
      id: "p8",
      name: "Croissant",
      description: "Croissant français pur beurre, feuilleté et croustillant",
      price: 80,
      image: croissantImage,
      category: "patisserie",
    },
  ];

  const pizzasBaseSauceTomate: Product[] = [
    {
      id: "pi1",
      name: "Margherita",
      description: "Sauce tomate, mozzarella",
      price: 900,
      image: margheritaImage,
      category: "pizza",
    },
    {
      id: "pi2",
      name: "Napolitaine",
      description: "Mozzarella, Anchois, câpres, tomates fraîches, origan",
      price: 650,
      image: pepperoniImage,
      category: "pizza",
    },
    {
      id: "pi3",
      name: "Thon",
      description: "Mozzarella, thon, origan",
      price: 700,
      image: pizzaHeroImage,
      category: "pizza",
    },
    {
      id: "pi4",
      name: "Végétarienne",
      description: "Mozzarella, champignons frais, tomate, poivron",
      price: 650,
      image: margheritaImage,
      category: "pizza",
    },
    {
      id: "pi5",
      name: "Viande hachée",
      description: "Mozzarella, viande hachée, origan",
      price: 650,
      image: pepperoniImage,
      category: "pizza",
    },
    {
      id: "pi6",
      name: "Fruits de mer",
      description: "Mozzarella, fruits de mer grillés, origan",
      price: 700,
      image: pizzaHeroImage,
      category: "pizza",
    },
    {
      id: "pi7",
      name: "Charcuterie (4 Fromages)",
      description: "Mozzarella, jambon fumé, origan (ou viande de poulet)",
      price: 650,
      image: margheritaImage,
      category: "pizza",
    },
  ];

  const pizzasOnlyPizza: Product[] = [
    {
      id: "po1",
      name: "Reina",
      description: "Mozzarella, champignons frais, viande, poivrons, oignons",
      price: 800,
      image: pepperoniImage,
      category: "pizza",
    },
    {
      id: "po2",
      name: "Quadra",
      description: "Mozzarella, jambon de poulet jambon fumé, viande, fromage fumé, origan",
      price: 850,
      image: pizzaHeroImage,
      category: "pizza",
    },
    {
      id: "po3",
      name: "Chicagua",
      description: "Mozzarella, viande, origan",
      price: 750,
      image: margheritaImage,
      category: "pizza",
    },
    {
      id: "po4",
      name: "4 Fromages",
      description: "Mozzarella, gouda, fromage fumé, fromage émincé, origan",
      price: 750,
      image: pizzaHeroImage,
      category: "pizza",
    },
    {
      id: "po5",
      name: "Fénicia",
      description: "Mozzarella, charcuterie poulet, fromage émincé, poivron, origan",
      price: 750,
      image: pepperoniImage,
      category: "pizza",
    },
    {
      id: "po6",
      name: "Piquante",
      description: "Mozzarella, merguez, sauce piquante, camembert, poivrons",
      price: 800,
      image: margheritaImage,
      category: "pizza",
    },
    {
      id: "po7",
      name: "Poulet brésilien",
      description: "Mozzarella, blanc de poulet fumé, poivrons, origan",
      price: 750,
      image: pepperoniImage,
      category: "pizza",
    },
  ];

  const pizzasBarbecue: Product[] = [
    {
      id: "pb1",
      name: "Barbecue",
      description: "Mozzarella, jambon fumé, fromage fumé, poivron et oignon, sauce BBQ",
      price: 750,
      image: pizzaHeroImage,
      category: "pizza",
    },
    {
      id: "pb2",
      name: "Buffalo",
      description: "Mozzarella, Steak grillé, champignons, poivrons grillés, sauce curry, origan",
      price: 950,
      image: margheritaImage,
      category: "pizza",
    },
    {
      id: "pb3",
      name: "Honey Fromage",
      description: "Mozzarella, viande, camembert, fromage fumé, miel, origan",
      price: 850,
      image: pepperoniImage,
      category: "pizza",
    },
    {
      id: "pb4",
      name: "3 Viandes",
      description: "Mozzarella, merguez, viande, poulet fumé, origan",
      price: 950,
      image: pizzaHeroImage,
      category: "pizza",
    },
    {
      id: "pb5",
      name: "Burger pizza",
      description: "Mozzarella, viande grillée, tomate fraîche, slices de gouda, poivrons, oignons, origan",
      price: 950,
      image: margheritaImage,
      category: "pizza",
    },
    {
      id: "pb6",
      name: "Chakalaten ST",
      description: "Mozzarella, viande, jambon fumé, gruyère, champignons fumés, fromage émincé, oignons",
      price: 1000,
      image: pepperoniImage,
      category: "pizza",
    },
    {
      id: "pb7",
      name: "Mexy BBQ",
      description: "Mozzarella, viande, mozzarella, steak grillé, champignons, fromage fumé, poule, origan, sauce BBQ grillée, origan",
      price: 1800,
      image: pizzaHeroImage,
      category: "pizza",
    },
  ];

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast({
      title: "✅ Produit ajouté",
      description: `${product.name} a été ajouté au panier`,
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast({
      title: "🗑️ Produit retiré",
      description: "Le produit a été retiré du panier",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "🛒 Commande en cours",
      description: "Votre commande sera bientôt traitée",
    });
    console.log("Checkout with items:", cartItems);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />

      <Hero
        onDiscoverClick={() => scrollToSection("#patisseries")}
        onOrderClick={() => scrollToSection("#pizzas-base")}
      />

      <CategorySection
        id="patisseries"
        title="Pâtisseries Artisanales"
        description="Découvrez nos délicieuses pâtisseries traditionnelles kabyles et françaises, préparées avec amour selon les recettes authentiques"
        products={patisseries}
        onAddToCart={handleAddToCart}
      />

      <CategorySection
        id="pizzas-base"
        title="Pizzas Base Sauce Tomate"
        description="Nos pizzas classiques avec une sauce tomate maison et des ingrédients frais"
        products={pizzasBaseSauceTomate}
        onAddToCart={handleAddToCart}
      />

      <CategorySection
        id="pizzas-only"
        title="Nos Spécialités"
        description="Nos créations signature avec des combinaisons uniques et savoureuses"
        products={pizzasOnlyPizza}
        onAddToCart={handleAddToCart}
      />

      <CategorySection
        id="pizzas-barbecue"
        title="Pizzas Barbecue"
        description="Nos pizzas gourmandes avec sauce BBQ et garnitures généreuses"
        products={pizzasBarbecue}
        onAddToCart={handleAddToCart}
      />

      <Footer />

      <ShoppingCart
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
