import React, { Component } from 'react';
import axios from 'axios';

// 引入 ECharts 主模块
import * as echarts from 'echarts';// 引入柱状图
import 'echarts-gl';

// 折线图
let optionConfig = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
};

// 漏斗图
let option = {
  title: {
    text: '漏斗图',
    subtext: '纯属虚构'
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ['展现', '点击', '访问', '咨询', '订单']
  },
  calculable: true,
  series: [
    {
      name: '漏斗图',
      type: 'funnel',
      left: '10%',
      top: 60,
      //x2: 80,
      bottom: 60,
      width: '80%',
      // height: {totalHeight} - y - y2,
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 60, name: '访问' },
        { value: 40, name: '咨询' },
        { value: 20, name: '订单' },
        { value: 80, name: '点击' },
        { value: 100, name: '展现' }
      ]
    }
  ]
};

// 地图GL
let earthOption = {
  backgroundColor: '#000',
  globe: {
    baseTexture: 'data-gl/asset/earth.jpg',
    heightTexture: 'data-gl/asset/bathymetry_bw_composite_4k.jpg',

    displacementScale: 0.1,

    shading: 'lambert',

    environment: 'data-gl/asset/starfield.jpg',

    light: {
      ambient: {
        intensity: 0.1
      },
      main: {
        intensity: 1.5
      }
    },

    layers: [{
      type: 'blend',
      blendTo: 'emission',
      texture: 'data-gl/asset/night.jpg'
    }, {
      type: 'overlay',
      texture: 'data-gl/asset/clouds.png',
      shading: 'lambert',
      distance: 5
    }]
  },
  series: []
}

let viewUrl = "https://www.easy-mock.com/mock/5c6ace85d8bc8b31033c36a5/getview";

class EchartsTest extends Component {
  componentDidMount() {
    // 1.初始化
    var myChart = echarts.init(document.getElementById('main'), "optionConfig");
    myChart.setOption(earthOption);

    // axios.get(viewUrl)
    //   .then(
    //     (data) => data.data
    //   )
    //   .then(data => {
    //     // 2.异步加载后，设置图表选项
    //     myChart.setOption(data.data);
    //   })
    //   .catch();


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
