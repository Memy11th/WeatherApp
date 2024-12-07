import { Outlet } from "react-router-dom"

const Layout = () => {
    return <>
            <body className="container bg-red min-h-screen">
                <h2>Haha</h2>
                <Outlet>

                </Outlet>
            </body>
    </>
}

export default Layout
