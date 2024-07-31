import {
  Section,
  Container,
  Image,
  TextContainer,
  Wrapper,
  Column
} from './PlataformaHomeStyles';

import Plataforma from '../../assets/plataforma.png';

const PlataformaHome = () => {
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
                Bancarize 
                <br />
                sua cooperativa
              </p>

              <div className="text-container">
                <p className='text'>
                  Solicite e gerencie o crédito dos seus associados diretamente, sem precisar ir ao banco.
                </p>
              </div>

              <button type="button" className="btn">Obtenha financiamento</button>
            </TextContainer>
          </Column>
        </div>
      </Container>
    </Section>
  );
};

export default PlataformaHome;
