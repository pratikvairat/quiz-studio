import React, { Component } from 'react'
import NavBar from './NavBar';
import '../css/NavBar.css'
import '../App.css'
import Sidebar from './Sidebar';
import NavPage from './NavPage';
const HomePage=()=> {
    return (
        <React.Fragment>
            <section>
                <div><NavBar/></div>
            </section>
            <section>
                <div className='grid text-white d-flex'>
                    <div className='sidebar h-screen bg-black h-screen pl-2'>
                        <Sidebar/>
                    </div>
                    <div className='main-cont pl-2'>
                        <NavPage/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default HomePage;