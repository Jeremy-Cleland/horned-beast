import React from "react";
import { hornedBeastData } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ShowModal from "./components/ShowModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: "",
    };
  }

  handleOpenModal = (title, image, description, horns) => {
    this.setState({
      showModal: true,
      selectedBeast: {
        title: title,
        image: image,
        description: description,
        horns: horns,
      },
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          handleOpenModal={this.handleOpenModal}
          hornedBeastData={hornedBeastData}
        />
        <ShowModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </>
    );
  }
}

export default App;
