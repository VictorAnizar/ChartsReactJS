import react from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main style={{marginLeft: "5%", marginRight: "5%"}}>{children}</main>
        </>
    )
}

export default Layout;