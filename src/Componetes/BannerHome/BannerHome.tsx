import {
  HomeSection,
  TextContainer,
  ImgFluid,
  ContainerBackground,
  ContainerWrapper,
  TextCaixa,
  TextBanner,
  SpanBanner,
  Text,
  Btn
} from './BannerHomeStyles.ts'; 
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner.jpg';

const BannerHome = () => {

  const navigate = useNavigate();
  const { t } = useTranslation(); // Certifique-se de que está correto

  const handleButtonClick = () => {
    navigate('/contactForm');
  };

  return (
    <HomeSection id="home">
      <div className="container" style={{ backgroundColor: '#FFF' }}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <TextContainer>
              <TextCaixa>{t('HOME.CREDIT_FINANCING')}</TextCaixa>
              <TextBanner>
                {t('HOME.TITLE_BANNER')} 
                <br />
                <SpanBanner>{t('HOME.COOPERATIVE')}</SpanBanner>
              </TextBanner>

              <TextContainer>
                <Text>
                  {t('HOME.BODY_BANNER')}
                </Text>
                <Btn onClick={handleButtonClick} type="button">{t('HOME.FIND_OUT_MORE')}</Btn>
              </TextContainer>
            </TextContainer>
          </div>

          <div className="col-md-6">
            <ContainerWrapper>
              <ContainerBackground />
              <ContainerBackground className='img1'/>
              <ImgFluid src={banner} alt="Imagem Capa" />
            </ContainerWrapper>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default BannerHome;
