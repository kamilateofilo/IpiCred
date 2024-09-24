import React, { useState, useEffect, useRef } from 'react';
import { FormData } from "../../ContactForm";
import { Button, Form, TextWrapper, Wrapper } from "../../styled";
import { Input } from "../../../../styles/Input";
import { SelectWrapper, SelectButton, CustomCheckboxContainer, CustomCheckbox } from "../../../../styles/MultiSelect";
import { Link } from 'react-router-dom';

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
    const [isPrivacyChecked, setIsPrivacyChecked] = useState<boolean>(false); 
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (formData.atividade_cooperativa) {
            setSelectedOptions(new Set(formData.atividade_cooperativa));
        }
    }, [formData.atividade_cooperativa]);

    const validateField = (name: keyof FormData, value: string | string[]) => {
        let error = '';
    
        switch (name) {
            case 'nome_completo':
                if (typeof value === 'string' && !value.trim()) error = 'Nome completo é obrigatório.';
                break;
            case 'email':
                if (typeof value === 'string' && (!value || !/\S+@\S+\.\S+/.test(value))) error = 'E-mail inválido. Deve estar no formato exemplo@gmail.com';
                break;
            case 'telefone_contato':
                if (typeof value === 'string') {
                    const cleaned = value.replace(/\D/g, '');
                    if (cleaned.length < 10 || cleaned.length > 11) {
                        error = 'Telefone inválido. Deve ter 10 ou 11 dígitos.';
                    } else if (!/^\d{10,11}$/.test(cleaned)) {
                        error = 'Telefone inválido. Deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.';
                    }
                }
                break;
            case 'cargo':
                if (typeof value === 'string' && !value.trim()) error = 'Cargo é obrigatório.';
                break;
            case 'atividade_cooperativa':
                if (Array.isArray(value) && value.length === 0) error = 'Pelo menos uma opção deve ser selecionada.';
                break;
            default:
                break;
        }
    
        return error;
    };
    

    const formatPhoneNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        let formatted = '';
    
        if (cleaned.length <= 2) {
            formatted = `(${cleaned}`;
        } else if (cleaned.length <= 5) {
            formatted = `(${cleaned.slice(0, 2)})${cleaned.slice(2)}`;
        } else if (cleaned.length <= 9) {
            formatted = `(${cleaned.slice(0, 2)})${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
        } else {
            formatted = `(${cleaned.slice(0, 2)})${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
        }
    
        return formatted;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
    
        if (name === 'telefone_contato') {
            const formattedValue = formatPhoneNumber(value);
            onFormDataChange({
                ...formData,
                [name]: formattedValue
            });
        } else if (name === 'atividade_cooperativa') {
            const updatedOptions = new Set(selectedOptions);
            if (checked) {
                updatedOptions.add(value);
            } else {
                updatedOptions.delete(value);
            }
            setSelectedOptions(updatedOptions);
            onFormDataChange({
                ...formData,
                atividade_cooperativa: Array.from(updatedOptions)
            });
        } else if(name === 'privacy_check'){
            setIsPrivacyChecked(checked);
        }else{
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
            const value = formData[typedKey];
            const error = validateField(typedKey, value as string | string[]);
            if (error) acc[typedKey] = error;
            return acc;
        }, {} as Record<keyof FormData, string>);

        if (selectedOptions.size === 0) {
            errors.atividade_cooperativa = 'Pelo menos uma opção deve ser selecionada.';
        }

        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0 && isPrivacyChecked);
    };

    useEffect(() => {
        validateAllFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, selectedOptions, isPrivacyChecked]);

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
                        type="text"
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

                    <Wrapper>
                        <input 
                        type="checkbox" 
                        name="privacy_check"
                        checked={isPrivacyChecked}
                        onChange={handleChange}
                        />
                        <p>Ao continuar, esteja ciente da <Link to="/PoliticaDePrivacidade">política de privacidade</Link> da IpiCred</p>
                    </Wrapper>
                    {touchedFields.has('privacy_check') && formErrors.privacy_check && (
                        <p style={{ color: 'red' }}>{formErrors.privacy_check}</p>
                    )}
                   
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