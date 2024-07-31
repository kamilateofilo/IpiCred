import {
    Section,
    Container,
    Image,
    TextContainer,
    Wrapper,
    Column
  } from './BannerHomeRuralStyles';
  
  import Plataforma from '../../assets/rural.jpg';
  
  const BannerHomeRural = () => {
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
                Facilite o acesso ao crédito rural para seus <span className='span'>cooperados</span> de forma <span className='span'>simples</span> e <span className='span'>eficiente</span>
                </p>
  
                <div className="text-container">
                  <p className='text'>
                  Cadastre, simule e solicite crédito, centralizando todas as informações e garantindo uma gestão financeira segura                  </p>
                </div>
  
              </TextContainer>
            </Column>
          </div>
        </Container>
      </Section>
    );
  };
  
  export default BannerHomeRural;
  