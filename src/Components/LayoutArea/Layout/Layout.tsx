import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "../../HomeArea/Main/Main";
import Routing from "../../HomeArea/Routing/Routing";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Layout.css";

class Layout extends Component {

    public render(): JSX.Element {
        return (
            <BrowserRouter>
            <div className="Layout">
                <header>
                    <Header/>
                </header>
                <main>
                   <Routing/>
                </main>
                <footer>
                    <Footer/>
                </footer>
                
            </div>
            </BrowserRouter>
        );
    }
}

export default Layout;
