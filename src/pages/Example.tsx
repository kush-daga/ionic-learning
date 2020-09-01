import React from "react";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

import { arrowBack } from "ionicons/icons";
interface ContainerProps {}
const Example: React.FC<ContainerProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            paddingBottom: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IonButtons>
            <IonBackButton icon={arrowBack} text="" />
          </IonButtons>
          <IonTitle size="large">Room Control</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle>Services page</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Example;
