import React from 'react'
import MainDashboard from './MainDashboard/MainDashboard'
import SideDashboard from './SideDashboard/SideDashboard'
import './Dashboard.css'
const Dashboard = () => {

    return (
        <div className='dashboard'>
            <div className='sideDashboard-banner'>
                <SideDashboard /> 
            </div> 
            <div className='mainDashboard-banner'>
                <MainDashboard/>
            </div>
        </div>
    )
}

export default Dashboard