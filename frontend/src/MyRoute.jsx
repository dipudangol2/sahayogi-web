import { Route, Routes } from 'react-router-dom'
import ProjectDetail from './components/ProjectDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/login'
import Signup from './components/signup'
import Donate from './components/Donate'
import Campaign from './components/Campaign'
import Camp from './components/camp/camp'
import CampaignList from './components/campaignlist'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

 
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import Header from './components/Header';
import SideBar from './components/SideBar';
import RecentSales from './components/RecentSales';
import Dashboard from './components/Dashboard';
import PageTitle from './components/PageTitle';
import './App.css';
import CardFilter from './components/CardFilter';
import Card from './components/Card';
const MyRoute = () => {
    const email = localStorage.getItem('email');
    return (
        <>
            <Routes>
                {email != null ?
                    <Route path='/' element={<>
                        <Navbar />
                        <CampaignList />
                        <Camp />
                        <Footer />
                    </>
                    } /> : <Route path='/' element={<>
                        <Navbar />
                        <Login />
                        <Footer />
                    </>
                    } />
                }

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
            <Route path='/dashboard' element={<>
                <Header/>
  <SideBar/>
  <Card/>
  <Dashboard/>
  <PageTitle/>
  <RecentSales/>
  <CardFilter/>
            </>} />
            

            </Routes>
        </>
    )
}

export default MyRoute