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
      selectedBeastTitle: "Title",
      selectedBeastDescription: "Description ",
      selectedBeastImage_Url:
        "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    };
  }

  handleOpenModal = (title, description, image_url) => {
    this.setState({
      showModal: true,
      selectedBeastTitle: title,
      selectedBeastDescription: description,
      selectedBeastImage_Url: image_url,
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
          selectedBeastTitle={this.state.selectedBeastTitle}
          selectedBeastDescription={this.state.selectedBeastDescription}
          selectedBeastImage_Url={this.state.selectedBeastImage_Url}
        ></ShowModal>
        <Footer />
      </>
    );
  }
}

export default App;
