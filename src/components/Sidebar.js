import React from 'react';
import { NavLink } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import { SideBarData } from '../data/SideBarData';
import '../css/Sidebar.css'
const Sidebar = () => {
  return (
    <React.Fragment>
        <section>
            <div className='text-white'>
                {
                    SideBarData.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div>
                                <NavLink to={item.path} className='itm text-decoration-none  text-white p-2 flex justify-start items-center fw-bold'>
                                    <span className=''>{item.icon}</span>
                                    <span className='p-2 m-2 sidebar-title'>{item.title}</span>
                               </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </React.Fragment>
  )
}

export default Sidebar