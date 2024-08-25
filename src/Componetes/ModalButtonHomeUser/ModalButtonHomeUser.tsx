import { useState } from 'react';
import { Btn } from "./styled";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';



export const ModalButtonHomeUser = ()  => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('');
    };

    const handleButtonClickRequest = () => {
        navigate('/preAnaliseCredito');
    };

    return (
        <>
            <Btn
                onClick={handleShow}
            >
                Iniciar solicitação
            </Btn>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

                <Modal.Body>
                    <p style={{color: "#363232", fontWeight: "600", fontSize: "18px", textAlign: "center", marginTop: "50px"}}>Para dar prosseguimento selecione uma das duas opções</p>
                </Modal.Body>
                
                <div style={{display: "flex", alignItems:"center", marginLeft:"5rem"}}>
                    <button
                        style={{backgroundColor: "#ffffff", color: "#AC883F", fontWeight: "500", fontSize: "14px", padding: "10px 20px", borderRadius: "50px", border: "1px solid #AC883F", margin: "10px" }}
                        onClick={handleButtonClickRequest}
                    >
                        Buscar por CPF
                    </button>

                    <button
                        style={{backgroundColor: "#AC883F", color: "#ffffff", fontWeight: "500", fontSize: "14px", padding: "10px 20px", borderRadius: "50px", border: "none", margin: "10px" }}
                        onClick={handleButtonClick}
                    >
                        Cadastrar associado
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default ModalButtonHomeUser;
