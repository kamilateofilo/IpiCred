import 
{ PrivacyPolicyContainer,
PrivacyPolicyTitle, 
PrivacyPolicyContent, 
ParagraphLGPD,
ContentTitle,
ContentParagraph,
ContentList } from "./styled";




export const PrivacyPolicyText = () => {
    return(
        <>
            <PrivacyPolicyContainer>
                <PrivacyPolicyTitle>Nossa política de privacidade</PrivacyPolicyTitle>
            </PrivacyPolicyContainer>

            <PrivacyPolicyContent>
                <ParagraphLGPD>
                    <p>A <b>IpiCred</b> está comprometida em proteger a privacidade e a segurança dos dados pessoais de seus usuários, em conformidade com a <b>Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.</b> Esta Política de Privacidade detalha como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais. Ao utilizar nossos serviços, você concorda com os termos aqui descritos.</p>
                </ParagraphLGPD>

                <ContentTitle>
                     Coleta de Informações Pessoais
                </ContentTitle>

                <ContentParagraph>
                     Coletamos informações pessoais necessárias para a prestação de nossos serviços, incluindo:
                </ContentParagraph>

                <ContentList>
                    <ul>
                        <li>Nome completo;</li>
                        <li>CPF e RG;</li>
                        <li>Informações de contato (e-mail, telefone);</li>
                        <li>Dados da propriedade rural (endereço, localização geográfica - latitude e longitude);</li>

                    </ul>
                </ContentList>

                <ContentParagraph>
                  Esses dados são coletados diretamente de você ou fornecidos por cooperativas parceiras com o seu consentimento, conforme permitido pela LGPD.   
                </ContentParagraph>

               <ContentTitle>
                  Finalidade da Coleta de Dados
               </ContentTitle>

               <ContentParagraph>
                  As informações pessoais são utilizadas para:
               </ContentParagraph>

               <ContentList>
                    <ul>
                        <li>Processar e avaliar solicitações de crédito;</li>
                        <li>Criar perfis de crédito personalizados e fornecer recomendações financeiras;</li>
                        <li>Cumprir obrigações legais e regulatórias;</li>
                        <li>Melhorar a qualidade dos nossos serviços e funcionalidades da plataforma;</li>
                        <li>Enviar comunicações e informações sobre produtos, serviços e promoções da IpiCred que possam ser de seu interesse.</li>
                    </ul>
               </ContentList>

               <ContentParagraph>
                   A IpiCred se compromete a tratar os dados somente para as finalidades específicas e legítimas descritas acima, em conformidade com o <b>princípio da finalidade</b> da LGPD.
               </ContentParagraph>

               <ContentTitle>
                   Compartilhamento de Dados Pessoais
               </ContentTitle>

               <ContentParagraph>
                   Seus dados podem ser compartilhados com:
               </ContentParagraph>

               <ContentList>
                  <ul>
                    <li>Instituições financeiras, bancos e cooperativas para fins de análise de crédito e aprovação de operações financeiras.</li>
                    <li>Autoridades reguladoras, quando exigido por lei</li>
                  </ul>
               </ContentList>

               <ContentParagraph>
                   O compartilhamento de dados será feito <b>somente mediante o seu consentimento</b> ou quando for necessário para o cumprimento de obrigações legais, sempre observando os princípios da <b>transparência</b> e <b>necessidade</b> previstos na LGPD.
               </ContentParagraph>

               <ContentTitle>
                  Segurança dos Dados
               </ContentTitle>

               <ContentParagraph>
                  Implementamos medidas de segurança técnicas e administrativas para proteger suas informações pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida. Utilizamos criptografia, controle de acesso e monitoramento contínuo 
               </ContentParagraph>
               
               <ContentTitle>
                   Seus Direitos Sob a LGPD
               </ContentTitle>

               <ContentParagraph>
                   De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
               </ContentParagraph>

               <ContentList>
                    <ul>
                        <li><b>Acesso:</b> Solicitar detalhes sobre os dados pessoais que possuímos sobre você;</li>
                        <li><b>Correção:</b> Solicitar a atualização ou correção de seus dados pessoais;</li>
                        <li><b>Eliminação:</b> Solicitar a exclusão de seus dados pessoais quando não forem mais necessários para as finalidades informadas, salvo exceções previstas em lei;</li>
                        <li><b>Portabilidade:</b> Solicitar a transferência de seus dados para outro prestador de serviços;</li>
                        <li><b>Revogação de Consentimento:</b> A qualquer momento, você pode revogar o consentimento previamente concedido para o tratamento de seus dados.</li>
                    </ul>
               </ContentList>

               <ContentParagraph>
                    Você pode exercer seus direitos entrando em contato conosco pelo e-mail: <u>contato@ipicred.com.br</u>
               </ContentParagraph>

               <ContentTitle>
                  Retenção de Dados Pessoais
               </ContentTitle>

               <ContentParagraph>
                  Os dados pessoais serão armazenados pela IpiCred pelo período necessário para o cumprimento das finalidades para as quais foram coletados, ou conforme exigido por obrigações legais e regulatórias. Após esse período, os dados serão eliminados de forma segura.
               </ContentParagraph>

               <ContentTitle>
                   Cookies e Tecnologias de Rastreamento
               </ContentTitle>

               <ContentParagraph>
                   Utilizamos cookies e outras tecnologias de rastreamento para melhorar a experiência de navegação, personalizar o conteúdo e coletar informações sobre o uso da plataforma. Você pode gerenciar as preferências de cookies diretamente em seu navegador.
               </ContentParagraph>

               <ContentTitle>
                   Alterações na Política de Privacidade
               </ContentTitle>


               <ContentParagraph>
                  Esta Política de Privacidade poderá ser alterada periodicamente para garantir a conformidade com a legislação vigente ou para melhorar nossos processos internos. Qualquer alteração relevante será comunicada por e-mail ou na própria plataforma.
               </ContentParagraph>

               <ContentTitle>
                   Contato
               </ContentTitle>

               <ContentParagraph>
                    Se você tiver qualquer dúvida sobre esta Política de Privacidade ou desejar exercer seus direitos sob a LGPD, entre em contato conosco:
                    E-mail: contato@ipicred.com.br
               </ContentParagraph>
            </PrivacyPolicyContent>   
        </> 
    );
}

export default PrivacyPolicyText;