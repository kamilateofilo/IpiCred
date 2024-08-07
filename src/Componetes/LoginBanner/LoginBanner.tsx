import BannerLogin from "../../assets/images/BannerLogin.svg";
import { ImageContainer } from "./styled";


export const LoginBanner = () => {
  return (
    <ImageContainer>
      <img src={BannerLogin} alt="Banner de agricultor colhendo legumes." />
    </ImageContainer>
  );
};