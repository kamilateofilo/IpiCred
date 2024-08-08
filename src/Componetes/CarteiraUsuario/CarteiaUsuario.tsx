import 'bootstrap/dist/css/bootstrap.min.css';
import { BannerWrapper, BannerContainer, CardRow, CardWrapper, CardContent, TextSection, ImageSection } from './CarteiraUsuarioStyles.ts';

import Cifrao from '../../assets/cifrao.png';
import Grafico from '../../assets/grafico.png';
import Maos from '../../assets/maos.png';
import Calendario from '../../assets/calendario.png';
import Ticket from '../../assets/ticket.png';

function CarteiraUsuario() {
    return (
        <BannerWrapper>
            <BannerContainer>
                <h4 className="display-4">Visão da carteira</h4>
                <CardRow>
                    <CardWrapper>
                        <CardContent>
                            <ImageSection>
                                <img src={Cifrao} alt="Cifrao" />
                            </ImageSection>
                            <TextSection>
                                <h5 className="card-title">Saldo Atual</h5>
                                <p className="card-text">R$ 0,00</p>
                            </TextSection>
                        </CardContent>
                    </CardWrapper>

                    <CardWrapper>
                        <CardContent>
                            <ImageSection>
                                <img src={Maos} alt="Maos" />
                            </ImageSection>
                            <TextSection>
                                <h5 className="card-title">Total de crédito aprovados</h5>
                                <p className="card-text">R$ 0,00</p>
                            </TextSection>
                        </CardContent>
                    </CardWrapper>

                    <CardWrapper>
                        <CardContent>
                            <ImageSection>
                                <img src={Grafico} alt="Grafico" />
                            </ImageSection>
                            <TextSection>
                                <h5 className="card-title">Créditos Pendentes</h5>
                                <p className="card-text">R$ 0,00</p>
                            </TextSection>
                        </CardContent>
                    </CardWrapper>

                    <CardWrapper>
                        <CardContent>
                            <ImageSection>
                                <img src={Calendario} alt="Calendario" />
                            </ImageSection>
                            <TextSection>
                                <h5 className="card-title">Crédito Rejeitado</h5>
                                <p className="card-text">R$ 0,00</p>
                            </TextSection>
                        </CardContent>
                    </CardWrapper>

                    <CardWrapper>
                        <CardContent>
                            <ImageSection>
                                <img src={Ticket} alt="Ticket" />
                            </ImageSection>
                            <TextSection>
                                <h5 className="card-title">Ticket médio</h5>
                                <p className="card-text">R$ 0,00</p>
                            </TextSection>
                        </CardContent>
                    </CardWrapper>
                </CardRow>
            </BannerContainer>
        </BannerWrapper>
    );
}

export default CarteiraUsuario;
