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

import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner.jpg';

const BannerHome = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contactForm');
  };

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
                <Btn onClick={handleButtonClick} type="button">Saiba mais</Btn>
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
