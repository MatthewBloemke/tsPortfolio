import { Routes, Route, Navigate } from 'react-router-dom'
import AboutMe from '../About/AboutMe'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />} />
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<AboutMe/>}/>
        </Routes>
    )
}

export default AppRoutes