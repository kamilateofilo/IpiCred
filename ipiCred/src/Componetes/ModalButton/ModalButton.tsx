import { useState } from 'react';
import { Button } from '../CooperativeResponsibleForm/styled';
import Modal from 'react-bootstrap/Modal';
import IconeWhatsapp from "../../assets/images/whatsapp_symbol.png.png";
import ModalImage from "../../assets/images/modal-image.png"


function ModalButton() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                onClick={handleShow}
            >
                <img style={{marginRight: "5px"}} src={IconeWhatsapp} alt="ícone whatsapp" />
                Continuar pelo whatsapp
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header style={{display: "flex", flexDirection: "column", textAlign: "center", fontWeight: "600"}}>
                    <img src={ModalImage} alt="Imagem ilustrativa celular" />
                    <Modal.Title>Você receberá uma mensagem agora no seu Whatsapp!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p style={{color: "#787878", fontWeight: "400", fontSize: "14px", textAlign: "center"}}>Responda a nossa mensagem para que possamos conversar o quanto antes sobre o seu negócio</p>
                </Modal.Body>
                
                <Modal.Footer>
                    <button
                        style={{backgroundColor: "#ffffff", color: "#221F1F", fontWeight: "600", fontSize: "14px", width: "100%", borderRadius: "50px", border: "1px solid #787878", padding: "15px", margin: "10px" }}
                        onClick={handleClose}
                    >
                        Voltar para o site 
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalButton;