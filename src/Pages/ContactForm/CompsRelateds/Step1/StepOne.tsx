import { useEffect, useState } from "react";
import { FormData } from "../../ContactForm";
import { Button, Form, TextWrapper } from "../../styled";
import { Input } from "../../../../styles/Input";
import { Select } from "../../../../styles/Select";
import BackButton from "../../../../Componetes/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

interface StepProps {
    formData: FormData;
    onFormDataChange: (data: FormData) => void;
    nextStep?: () => void;
    prevStep?: () => void;
    handleSubmit?: () => void;
    isSubmitting?: boolean;
    error?: string | null;
}

export const StepOne = ({ formData, onFormDataChange, nextStep, isSubmitting, error }: StepProps) => {
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const navigate = useNavigate();


    const validateForm = (data: FormData) => {
        const errors: string[] = [];

        if (!data.nome_completo) errors.push('Nome completo é obrigatório.');
        if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.push('E-mail inválido.');
        if (!data.telefone_contato || !/^\d+$/.test(data.telefone_contato)) errors.push('Telefone inválido.');
        if (!data.cargo) errors.push('Cargo é obrigatório.');
        if (!data.atividade_cooperativa) errors.push('Atividade cooperativa é obrigatória.');

        return errors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        onFormDataChange({
            ...formData,
            [name]: name === 'telefone_contato' ? value.replace(/\D/g, '') : value,
        });
    };

    useEffect(() => {
        const errors = validateForm(formData);
        setIsFormValid(errors.length === 0);
    }, [formData]);

    const handleSubmit = () => {
        console.log("eee pasei aqui ")
        if (!isFormValid) return;

        nextStep && nextStep();
    };

    return (
        <><BackButton action={() => navigate('/')} /><>
            <div>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <TextWrapper>
                        <h3>Boas vindas à IpiCred!</h3>
                        <p>Preencha com os dados do seu negócio que entraremos em contato com você.</p>
                        <h3>Bora começar?</h3>
                    </TextWrapper>

                    <Input
                        type="text"
                        placeholder='Seu nome completo'
                        name="nome_completo"
                        value={formData.nome_completo}
                        onChange={handleChange}
                        required />

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Input
                        type="email"
                        placeholder='E-mail da cooperativa'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />

                    <Input
                        type="tel"
                        placeholder='Telefone para contato'
                        name='telefone_contato'
                        value={formData.telefone_contato}
                        onChange={handleChange}
                        required />

                    <Select
                        name="atividade_cooperativa"
                        value={formData.atividade_cooperativa}
                        onChange={handleChange}
                        required
                    >
                        <option value="" style={{ color: "#49454F" }}>Atividade da cooperativa</option>
                        <option value="Extrativista">Extrativista</option>
                        <option value="Pecuaria">Pecuária</option>
                        <option value="Aquicultura">Aquicultura</option>
                        <option value="Fruticultura">Fruticultura</option>
                        <option value="Horticultura">Horticultura</option>
                        <option value="Silvicultura">Silvicultura</option>
                        <option value="Pesca">Pesca</option>
                        <option value="Agricultura">Agricultura</option>
                        <option value="Outro">Outro</option>
                    </Select>

                    <Input
                        type="text"
                        placeholder='Seu cargo'
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        required />

                    <p>Ao continuar, esteja ciente da <a href="#">política de privacidade</a> da IpiCred</p>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Button
                        isValid={isFormValid}
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Continuar'}
                    </Button>
                </Form>
            </div></></>
    );
};

export default StepOne;