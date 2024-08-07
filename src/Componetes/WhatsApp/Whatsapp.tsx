import { FloatingButtonContainer, WhatsAppLogo, ButtonText } from './WhatsappStyles';
import whatsappLogo from '../../assets/whatsapp.png'; // Substitua com o caminho correto para o logo do WhatsApp

const FloatingButton = () => {
  return (
    <FloatingButtonContainer href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <WhatsAppLogo src={whatsappLogo} alt="WhatsApp Logo" />
      <ButtonText>WhatsApp</ButtonText>
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
