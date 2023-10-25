import React from 'react'
import { Link } from "react-router-dom"
import "./chartbox.scss";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
const ChartBox = (props) => {
  return (
    <div className='chartbox'>
      <div className='chartbox-left'>
        <div>
          {props.icon}
          <h4>{props.title}</h4>
        </div>
        <h1>{props.number}</h1>
        <Link to='/' className='link'>View all</Link>
      </div>
      <div className='chartbox-right'>
        <div className='chart-div'>
          <ResponsiveContainer width="99%" height="100%">
            <LineChart >
              <Tooltip contentStyle={{ background: "transparent", border: "none" }} labelStyle={{ display: "none" }}
                position={{ x: 50, y: 50 }}
              />
              <Line type={'monotone'} dataKey={props.dataKey} stroke={props.color} strokeWidth={2} data={props.data} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='c-txt' style={{ color: props.percentage > 0 ? 'green' : 'red' }}>
          <h1>{props.percentage}%</h1>
          <small>this month</small>
        </div>
      </div>
    </div>
  )
}

export default ChartBox