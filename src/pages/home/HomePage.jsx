import React from 'react'
import "./home.scss";
import TopDeals from '../../components/topdeals/TopDeals';
import ChartBox from '../../components/ChartBox/ChartBox';
import { data1, data2, data3, data4, areaChartData, pieChartData } from '../../data';
import { FaUser, FaAirFreshener, FaUniversalAccess, FaAd } from "react-icons/fa"
import BarChartBox from '../../components/BarChart/BarChartBox';
import AreaChartBox from '../../components/AreaChartBox/AreaChartBox';
import PieChartBox from '../../components/piechart/PieChartBox';
const HomePage = () => {
  return (
    <div className='home'>
      <div className='box box-1'><TopDeals /></div>
      <div className='box box-2'><ChartBox data={data1} percentage={76.2} icon={<FaUser />} title={"Total Users"} dataKey={"pv"} color={"purple"} number={244} /></div>
      <div className='box box-3'><ChartBox data={data2} percentage={26.2} icon={<FaAirFreshener />} title={"Total Revenue"} dataKey={"pv"} color={"yellow"} number={2.4} /></div>
      <div className='box box-4'><PieChartBox data={pieChartData} title={"Lead By Source"} /></div>
      <div className='box box-5'><ChartBox data={data3} percentage={-16.2} icon={<FaAd />} title={"Total Products"} dataKey={"pv"} color={"grey"} number={453} /></div>
      <div className='box box-6'><ChartBox data={data4} percentage={-23.00} icon={<FaUniversalAccess />} title={"Total Ratio"} dataKey={"pv"} color={"pink"} number={123} /></div>
      <div className='box box-7'><AreaChartBox data={areaChartData} title={"Revenue Analytics"} /></div>
      <div className='box box-8'><BarChartBox data={data1} color={"purple"} dataKey={"pv"} title={"Total Vist"} /></div>
      <div className='box box-9'><BarChartBox data={data3} color={"blue"} dataKey={"pv"} title={"Product Solled"} /></div>
    </div>
  )
}

export default HomePage