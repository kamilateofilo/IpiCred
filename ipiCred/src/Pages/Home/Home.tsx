import Bancos from "../../Componetes/Bancos/Bancos";
import BannerAtendimento from "../../Componetes/BannerAtendimento/BannerAtendimento";
import BannerHome from "../../Componetes/BannerHome/BannerHome";
import Cabecalho from "../../Componetes/Cabecalho/CabecalhoHome";
import PainelLinhas from "../../Componetes/PainelLinhas/PainelLinhas";
import PlataformaHome from "../../Componetes/PlataformaHome/PlataformaHome";
import BannerHomeRural from "../../Componetes/BannerHomeRural/BannerHomeRural";
import Footer from "../../Componetes/Footer/FooterHome";
import FloatingButton from "../../Componetes/WhatsApp/Whatsapp";

import GlobalStyles from "../../../GlobalStyles"

function Home() {
    return (
      <>
        <GlobalStyles/>
        <FloatingButton />
        <Cabecalho />
        <BannerHome />
        <BannerAtendimento />
        <PlataformaHome />
        <Bancos />
        <PainelLinhas />
        <BannerHomeRural />
        <Footer />
      </>
    );
  }
  
  export default Home