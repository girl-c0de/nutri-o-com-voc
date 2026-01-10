import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Download,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Send,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Assets
import heroImage from "@/assets/hero-nutrition.jpg";
import fotoGaby from "@/assets/foto-gaby.png";
import ebook1 from "@/assets/ebook-1.jpg";
import ebook2 from "@/assets/ebook-2.jpg";
import ebook3 from "@/assets/ebook-3.jpg";

// ==================== DATA ====================

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "E-books", href: "#ebooks" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const ebooks = [
  {
    id: 1,
    title: "Guia de Alimentação Saudável",
    description: "Aprenda os fundamentos de uma alimentação equilibrada para transformar sua saúde.",
    price: "R$ 47,00",
    oldPrice: "R$ 97,00",
    image: ebook1,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Receitas Fit",
    description: "50+ receitas deliciosas e saudáveis para quem quer emagrecer sem passar fome.",
    price: "R$ 37,00",
    oldPrice: "R$ 67,00",
    image: ebook2,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Detox Natural",
    description: "Guia completo para desintoxicar seu corpo naturalmente e aumentar sua energia.",
    price: "R$ 29,00",
    oldPrice: "R$ 57,00",
    image: ebook3,
    rating: 4.7,
  },
];

const features = [
  {
    icon: Award,
    title: "Especialização",
    description: "Pós-graduação em Nutrição Clínica e Esportiva",
  },
  {
    icon: Users,
    title: "Experiência",
    description: "Mais de 500 pacientes atendidos com sucesso",
  },
  {
    icon: Heart,
    title: "Cuidado",
    description: "Atendimento humanizado e personalizado",
  },
  {
    icon: BookOpen,
    title: "Conhecimento",
    description: "Atualização constante em novas pesquisas",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Empresária",
    content:
      "A Dra. Ana Paula mudou minha relação com a comida. Perdi 15kg em 6 meses de forma saudável e sustentável. Recomendo demais!",
    rating: 5,
    avatar: "M",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Atleta amador",
    content:
      "Consegui melhorar minha performance nos treinos e ganhar massa muscular. O acompanhamento é excelente e muito personalizado.",
    rating: 5,
    avatar: "J",
  },
  {
    id: 3,
    name: "Carla Oliveira",
    role: "Mãe e professora",
    content:
      "Finalmente encontrei uma profissional que entende minha rotina corrida. As dicas práticas fizeram toda a diferença!",
    rating: 5,
    avatar: "C",
  },
  {
    id: 4,
    name: "Roberto Lima",
    role: "Executivo",
    content:
      "Reduzi meu colesterol e pressão arterial sem medicamentos, apenas com alimentação. Gratidão eterna!",
    rating: 5,
    avatar: "R",
  },
];

// ==================== HEADER ====================

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

// ==================== HERO ====================

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

// ==================== EBOOKS ====================

const EbooksSection = () => {
  return (
    <section id="ebooks" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">Material Exclusivo</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            E-books Disponíveis
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conteúdo desenvolvido com carinho para ajudar você a alcançar seus
            objetivos de saúde de forma prática e acessível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-elevated h-full bg-card">
                <div className="relative">
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Oferta
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {ebook.rating}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {ebook.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {ebook.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">
                      {ebook.price}
                    </span>
                    <span className="text-muted-foreground line-through text-sm">
                      {ebook.oldPrice}
                    </span>
                  </div>
                  <Button className="w-full group">
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Comprar Agora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== ABOUT ====================

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={fotoGaby}
                alt="Nutricionista"
                className="w-full h-[600px] object-cover card-elevated rounded-3xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl"
            >
              <p className="text-4xl font-serif font-bold">10+</p>
              <p className="text-sm opacity-90">Anos de experiência</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-medium">Sobre Mim</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                Olá, eu sou a Dra. Gabrielly
              </h2>
            </div>

            <p className="text-muted-foreground text-lg">
              Nutricionista formada pela Unissuam, apaixonada por ajudar pessoas a
              transformarem suas vidas através da alimentação. Acredito que cada
              pessoa é única e merece um plano alimentar personalizado.
            </p>

            <p className="text-muted-foreground">
              Minha missão é desmistificar a nutrição e mostrar que comer bem
              pode ser simples, prazeroso e acessível. Trabalho com foco em
              resultados sustentáveis, sem dietas restritivas ou milagrosas.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== TESTIMONIALS ====================

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            O que meus pacientes dizem
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas através da
            nutrição personalizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-elevated bg-card">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-10 h-10 text-primary/30" />
                  <p className="text-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT ====================

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  const handleConsultaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Consulta agendada!",
      description: "Você receberá a confirmação por e-mail.",
    });
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">Contato</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Entre em contato
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tire suas dúvidas ou agende sua consulta. Estou pronta para ajudar
            você a alcançar seus objetivos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="card-elevated bg-card">
              <CardContent className="p-6">
                <Tabs defaultValue="duvidas" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="duvidas">Tirar Dúvidas</TabsTrigger>
                    <TabsTrigger value="consulta">Agendar Consulta</TabsTrigger>
                  </TabsList>

                  <TabsContent value="duvidas">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome completo</Label>
                          <Input
                            id="nome"
                            placeholder="Seu nome"
                            required
                            maxLength={100}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            maxLength={255}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto</Label>
                        <Input
                          id="assunto"
                          placeholder="Sobre o que você quer falar?"
                          required
                          maxLength={200}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mensagem">Mensagem</Label>
                        <Textarea
                          id="mensagem"
                          placeholder="Escreva sua dúvida aqui..."
                          rows={5}
                          required
                          maxLength={1000}
                        />
                      </div>
                      <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? (
                          "Enviando..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="consulta">
                    <form onSubmit={handleConsultaSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome-consulta">Nome completo</Label>
                          <Input
                            id="nome-consulta"
                            placeholder="Seu nome"
                            required
                            maxLength={100}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-consulta">E-mail</Label>
                          <Input
                            id="email-consulta"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            maxLength={255}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input
                            id="telefone"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            required
                            maxLength={20}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="data">Data preferida</Label>
                          <Input id="data" type="date" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="objetivo">Objetivo da consulta</Label>
                        <Textarea
                          id="objetivo"
                          placeholder="Descreva seus objetivos..."
                          rows={4}
                          required
                          maxLength={500}
                        />
                      </div>
                      <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? (
                          "Agendando..."
                        ) : (
                          <>
                            <Calendar className="mr-2 h-4 w-4" />
                            Agendar Consulta
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="card-elevated bg-card">
              <CardHeader>
                <CardTitle className="font-serif">Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <p className="text-sm text-muted-foreground">
                      Av. Paulista, 1000 - São Paulo, SP
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-sm text-muted-foreground">
                      (11) 99999-9999
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <p className="text-sm text-muted-foreground">
                      contato@nutrivida.com.br
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horário</p>
                    <p className="text-sm text-muted-foreground">
                      Seg - Sex: 8h às 18h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER ====================

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

// ==================== WHATSAPP BUTTON ====================

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999";
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de nutrição."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="whatsapp-float bg-[hsl(145,70%,45%)] hover:bg-[hsl(145,70%,40%)] text-[hsl(0,0%,100%)] p-4 rounded-full transition-colors"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};

// ==================== MAIN LANDING PAGE ====================

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EbooksSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
