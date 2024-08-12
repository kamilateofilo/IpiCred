import { useState } from 'react';
import { Button } from './styled';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalImage from "../../assets/images/modal-image.png";

interface ModalButtonProps {
    onClick: () => void;
    disabled?: boolean
}


const ModalButton: React.FC<ModalButtonProps> = ({ onClick, disabled }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <>
            <Button
                type='submit'
                onClick={() => {
                    if (!disabled) {
                        onClick();
                        handleShow();
                    }
                }}
                disabled={disabled}
                isValid={true}
            >
                Finalizar
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header style={{display: "flex", flexDirection: "column", textAlign: "center", fontWeight: "600"}}>
                    <img src={ModalImage} alt="Imagem ilustrativa celular" />
                    <Modal.Title>Solicitação recebida com sucesso!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p style={{color: "#787878", fontWeight: "400", fontSize: "15px", textAlign: "center"}}>Nossa equipe analisará suas informações e entraremos em contato breve. Enquanto isso, se tiver alguma dúvida, sinta-se à vontade para entrar em contato conosco.</p>
                </Modal.Body>
                
                <Modal.Footer>
                    <button
                        style={{backgroundColor: "#ffffff", color: "#000000", fontWeight: "600", fontSize: "14px", width: "100%", borderRadius: "50px", border: "1px solid #B9B9B9", padding: "15px", margin: "10px" }}
                        onClick={handleButtonClick}
                    >
                        Voltar para o site 
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalButton;
