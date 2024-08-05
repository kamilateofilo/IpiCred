import { PageContainer, CardContainer, CardHeader, CardBody, InnerCard, Table, StatusButton } from './AnalisesStyles';

function Analises() {
  const tableData = [
    { id: 1, submissao: '2024-08-01', cooperado: 'Cooperado A', solicitacoes: 5, status: 'Concluído' },
    { id: 2, submissao: '2024-08-02', cooperado: 'Cooperado B', solicitacoes: 3, status: 'Pendente' },
    { id: 3, submissao: '2024-08-03', cooperado: 'Cooperado C', solicitacoes: 2, status: 'Em Progresso' },
  ];

  return (
    <PageContainer>
      <CardContainer>
        <CardHeader>
          Histórico de análises
        </CardHeader>
        <CardBody>
          <InnerCard>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Submissão de Análise</th>
                  <th>Cooperado Solicitante</th>
                  <th>Nº de Solicitações</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.submissao}</td>
                    <td>{item.cooperado}</td>
                    <td>{item.solicitacoes}</td>
                    <td><StatusButton status={item.status}>{item.status}</StatusButton></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </InnerCard>
        </CardBody>
      </CardContainer>
    </PageContainer>
  );
}

export default Analises;
