import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import './ArchitectInfo.css'
import data from "../DataAboutPersonOfDay.json";
import '../i18n.js';
import {Link, useParams} from "react-router-dom"
import { useTranslation } from 'react-i18next';
import {Image} from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaArrowCircleDown} from 'react-icons/fa';

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

            <VerticalTimeline>
                {
                    data[person]["dates"].map((time, personId) =>
                        <VerticalTimelineElement
                            key = {personId}
                            date = {time}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(73, 98, 227)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '15px solid  rgba(23, 41, 133)' }}
                            iconStyle={{ background: 'rgb(103, 31, 196)', color: '#fff' }}
                            icon={<FaArrowCircleDown/>}
                        >
                            <p>{t(`architects.${person}.i${personId}`)}</p>
                        </VerticalTimelineElement>
                    )
                }
            </VerticalTimeline>
        </Stack>
    );
}

export default ArchitectInfo;