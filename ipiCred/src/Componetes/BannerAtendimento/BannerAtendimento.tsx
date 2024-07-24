import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerAtendimento.css';

import Call from '../../assets/call.png';
import Group from '../../assets/grupo.png';
import Moeda from '../../assets/moeda.png';
import Link from '../../assets/link.png';

const BannerAtendimento = () => {
    return (
        <>
            <p className="text-center">
                Somos a primeira plataforma de crédito,
                <br />
                feitos para quem reconhece o valor da <span style={{ color: '#AC883F' }}>agricultura familiar</span>
            </p>

            <div className="card-container">

            <div className="card custom-card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={Call} />
                        </h5>
                        <h6 className="card-subtitle mb-2">Atendimento
                        <br />
                        Rápido e Humanizado</h6>
                        <p className="card-text">
                            Suporte personalizado em até 5 minuto, garantindo assistência dedicada e ágil aos clientes.
                        </p>
                    </div>
                </div>

                <div className="card custom-card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={Group} />
                        </h5>
                        <h6 className="card-subtitle mb-3">Assessoria técnica direto pela plataforma</h6>
                        <p className="card-text">
                        Solicite suporte técnico para o seu projeto ou acompanhamento direto pela plataforma.
                        </p>
                        
                    </div>
                </div>

                <div className="card custom-card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={Moeda} />
                        </h5>
                        <h6 className="card-subtitle mb-3">Linhas de crédito especiais para agricultura familiar</h6>
                        <p className="card-text">
                        Acesso a diversas linhas de crédito para agricultura familiar, ampliando as opções de financiamento.
                        </p>
                        
                    </div>
                </div>

                <div className="card custom-card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={Link} />
                        </h5>
                        <h6 className="card-subtitle mb-3">Processo 100% Digital</h6>
                        <p className="card-text">
                        Cadastre e solicite crédito para os seus associados sem sair da sua cooperativa.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerAtendimento;
