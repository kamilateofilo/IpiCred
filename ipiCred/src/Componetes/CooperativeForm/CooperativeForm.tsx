import { Input } from "../../styles/Input";
import { TextWrapper, Form } from "../CooperativeResponsibleForm/styled";
import { Select, SelectWrapper } from "../../styles/Select";
import "bootstrap/dist/css/bootstrap.min.css"; 
import ModalButton from "../ModalButton/ModalButton";



export function CooperativeForm() {
    return(
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
              <Select>
                  <option value="0">UF</option>
              </Select>

              <Select>
                  <option value="0">Município</option>
              </Select>
          </SelectWrapper>

          <ModalButton/>
      </Form>  
    );
}