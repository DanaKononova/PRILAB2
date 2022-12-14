import {Container, Nav, Navbar} from "react-bootstrap"
import { Outlet, Link} from "react-router-dom"
import logo from '../images/logo.png'
import rus from '../images/RussianFlag.svg'
import eng from '../images/EnglishFlag.svg'
import './Navigation.css'
import {useTranslation} from "react-i18next";
import '../i18n.js';

function NavigationBar() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navbar as="header" expand="lg" className="navigation">
                <Container>
                    <Link to="/" className="navigation_logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="navigation_toggle" />
                    <Navbar.Collapse id="navigation_collapse">
                        <Nav className="navigation_links">
                            <Link to="/" className="navigation_link">
                                {t("home_page")}
                            </Link>
                            <Link to="/architects" className="navigation_link">
                                {t("list_of_architects")}
                            </Link>
                        </Nav>
                        <div className="navigation_languages">
                            <Nav.Link className="navigation_link" onClick={() => i18n.changeLanguage("ru")}>
                                <img src={rus} alt="russian" className="flag_image"/>
                                <span>
                                    {t("russian_lang")}
                                </span>
                            </Nav.Link>

                            <Nav.Link className="navigation_link" onClick={() => i18n.changeLanguage("en")}>
                                <img src={eng} alt="english" className="flag_image"/>
                                <span>
                                    {t("english_lang")}
                                </span>
                            </Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>

    );
}

export default NavigationBar;