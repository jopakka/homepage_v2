import {useState} from "react";
import './App.css';
import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import {ContentData} from "./resources/ContentData.js"

const App = () => {
    const [selectedNav, setSelectedNav] = useState(0);
    const navData = ContentData.navbar

    return (
        <div id="app">
            <NavBar links={navData.links} profilePicture={navData.profile} selectedItem={selectedNav}
                    itemOnClick={setSelectedNav}/>
            <Main content={selectedNav}/>
        </div>
    );
};

export default App;
