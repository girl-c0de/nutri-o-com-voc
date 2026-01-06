import { motion } from "framer-motion";
import { Calendar, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio
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

export default ContactSection;
