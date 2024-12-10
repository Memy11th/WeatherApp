import Footer from "@/components/Essentials/Footer"
import { Navbar } from "@/components/Essentials/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return <>
        <Navbar/>
        <div className="min-h-screen transition-all duration-500 p-2 ">
        <Outlet>
        </Outlet>
        </div>
        
        <Footer />
    </>
}

export default Layout
