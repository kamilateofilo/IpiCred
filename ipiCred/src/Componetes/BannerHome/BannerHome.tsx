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
} from './BannerHomeStyles'; // Importe os estilos

import banner from '../../assets/banner.jpg';

const BannerHome = () => {
  return (
    <HomeSection id="home">
      <div className="container" style={{ backgroundColor: '#FFF' }}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <TextContainer>
              <TextCaixa>$ Financiamento de crédito</TextCaixa>
              <TextBanner>
                Transforme o acesso ao crédito para 
                <br />
                <SpanBanner>cooperativas agrícola</SpanBanner>
              </TextBanner>

              <TextContainer>
                <Text>
                  Cadastre, simule e solicite crédito para seus cooperados sem sair da propriedade. Bancarize sua cooperativa e tenha assessoria técnica sempre que precisar, tudo direto na nossa plataforma.
                </Text>
                <Btn type="button">Saiba mais</Btn>
              </TextContainer>
            </TextContainer>
          </div>

          <div className="col-md-6">
            <ContainerWrapper>
              <ContainerBackground />
              <ContainerBackground style={{ left: '52px', top: '24px', width: '470px', height: '350px' }} />
              <ImgFluid src={banner} alt="Imagem Capa" />
            </ContainerWrapper>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default BannerHome;
