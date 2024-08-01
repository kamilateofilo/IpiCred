import React, { useState, useEffect } from 'react';
import { Input } from "../../styles/Input";
import { TextWrapper, Form } from "../CooperativeResponsibleForm/styled";
import { Select, SelectWrapper } from "../../styles/Select";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalButton from "../ModalButton/ModalButton";

export function CooperativeForm() {
    const [stateList, setStateList] = useState<string[]>([]);
    const [municipiosList, setMunicipiosList] = useState<string[]>([]);
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedMunicipio, setSelectedMunicipio] = useState<string>('');

    useEffect(() => {
        fetchStates();
    }, []);

    useEffect(() => {
        if (selectedState) {
            fetchMunicipios(selectedState);
        } else {
            setMunicipiosList([]);
        }
    }, [selectedState]);

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

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(event.target.value);
    };

    const handleMunicipioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMunicipio(event.target.value);
    };

    return (
        <Form>
            <TextWrapper>
                <h3>Me conta um pouco sobre sua cooperativa?</h3>
            </TextWrapper>

            <Input 
                placeholder="Nome da cooperativa" 
                required 
                type="text" 
            />

            <Input 
                placeholder="Número total de cooperados" 
                required 
                type="number" 
            />

            <SelectWrapper>
                <Select value={selectedState} onChange={handleStateChange}>
                    <option value="">UF</option>
                    {stateList.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </Select>

                <Select value={selectedMunicipio} onChange={handleMunicipioChange} disabled={!selectedState}>
                    <option value="">Município</option>
                    {municipiosList.map((municipio) => (
                        <option key={municipio} value={municipio}>{municipio}</option>
                    ))}
                </Select>
            </SelectWrapper>

            <ModalButton/>
        </Form>  
    );
}
