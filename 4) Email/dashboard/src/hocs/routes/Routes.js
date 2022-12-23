import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import Error404 from 'containers/errors/Error404'
import Home from 'containers/pages/Home'
import Blog from 'containers/pages/blog/Blog'
import Dashboard from 'containers/pages/Dashboard'
import ResetPassword from 'containers/auth/ResetPassword'
import ResetPasswordConfirm from 'containers/auth/ResetPasswordConfirm'
import EditPost from 'containers/pages/blog/EditPost'

function AnimatedRoutes(){

    const location = useLocation()

    return(
            <Routes >
                {/* Error Display */}
                <Route path="*" element={<Error404 />} />

                {/* Home Display */}
                <Route path="/" element={<Home />} />
                <Route path="/forgot_password" element={<ResetPassword />} />
                <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<EditPost />} />
            </Routes>
        // <AnimatePresence>
        // </AnimatePresence>
    )
}
export default AnimatedRoutes