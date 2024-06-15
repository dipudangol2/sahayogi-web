import { Route, Routes } from 'react-router-dom'
import ProjectDetail from './components/ProjectDetail'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/login'
import Signup from './components/signup'
import Donate from './components/Donate'
import Campaign from './components/Campaign'
import Camp from './components/camp/camp'
import CampaignList from './components/campaignlist'
const MyRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<>
                <Navbar />
                <CampaignList />
                <Camp />
                <Footer />
            </>
            } />
            <Route path="/login"
                element={
                    <>
                        <Navbar />
                        <Login />
                        <Footer />

                    </>
                } />
            <Route path='/signup' element={
                <>
                    <Navbar />
                    <Signup />
                    <Footer />
                </>
            } />
            <Route path='/createcampaign' element={
                <>
                    <Navbar />
                    <Campaign />
                    <Footer />
                </>
            } />
            <Route path='/donate/:id' element={
                <>
                    <Navbar />
                    <ProjectDetail />
                </>}
            />
            <Route path='/now' element={<>
                <Navbar />
                <Donate />
            </>} />

        </Routes>
    )
}

export default MyRoute