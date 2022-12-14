import './MainPage.css'
import AboutSection from "../About/About";
import Person from "../AboutArchitectures/PersonOfDay";
import Creators from "../AboutCreators/Creators";

function MainPage() {
    return (
        <>
            <AboutSection/>
            <Person/>
            <Creators/>
        </>
    )
}

export default MainPage