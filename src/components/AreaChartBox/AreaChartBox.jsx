import React from 'react'
import "./areachart.scss";
import { ResponsiveContainer, Area, Tooltip, AreaChart, XAxis, YAxis } from "recharts"
const AreaChartBox = (props) => {
    return (
        <div className='areachart'>
            <h1>{props.title}</h1>
            <div className='areachart-box'>
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={props.data}
                    >
                        <Tooltip />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AreaChartBox