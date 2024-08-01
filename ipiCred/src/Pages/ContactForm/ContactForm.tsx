import React from 'react';
import { CooperativeResponsibleForm } from "../../Componetes/CooperativeResponsibleForm/CooperativeResponsibleForm";
import { CooperativeForm } from "../../Componetes/CooperativeForm/CooperativeForm";
import { StepsNumber } from "../../styles/StepsNumber";
import MultiStepsForm from "../../Componetes/MultiStepsForm/MultiStepsForm";
import ProgressBar from "../../Componetes/ProgressBar/ProgressBar";
import { Container, Form, ContinueButton, BackButtonStyled, StyledWrapper } from "./styled";
import Cabecalho from "../../Componetes/Cabecalho/Cabecalho";
import BackButton from "../../Componetes/BackButton/BackButtonResponsibleForm";

export const ContactForm = () => {
    const { steps, currentStepIndex, step, next } = MultiStepsForm([
        <CooperativeResponsibleForm />,
        <StyledWrapper>
            <CooperativeForm />
        </StyledWrapper>
    ]);

    return (
        <Container>
            <Cabecalho />
            <BackButtonStyled>
                <BackButton />
            </BackButtonStyled>
            <Form>
                <div>
                    <StepsNumber>
                        Etapa {currentStepIndex + 1} de {steps.length}
                    </StepsNumber>
                    <ProgressBar />
                    {step}
                    {currentStepIndex !== 1 && 
                        <ContinueButton type="button" onClick={next}>Continuar</ContinueButton>
                    }
                </div>
            </Form>
        </Container>
    );
};

export default ContactForm;
