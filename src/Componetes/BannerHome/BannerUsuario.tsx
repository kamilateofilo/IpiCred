import 'bootstrap/dist/css/bootstrap.min.css';
import { BannerWrapper, BannerContainer, TextSection, ImageSection, Btn } from './BannerUsuarioStyles.ts';

import Usuario from '../../assets/usuario.png'

function BannerUsuario() {
    return (
        <BannerWrapper>
            <BannerContainer>
                <TextSection>
                    <h1 className="display-4">Bem-vindo a IpiCred!</h1>
                    <p className="lead">
                    Vamos começar a sua jornada como IpiBank, e <br/> desbravar o mundo do crédito juntos!
                    </p>
                    <Btn type="button">Vamos Começar</Btn>
                </TextSection>
                <ImageSection>
                    <img src={Usuario} />
                </ImageSection>
            </BannerContainer>
        </BannerWrapper>
    );
}

export default BannerUsuario;
