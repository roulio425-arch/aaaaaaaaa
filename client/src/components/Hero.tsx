import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Pizza, Star } from "lucide-react";
import espoirLogo from "@assets/Design_sans_titre__13_-removebg-preview_1760892902811.png";
import pastriesFloat from "@assets/360_F_78542589_Hzl5hSsBfpx8O55QqrXKDyhhmWvC50RC-removebg-preview_1760893773712.png";

const pastryImage = "https://www.recettesmania.com/images/recipe/nos-saveurs/2022/03/nos-saveurs-gateaux-traditionnels-nos-saveurs.jpg";
const pizzaImage = "https://i.pinimg.com/736x/7d/11/c1/7d11c1efb01aa36b7343eec7c14a4d82.jpg";

interface HeroProps {
  onDiscoverClick?: () => void;
  onOrderClick?: () => void;
}

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: pastryImage,
    title: "Pâtisserie Artisanale",
    subtitle: "L'Art de la Tradition Kabyle",
    description: "Découvrez nos délicieuses pâtisseries traditionnelles et françaises, préparées quotidiennement par nos artisans passionnés"
  },
  {
    image: pizzaImage,
    title: "Pizzas Authentiques",
    subtitle: "Fraîcheur & Qualité",
    description: "Des pizzas artisanales préparées avec des ingrédients frais et généreusement garnis, selon nos recettes uniques"
  }
];

export default function Hero({ onDiscoverClick, onOrderClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 600);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carrousel d'images de fond */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay sombre avec gradient pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
          </div>
        ))}
      </div>

      {/* Logo en haut à gauche */}
      <div className="absolute top-8 left-8 z-30 animate-fade-in">
        <img
          src={espoirLogo}
          alt="Espoir Logo"
          className="h-10 sm:h-12 md:h-14 w-auto drop-shadow-2xl"
          data-testid="img-logo"
        />
      </div>

      {/* Badge avis Google en haut à droite */}
      <div className="absolute top-6 right-6 z-30 animate-fade-in">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/95 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
              />
            ))}
            <Star className="w-2.5 h-2.5 fill-amber-400/40 text-amber-400/40" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-bold text-foreground">4.4/5</span>
            <span className="text-[9px] text-muted-foreground">Google</span>
          </div>
        </div>
      </div>

      {/* Image flottante de pâtisseries - visible uniquement sur le slide pâtisserie */}
      {currentSlide === 0 && (
        <div className="absolute right-12 top-32 lg:top-40 z-20 hidden md:block animate-float-slow">
          <img
            src={pastriesFloat}
            alt="Pâtisseries"
            className="w-48 lg:w-56 xl:w-64 h-auto drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.6))'
            }}
          />
        </div>
      )}

      {/* Contenu principal */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div
            className={`max-w-3xl transition-all duration-700 ${
              isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Titre principal */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
              data-testid="text-hero-title"
              style={{
                textShadow: '4px 4px 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 0, 0, 0.7)'
              }}
            >
              {slides[currentSlide].title}
            </h1>

            {/* Sous-titre */}
            <p
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-8"
              data-testid="text-hero-subtitle"
              style={{
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)'
              }}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* Description */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-12 leading-relaxed max-w-2xl"
              data-testid="text-hero-description"
              style={{
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)'
              }}
            >
              {slides[currentSlide].description}
            </p>

            {/* Boutons CTA - Verticaux */}
            <div className="flex flex-col gap-4 max-w-md">
              <Button
                size="lg"
                onClick={onDiscoverClick}
                className="group bg-primary hover:bg-primary/90 text-white text-lg px-8 py-7 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 border-0 w-full"
                data-testid="button-discover"
              >
                <ShoppingBag className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Découvrir nos Pâtisseries
              </Button>
              <Button
                size="lg"
                onClick={onOrderClick}
                className="group bg-white/95 hover:bg-white text-black text-lg px-8 py-7 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 border-0 w-full"
                data-testid="button-order-pizza"
              >
                <Pizza className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Commander une Pizza
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Nom en arabe en bas */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-center">
        <p
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          style={{
            textShadow: '3px 3px 15px rgba(0, 0, 0, 0.9)',
            fontFamily: 'Arial, sans-serif'
          }}
          data-testid="text-arabic-name"
        >
          أمل
        </p>
        
        {/* Indicateurs de slides */}
        <div className="flex gap-3 justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-primary'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
              data-testid={`button-slide-indicator-${index}`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-15px) translateX(-10px) rotate(2deg);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
