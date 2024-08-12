import { useEffect, useState } from "react";
import { FormData } from "../../ContactForm";
import { Button, Form, TextWrapper } from "../../styled";
import { Input } from "../../../../styles/Input";
import { Select } from "../../../../styles/Select";
import BackButton from "../../../../Componetes/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

interface StepProps {
    formData: FormData;
    onFormDataChange: (data:  Partial<FormData>) => void;
    nextStep?: () => void;
    prevStep?: () => void;
    handleSubmit?: () => void;
    isSubmitting: boolean;
    error?: string | null;
}

export const StepOne = ({ formData, onFormDataChange, nextStep }: StepProps) => {
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
    const [isSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();

    const validateField = (name: keyof FormData, value: string) => {
        let error = '';
    
        switch (name) {
            case 'nome_completo':
                if (!value.trim()) error = 'Nome completo é obrigatório.';
                break;
            case 'email':
                if (!value || !/\S+@\S+\.\S+/.test(value)) error = 'E-mail inválido. Deve estar no formato exemplo@gmail.com';
                break;
            case 'telefone_contato':
                const cleaned = value.replace(/\D/g, '');
                if (!cleaned || !/^\d{11}$/.test(cleaned)) error = 'Telefone inválido. Deve estar no formato (XX)XXXXX-XXXX.';
                break;
            case 'cargo':
                if (!value.trim()) error = 'Cargo é obrigatório.';
                break;
            case 'atividade_cooperativa':
                if (!value) error = 'Atividade cooperativa é obrigatória.';
                break;
            default:
                break;
        }
    
        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
    
        onFormDataChange({
            ...formData,
            [name]: name === 'telefone_contato' ? value : value, 
        });
    
        setTouchedFields(prev => new Set(prev.add(name)));
    };

    useEffect(() => {
        const errors = Object.keys(formData).reduce((acc, key) => {
            const typedKey = key as keyof FormData;
            const error = validateField(typedKey, formData[typedKey]);
            if (error) acc[typedKey] = error;
            return acc;
        }, {} as Record<keyof FormData, string>);

        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }, [formData]);

    const handleBlur = (name: string) => {
        setTouchedFields(prev => new Set(prev.add(name)));
    };

    const handleSubmit = () => {
        console.log("eee STEP 1 passou");
        if (!isFormValid) return;

        nextStep && nextStep();
    };

    return (
        <>
            <BackButton action={() => navigate('/')} />
            <div>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <TextWrapper>
                    <h3 style={{ marginTop: "15px" }}>Boas vindas à IpiCred!</h3>
                    <p>Preencha com os dados do seu negócio que entraremos em contato com você.</p>
                        <h3>Bora começar?</h3>
                    </TextWrapper>

                    <Input
                        type="text"
                        placeholder='Seu nome completo'
                        name="nome_completo"
                        value={formData.nome_completo}
                        onChange={handleChange}
                        onBlur={() => handleBlur('nome_completo')}
                        required/>
                    {touchedFields.has('nome_completo') && formErrors.nome_completo && (
                        <p style={{ color: 'red' }}>{formErrors.nome_completo}</p>
                    )}

                    <Input
                        type="email"
                        placeholder='E-mail da cooperativa'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        required
                    />
                    {touchedFields.has('email') && formErrors.email && (
                        <p style={{ color: 'red' }}>{formErrors.email}</p>
                    )}

                    <Input
                        type="tel"
                        placeholder='Telefone para contato'
                        name='telefone_contato'
                        value={formData.telefone_contato}
                        onChange={handleChange}
                        onBlur={() => handleBlur('telefone_contato')}
                        required
                    />
                    {touchedFields.has('telefone_contato') && formErrors.telefone_contato && (
                        <p style={{ color: 'red' }}>{formErrors.telefone_contato}</p>
                    )}

                    <Select
                        name="atividade_cooperativa"
                        value={formData.atividade_cooperativa}
                        onChange={handleChange}
                        onBlur={() => handleBlur('atividade_cooperativa')}
                        required
                    >
                        <option value="" style={{ color: "#49454F" }}>Atividade da cooperativa</option>
                        <option value="Extrativista">Extrativista</option>
                        <option value="Pecuária">Pecuária</option>
                        <option value="Aquicultura">Aquicultura</option>
                        <option value="Fruticultura">Fruticultura</option>
                        <option value="Horticultura">Horticultura</option>
                        <option value="Silvicultura">Silvicultura</option>
                        <option value="Pesca">Pesca</option>
                        <option value="Agricultura">Agricultura</option>
                        <option value="Outro">Outro</option>
                    </Select>
                    {touchedFields.has('atividade_cooperativa') && formErrors.atividade_cooperativa && (
                        <p style={{ color: 'red' }}>{formErrors.atividade_cooperativa}</p>
                    )}

                    <Input
                        type="text"
                        placeholder='Seu cargo'
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        onBlur={() => handleBlur('cargo')}
                        required
                    />
                    {touchedFields.has('cargo') && formErrors.cargo && (
                        <p style={{ color: 'red' }}>{formErrors.cargo}</p>
                    )}

                    <p>Ao continuar, esteja ciente da <a href="#">política de privacidade</a> da IpiCred</p>

                    <Button
                        isValid={isFormValid}
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Continuar'}
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default StepOne;
