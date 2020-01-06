import * as React from "react";
import Header from "./Header"
import Nav from "./Nav";
//import { Container } from 'react-bootstrap';

import "../styles/main.sass";

interface LayoutProps {
    children: any
}

const Layout: React.FC<LayoutProps> =
    ({ children }) => (
        //<Container>
        <>
            <Header title={"something"} />
            <Nav />
            <div>
                { children }
            </div>
        </>
        //</Container>
    )

export default Layout
