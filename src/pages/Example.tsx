import React from "react";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonItem,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonCardContent,
  IonToggle,
} from "@ionic/react";

import { arrowBack, bulb } from "ionicons/icons";
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
        <IonTitle
          size="large"
          style={{
            margin: "20px auto",
            width: "fit-content",
            height: "fit-content",
            textAlign: "center",
          }}
        >
          Room 404
        </IonTitle>
        <IonCard>
          <IonCardContent>
            <IonCardSubtitle style={{ fontSize: "16px", color: "white" }}>
              ROOM STATUS
            </IonCardSubtitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div>
                <h5>Humidity</h5>
                <h3>20%</h3>
              </div>
              <div>
                <h5>Air Quality</h5>
                <h3>28</h3>
              </div>
              <div>
                <h5>WiFi</h5>
                <h3>2 mb/s</h3>
              </div>
              <div>
                <h5>Temp</h5>
                <h3>21</h3>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ color: "white" }}>TURN ON ALL LIGHT</h3>
              <IonToggle></IonToggle>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>

      {
        // Cards
      }
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard style={{ height: "150px" }}>
                <IonCardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    padding: "30px 0",
                  }}
                >
                  <IonIcon src={bulb} style={{ fontSize: "30px" }}></IonIcon>
                  <div>
                    <IonCardTitle
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        marginBottom: "5px",
                      }}
                    >
                      LIGHT
                    </IonCardTitle>
                    <IonCardSubtitle
                      style={{ fontSize: "10px", textAlign: "center" }}
                    >
                      Intensity 25%
                    </IonCardSubtitle>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard style={{ height: "150px" }}>
                <IonCardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    padding: "30px 0",
                  }}
                >
                  <IonIcon src={bulb} style={{ fontSize: "30px" }}></IonIcon>
                  <div>
                    <IonCardTitle
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        marginBottom: "5px",
                      }}
                    >
                      LIGHT
                    </IonCardTitle>
                    <IonCardSubtitle
                      style={{ fontSize: "10px", textAlign: "center" }}
                    >
                      Intensity 25%
                    </IonCardSubtitle>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard style={{ height: "150px" }}>
                <IonCardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    padding: "30px 0",
                  }}
                >
                  <IonIcon src={bulb} style={{ fontSize: "30px" }}></IonIcon>
                  <div>
                    <IonCardTitle
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        marginBottom: "5px",
                      }}
                    >
                      LIGHT
                    </IonCardTitle>
                    <IonCardSubtitle
                      style={{ fontSize: "10px", textAlign: "center" }}
                    >
                      Intensity 25%
                    </IonCardSubtitle>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard style={{ height: "150px" }}>
                <IonCardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    padding: "30px 0",
                  }}
                >
                  <IonIcon src={bulb} style={{ fontSize: "30px" }}></IonIcon>
                  <div>
                    <IonCardTitle
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        marginBottom: "5px",
                      }}
                    >
                      LIGHT
                    </IonCardTitle>
                    <IonCardSubtitle
                      style={{ fontSize: "10px", textAlign: "center" }}
                    >
                      Intensity 25%
                    </IonCardSubtitle>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Example;
