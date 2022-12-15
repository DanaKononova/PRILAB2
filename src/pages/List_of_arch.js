import './List_of_arch.css'
import {Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';
import data from "../DataAboutPersonOfDay.json";
import {Link} from "react-router-dom";
import { useState } from "react"
import Button from "react-bootstrap/Button";

function List_of_arch() {
    const { t, i18n } = useTranslation();
    const elems = Object.keys(data).map((id) => [id, t(`architects.${id}.surname`) + " " + t(`architects.${id}.name`) + " " + t(`architects.${id}.patronymic`)])
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(elems);

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== "") {
            const results = elems.filter((user) => {
                return user[1].toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(elems);
        }
        setName(keyword);
    };

    return (
        <>
            <div className="arch-section">
                <h1 className="list-heading">{t("ListHeader")}</h1>
                <div className="arch-wrap">
                    <Form className="search">
                            <Form.Control className="search-box" type="search" placeholder={t("search")} onChange={filter} />
                    </Form>
                </div>
                <Card className="architects-list justify-content-center">
                    <ListGroup >
                        {foundUsers && foundUsers.length > 0 ? (
                            foundUsers.map((id) =>
                                <ListGroup.Item >
                                    <p className="fio">{t(`architects.${id[0]}.surname`)} {t(`architects.${id[0]}.name`)} {t(`architects.${id[0]}.patronymic`)}
                                        <Button className="button-more" as={Link} to={`/architects/${id[0]}`}>{t("personButton")}</Button>
                                    </p>
                                    <p className="descr">{t(`architects.${id[0]}.shortDesc`)}</p>
                                </ListGroup.Item>
                            )) : ("")}
                    </ListGroup>
                </Card>
            </div>
        </>
    )
}

export default List_of_arch