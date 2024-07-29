import "./BackButton.css";

import  ArrowLeft from "../../assets/images/arrow-left.svg";


const BackButton = () => {
    return (
        <>
          <div className="container">
            <div className="back-button">
              <img className="arrow-left" src={ ArrowLeft } alt="seta voltar" />
              <a className="link" href="#">Voltar</a>
            </div>
          </div>
        </>
    );
};    


export default BackButton;