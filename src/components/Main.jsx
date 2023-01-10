import React from "react";
import HornedBeast from "./HornedBeast";
import "../styles/Main.css";
import { hornedBeastData } from "../data";
import Card from "react-bootstrap/Card";

class Main extends React.Component {
  render() {
    return (
      <Card>
        {hornedBeastData.map((el) => {
          return (
            <HornedBeast
              title={el.title}
              image_url={el.image_url}
              alt={el.alt}
              description={el.description}
              horns={el.horns}
            />
          );
        })}
      </Card>
    );
  }
}

export default Main;
