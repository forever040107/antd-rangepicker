import React from "react";
import ReactDOM from "react-dom";
import { version, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import moment from "moment";
const { RangePicker } = DatePicker;

ReactDOM.render(
  <div className="App">
    <div>Current antd version: {version}</div>
    <div style={{ marginTop: "16px" }}>
      <RangePicker
        style={{ width: "100%" }}
        placeholder={["开始时间", "结束时间"]}
        format="YYYY-MM-DD HH:mm:ss"
        showTime={{
          disabled: true,
          hideDisabledOptions: true,
          defaultValue: [
            moment("00:00:00", "HH:mm:ss"),
            moment("23:00:00", "HH:mm:ss")
          ]
        }}
      />
    </div>
  </div>,
  document.getElementById("root")
);
