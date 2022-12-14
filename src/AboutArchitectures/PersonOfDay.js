import Stack from 'react-bootstrap/Stack';
import './PersonOfDay.css'
import '../i18n.js';

import { useTranslation } from 'react-i18next';

function PersonOfDay() {
    const { t, i18n } = useTranslation();
    return (
        <Stack className="person_of_day">
            <h2 className="person_of_day_head">
                {t("person_of_day")}
            </h2>
        </Stack>
    );
}

export default PersonOfDay;