import React, { useEffect, useState } from "react"
import CreatePromoSteps from "./Promo/CreatePromoSteps";
import CreatePromoPreview from "./Promo/CreatePromoPreview";
import CreatePromoFirstStep from "./Promo/CreatePromoFirstStep";
import SmartButton from "../../components/UI/SmartButton/SmartButton";
import CreatePromoSecondStep from "./Promo/CreatePromoSecondStep";
import { useDispatch, useSelector } from "react-redux";
import { setCreatePromoFirstStep, setCreatePromoSecondStep, setCreatePromoSettings, setCreatePromoStepPosition } from "../../store/slices/createPromo/createPromoSlice";
import CreatePromoSettings from "./Promo/CreatePromoSettings";
import { useTranslate } from "../../hooks/useTranslate";
import { useScroll } from "../../hooks/useScroll";
import { useNavigate } from "react-router-dom";
import { PL_APP_ROUTES } from "../../vars/routes";
import Modal from "../../components/UI/Modal/Modal";
import sucsImg from '../../assets/img/gift.png'
import CreateNav from "./CreateNav";

const promoCreateSteps = [
    {id: 1, name: 'CreatePromo.Steps.Preview'},
    {id: 2, name: 'CreatePromo.Steps.Description'},
    {id: 3, name: 'CreatePromo.Steps.Settings'},
]

