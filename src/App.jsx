import React from "react";
import { hornedBeastData } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ShowModal from "./components/ShowModal";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: "",
      data: hornedBeastData,
      sortedData: hornedBeastData,
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

  handleSelect = (event) => {
    if (event.target.value === "default") {
      this.setState({
        sortedData: this.state.data,
      });
    } else {
      this.setState({
        sortedData: this.state.data.filter(
          (obj) => obj.horns === +event.target.value
        ),
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <Filter data={hornedBeastData} handleSelect={this.handleSelect} />
        <Main
          handleOpenModal={this.handleOpenModal}
          data={this.state.sortedData}
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
