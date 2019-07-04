import * as React from "react";
import { Component } from "react";
import Loader from "react-loader-spinner";
import "./Results.css";

export interface IResultsProps {
  result: string;
  fileLength: any;
}

class IResults extends Component<IResultsProps, {}> {
  public render() {
    return (
      <div className="result-text">
        {this.props.result === "" && this.props.fileLength > 0 ? (
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        ) : (
          <p>{this.props.result}</p>
        )}
      </div>
    );
  }
}

export default IResults;
