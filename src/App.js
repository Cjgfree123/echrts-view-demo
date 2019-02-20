import React, { Component } from 'react';
import axios from 'axios';

// 引入 ECharts 主模块
import * as echarts from 'echarts';// 引入柱状图

// 1.引入文件
import optionConfig from './data';

let viewUrl = "https://www.easy-mock.com/mock/5c6ace85d8bc8b31033c36a5/getview";

class EchartsTest extends Component {
  componentDidMount() {

    // 1.初始化
    var myChart = echarts.init(document.getElementById('main'), "optionConfig");

    axios.get(viewUrl)
      .then(
        (data) => data.data
      )
      .then(data => {
        // 2.异步加载后，设置图表选项
        myChart.setOption(data.data);
      })
      .catch();

  }
  render() {
    return (
      <div id="main" style={{ width: 400, height: 400 }}></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <EchartsTest />
      </div>
    );
  }
}

export default App;
