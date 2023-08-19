import React from 'react';
const NavBar = () => {
  return (
    <React.Fragment>
        <section className='navBar'>
            <div className='bg-black container-fluid w-full flex d-flex justify-content-center text-center p-3'>
                <div>
                <span><i className='bi h2 bi-speedometer text-white p-2'></i></span>
                </div>
                <div>
                    <p className='text-white h2'>My Quiz App</p>
                </div>
            </div>
        </section>
    </React.Fragment>
    
  )
}

export default NavBar