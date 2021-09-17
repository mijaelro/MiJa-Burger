import { Redirect, Route } from "react-router";
import About from "../../LayoutArea/About/About";
import Burger from "../Burger/Burger";
import Next from "../SendForm/Next";
import SendForm from "../SendForm/SendForm";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Route path="/send" component={SendForm} exact />
			<Route path="/home" component={Burger} exact />
			<Route path="/next" component={Next} exact />
			<Route path="/about" component={About} exact />
            <Redirect from="/" to="/home" exact/>
        </div>
    );
}

export default Routing;
