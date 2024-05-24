import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import { useSelector } from 'react-redux';
import { useTranslate } from '../../../hooks/useTranslate';
import TagsSelector from '../../../components/Selectors/TagsSelector/TagsSelector';
import Checkbox from '../../../components/UI/Input/Checkbox';
import giftImg from '../../../assets/img/big_gift.png';

const CreatePromoSecondStep = ({
    getData,
    isCompletedSecondStep
}) => {
    const { tr } = useTranslate()
    const [rulesAccepted, setRulesAccepted] = useState(false)
    const [imgLoaded, setImgLoaded] = useState(false)

    const handleRulesClick = (val) => {
        setRulesAccepted(val)
        isCompletedSecondStep(val)
    }

    const handleImgLoad = () => {
        setImgLoaded(true)
    }
    


    return (
        <div className="publicate-promo">
            <div className="publicate-promo__title">
                <div>
                    <img onLoad={handleImgLoad} src={giftImg} alt="" />
                    <span className={imgLoaded ? '_loaded' : ''}>
                        
                    </span>
                </div>
                Ваш подарок готов к публикации
            </div>
            <div className="publicate-promo__row">
                <div className="publicate-promo__item">
                    <span>Раздел</span>
                    <p>Покупки</p>
                </div>
                <div className="publicate-promo__item">
                    <span>Охват</span>
                    <p>45 городов</p>
                </div>
            </div>
            <div className="sells-publicate">
                <div className="sells-publicate__title">Тарифы</div>
                <div className="sells-publicate__item">
                    <div>
                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4 6.05556C11.4 10.3889 6.2 14 6.2 14C6.2 14 1 10.3889 1 6.05556C1 3.26344 3.32811 1 6.2 1C9.07189 1 11.4 3.26344 11.4 6.05556Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.93151 6.19964C7.93151 7.15731 7.15584 7.93298 6.19818 7.93298C5.24051 7.93298 4.46484 7.15731 4.46484 6.19964C4.46484 5.24198 5.24051 4.46631 6.19818 4.46631C7.15584 4.46631 7.93151 5.24198 7.93151 6.19964Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Размещение в одном городе
                    </div>
                    <div>
                        <strong>$0.1</strong> / д
                    </div>
                </div>
                <div className="sells-publicate__item">
                    <div>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0.5C1.61929 0.5 0.5 1.61929 0.5 3V10C0.5 11.3807 1.61929 12.5 3 12.5H10C11.3807 12.5 12.5 11.3807 12.5 10V3C12.5 1.61929 11.3807 0.5 10 0.5H3ZM1.5 3C1.5 2.17157 2.17157 1.5 3 1.5H10C10.8284 1.5 11.5 2.17157 11.5 3V10C11.5 10.8284 10.8284 11.5 10 11.5H3C2.17157 11.5 1.5 10.8284 1.5 10V3ZM6.37629 8.82925L9.87629 4.82925L9.12371 4.17075L5.97565 7.76854L4.35355 6.14645L3.64645 6.85355L5.64645 8.85355L6.02435 9.23146L6.37629 8.82925Z" fill="#209B6F"/>
                        </svg>
                        Новая заявка от клиента
                    </div>
                    <div><strong>$0.1</strong></div>
                </div>
                <div className="sells-publicate__item _last">
                    <div>
                        Стоимость размещения:
                    </div>
                    <div>
                        <strong>$4.5</strong>
                        в день
                    </div>
                </div>
            </div>
            <div className="rules-publicate">
                <strong>Правила размещения</strong>
                <ul>
                    <li>Ваша публикация не является офертой.</li>
                    <li>Все договорённости о передаче и получении подарка происходят лично между вами 
и клиентом.</li>
                    <li>После создания заявки клиент сможет написать вам личные сообщения для обсуждения деталей.</li>
                </ul>
                <Checkbox 
                    isChecked={rulesAccepted} 
                    id={!rulesAccepted}
                    name={'Я прочитал/а и принимаю <b>все правила.</b>'} 
                    toggleFunc={handleRulesClick} 
                />
            </div>
        </div>
    );
};

export default CreatePromoSecondStep;