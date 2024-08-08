import { FooterContainer, Column, Separator, Logo, SocialIcons, TextContent } from './FooterHomeStyles.ts';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png'; 
import linkedinIcon from '../../assets/linkedin.png'; 
import footer from '../../assets/footer.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Logo>IpiCred</Logo>
        <SocialIcons>
          <img src={facebookIcon} alt="Facebook" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </SocialIcons>
      </Column>
      <Column>
        <h4>Páginas</h4>
        <p className='text'>Página Inicial</p>
        <p className='text'>Manifesto</p>
        <p className='text'>Sobre Nós</p>
      </Column>
      <Column>
        <h4>Entre em contato</h4>
        <p className='text'>ipicred@gmail.com</p>
        <p className='text'>(92) 99248-6758</p>
      </Column>
      <Column>
        <h4>Com apoio:</h4>
        <img className='footer' src={footer} alt="footer" />
      </Column>
      <Separator />
      <TextContent>
        <p className='rights'>
          2024 IpiCred - Tecnologia e Intermediação de Serviços Inova Simples (I.S.) CNPJ 54.231.192/0001-76. Todos os direitos reservados
        </p>
       
      </TextContent>
    </FooterContainer>
  );
};

export default Footer;
