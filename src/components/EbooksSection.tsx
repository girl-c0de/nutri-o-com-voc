import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ebook1 from "@/assets/ebook-1.jpg";
import ebook2 from "@/assets/ebook-2.jpg";
import ebook3 from "@/assets/ebook-3.jpg";

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

export default EbooksSection;
