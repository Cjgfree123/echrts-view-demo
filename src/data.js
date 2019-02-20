let optionConfig = {
    // 全局调色盘。
    color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    //设置全局背景色
    backgroundColor: '#fff',
    // 设置全局文本样式
    textStyle: {
        color: '#000'
    },
    // 将数值大小映射到敏感度
    visualMap: {
        // 不显示 visualMap 组件，只用于明暗度的映射
        show: false,
        // 映射的最小值为 80
        min: 80,
        // 映射的最大值为 600
        max: 600,
        inRange: {
            // 明暗度的范围是 0 到 1
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源99',
            type: 'pie',
            // // 此系列自己的调色盘。
            color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],

            radius: '55%',
            roseType: 'angle',
            // 数据项设置方式二: {name:value}
            data: [

                {
                    value: 235,
                    name: '视频广告2',
                    // 单个扇形的颜色
                    itemStyle: {
                        color: 'pink'
                    },
                    // 每个系列的文本颜色
                    label: {
                        textStyle: {
                            color: 'orange'
                        },
                        // 鼠标移入文本，引导线变蓝
                        emphasis: {
                            shadowBlur: 0,
                            shadowColor: 'blue'
                        }
                    },
                    // 引导线颜色
                    labelLine: {
                        lineStyle: {
                            color: '#red',
                        },
                        // 鼠标移入引导线，引导线变蓝
                        emphasis: {
                            shadowBlur: 0,
                            shadowColor: 'blue'
                        }
                    }
                },

                { value: 274, name: '联盟广告' },
                { value: 310, name: '邮件营销' },
                { value: 335, name: '直接访问' },
                { value: 400, name: '搜索引擎' }
            ],

            // 数据项设置方式一: 仅数值
            // data:[12, 34, 56, 10, 23]

            // 设置阴影
            // itemStyle: {
            //   // 阴影的大小
            //   shadowBlur: 200,
            //   // 阴影水平方向上的偏移
            //   shadowOffsetX: 0,
            //   // 阴影垂直方向上的偏移
            //   shadowOffsetY: 0,
            //   // 阴影颜色
            //   shadowColor: 'rgba(0, 0, 0, 0.5)',
            //   // hover时阴影
            //   // emphasis: {
            //   //   shadowBlur: 200,
            //   //   shadowColor: 'red'
            //   // }
            // }

            // 设置扇形颜色
            // itemStyle: {
            //     // 设置扇形的颜色
            //     color: '#c23531',
            //     shadowBlur: 200,
            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
            // }

            // 高亮样式。
            emphasis: {
                itemStyle: {
                    // 高亮时点的颜色。
                    color: 'blue'
                },
                label: {
                    show: true,
                    // 高亮时标签的文字。
                    formatter: 'This is a emphasis label.'
                }
            }

        }
    ]
};

export default optionConfig;