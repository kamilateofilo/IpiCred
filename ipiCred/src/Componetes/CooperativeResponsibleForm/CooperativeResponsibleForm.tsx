import { Input } from "../../styles/Input";
import { Select } from "../../styles/Select"
import { Form, TextWrapper } from "./styled";




export const CooperativeResponsibleForm = () => {
    return(
        <Form>
                <TextWrapper>
                    <h3>Boas Vindas á IpiCred!</h3>
                    <p>Preencha com os dados do seu negócio que entraremos em contato com você.</p>
                    <h3>Bora começar?</h3>
                </TextWrapper>

                <Input
                type="text"
                placeholder="Seu nome completo"
                />

                <Input
                type="email"
                placeholder="E-mail da cooperativa"
                />

                <Input
                type="number"
                placeholder="Telefone para contato"
                />

                <Select>
                    <option value="0" style={{color: "#49454F;"}}>Atividade da cooperativa</option>
                    <option value="1">Extrativista</option>
                    <option value="2">Pecuária</option>
                    <option value="3">Aquicultura</option>
                    <option value="4">Fruticultura</option>
                    <option value="5">Horticultura</option>
                    <option value="6">Silvicultura</option>
                    <option value="7">Pesca</option>
                    <option value="8">Agricultura</option>
                    <option value="9">Outro</option>
                </Select>
            

                <Input
                type="text"
                placeholder="Seu cargo"
                />

                <p>Ao continuar, esteja ciente da <a href="#">política de privacidade</a> da IpiCred
                </p>
        </Form>
    );
};