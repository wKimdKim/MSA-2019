import * as React from "react";
import { Component } from "react";

import "./App.css";
import DropArea from "./components/DropArea/DropArea";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";

interface IAppState {
  result: string;
  fileLength: number;
}

class App extends Component<{}, IAppState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      fileLength: 0,
      result: ""
    };
  }
  public resultstate = (resultString: string, filelen: any) => {
    this.setState({ result: resultString, fileLength: filelen });
  };
  public render() {
    return (
      <div className="app-container">
        <Header />
        <DropArea setResults={this.resultstate} />
        <Results
          result={this.state.result}
          fileLength={this.state.fileLength}
        />
      </div>
    );
  }
}

export default App;
