import Propostas from '../../assets/propostas.png';
import { Card, CardHeader, CardBody, Image, CardText, Button } from './BannerPropostaStyles.ts';

function BannerProposta() {
  return (
    <Card>
      <CardHeader>Propostas</CardHeader>
      <CardBody>
        <Image src={Propostas} alt="Cadastro" />
        <CardText>Você ainda não submeteu nenhuma proposta. 
            <br />
            Solicite a sua primeira proposta agora.</CardText>
        <Button href="#">Solicitar crédito</Button>
      </CardBody>
    </Card>
  );
}

export default BannerProposta;
