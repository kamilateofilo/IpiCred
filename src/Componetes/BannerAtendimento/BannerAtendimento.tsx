import { Title, CardContainer, CustomCard, CardImage, TitleCard, TextCard } from './BannerAtendimentoStyles.ts'; // Importe os estilos
import { useTranslation, Trans } from 'react-i18next';

import Call from '../../assets/call.png';
import Group from '../../assets/grupo.png';
import Moeda from '../../assets/moeda.png';
import Link from '../../assets/link.png';

const BannerAtendimento = () => {
    
    const { t } = useTranslation(); 

    return (
        <>
            <Title>
                {t('HOME.SERVICE_BANNER_TITLE')}
                <br />
                <Trans
                    i18nKey="HOME.SERVICE_BANNER_CAPTION"
                    components={{ agriculture: <span style={{ color: '#AC883F' }} /> }}
                />            
                </Title>

            <CardContainer>
                <CustomCard className="card">
                    <div className="card-body">
                        <CardImage>
                            <img src={Call} alt="Atendimento" />
                        </CardImage>
                        <TitleCard className="card-subtitle mb-2">{t('HOME.CARDS.SERVICE')}</TitleCard>
                        <TextCard className="card-text">
                            {t('HOME.CARDS.SERVICE_CAPTION')}
                        </TextCard>
                    </div>
                </CustomCard>

                <CustomCard className="card">
                    <div className="card-body">
                        <CardImage>
                            <img src={Group} alt="Assessoria técnica" />
                        </CardImage>
                        <TitleCard className="card-subtitle mb-2">{t('HOME.CARDS.ACESSORY')}</TitleCard>
                        <TextCard className="card-text">
                            {t('HOME.CARDS.ACESSORY_CAPTION')}
                        </TextCard>
                    </div>
                </CustomCard>

                <CustomCard className="card">
                    <div className="card-body">
                        <CardImage>
                            <img src={Moeda} alt="Linhas de crédito" />
                        </CardImage>
                        <TitleCard className="card-subtitle mb-2">{t('HOME.CARDS.CREDIT')}</TitleCard>
                        <TextCard className="card-text">
                            {t('HOME.CARDS.CREDIT_CAPTION')}
                        </TextCard>
                    </div>
                </CustomCard>

                <CustomCard className="card">
                    <div className="card-body">
                        <CardImage>
                            <img src={Link} alt="Processo Digital" />
                        </CardImage>
                        <TitleCard className="card-subtitle mb-2">{t('HOME.CARDS.DIGITAL_PROCESS')}</TitleCard>
                        <TextCard className="card-text">
                            {t('HOME.CARDS.DIGIAL_PROCESS_CAPTION')}
                        </TextCard>
                    </div>
                </CustomCard>
            </CardContainer>
        </>
    );
};

export default BannerAtendimento;
