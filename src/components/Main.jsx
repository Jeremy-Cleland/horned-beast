import React from "react";
import HornedBeast from "./HornedBeast";
import "../styles/Main.css";
import Card from "react-bootstrap/Card";

class Main extends React.Component {
  render() {
    return (
      <Card>
        {this.props.data.map((el) => {
          return (
            <HornedBeast
              title={el.title}
              image={el.image_url}
              keyword={el.keyword}
              key={el.id}
              alt={el.description}
              description={el.description}
              horns={el.horns}
              handleOpenModal={this.props.handleOpenModal}
            />
          );
        })}
      </Card>
    );
  }
}

export default Main;