const CreatePromo = ({
    
}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { scrollTop } = useScroll()
    const { tr } = useTranslate()
    const createPromoData = useSelector(state => state.createPromo)
    const { lastStep: step, images: promoCreatedImages, delivery: deliveryState } = useSelector(state => state.createPromo)
    const { adress: companyAddresses} = useSelector(state => state.user.company)
    const [firstStepData, setFirstStepData] = useState(null)
    const [secondStepData, setSecondStepData] = useState(null)
    const [thirdStepData, setThirdStepData] = useState(null)
    const [isCompletedFirstStep, setIsCompletedFirstStep] = useState(false)
    const [isCompletedSecondStep, setIsCompletedSecondStep] = useState(false)
    const [isCompletedThirdStep, setIsCompletedThirdStep] = useState(false)
    const [isPublicate, setIsPublicate] = useState(false)

    const getDataFirstStep = (data) => {
        // setFirstStepData(data)
    }

    const getDataSecondStep = (data) => {
        // setSecondStepData(data)
    }

    const handleComplFirstStep = (isCompleted) => {
        // if (isCompleted && promoCreatedImages.length > 0) {
        //     setIsCompletedFirstStep(true)
        // } else {
        //     setIsCompletedFirstStep(false)
        // }
    }

    const handleMainButtonClick = () => {
        // if (step === 3) {
        //     console.log(thirdStepData)
        //     dispatch(setCreatePromoSettings({
        //         giftsAmount: thirdStepData.gifts_amount,
        //         price_per_click: thirdStepData.price_per_click,
        //         date_end: thirdStepData.date_end,
        //         citiesToShowIn: thirdStepData.citiesToShowIn,
        //         catsToShowIn: thirdStepData.catsToShowIn,
        //     }))
        //     alert('Создание промо на БД')
        // } 
        if (step === 1) {
            dispatch(setCreatePromoStepPosition(step + 1))
        //     dispatch(setCreatePromoFirstStep({
        //         name: firstStepData.name,
        //         shortDescription: firstStepData.shortDescription,
        //         location: firstStepData.city,
        //         locationRef: firstStepData.locationReference,
        //         isRemote: firstStepData.isRemote,
        //         adresses: firstStepData.addresses,
        //         delivery: firstStepData.delivery
        //     }))
        }
        if (step === 2) {
            setIsPublicate(true)
        //     dispatch(setCreatePromoStepPosition(step + 1))
        //     dispatch(setCreatePromoSecondStep({
        //         description: secondStepData.description,
        //         tags: secondStepData.tagsList
        }
        scrollTop()
    }

    return (
        <div className={'pl-page-container pl-page-create-promo'}>
            <CreateNav step={step} />
            
            {step === 1
                ? 
                <CreatePromoFirstStep 
                    getData={getDataFirstStep}
                    isCompletedFirstStep={handleComplFirstStep}
                    completedData={createPromoData}
                />
                : ""
            }
            {step === 2
                ? 
                <CreatePromoSecondStep 
                    getData={getDataSecondStep}
                    isCompletedSecondStep={setIsCompletedSecondStep}
                />
                : ""
            }
            {/* <CreatePromoSettings 
                getData={setThirdStepData}
                setIsCompleted={setIsCompletedThirdStep}
            /> */}
            <Modal 
                className={'publicate-modal'}
                setActive={setIsPublicate}
                isActive={isPublicate}
            >
                <div className="publicate-modal__img">
                    <img src={sucsImg} alt="" />
                </div>
                <div className="publicate-modal__title">Ваш подарок на модерации</div>
                <div className="publicate-modal__btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.22805 6.42559C8.81919 5.96306 9.25067 5.32878 9.46246 4.611C9.67425 3.89323 9.65582 3.12765 9.40973 2.42078C9.16364 1.71391 8.70213 1.1009 8.08941 0.667026C7.47669 0.233154 6.74322 0 5.99106 0C5.23889 0 4.50543 0.233154 3.8927 0.667026C3.27998 1.1009 2.81848 1.71391 2.57239 2.42078C2.3263 3.12765 2.30787 3.89323 2.51966 4.611C2.73145 5.32878 3.16293 5.96306 3.75407 6.42559C2.74113 6.82919 1.85732 7.49858 1.19684 8.36243C0.536353 9.22627 0.123966 10.2522 0.00363697 11.3308C-0.00507307 11.4095 0.00189835 11.4892 0.024153 11.5653C0.0464077 11.6413 0.0835099 11.7123 0.133341 11.7741C0.23398 11.8989 0.380358 11.9789 0.540274 11.9964C0.70019 12.0139 0.860543 11.9675 0.986059 11.8674C1.11158 11.7673 1.19197 11.6217 1.20956 11.4627C1.34196 10.2905 1.90399 9.20788 2.78825 8.42172C3.67252 7.63556 4.81703 7.20096 6.00312 7.20096C7.18921 7.20096 8.33372 7.63556 9.21798 8.42172C10.1022 9.20788 10.6643 10.2905 10.7967 11.4627C10.8131 11.61 10.8838 11.7461 10.9951 11.8447C11.1065 11.9432 11.2506 11.9973 11.3996 11.9964H11.466C11.624 11.9783 11.7685 11.8988 11.8679 11.7753C11.9673 11.6517 12.0135 11.4941 11.9966 11.3368C11.8757 10.2551 11.4611 9.22657 10.7972 8.3614C10.1333 7.49623 9.24519 6.82705 8.22805 6.42559ZM5.99106 5.99984C5.51404 5.99984 5.04773 5.85916 4.6511 5.5956C4.25448 5.33204 3.94534 4.95742 3.7628 4.51913C3.58025 4.08084 3.53249 3.59856 3.62555 3.13327C3.71861 2.66799 3.94832 2.2406 4.28562 1.90514C4.62292 1.56969 5.05268 1.34124 5.52053 1.24869C5.98838 1.15614 6.47332 1.20364 6.91403 1.38519C7.35474 1.56673 7.73142 1.87417 7.99644 2.26862C8.26146 2.66307 8.40291 3.12682 8.40291 3.60122C8.40291 4.23737 8.1488 4.84747 7.69649 5.2973C7.24418 5.74713 6.63072 5.99984 5.99106 5.99984Z" fill="white"/>
                    </svg>
                    Кабинет партнера
                </div>
            </Modal>
            <div className="pl-bottom-button-container">
                <SmartButton 
                    color="red"
                    onClick={handleMainButtonClick}
                    // disabled={
                    //     (step === 1 && isCompletedFirstStep     === true)   ||
                    //     (step === 2 && isCompletedSecondStep    === true)  ||
                    //     (step === 3 && isCompletedThirdStep     === true)
                    //     ? false 
                    //     : true
                    // }
                >{step === 2 ? tr('Button.Publicate') : tr('Button.Next')}</SmartButton>
            </div>
        </div>
    )
};

export default CreatePromo;
