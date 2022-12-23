import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import LogoCloud from "components/home/LogoCloud"
import UseCases from "components/home/UseCases"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Scroll from "components/SmoothScrollbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"


function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Home