import Cooperado from '../../assets/cadastro.png';
import { Card, CardHeader, CardBody, Image, CardText, Button } from './BannerCooperadoStyles';

function BannerCooperado() {
  return (
    <Card>
      <CardHeader>Cooperados</CardHeader>
      <CardBody>
        <Image src={Cooperado} alt="Cadastro" />
        <CardText>Você ainda não possui nenhum membro cadastrado. 
            <br />
            Cadastre seu primeiro cooperado agora.</CardText>
        <Button href="#">Adicionar novo associado</Button>
      </CardBody>
    </Card>
  );
}

export default BannerCooperado;
