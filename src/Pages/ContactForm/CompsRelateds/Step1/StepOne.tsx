import React, { useState, useEffect, useRef } from 'react';
import { FormData } from "../../ContactForm";
import { Button, Form, TextWrapper } from "../../styled";
import { Input } from "../../../../styles/Input";
import { SelectWrapper, SelectButton, CustomCheckboxContainer, CustomCheckbox } from "../../../../styles/MultiSelect";

interface StepProps {
    formData: FormData;
    onFormDataChange: (data: Partial<FormData>) => void;
    nextStep?: () => void;
    prevStep?: () => void;
    handleSubmit?: () => void;
    isSubmitting: boolean;
    error?: string | null;
}

const options = [
    { label: 'Agricultura', value: 'Agricultura' },
    { label: 'Aquicultura', value: 'Aquicultura' },
    { label: 'Extrativista', value: 'Extrativista' },
    { label: 'Fruticultura', value: 'Fruticultura' },
    { label: 'Horticultura', value: 'Horticultura' },
    { label: 'Silvicultura', value: 'Silvicultura' },
    { label: 'Pecuária', value: 'Pecuária' },
    { label: 'Pesca', value: 'Pesca' },
    { label: 'Outro', value: 'Outro' },
];

export const StepOne = ({ formData, onFormDataChange, nextStep, isSubmitting }: StepProps) => {
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
    const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (formData.atividade_cooperativa) {
            setSelectedOptions(new Set(formData.atividade_cooperativa.split(', ').filter(Boolean)));
        }
    }, [formData.atividade_cooperativa]);

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
                // eslint-disable-next-line no-case-declarations
                const cleaned = value.replace(/\D/g, '');
                if (!cleaned || !/^\d{11}$/.test(cleaned)) error = 'Telefone inválido. Deve estar no formato (XX)XXXXX-XXXX.';
                break;
            case 'cargo':
                if (!value.trim()) error = 'Cargo é obrigatório.';
                break;
            case 'atividade_cooperativa':
                if (selectedOptions.size === 0) error = 'Pelo menos uma opção deve ser selecionada.';
                break;
            default:
                break;
        }

        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        if (type === 'checkbox') {
            const updatedOptions = new Set(selectedOptions);
            if (checked) {
                updatedOptions.add(value);
            } else {
                updatedOptions.delete(value);
            }
            setSelectedOptions(updatedOptions);

            onFormDataChange({
                ...formData,
                atividade_cooperativa: Array.from(updatedOptions).join(', ')
            });
        } else {
            onFormDataChange({
                ...formData,
                [name]: value
            });
        }

        setTouchedFields(prev => new Set(prev.add(name)));
    };

    const validateAllFields = () => {
        const errors = Object.keys(formData).reduce((acc, key) => {
            const typedKey = key as keyof FormData;
            const error = validateField(typedKey, formData[typedKey]);
            if (error) acc[typedKey] = error;
            return acc;
        }, {} as Record<keyof FormData, string>);


        if (selectedOptions.size === 0) {
            errors.atividade_cooperativa = 'Pelo menos uma opção deve ser selecionada.';
        }

        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    useEffect(() => {
        validateAllFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, selectedOptions]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleBlur = (name: string) => {
        setTouchedFields(prev => new Set(prev.add(name)));
        validateAllFields();
    };

    const handleSubmit = () => {
        validateAllFields();

        if (isFormValid) {
            nextStep && nextStep();
        }
    };

    return (
        <>
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
                        onBlur={() => handleBlur('nome_completo')}
                        required
                    />
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

                    <SelectWrapper>
                        <SelectButton onClick={() => setDropdownOpen(prev => !prev)}>
                            {selectedOptions.size > 0
                                ? `${Array.from(selectedOptions).join(', ')}`
                                : 'Clique para selecionar a atividade da cooperativa'}
                        </SelectButton>

                        <CustomCheckboxContainer ref={dropdownRef} open={dropdownOpen}>
                            {options.map((option) => (
                                <CustomCheckbox key={option.value}>
                                    <input
                                        type="checkbox"
                                        name="atividade_cooperativa"
                                        value={option.value}
                                        checked={selectedOptions.has(option.value)}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur('atividade_cooperativa')}
                                    />
                                    {option.label}
                                </CustomCheckbox>
                            ))}
                        </CustomCheckboxContainer>
                    </SelectWrapper>
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
