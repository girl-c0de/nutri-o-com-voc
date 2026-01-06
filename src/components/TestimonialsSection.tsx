import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

export default TestimonialsSection;
