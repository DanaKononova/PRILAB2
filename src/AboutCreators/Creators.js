import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import './Creators.css'
import creator1 from "../images/Dana.jpg";
import creator2 from "../images/Andrey.jpg";
import creator3 from "../images/Nikita.jpg";
import {useTranslation} from "react-i18next";
import '../i18n.js';

function Creators() {
    const { t, i18n } = useTranslation();
    return (
        <Stack className="creators_section">
            <h2 className="creators_head">
                {t("creators")}
            </h2>
            <div className="creators_main">
                <Card className="creators_main_card">
                    <Card.Img src={creator1} className="creator_photo"/>
                    <Card.Body className="creator_info">
                        <Card.Title className="creator_name">
                            {t("creator1")}
                        </Card.Title>
                        <a href="https://github.com/DanaKononova" target="_blank" className="button-git">{t("github")}</a>
                    </Card.Body>
                </Card>

                <Card className="creators_main_card">
                    <Card.Img src={creator2} className="creator_photo"/>
                    <Card.Body className="creator_info">
                        <Card.Title className="creator_name">
                            {t("creator2")}
                        </Card.Title>
                        <a href="https://github.com/BABASTAS728" target="_blank" className="button-git">{t("github")}</a>
                    </Card.Body>
                </Card>

                <Card className="creators_main_card">
                    <Card.Img src={creator3} className="creator_photo"/>
                    <Card.Body className="creator_info">
                        <Card.Title className="creator_name">
                            {t("creator3")}
                        </Card.Title>
                        <a href="https://github.com/Ringo2901" target="_blank" className="button-git">
                            {t("github")}
                        </a>
                    </Card.Body>
                </Card>
            </div>
        </Stack>
    );
}

export default Creators;