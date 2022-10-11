import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, } from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { alertCircleOutline, barChartOutline, heartSharp, hourglassOutline, keyOutline, logOutOutline, personOutline, sendOutline, walletOutline, } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Seu número',
    url: '/page/Number',
    iosIcon: heartSharp,
    mdIcon: heartSharp
  },
  {
    title: 'Linha do tempo',
    url: '/page/Timestamp',
    iosIcon: hourglassOutline,
    mdIcon: hourglassOutline
  },
  {
    title: 'Independência Financeira',
    url: '/page/IF',
    iosIcon: keyOutline,
    mdIcon: keyOutline
  },
  {
    title: 'Gestão de Riscos',
    url: '/page/risk-management',
    iosIcon: alertCircleOutline,
    mdIcon: alertCircleOutline
  },
  {
    title: 'Carteira & Investimentos',
    url: '/page/investiments',
    iosIcon: walletOutline,
    mdIcon: walletOutline
  },
  {
    title: 'Destino da Renda',
    url: '/page/Spam',
    iosIcon: sendOutline,
    mdIcon: sendOutline
  },
  {
    title: 'Meu progresso',
    url: '/page/progress',
    iosIcon: barChartOutline,
    mdIcon: barChartOutline
  },
];

const labels = [
  {
    title: 'Meu perfil',
    icon: personOutline
  }, {
    title: 'Sair',
    icon: logOutOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Cake Invest</IonListHeader>
          <IonNote>walkr.app</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={label.icon} />
              <IonLabel>{label.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
