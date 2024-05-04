import React from 'react'
import "./sidebar.css"
import Dropdown from 'react-bootstrap/Dropdown';

const Sidebar = ({ children }) => {

    const roles = ["admin", "superadmin", "staff", "manager", "accountant", "supportExecutive", "floorManager"]

    const userRole = "admin"

    const navdata = [
        {
            id: 1,
            name: "Dashboard",
            icon: "tachometer-alt",
            link: "",
            AllowedRoles: ["admin", "superadmin", "staff", "manager", "accountant", "supportExecutive", "floorManager"],
        },
        {
            id: 2,
            name: "My Resturants",
            icon: "th",
            link: "",
            AllowedRoles: ["admin", "superadmin", "staff", "manager", "accountant", "supportExecutive", "floorManager"],
        },
        {
            id: 3,
            name: "Vendor Register",
            icon: "address-card",
            link: "",
            AllowedRoles: ["admin", "superadmin", "staff", "manager", "accountant", "supportExecutive", "floorManager"],
        },
        {
            id: 4,
            name: "Order",
            icon: "shopping-cart",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager", "accountant", "supportExecutive", "floorManager"],
        },
        {
            id: 5,
            name: "Stations",
            icon: "train",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager"],
        },
        {
            id: 6,
            name: "Enquiry",
            icon: "question-circle",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager"],
        },
        {
            id: 7,
            name: "Feature Item",
            icon: "list-alt",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager"],
        },
        {
            id: 8,
            name: "Customer",
            icon: "user-friends",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager"],
        },
        {
            id: 9,
            name: "Users",
            icon: "user",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager"],
        },
        {
            id: 10,
            name: "Cusine",
            icon: "bread-slice",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager"],
        },
        {
            id: 11,
            name: "Food Type",
            icon: "cheese",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager"],
        },
        {
            id: 12,
            name: "Cancel Req",
            icon: "times",
            link: "",
            AllowedRoles: ["admin", "superadmin", "manager"],
        },





    ]



    return (
        <div>
            <div className="sidebar">
                <div className="logo p-3">
                    <img src="./assets/image/favicon.png" width="40" height="40" alt="brandlogo" />
                    <span className='brandname'>Yatri Restro</span>
                </div>
                <ul className='nav-links'>
                    {navdata.map((element, index) => {
                        return(
                         <li key={element.id}>
                         {element.AllowedRoles.includes(userRole) ? (
                           <>
                           <i className={`nav-icon fas fa-${element.icon}`} />
                           <span className='links_name'>{element.name}</span>
                           </>
                         ) : (
                           ""
                         )}
                       </li>)
                      
                    }
                )}

                </ul>
            </div>
            <section className='home-section'>
                <nav>
                    <div className="sidebar-button">
                        <i className='fa-solid fa-bars'></i>
                    </div>
                    <div className="profile-details">
                        <Dropdown>
                            <Dropdown.Toggle className='dropdown-btn' id="dropdown-basic">
                                Username
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Reset Password</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav>
                <div className="home-content">
                    {children}
                </div>


            </section>

        </div>
    )
}

export default Sidebar
