import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import Cooperado from '../../assets/cadastro.png';
import { Card, CardHeader, CardBody, Image, CardText, Button } from './BannerCooperadoStyles.ts';

function BannerCooperado() {
  const navigate = useNavigate(); // Use useNavigate para navegação

  const handleAddCooperado = () => {
    navigate('/multistepForm'); // Substitua pelo caminho correto para multistepForm.tsx
  };

  return (
    <Card>
      <CardHeader>Cooperados</CardHeader>
      <CardBody>
        <Image src={Cooperado} alt="Cadastro" />
        <CardText>Você ainda não possui nenhum membro cadastrado. 
            <br />
            Cadastre seu primeiro cooperado agora.</CardText>
        <Button onClick={handleAddCooperado}>Adicionar novo associado</Button>
      </CardBody>
    </Card>
  );
}

export default BannerCooperado;
