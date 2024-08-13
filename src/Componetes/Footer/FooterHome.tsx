import { FooterContainer, Column, Separator, Logo, SocialIcons, TextContent } from './FooterHomeStyles.ts';
import { useTranslation } from 'react-i18next';

import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png'; 
import linkedinIcon from '../../assets/linkedin.png'; 
import footer from '../../assets/footer.png';

const Footer = () => {

  const { t } = useTranslation(); 

  return (
    <FooterContainer>
      <Column>
        <Logo>
          {t('HOME.FOOTER.IPICRED')}
        </Logo>
        <SocialIcons>
          <img src={facebookIcon} alt="Facebook" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </SocialIcons>
      </Column>
      <Column>
        <h4>{t('HOME.FOOTER.PAGES')}</h4>
        <p className='text'>{t('HOME.FOOTER.HOME_PAGE')}</p>
        <p className='text'>{t('HOME.MANIFEST')}</p>
        <p className='text'>{t('HOME.FOOTER.ABOUT_US')}</p>
      </Column>
      <Column>
        <h4>{t('HOME.FOOTER.GET_IN_TOUCH')}</h4>
        <p className='text'>contato@ipicred.com.br</p>
        <p className='text'>(92) 99248-6758</p>
      </Column>
      <Column>
        <h4>{t('HOME.FOOTER.WITH_SUPPORT')}</h4>
        <img className='footer' src={footer} alt="footer" />
      </Column>
      <Separator />
      <TextContent>
        <p className='rights'>
        {t('HOME.FOOTER.FOOTER')}
        </p>
       
      </TextContent>
    </FooterContainer>
  );
};

export default Footer;
