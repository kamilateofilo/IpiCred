
import { CooperativeResponsibleForm } from "../../Componetes/CooperativeResponsibleForm/CooperativeResponsibleForm";
import { CooperativeForm } from "../../Componetes/CooperativeForm/CooperativeForm";
import { StepsNumber } from "../../styles/StepsNumber";
import { Button } from "../../Componetes/CooperativeResponsibleForm/styled";

import Cabecalho  from "../../Componetes/Cabecalho/Cabecalho";
import BackButton from "../../Componetes/BackButton/BackButton";
import MultiStepsForm from "../../Componetes/MultiStepsForm/MultiStepsForm";
import ProgressBar from "../../Componetes/ProgressBar/ProgressBar";



export const ContactForm = () => {
    const { steps, currentStepIndex, step, next } = MultiStepsForm([
        <CooperativeResponsibleForm />,
        <CooperativeForm />
    ])

    return(
        <div>
            <Cabecalho/>
            <BackButton/>
            <form style={{ position: "absolute", top: "16%", left: "20em"}}>
                <div>
                  <StepsNumber>
                    Etapa {currentStepIndex + 1} de {steps.length}
                   </StepsNumber>
                   <ProgressBar/>
                   {step}
                    {currentStepIndex !== 1 && <Button type="button" onClick={next}>Continuar</Button> }
                </div>
            </form>
        </div>
    );
};