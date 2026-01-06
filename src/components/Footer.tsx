import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              <span className="font-serif text-xl font-semibold">NutriVida</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Transformando vidas através da nutrição personalizada e cuidado humanizado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>
                <a href="#inicio" className="hover:text-primary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#ebooks" className="hover:text-primary-foreground transition-colors">
                  E-books
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary-foreground transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>Consulta Online</li>
              <li>Consulta Presencial</li>
              <li>Plano Alimentar</li>
              <li>Acompanhamento</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>contato@nutrivida.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© 2026 NutriVida. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
