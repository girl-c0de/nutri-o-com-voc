import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nutrition.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="hero-section min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Nutrição Personalizada</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Transforme sua vida através da{" "}
              <span className="gradient-text">alimentação saudável</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Descubra como uma nutrição equilibrada pode melhorar sua saúde,
              energia e qualidade de vida. Atendimento personalizado para seus
              objetivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <a href="#contato">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#ebooks">Ver E-books</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden card-elevated">
              <img
                src={heroImage}
                alt="Alimentação saudável"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl card-elevated"
            >
              <p className="text-2xl font-serif font-bold text-primary">🥗</p>
              <p className="text-sm font-medium text-foreground">Planos personalizados</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl card-elevated"
            >
              <p className="text-2xl font-serif font-bold text-primary">💪</p>
              <p className="text-sm font-medium text-foreground">Resultados reais</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
