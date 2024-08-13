import {
    Section,
    Container,
    Image,
    TextContainer,
    Wrapper,
    Column
  } from './BannerHomeRuralStyles.ts';
  import { useTranslation, Trans } from 'react-i18next';

  import Plataforma from '../../assets/rural.jpg';
  
  const BannerHomeRural = () => {
    
    const { t } = useTranslation(); 

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
                <p>
                <Trans
                  i18nKey="HOME.RURAL_CREDIT"
                  components={{
                  cooperados: <span className='span' />,
                  simples: <span className='span' />,
                  eficiente: <span className='span' />
                    }}
                  />
                </p>
  
                <div className="text-container">
                  <p className='text'>
                    {t('HOME.RURAL_CREDIT_CAPTION')}                  
                  </p>
                </div>
  
              </TextContainer>
            </Column>
          </div>
        </Container>
      </Section>
    );
  };
  
  export default BannerHomeRural;
  