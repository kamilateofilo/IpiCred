import { useState } from "react";
import Cabecalho from "../../Componetes/Cabecalho/Cabecalho";
import ProgressBar from "../../Componetes/ProgressBar/ProgressBar";
import { Container } from "./styled";
import StepOne from "./CompsRelateds/Step1/StepOne";
import { StepTwo } from "./CompsRelateds/Step2/StepTwo";
import BackButton from "../../Componetes/BackButton/BackButton";
import { useNavigate } from "react-router-dom";



export interface FormData {
  nome_completo: string;
  email: string;
  telefone_contato: string;
  cargo: string;
  atividade_cooperativa: string;
  nome_cooperativa: string;
  numero_cooperados: string;
  uf: string;
  municipio: string;
  checkboxes: string;
}

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    atividade_cooperativa: '',
    cargo: "",
    email: "",
    municipio: "",
    nome_completo: "",
    nome_cooperativa: "",
    numero_cooperados: "",
    telefone_contato: "",
    uf: "",
    checkboxes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const goToHome = () => {
    navigate('/');
  }

  const handleFormDataChange = (newData: Partial<FormData>) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData
    }));
  };


  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    const dataForApi = {
      "nome_cooperativa": formData.nome_cooperativa,
      "atividade_cooperativa": formData.atividade_cooperativa,
      "numero_cooperados": formData.numero_cooperados,
      "municipio": formData.municipio, 
      "uf": formData.uf,
      "responsaveis": {
        "nome_completo": formData.nome_completo,
        "email": formData.email,
        "telefone_contato": formData.telefone_contato,
        "cargo": formData.cargo
      }
    }

    console.log("Enviando dados:", formData);

    try {
      const response = await fetch('https://ipicred-api.vercel.app/api/v1/dadoscooperativa/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForApi),
      });

      console.log("eee response", response.status !== 201)


      if (response.status !== 201) {
        console.log("post está sendo feito", response)
      }


      return

    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <Container>
        <Cabecalho />
        <BackButton
            goToHome={goToHome}
            goToPreviousStep={prevStep}
            isFirstStep={step === 1}
        />
        {step === 1 ? (
          <>
            <p style={{ marginTop: "2.1rem" }}>Etapa 1 de 2</p>
          </>
        ) : (
          <>
            <p style={{ marginTop: "2.1rem" }}>Etapa 2 de 2</p>
          </>
        )}
        <ProgressBar step={step} />

        {step === 1 ? (
          <StepOne
            formData={formData}
            onFormDataChange={handleFormDataChange}
            nextStep={nextStep}
            isSubmitting={isSubmitting}
            error={error}
          />
        ) : (
          <StepTwo
            formData={formData}
            onFormDataChange={handleFormDataChange}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </Container>
  );
}

export default ContactForm;