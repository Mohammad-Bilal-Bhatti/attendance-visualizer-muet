import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Tiel from "./components/tile";
import Descriptor from "./components/descriptor";
import Donut from "./components/donut";
import PlotBar from "./components/plotbar";
import Spider from "./components/spider";

// import parseData from "./components/services/pdfbuffer";

class App extends Component {
  state = {
    subjects: [],
    tiles: [],
    bar: {
      label: "Attendance",
      xdata: ["WEB", "SRE", "MC", "FMSC", "THE"],
      ydata: [36, 35, 38, 36, 37],
    },
    spider: {
      label: "Overall",
      xdata: [36, 35, 38, 36, 37],
      ydata: ["WEB", "SRE", "MC", "FMSC", "THE"],
    },
  };

  async componentDidMount() {
    // TODO: ERROR Cross Browser Origin Error.
    const response = await fetch(
      "https://mariamjawaid.files.wordpress.com/2020/03/mids-sessionals.pdf",

      { method: "GET", headers: {} }
    );

    // const blob = await response.blob();
    // console.log(blob);
    // const arrayBuffer = await blob.arrayBuffer();
    // const dataBuffer = Buffer(arrayBuffer);

    // const data = await parseData(dataBuffer);
    // console.log(data.text);

    const subjects = [
      {
        id: 1,
        title: "Web Engineering",
        code: "WEB-101",
        instructor: "Dr. Samata Bai",
        total: 42,
        present: 38,
      },
      {
        id: 2,
        title: "Formal Methods in Software Engineering",
        code: "FMSE-102",
        instructor: "Engr. Mariam Memon",
        total: 42,
        present: 36,
      },
      {
        id: 3,
        title: "Software Re-engineering",
        code: "SRE-103",
        instructor: "Engr. Salauhdin Sadar",
        total: 42,
        present: 35,
      },
      {
        id: 4,
        title: "Multimedia and Communication",
        code: "MC-104",
        instructor: "Dr. Sania Bhatti",
        total: 42,
        present: 32,
      },
      {
        id: 5,
        title: "Thesis",
        code: "TE-105",
        instructor: "Dr. Samita Bai",
        total: 42,
        present: 41,
      },
    ];
    const tiles = [
      {
        title: "84%",
        subtitle: "Present",
        color: "success",
      },
      {
        title: "16%",
        subtitle: "Absent",
        color: "danger",
      },
    ];
    this.setState({ subjects, tiles });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="container mx-1">
                <div className="row mb-4">
                  {this.state.subjects.map((sub) => (
                    <Donut {...sub} />
                  ))}
                  <Spider {...this.state.spider} />
                </div>
                <PlotBar {...this.state.bar} />
                <div className="row justify-content-center">
                  {this.state.tiles.map((tile) => (
                    <Tiel
                      title={tile.title}
                      subTitle={tile.subtitle}
                      color={tile.color}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <Descriptor />
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
