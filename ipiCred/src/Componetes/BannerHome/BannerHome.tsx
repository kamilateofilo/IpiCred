import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerHome.css';

import banner from '../../assets/banner.jpg';

const BannerHome = () => {
    return (
        <section id="home" className="pt-5 mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="text-container">
                            <h5 className="textCaixa">$ Financiamento de crédito</h5>
                            <p className="textBaner">
                                Transforme o acesso ao crédito para 
                                <br/>
                                <span className="spanBanner">cooperativas agrícola</span>
                            </p>

                            <div className="text-container">
                                <p className='text'>
                                    Cadastre, simule e solicite crédito para seus cooperados sem sair da propriedade. Bancarize sua cooperativa e tenha assessoria técnica sempre que precisar, tudo direto na nossa plataforma.
                                </p>
                                <button type="button" className="btn">Saiba mais</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container-wrapper">
                            <div className="container-background"></div>
                            <div className="container-background" style={{ left: '20px', top: '22px', width:'465px' }}></div>
                            <img src={banner} alt="Imagem Capa" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerHome;
