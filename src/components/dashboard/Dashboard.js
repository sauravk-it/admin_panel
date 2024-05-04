import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <div className="row">
                    <div className="col-sm-6">
                       <h3>Dashboard</h3> 
                    </div>
                    <div className="col-sm-6 ">
                        <ol class="breadcrumb float-right">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item active" >Dashboard</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
