import { FloatingButtonContainer, WhatsAppLogo, ButtonText } from './WhatsappStyles.ts';
import whatsappLogo from '../../assets/whatsapp.png';

const FloatingButton = () => {
  return (
    <FloatingButtonContainer href="https://wa.me/5592982659556" target="_blank" rel="noopener noreferrer">
      <WhatsAppLogo src={whatsappLogo} alt="WhatsApp Logo" />
      <ButtonText>WhatsApp</ButtonText>
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
