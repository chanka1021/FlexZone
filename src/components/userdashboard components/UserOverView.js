import React from 'react'
import '../styles/UserOverView.css'
import ReactECharts from 'echarts-for-react';


function UserOverView() {
  const data = [
    { day: 'Mon', value: 10 },
    { day: 'Tue', value: 52 },
    { day: 'Wed', value: 200 },
    { day: 'Thu', value: 334 },
    { day: 'Fri', value: 390 },
    { day: 'Sat', value: 330 },
    { day: 'Sun', value: 220 },
    { day: 'Mon', value: 10 },
    { day: 'Tue', value: 52 },
    { day: 'Wed', value: 200 },
    { day: 'Thu', value: 334 },
    { day: 'Fri', value: 390 },
    { day: 'Sat', value: 330 },
    { day: 'Sun', value: 220 },
    { day: 'Mon', value: 10 },
    { day: 'Tue', value: 52 },
    { day: 'Wed', value: 200 },
    { day: 'Thu', value: 334 },
    { day: 'Fri', value: 390 },
    { day: 'Sat', value: 330 },
    { day: 'Sun', value: 220 },
  ];

  const opts = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: data.map(item => item.day),
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    color: "#A1F65E",
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: data.map(item => item.value),
      },
    ],
  };

  return (
    <div className='UserOverViewContainer'>
      <p>fréquentation de ce mois</p>
      <div className='attendenceChart'>
        <ReactECharts option={opts} />
      </div>
      <p>OverView </p>

      <div className='userOvCardsContainer'>
        <div className='OvCard'>
        </div>
        <div className='OvCard'>
        </div><div className='OvCard'>
        </div><div className='OvCard'>
        </div>
      </div>
    </div>
  );
}

export default UserOverView;