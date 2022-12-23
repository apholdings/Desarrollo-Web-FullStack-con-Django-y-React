import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Cases from 'containers/pages/Cases';

import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Blog from 'containers/pages/Blog';
import Contact from 'containers/pages/Contact';

import { AnimatePresence } from 'framer-motion'
import Category from 'containers/pages/Category';
import Search from 'containers/pages/Search';
import PostDetail from 'containers/pages/PostDetail';
import OptIn from 'containers/pages/OptIn';
import OptInCTA from 'containers/pages/OptInCTA';
import Ecommerce from 'containers/pages/cases/Ecommerce';
import JavascriptDev from 'containers/pages/services/development/JavascriptDev';

function AnimatedRoutes(){

    const location = useLocation()

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    {/* Error Display */}
                    <Route path="*" element={<Error404 />} />

                    {/* Home Display */}
                    <Route path="/" element={<Home />} />
                    <Route path="/casos" element={<Cases />} />
                    <Route path="/casos/ecommerce" element={<Ecommerce />} />
                    <Route path="/servicios" element={<Services />} />
                    <Route path="/servicios/javascript" element={<JavascriptDev />} />
                    <Route path="/nosotros" element={<About />} />
                    <Route path="/carreras" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<PostDetail />} />
                    <Route path="/s=:term" element={<Search />} />
                    <Route path="/category/:slug" element={<Category />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/ebook" element={<OptIn />} />
                    <Route path="/ebook/training" element={<OptInCTA />} />
                </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes