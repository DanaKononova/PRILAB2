import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import './ArchitectInfo.css'
import data from "../DataAboutPersonOfDay.json";
import '../i18n.js';
import {Link, useParams} from "react-router-dom"
import { useTranslation } from 'react-i18next';
import {Image} from "react-bootstrap";

function ArchitectInfo() {
    const { t, i18n } = useTranslation();
    const params = useParams();
    const person = params.id;
    return (
        <Stack className="architect-place">
            <Card className="architect-mainInfo">
                <Card.Body className="architect-info">
                    <Card.Title className="architect-name">{t(`architects.${person}.surname`)} {t(`architects.${person}.name`)} {t(`architects.${person}.patronymic`)}</Card.Title>
                    <Card.Text className="architect-years">
                        {data[person]["bDate"]} - {data[person]["dDate"]}
                    </Card.Text>
                    <Card className="architect-img">
                        <Image src={require(`../arch_img/${person}/ava.png`)} className="architect-photo"/>
                    </Card>
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default ArchitectInfo;