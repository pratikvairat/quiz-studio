import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';
import Analytics from '../pages/Analytics';
import Settings from '../pages/Settings';
import Home from '../pages/Home';
import History from '../pages/History';
import QuizCreator from '../pages/QuizCreator';
function NavPage() {
  return (
    <React.Fragment>
        <section>
          
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/new-quiz' element={<QuizCreator/>}/>
        <Route path="/history" element={<History />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
       </Routes>
       
        </section>  
    </React.Fragment>
   
  )
}

export default NavPage