import React from "react";
import "./Main.css";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contacts from "../contacts/Contacts";

const Main = ({content}) => {
    return (
        <main>
            {
                content === 0 ? <Home/>
                    : content === 1 ? <About/>
                        : content === 2 ? <Projects/>
                            : content === 3 ? <Contacts/>
                                : null
            }
        </main>
    );
};

export default Main;