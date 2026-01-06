import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "E-books", href: "#ebooks" },
    { label: "Sobre Mim", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-semibold text-foreground">
              NutriVida
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button asChild>
              <a href="#contato">Agendar Consulta</a>
            </Button>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="w-fit">
                <a href="#contato">Agendar Consulta</a>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
