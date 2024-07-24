import BannerAtendimento from "../../Componetes/BannerAtendimento/BannerAtendimento";
import BannerHome from "../../Componetes/BannerHome/BannerHome";
import Cabecalho from "../../Componetes/Cabecalho/Cabecalho";

function Home() {
    return (
      <>
        <Cabecalho />
        <BannerHome />
        <BannerAtendimento />
      </>
    );
  }
  
  export default Home