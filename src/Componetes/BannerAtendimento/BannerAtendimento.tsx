import { Title, CardContainer, CustomCard, CardImage, TitleCard, TextCard } from './BannerAtendimentoStyles.ts'; // Importe os estilos

import Call from '../../assets/call.png';
import Group from '../../assets/grupo.png';
import Moeda from '../../assets/moeda.png';
import Link from '../../assets/link.png';

const BannerAtendimento = () => {
    return (
        <>
            <Title>
                Somos a primeira plataforma de crédito,
                <br />
                feitos para quem reconhece o valor da <span style={{ color: '#AC883F' }}>agricultura familiar</span>
            </Title>

            <CardContainer>
                <CustomCard className="card">
                    <div className="card-body">
                        <CardImage>
                            <img src={Call} alt="Atendimento" />
                        </CardImage>
                        <TitleCard className="card-subtitle mb-2">Atendimento Rápido e Humanizado</TitleCard>
                        <TextCard className="card-text">
                            Suporte personalizado em até 5 minutos, garantindo assistência dedicada e ágil aos clientes.
                        </TextCard>
                    </div>
                </CustomCard>

                <CustomCard className="card">
                    <div className="card-body">
                        <CardImage>
                            <img src={Group} alt="Assessoria técnica" />
                        </CardImage>
                        <TitleCard className="card-subtitle mb-2">Assessoria técnica direto pela plataforma</TitleCard>
                        <TextCard className="card-text">
                            Solicite suporte técnico para o seu projeto ou acompanhamento direto pela plataforma.
                        </TextCard>
                    </div>
                </CustomCard>

                <CustomCard className="card">
                    <div className="card-body">
                        <CardImage>
                            <img src={Moeda} alt="Linhas de crédito" />
                        </CardImage>
                        <TitleCard className="card-subtitle mb-2">Linhas de crédito especiais para agricultura familiar</TitleCard>
                        <TextCard className="card-text">
                            Acesso a diversas linhas de crédito para agricultura familiar, ampliando as opções de financiamento.
                        </TextCard>
                    </div>
                </CustomCard>

                <CustomCard className="card">
                    <div className="card-body">
                        <CardImage>
                            <img src={Link} alt="Processo Digital" />
                        </CardImage>
                        <TitleCard className="card-subtitle mb-2">Processo 100% Digital</TitleCard>
                        <TextCard className="card-text">
                            Cadastre e solicite crédito para os seus associados sem sair da sua cooperativa.
                        </TextCard>
                    </div>
                </CustomCard>
            </CardContainer>
        </>
    );
};

export default BannerAtendimento;
