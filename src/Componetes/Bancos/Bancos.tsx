import { Title, Container, Image } from './BancosStyles.ts'; 
import { useTranslation } from 'react-i18next';

import BancoBrasil from '../../assets/bancoBB.png';
import Caixa from '../../assets/bancoCaixa.png';
import Santander from '../../assets/bancoSantander.png';
import Sicredi from '../../assets/bancoSicred.png';

const Bancos = () => {

    const { t } = useTranslation(); 

    return (
        <>
            <Title>{t('HOME.BANKS')}</Title>

            <Container>
                <Image src={BancoBrasil} alt="Banco do Brasil" />
                <Image src={Caixa} alt="Caixa Econômica Federal" style={{width: '150px', height: '38px'}} />
                <Image src={Santander} alt="Santander" style={{width: '190px', height: '38px'}} />
                <Image src={Sicredi} alt="Sicredi" />
            </Container>
        </>
    );
};

export default Bancos;
