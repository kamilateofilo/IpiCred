/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import { Form, TextWrapper } from "../../styled";
import { Input } from "../../../../styles/Input";
import { Select, SelectWrapper } from "../../../../styles/Select";
import ModalButton from "../../../../Componetes/ModalButton/ModalButton";
import { FormData } from "../../ContactForm";

interface StepProps {
    formData: FormData;
    onFormDataChange: (data: Partial<FormData>) => void;
    prevStep: () => void;
    handleSubmit: () => void;
    isSubmitting: boolean;
}

export const StepTwo = ({ formData, onFormDataChange, handleSubmit }: StepProps) => {
    const [stateList, setStateList] = useState<string[]>([]);
    const [municipiosList, setMunicipiosList] = useState<string[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    useEffect(() => {
        fetchStates();
    }, []);

    useEffect(() => {
        validateForm();
    }, [touchedFields, formData]);

    const fetchStates = async () => {
        try {
            const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            const data = await response.json();
            const stateAbbreviations = data.map((state: { sigla: string }) => state.sigla);
            const sortedStates = stateAbbreviations.sort();
            setStateList(sortedStates);
        } catch (error) {
            console.error("Erro ao buscar estados:", error);
        }
    };

    const fetchMunicipios = async (state: string) => {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`);
            const data = await response.json();
            const municipios = data.map((municipio: { nome: string }) => municipio.nome);
            setMunicipiosList(municipios);
        } catch (error) {
            console.error("Erro ao buscar municípios:", error);
            setMunicipiosList([]);
        }
    };

    const validateNomeCooperativa = (value: string) => {
        if (value.trim() === "") return "Nome da cooperativa é obrigatório.";
        return "";
    };

    const validateNumeroCooperados = (value: string) => {
        if (!/^\d+$/.test(value) || parseInt(value, 10) <= 0) return "Número total de cooperados é obrigatório.";
        return "";
    };

    const validateForm = () => {
        const errorsTemp: { [key: string]: string } = {};
        let isValid = true;


        if (!formData.nome_cooperativa.trim()) {
            errorsTemp.nome_cooperativa = validateNomeCooperativa(formData.nome_cooperativa);
            isValid = false;
        }

        if (!/^\d+$/.test(formData.numero_cooperados) || parseInt(formData.numero_cooperados, 10) <= 0) {
            errorsTemp.numero_cooperados = validateNumeroCooperados(formData.numero_cooperados);
            isValid = false;
        }

        if (!formData.uf) {
            errorsTemp.uf = "Estado é obrigatório.";
            isValid = false;
        }

        if (!formData.municipio) {
            errorsTemp.municipio = "Município é obrigatório.";
            isValid = false;
        }

        setErrors(errorsTemp);
        setIsFormValid(isValid);
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;


        onFormDataChange({
            ...formData,
            [name]: value
        });


        let error = "";
        if (name === "nome_cooperativa") {
            error = validateNomeCooperativa(value);
        } else if (name === "numero_cooperados") {
            error = validateNumeroCooperados(value);
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));

    }, [formData, onFormDataChange]);

    const handleSelectChangeCombined = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;


        onFormDataChange({
            ...formData,
            [name]: value
        });


        if (name === 'uf') {
            fetchMunicipios(value);
        }

    }, [formData, onFormDataChange]);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setTouchedFields(prevTouched => ({
            ...prevTouched,
            [name]: true
        }));
    }, []);

    return (
        <>
            <div>
                <Form>
                    <TextWrapper>
                        <h3>Me conta um pouco sobre sua cooperativa?</h3>
                    </TextWrapper>

                    <Input
                        type="text"
                        placeholder='Nome da cooperativa'
                        name="nome_cooperativa"
                        value={formData.nome_cooperativa}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touchedFields.nome_cooperativa && errors.nome_cooperativa && <p style={{ color: 'red' }}>{errors.nome_cooperativa}</p>}

                    <Input
                        type="number"
                        placeholder='Número total de cooperados'
                        name="numero_cooperados"
                        value={formData.numero_cooperados}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touchedFields.numero_cooperados && errors.numero_cooperados && <p style={{ color: 'red' }}>{errors.numero_cooperados}</p>}

                    <SelectWrapper>
                        <Select
                            name='uf'
                            onChange={handleSelectChangeCombined}
                            onBlur={handleBlur}
                            value={formData.uf}
                        >
                            <option value="">UF</option>
                            {stateList.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </Select>
                        {touchedFields.uf && errors.uf && <p style={{ color: 'red' }}>{errors.uf}</p>}

                        <Select
                            name='municipio'
                            onChange={handleSelectChangeCombined}
                            onBlur={handleBlur}
                            value={formData.municipio}
                        >
                            <option value="">Município</option>
                            {municipiosList.map((municipio) => (
                                <option key={municipio} value={municipio}>{municipio}</option>
                            ))}
                        </Select>
                        {touchedFields.municipio && errors.municipio && <p style={{ color: 'red' }}>{errors.municipio}</p>}
                    </SelectWrapper>
                </Form>
                <ModalButton
                    onClick={handleSubmit || (() => {})}
                    disabled={!isFormValid}
                    isValid={isFormValid} 
                />
            </div>
        </>
    );
};

export default StepTwo;
