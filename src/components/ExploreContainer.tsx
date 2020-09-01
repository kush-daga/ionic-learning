import React, { useState } from "react";
import {
  IonContent,
  IonList,
  IonItem,
  IonText,
  IonAvatar,
  IonLabel,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonButton,
  IonIcon,
  IonInput,
} from "@ionic/react";
import { star } from "ionicons/icons";
interface ContainerProps {}

const listRaw = [
  {
    name: "Kush",
    desc: "Kush is a good boy",
  },
  {
    name: "Jay",
    desc: "jay is also a good boy",
  },
  {
    name: "Hemant",
    desc: "He is an ok boy, but cute",
  },
  {
    name: "Jaskee",
    desc: "he is also good :))",
  },
];
const ExploreContainer: React.FC<ContainerProps> = () => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <IonList>
        {listRaw.map((elem) => {
          return (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img
                    src={`https://source.unsplash.com/random/200x200`}
                    alt="New"
                  />
                </IonAvatar>
                <IonLabel className="ion-padding">
                  <h2>{elem.name}</h2>
                  <h3>{elem.desc}</h3>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption onClick={() => alert("hello")}>
                  Hello
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          );
        })}
      </IonList>
      <IonButton expand="full" color="secondary">
        <IonIcon slot="start" icon={star}></IonIcon>
        Hello World
      </IonButton>
      <h1>Enter Input</h1>
      <IonInput
        style={{ border: "1px solid" }}
        value={input}
        onIonChange={(e: any) => setInput(e.target.value)}
      ></IonInput>
    </>
  );
};

export default ExploreContainer;
