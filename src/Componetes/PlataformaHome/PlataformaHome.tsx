import {
  Section,
  Container,
  Image,
  TextContainer,
  Wrapper,
  Column
} from './PlataformaHomeStyles.ts';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import Plataforma from '../../assets/plataforma.png';

const PlataformaHome = () => {

  const navigate = useNavigate();

  const { t } = useTranslation(); 

  const handleButtonClick = () => {
    navigate('/contactForm');
  };

  return (
    <Section id="home">
      <Container className="container">
        <div className="row align-items-center">
          <Column className="col-md-6">
            <Wrapper>
              <Image src={Plataforma} alt="Imagem Capa" />
            </Wrapper>
          </Column>

          <Column className="col-md-6">
            <TextContainer>
              <p className="textBaner">
                {t('HOME.BANKARIZE')} 
                <br />
                {t('HOME.YOUR_COOPERATIVE')}
              </p>

              <div className="text-container">
                <p className='text'>
                {t('HOME.BANK_CAPITON')}
                </p>
              </div>

              <button onClick={handleButtonClick } type="button" className="btn">{t('HOME.GET_FINANCING')}</button>
            </TextContainer>
          </Column>
        </div>
      </Container>
    </Section>
  );
};

export default PlataformaHome;
