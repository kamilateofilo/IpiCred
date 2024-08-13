import { Background, ImgAspiral, ContainerPainel, CardGrid, CardPainel } from './PainelLinhasStyles.ts'; 
import { useTranslation  } from 'react-i18next';

import Aspiral from '../../assets/aspiral.png';

const PainelLinhas = () => {

    const { t } = useTranslation(); 

    return (
        <Background>
            <ImgAspiral src={Aspiral} alt="Aspiral" />

            <ContainerPainel>
                <h2 className="text-center">{t('HOME.CREDIT_LINES.TITLE')}</h2>
                <h6 className="text-center" style={{ fontWeight: '100', fontSize: '20px' }}>
                    {t('HOME.CREDIT_LINES.SUB_TITLE')}                
                </h6>

                <CardGrid>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">{t('HOME.CREDIT_LINES.PRONAF')}</h5>
                            <p className="card-text">
                                {t('HOME.CREDIT_LINES.PRONAF_CAPTION')}
                            </p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">{t('HOME.CREDIT_LINES.PRONAF_A')}</h5>
                            <p className="card-text">
                                {t('HOME.CREDIT_LINES.PRONAF_A_CAPTION')}
                            </p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">{t('HOME.CREDIT_LINES.PRONAF_PROGRAM')}</h5>
                            <p className="card-text">
                                {t('HOME.CREDIT_LINES.PRONAF_PROGRAM_CAPTION')}
                            </p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">{t('HOME.CREDIT_LINES.PRONAMP_INVESTIMENTS')}</h5>
                            <p className="card-text">
                                {t('HOME.CREDIT_LINES.PRONAMP_INVESTIMENTS_CAPTION')}
                            </p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">{t('HOME.CREDIT_LINES.PRONAMP_COSTING')}</h5>
                            <p className="card-text">
                                {t('HOME.CREDIT_LINES.PRONAMP_COSTING_CAPTION')}
                            </p>
                        </div>
                    </CardPainel>
                    <CardPainel className="card">
                        <div className="card-body">
                            <h5 className="card-title">{t('HOME.CREDIT_LINES.PRONAF_SPECIAL_PROGRAMS')}</h5>
                            <p className="card-text">
                                {t('HOME.CREDIT_LINES.PRONAF_SPECIAL_PROGRAMS_CAPTION')}
                            </p>
                        </div>
                    </CardPainel>
                </CardGrid>
            </ContainerPainel>

            <ImgAspiral src={Aspiral} alt="Aspiral"/>
        </Background>
    );
};

export default PainelLinhas;
