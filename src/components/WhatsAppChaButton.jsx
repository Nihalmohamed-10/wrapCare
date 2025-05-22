import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppChatButton = () => {
  return (
    <a
      href="https://wa.me/917025966234?text=Hello!%20I%20need%20help" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(37,211,102,0.7)] hover:shadow-[0_0_25px_rgba(37,211,102,1)] transition-all duration-300 ease-in-out hover:scale-110 animate-bounce hover:animate-none z-50"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
    </a>
  );
};

export default WhatsAppChatButton;
