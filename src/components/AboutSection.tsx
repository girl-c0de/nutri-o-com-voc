import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import fotoGaby from "@/assets/foto-gaby.png";

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

export default AboutSection;
