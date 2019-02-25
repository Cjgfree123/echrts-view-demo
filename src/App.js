import React, { Component } from 'react';
import axios from 'axios';
import {budget2012List,budget2011List,delta,names} from './zoomdata';

// 引入 ECharts 主模块
import * as echarts from 'echarts';// 引入柱状图

class EchartsTest extends Component {
  componentDidMount() {
    // 1.初始化
    var myChart = echarts.init(document.getElementById('main'), "optionConfig");
    let option = {
      tooltip : {
          trigger: 'item'
      },
      legend: {
          data: ['Growth', 'Budget 2011', 'Budget 2012'],
          itemGap: 5
      },
      grid: {
          top: '12%',
          left: '1%',
          right: '10%',
          containLabel: true
      },
      xAxis: [
          {
              type : 'category',
              data : names
          }
      ],
      yAxis: [
          {
              type : 'value',
              name : 'Budget (million USD)',
              axisLabel: {
                  formatter: function (a) {
                      a = +a;
                      return isFinite(a)
                          ? echarts.format.addCommas(+a / 1000)
                          : '';
                  }
              }
          }
      ],
      dataZoom: [
          {
              type: 'slider',
              show: true,
              start: 94,
              end: 100,
              handleSize: 8
          },
          {
              type: 'inside',
              start: 94,
              end: 100
          },
          {
              type: 'slider',
              show: true,
              yAxisIndex: 0,
              filterMode: 'empty',
              width: 12,
              height: '70%',
              handleSize: 8,
              showDataShadow: false,
              left: '93%'
          }
      ],
      series : [
          {
              name: 'Budget 2011',
              type: 'bar',
              data: budget2011List
          },
          {
              name: 'Budget 2012',
              type: 'bar',
              data: budget2012List
          }
      ]
  
  
    };

    myChart.setOption(option);
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
