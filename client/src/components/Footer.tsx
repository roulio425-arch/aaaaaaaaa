import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold" data-testid="text-footer-about">
              Espoir
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre destination pour les authentiques pâtisseries kabyles de Béjaïa, 
              pizzas artisanales et café de qualité.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="button-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-hours-title">Horaires</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Lundi - Samedi</p>
              <p className="font-medium text-foreground">7h00 - 22h00</p>
              <p>Dimanche</p>
              <p className="font-medium text-foreground">8h00 - 20h00</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-contact-title">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Béjaïa, Algérie</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+213 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@espoir.dz</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold" data-testid="text-footer-newsletter-title">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground">
              Recevez nos offres spéciales et nouveautés
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © 2025 Espoir - Pizzeria, Pâtisserie & Cafétéria. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
