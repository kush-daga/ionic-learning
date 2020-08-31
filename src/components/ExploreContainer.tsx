import React from "react";
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
} from "@ionic/react";

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
    </>
  );
};

export default ExploreContainer;
