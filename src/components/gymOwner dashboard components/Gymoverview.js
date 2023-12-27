import React from 'react'
import '../styles/GymOverview.css'
import ReactECharts from "echarts-for-react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { IoMdPerson } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa6";

function Gymoverview() {
    const Card = ({ icon, value, label, number }) => (
        <div className="OvCard">
            <div className={`OCV-Icon-${number}`}>{React.createElement(icon)}</div>
            <div className="OCC">
                <a>{value}</a>
                <p>{label}</p>
            </div>
        </div>
    )

    const opts = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };

    return (
        <div className='Gymoverview'>
            <div className='newMembersChart'>
                <p>nouveaux membres (6 derniers mois)</p>
                <ReactECharts option={opts} />
            </div>
            <div className='GymOVcardsContainer'>
                <p>sommaire</p>
                <div className='OVcards'>

                    <Card
                        icon={BiMoneyWithdraw }
                        number="1"
                        value="102241 $"
                        label="revenu total"
                    />
                    <Card
                        icon={IoMdPerson}
                        number="2"
                        value={2222}
                        label="nombre total de membres"
                    />
                    <Card
                        icon={TbMoneybag }
                        number="3"
                        value={99}
                        label="Produits Vendu"
                    />
                    <Card
                        icon={FaDoorOpen}
                        number="4"
                        value="99 member"
                        label="présence aujourd'hui"
                    />
                </div>
            </div>
        </div>
    )
}

export default Gymoverview