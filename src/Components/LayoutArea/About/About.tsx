import { NavLink } from "react-router-dom";
import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About ">
			<h1 id="niceTitle">About</h1>
            <p>This is a simple burger builder with an order form.
                this page does not have any back-end code or any special feauters,
                it is simply to show the basic usage of state and props and a bit of css!
           <br/>
            <span><span id="errors1">note:</span> if you want to view pages with more functionalities <br/> and more styles and feautures , i invite you to follow my profile link , in which youll find all my projects!!</span>
            </p> <br />
            <a id="aaa" href="https://mijael-rofe-portfolio.herokuapp.com/" target="_blank" rel="noreferrer">Mijael's profile page</a>
       
       <br />
       <br />
            <NavLink to="/home">⬅️</NavLink> 

        </div>
    );
};

export default About;