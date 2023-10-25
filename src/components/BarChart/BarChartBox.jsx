import React from 'react'
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
import "./barchart.scss"
const BarChartBox = (props) => {
    return (
        <div className='barchart'>
                <h3>{props.title}</h3>
                <div className="barchart-box">
                    <ResponsiveContainer width="99%" height={150}>
                        <BarChart data={props.data}  >
                            <Tooltip contentStyle={{ background: "#8693ab" }} labelStyle={{ display: "none" }} cursor={{ fill: "none" }} />
                            <Bar dataKey={props.dataKey} fill={props.color} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

        </div>
    )
}

export default BarChartBox;