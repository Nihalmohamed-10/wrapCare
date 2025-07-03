import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppChatButton = () => {
  return (
    <a
      href="https://wa.me/918606050922?text=Hi%2C%20I%20need%20support"
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-10 right-10 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366]"
    >
      <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping" />
      <div className="relative z-20 text-white text-2xl">
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </a>
  );
};

export default WhatsAppChatButton;




