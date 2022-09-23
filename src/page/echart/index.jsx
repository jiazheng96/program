import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts';
function Echart() {
    const main = useRef();
    useEffect(() => {
        const myChart = echarts.init(main.current, 'dark');
        // 绘制图表
        myChart.setOption({
            color: [
                '#c23531',
                '#2f4554',
                '#61a0a8',
                '#d48265',
                '#91c7ae',
                '#749f83',
                '#ca8622',
                '#bda29a',
                '#6e7074',
                '#546570',
                '#c4ccd3'
              ],
            title: {
                text: 'ECharts 入门示例'
            },
            legend: {
                show: true,
                right: 'top',
                orient: 'vertical',
                aligin: 'left'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                },
                {
                    name: '销量',
                    type: 'bar',
                    data: [7, 10, 20, 32, 22, 44]
                }
            ],
            animation: true
        });
    }, [])
  return (
    <div>
        <div ref={main} style={{width:600,height:400}}></div>
    </div>
  )
}

export default Echart