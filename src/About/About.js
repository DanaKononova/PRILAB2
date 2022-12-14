import Stack from 'react-bootstrap/Stack';
import './About.css'
import {useTranslation} from "react-i18next";
import '../i18n.js';

function AboutSection() {
    const { t, i18n } = useTranslation();
    return (
        <Stack className="about_site">
            <h1 className="start_phrase">
                {t("start_phrase")}
            </h1>
            <div className="about_site_text">
                <p>
                    {t("about_site_line1")}
                </p>
                <p>
                    {t("about_site_line2")}
                </p>
            </div>
        </Stack>
    )
}

export default AboutSection;