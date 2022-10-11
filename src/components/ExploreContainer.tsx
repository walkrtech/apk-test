import { IonImg } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonImg src='https://landing-vendas.s3.amazonaws.com/landing-fria/icons/walkr-w.svg'></IonImg>
      <p>Meu número</p>
    </div>
  );
};

export default ExploreContainer;
