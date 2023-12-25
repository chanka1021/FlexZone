import React from "react";
import "../styles/UserOverView.css";
import PropTypes from "prop-types";
import ReactECharts from "echarts-for-react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiHourglassSimpleLow, PiClockCountdownLight } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

function UserOverView() {
  // Reusable Card Component
  const Card = ({ icon, value, label, number }) => (
    <div className="OvCard">
      <div className={`OCV-Icon-${number}`}>{React.createElement(icon)}</div>
      <div className="OCC">
        <a>{value}</a>
        <p>{label}</p>
      </div>
    </div>
  );

  Card.propTypes = {
    icon: PropTypes.elementType.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  const data = [
    { day: "Mon", value: 10 },
    { day: "Tue", value: 52 },
    { day: "Wed", value: 200 },
    { day: "Thu", value: 334 },
    { day: "Fri", value: 390 },
    { day: "Sat", value: 330 },
    { day: "Sun", value: 220 },
    { day: "Mon", value: 10 },
    { day: "Tue", value: 52 },
    { day: "Wed", value: 200 },
    { day: "Thu", value: 334 },
    { day: "Fri", value: 390 },
    { day: "Sat", value: 330 },
    { day: "Sun", value: 220 },
    { day: "Mon", value: 10 },
    { day: "Tue", value: 52 },
    { day: "Wed", value: 200 },
    { day: "Thu", value: 334 },
    { day: "Fri", value: 390 },
    { day: "Sat", value: 330 },
    { day: "Sun", value: 220 },
  ];

  const opts = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: data.map((item) => item.day),
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    color: "#A1F65E",
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: data.map((item) => item.value),
      },
    ],
  };




  
  return (
    <div className="UserOverViewContainer">
      <div className="attendenceChart">
        <p>fréquentation de ce mois</p>

        <ReactECharts option={opts} />
      </div>
      <div className="userOvCardsContainer">
        <p>sommaire </p>
        <div className="OVcards">
          <Card
            icon={AiOutlineThunderbolt}
            number="1"
            value={103}
            label="journées trainee"
          />
          <Card
            icon={PiHourglassSimpleLow}
            number="2"
            value="9 heures"
            label="cette semaine"
          />
          <Card
            icon={MdOutlineProductionQuantityLimits}
            number="3"
            value={99}
            label="Produits Achete"
          />
          <Card
            icon={PiClockCountdownLight}
            number="4"
            value="99 jours"
            label="rest sur votre abo"
          />
        </div>
      </div>
    </div>
  );
}

export default UserOverView;
