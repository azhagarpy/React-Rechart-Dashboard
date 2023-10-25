import React from 'react'
import "./piechart.scss";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const PieChartBox = (props) => {
    return (
        <div className='piechart'>
            <h1>{props.title}</h1>
            <div className="piechart-box">
                <ResponsiveContainer height="100%" width="100%">
                    <PieChart>
                        <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
                        <Pie
                            data={props.data}
                            innerRadius={"60%"}
                            outerRadius={"80%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {props.data.map((entry) => (
                                <Cell key={entry.name} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {props.data.map(e => {
                    return (
                        <div key={e.name}>
                            <div className='color-box' style={{ background: e.color }}></div>
                            <p>{e.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PieChartBox