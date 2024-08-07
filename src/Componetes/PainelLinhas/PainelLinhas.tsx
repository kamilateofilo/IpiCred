import { Background, ImgAspiral, ContainerPainel, CardGrid, CardPainel } from './PainelLinhasStyles'; // Importe os estilos

import Aspiral from '../../assets/aspiral.png';

const PainelLinhas = () => {
    return (
        <Background>
            <ImgAspiral src={Aspiral} alt="Aspiral" />

            <ContainerPainel>
                <h2 className="text-center">Encontre a linha ideal para você</h2>
                <h6 className="text-center" style={{ fontWeight: '100', fontSize: '20px' }}>
                    Oferecemos uma variedade de opções de crédito rural: da agricultura familiar à Bioeconomia, impulsionando cadeias produtivas
                </h6>

                <CardGrid>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pronaf Investimentos</h5>
                            <p className="card-text">Valor máximo de até R$30.000,00 
                            Juros com taxa efetiva de 0,4% a.a.</p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pronaf “A”</h5>
                            <p className="card-text">Valor máximo de até R$40.000,00 
                            Juros com taxa efetiva de 0,5% a.a.</p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pronaf Programas Especiais</h5>
                            <p className="card-text">Valor máximo de até R$30.000,00 
                            Juros com taxa efetiva de 0,4% a.a.</p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pronamp Investimentos</h5>
                            <p className="card-text">Valor máximo de até R$30.000,00 
                            Juros com taxa efetiva de 0,4% a.a.</p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pronamp Custeio</h5>
                            <p className="card-text">Valor máximo de até R$40.000,00 
                            Juros com taxa efetiva de 0,5% a.a.</p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pronaf Programas Especiais</h5>
                            <p className="card-text">Valor máximo de até R$30.000,00 
                            Juros com taxa efetiva de 0,4% a.a.</p>
                        </div>
                    </CardPainel>
                </CardGrid>
            </ContainerPainel>

            <ImgAspiral src={Aspiral} alt="Aspiral"/>
        </Background>
    );
};

export default PainelLinhas;
