import { useEffect, useState } from "react";
import { Form, TextWrapper } from "../../styled";
import { Input } from "../../../../styles/Input";
import { Select, SelectWrapper } from "../../../../styles/Select";
import ModalButton from "../../../../Componetes/ModalButton/ModalButton";
import { FormData } from "../../ContactForm";
import BackButton from "../../../../Componetes/BackButton/BackButton";

interface StepProps {
    formData: FormData;
    onFormDataChange: (data: FormData) => void;
    prevStep: () => void;
    handleSubmit?: () => void;
}

export const StepTwo = ({ formData, onFormDataChange, handleSubmit, prevStep }: StepProps) => {
    const [stateList, setStateList] = useState<string[]>([]);
    const [municipiosList, setMunicipiosList] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        onFormDataChange({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        fetchStates();
    }, []);

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

    const handleSelectChangeCombined = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name === 'uf') {
            onFormDataChange({
                ...formData,
                [name]: value
            });
            fetchMunicipios(value);
        } else {
            onFormDataChange({
                ...formData,
                [name]: value
            });
        }
    };


    return (
        <><BackButton action={() => prevStep()} /><>
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
                        onChange={handleChange} />

                    <Input
                        type="number"
                        placeholder='Numero total de cooperados'
                        name="numero_cooperados"
                        value={formData.numero_cooperados}
                        onChange={handleChange} />

                    <SelectWrapper>
                        <Select
                            name='uf'
                            onChange={handleSelectChangeCombined}
                            value={formData.uf}
                        >
                            <option value="">UF</option>
                            {stateList.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </Select>

                        <Select
                            name='municipio'
                            onChange={handleSelectChangeCombined}
                            value={formData.municipio}
                        >
                            <option value="">Município</option>
                            {municipiosList.map((municipio) => (
                                <option key={municipio} value={municipio}>{municipio}</option>
                            ))}
                        </Select>
                    </SelectWrapper>
                </Form>
                <ModalButton actionClick={handleSubmit} />
            </div></></>
    );
};

export default StepTwo;