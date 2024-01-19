import React from 'react'
import { useState } from 'react';
import './SideDashboard.css'
import UserAddForm from '../../UserAddForm/UserAddForm'


const SideDashboard = () => {
    const [isAddUserVisible, setAddUserVisible] = useState(false)
    const handleAddUser = () => {
        setAddUserVisible(true);
    }


  return (
    <div className='SideDashboard'>
       <div className='SideDashboard-container'>
        <div className='SideDashboard-box'>
           <div className='SideDashboard-heading'>
            <h3>Staff-management-system</h3>
           </div>
           <div className='SideDashboard-functions'>
            {isAddUserVisible ? <UserAddForm/>:null }
           <button className='userAdd-btn' onClick={handleAddUser}>USER</button>
           </div>
        </div>
       </div>
    </div>
  )
}

export default SideDashboard