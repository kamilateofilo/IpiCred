import { Container, TextWrapper, CardBody, CardTitle, CardLabel, CardCustom1, EditIcon, CardCustom2, CardCustom3, CardCustom4, FlexContainer, CardContainer, ContainerLabel, LabelFirstColumn, LabelSecondColumn, LabelDependents, StyledButton, StyledLink, CardContainer2, ConteinerLabel, LabelSecondColumnCard1, Tag  } from "./styled";
import { faEdit } from '@fortawesome/free-solid-svg-icons';




export const CheckData = () => {

    return(
        <Container>
            <TextWrapper>
              <h1>Dados encontrados: confirmação de informações</h1>
              <h3>Verificar dados</h3>
              <p>Ótimo! Encontramos seus dados. Por favor, verifique as informações abaixo para garantir que estão corretas antes de prosseguir com sua solicitação de crédito.</p>
            </TextWrapper>

            <FlexContainer>
                <CardContainer>
                    <CardCustom1>
                        <EditIcon icon={faEdit} />
                        <CardBody>
                            <CardTitle>Dados gerais</CardTitle>
                                <hr />
                                    <LabelFirstColumn> 
                                        <CardLabel>
                                            Nome completo:
                                           <p>Antônio da Silva Costa</p>
                                        </CardLabel> 

                                        <CardLabel>
                                            CPF: 
                                         <p>214.578.451-58</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Estado civil:
                                          <p>Casado</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Município:
                                            <p>Manacapuru</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Endereço:
                                            <p>Rua Sol Nascente, n° 98</p>
                                        </CardLabel>
                                    </LabelFirstColumn>

                                    <LabelSecondColumnCard1>
                                        <CardLabel>
                                            Data de nascimento:
                                            <p>02/10/1974</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Celular:
                                            <p>92 9 9245-7831</p>
                                        </CardLabel>

                                        <CardLabel>
                                            UF:
                                            <p>Amazonas - AM</p>
                                        </CardLabel>
                                    </LabelSecondColumnCard1>
                        </CardBody>
                    </CardCustom1>
                    <CardCustom2>
                        <EditIcon icon={faEdit} />
                        <CardBody>
                            <CardTitle>Dependentes</CardTitle>
                            <hr />
                            <ContainerLabel>
                                <LabelDependents>
                                    <CardLabel>
                                        Dependente 1:
                                        <p>Maria Lucia da Silva Costa - Esposa</p>
                                    </CardLabel>
                                    <CardLabel>
                                        Dependente 2:
                                        <p>Gabriel da Silva Costa - Filho</p>
                                    </CardLabel>
                                    <CardLabel>
                                        Dependente 3:
                                        <p>Matheus da Silva Costa - Filho</p>
                                    </CardLabel>
                                </LabelDependents> 
                            </ContainerLabel>
                        </CardBody>
                    </CardCustom2>
                </CardContainer>
                    <CardContainer2>
                        <CardCustom3>
                            <EditIcon icon={faEdit} />
                            <CardBody>
                                <CardTitle>Dados da propriedade</CardTitle>
                                <hr />
                                <ContainerLabel>
                                    <LabelFirstColumn>
                                        <CardLabel>
                                            Denominação do imóvel:
                                            <p>Sítio Recanto dos Deuses</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Município:
                                            <p>Manacapuru</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Nome do titular:
                                            <p>Antônio da Silva Costa</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Condição da pessoa:
                                            <p>Proprietário</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Percentual:
                                            <p>100%</p>
                                        </CardLabel>

                                        <CardLabel>
                                            UF:
                                            <p> Amazonas - AM</p>
                                        </CardLabel>

                                        <CardLabel>
                                            N° CCIR:
                                            <p>XXXXXXXXXXX</p>
                                        </CardLabel>

                                    </LabelFirstColumn>

                                    <LabelSecondColumn>
                                        <CardLabel>
                                            Área Total do Imóvel:
                                            <p>XXXX</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Código do Imóvel Rural:
                                            <p>XXX</p>
                                        </CardLabel>

                                        <CardLabel>
                                            N° CAF:
                                            <p>35386020190148</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Validade:
                                            <p>07/2026</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Agente Emissor:
                                            <p>Amazonas - AM</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Entidade Emissora:
                                            <p>Proprietário</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Data da Emissão:
                                            <p>12/05/2010</p>
                                        </CardLabel>
                                    </LabelSecondColumn>
                                </ContainerLabel>
                            </CardBody>
                        </CardCustom3>
                        <CardCustom4>
                            <EditIcon icon={faEdit} />
                            <CardBody>
                                <CardTitle>CAR</CardTitle>
                                    <hr />
                                    <CardLabel>
                                    Registro de Inscrição do CAR: 
                                      <p>AM-1301902-4AA449D1EFF643C284483ABA265FD176</p>
                                    </CardLabel>
                                    <ConteinerLabel>
                                        <CardLabel>
                                            Nome:
                                            <p>Antônio da Silva Costa</p>
                                        </CardLabel>

                                        <CardLabel>
                                            CPF:
                                            <p>214.578.451-58</p>
                                        </CardLabel>

                                        <CardLabel>
                                            Status:
                                            <Tag>Ativo</Tag>
                                        </CardLabel>
                                    </ConteinerLabel>
                                        <CardLabel>
                                            Condição externa:
                                            <p>Aguardando Análise</p>
                                        </CardLabel>
                            </CardBody>
                        </CardCustom4>
                    </CardContainer2>
            </FlexContainer>
            
           <StyledLink to="/dataSent">
                <StyledButton>
                    Enviar dados
                </StyledButton>
           </StyledLink>
        </Container>
    );
}

export default CheckData;