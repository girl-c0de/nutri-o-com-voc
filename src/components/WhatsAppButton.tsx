import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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

export default WhatsAppButton;
