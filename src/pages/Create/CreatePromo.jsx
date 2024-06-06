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
    const [dollarCount, setDollarCount] = useState(0)
    const [isModalActive, setIsModalActive] = useState(false)

    const clickDollarsNumber = () => {
        let dollars = prompt('Введите сумму в  USD')
        dollars = parseInt(dollars)
        if (Number.isInteger(dollars)) {
            setDollarCount(dollars)
            
        }
    }

    const clickComplete = () => {
        if(dollarCount > 0) {
            setIsModalActive(false)
            setIsPublicate(true)
        }
    }

    const getDataFirstStep = (data) => {
        setFirstStepData(data)
        dispatch(setCreatePromoFirstStep({
            name: data.name,
            shortDescription: data.shortDescription,
            location: data.city,
            locationRef: data.locationReference,
            isRemote: data.isRemote,
            adresses: data.addresses,
            delivery: data.delivery
        }))
    }

    useEffect(() => {console.log(firstStepData)}, [firstStepData])

    const getDataSecondStep = (data) => {
        // setSecondStepData(data)
        dispatch(setCreatePromoFirstStep({
            name: data.name,
            shortDescription: data.shortDescription,
            location: data.city,
            locationRef: data.locationReference,
            isRemote: data.isRemote,
            adresses: data.addresses,
            delivery: data.delivery
        }))
    }

    const handleComplFirstStep = (isCompleted) => {
        if (isCompleted && promoCreatedImages.length > 0) {
            setIsCompletedFirstStep(true)
            console.log(true)
        } else {
            setIsCompletedFirstStep(false)
            console.log(false)
        }
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
            setIsModalActive(true)
        //     dispatch(setCreatePromoStepPosition(step + 1))
        //     dispatch(setCreatePromoSecondStep({
        //         description: secondStepData.description,
        //         tags: secondStepData.tagsList
        }
        scrollTop()
    }

    const goToCabinet = () => {
        navigate(PL_APP_ROUTES.PARTNER.ACCOUNT, {replace: false})
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
                className={'publicate-modal cash-modal'}
                setActive={setIsModalActive}
                isActive={isModalActive}
            >
                <div className="publicate-modal__img">
                    <img src={sucsImg} alt="" />
                </div>
                <div className="publicate-modal__title">
                    Подарок ожидает публикации
                </div>
                <div className="publicate-modal__subtitle">
                    На вашем балансе недостаточно средств. <br /> Подарок будет опубликован после пополнения счета.
                </div>
                <div className="cash-modal__row">
                    <div className={"cash-modal__item" + (dollarCount === 5 ? ' _active' : '')} onClick={() => {setDollarCount(5)}}>
                        $5
                    </div>
                    <div className={"cash-modal__item" + (dollarCount === 10 ? ' _active' : '')} onClick={() => {setDollarCount(10)}}>
                        $10
                    </div>
                    <div className={"cash-modal__item" + (dollarCount === 25 ? ' _active' : '')} onClick={() => {setDollarCount(25)}}>
                        $25
                    </div>
                    <div className={"cash-modal__item" + (dollarCount === 50 ? ' _active' : '')} onClick={() => {setDollarCount(50)}}>
                        $50
                    </div>
                    <div className={"cash-modal__item" + (dollarCount === 100 ? ' _active' : '')} onClick={() => {setDollarCount(100)}}>
                        $100
                    </div>
                    <div className="cash-modal__item" onClick={() => {clickDollarsNumber(5)}}>
                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2.10975C0 1.51952 0.16972 1.02348 0.50916 0.621622C0.860305 0.207207 1.36361 0 2.01908 0C2.67455 0 3.17201 0.207207 3.51145 0.621622C3.8626 1.02348 4.03817 1.51952 4.03817 2.10975C4.03817 2.68741 3.8626 3.17718 3.51145 3.57903C3.17201 3.98089 2.67455 4.18182 2.01908 4.18182C1.36361 4.18182 0.860305 3.98089 0.50916 3.57903C0.16972 3.17718 0 2.68741 0 2.10975Z" fill="black"/>
                        <path d="M9.48092 2.10975C9.48092 1.51952 9.65064 1.02348 9.99008 0.621622C10.3412 0.207207 10.8445 0 11.5 0C12.1555 0 12.6529 0.207207 12.9924 0.621622C13.3435 1.02348 13.5191 1.51952 13.5191 2.10975C13.5191 2.68741 13.3435 3.17718 12.9924 3.57903C12.6529 3.98089 12.1555 4.18182 11.5 4.18182C10.8445 4.18182 10.3412 3.98089 9.99008 3.57903C9.65064 3.17718 9.48092 2.68741 9.48092 2.10975Z" fill="black"/>
                        <path d="M18.9618 2.10975C18.9618 1.51952 19.1316 1.02348 19.471 0.621622C19.8221 0.207207 20.3254 0 20.9809 0C21.6364 0 22.1338 0.207207 22.4733 0.621622C22.8244 1.02348 23 1.51952 23 2.10975C23 2.68741 22.8244 3.17718 22.4733 3.57903C22.1338 3.98089 21.6364 4.18182 20.9809 4.18182C20.3254 4.18182 19.8221 3.98089 19.471 3.57903C19.1316 3.17718 18.9618 2.68741 18.9618 2.10975Z" fill="black"/>
                        <path d="M0 10.4735C0 9.88329 0.16972 9.38725 0.50916 8.98539C0.860305 8.57098 1.36361 8.36377 2.01908 8.36377C2.67455 8.36377 3.17201 8.57098 3.51145 8.98539C3.8626 9.38725 4.03817 9.88329 4.03817 10.4735C4.03817 11.0512 3.8626 11.5409 3.51145 11.9428C3.17201 12.3447 2.67455 12.5456 2.01908 12.5456C1.36361 12.5456 0.860305 12.3447 0.50916 11.9428C0.16972 11.5409 0 11.0512 0 10.4735Z" fill="black"/>
                        <path d="M9.48092 10.4735C9.48092 9.88329 9.65064 9.38725 9.99008 8.98539C10.3412 8.57098 10.8445 8.36377 11.5 8.36377C12.1555 8.36377 12.6529 8.57098 12.9924 8.98539C13.3435 9.38725 13.5191 9.88329 13.5191 10.4735C13.5191 11.0512 13.3435 11.5409 12.9924 11.9428C12.6529 12.3447 12.1555 12.5456 11.5 12.5456C10.8445 12.5456 10.3412 12.3447 9.99008 11.9428C9.65064 11.5409 9.48092 11.0512 9.48092 10.4735Z" fill="black"/>
                        <path d="M18.9618 10.4735C18.9618 9.88329 19.1316 9.38725 19.471 8.98539C19.8221 8.57098 20.3254 8.36377 20.9809 8.36377C21.6364 8.36377 22.1338 8.57098 22.4733 8.98539C22.8244 9.38725 23 9.88329 23 10.4735C23 11.0512 22.8244 11.5409 22.4733 11.9428C22.1338 12.3447 21.6364 12.5456 20.9809 12.5456C20.3254 12.5456 19.8221 12.3447 19.471 11.9428C19.1316 11.5409 18.9618 11.0512 18.9618 10.4735Z" fill="black"/>
                        <path d="M0 18.8368C0 18.2466 0.16972 17.7505 0.50916 17.3487C0.860305 16.9343 1.36361 16.7271 2.01908 16.7271C2.67455 16.7271 3.17201 16.9343 3.51145 17.3487C3.8626 17.7505 4.03817 18.2466 4.03817 18.8368C4.03817 19.4145 3.8626 19.9042 3.51145 20.3061C3.17201 20.7079 2.67455 20.9089 2.01908 20.9089C1.36361 20.9089 0.860305 20.7079 0.50916 20.3061C0.16972 19.9042 0 19.4145 0 18.8368Z" fill="black"/>
                        <path d="M9.48092 18.8368C9.48092 18.2466 9.65064 17.7505 9.99008 17.3487C10.3412 16.9343 10.8445 16.7271 11.5 16.7271C12.1555 16.7271 12.6529 16.9343 12.9924 17.3487C13.3435 17.7505 13.5191 18.2466 13.5191 18.8368C13.5191 19.4145 13.3435 19.9042 12.9924 20.3061C12.6529 20.7079 12.1555 20.9089 11.5 20.9089C10.8445 20.9089 10.3412 20.7079 9.99008 20.3061C9.65064 19.9042 9.48092 19.4145 9.48092 18.8368Z" fill="black"/>
                        <path d="M18.9618 18.8368C18.9618 18.2466 19.1316 17.7505 19.471 17.3487C19.8221 16.9343 20.3254 16.7271 20.9809 16.7271C21.6364 16.7271 22.1338 16.9343 22.4733 17.3487C22.8244 17.7505 23 18.2466 23 18.8368C23 19.4145 22.8244 19.9042 22.4733 20.3061C22.1338 20.7079 21.6364 20.9089 20.9809 20.9089C20.3254 20.9089 19.8221 20.7079 19.471 20.3061C19.1316 19.9042 18.9618 19.4145 18.9618 18.8368Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className={"cash-modal__btn" + (dollarCount > 0 ? '' : ' _disabled')} onClick={clickComplete}>
                    <span>Пополнить через Wallet</span>
                    {dollarCount > 0 ? <span>${dollarCount}</span> : ''}
                </div>
            </Modal>
            <Modal 
                className={'publicate-modal'}
                setActive={setIsPublicate}
                isActive={isPublicate}
            >
                <div className="publicate-modal__img">
                    <img src={sucsImg} alt="" />
                </div>
                <div className="publicate-modal__title">
                    <span>Готово!</span>
                    Ваш подарок на публикации
                </div>
                <div className="publicate-modal__subtitle">
                    Контролируйте ход вашей кампании в кабинете партнёра.
                </div>
                <div className="publicate-modal__btn" onClick={goToCabinet}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.22805 6.42559C8.81919 5.96306 9.25067 5.32878 9.46246 4.611C9.67425 3.89323 9.65582 3.12765 9.40973 2.42078C9.16364 1.71391 8.70213 1.1009 8.08941 0.667026C7.47669 0.233154 6.74322 0 5.99106 0C5.23889 0 4.50543 0.233154 3.8927 0.667026C3.27998 1.1009 2.81848 1.71391 2.57239 2.42078C2.3263 3.12765 2.30787 3.89323 2.51966 4.611C2.73145 5.32878 3.16293 5.96306 3.75407 6.42559C2.74113 6.82919 1.85732 7.49858 1.19684 8.36243C0.536353 9.22627 0.123966 10.2522 0.00363697 11.3308C-0.00507307 11.4095 0.00189835 11.4892 0.024153 11.5653C0.0464077 11.6413 0.0835099 11.7123 0.133341 11.7741C0.23398 11.8989 0.380358 11.9789 0.540274 11.9964C0.70019 12.0139 0.860543 11.9675 0.986059 11.8674C1.11158 11.7673 1.19197 11.6217 1.20956 11.4627C1.34196 10.2905 1.90399 9.20788 2.78825 8.42172C3.67252 7.63556 4.81703 7.20096 6.00312 7.20096C7.18921 7.20096 8.33372 7.63556 9.21798 8.42172C10.1022 9.20788 10.6643 10.2905 10.7967 11.4627C10.8131 11.61 10.8838 11.7461 10.9951 11.8447C11.1065 11.9432 11.2506 11.9973 11.3996 11.9964H11.466C11.624 11.9783 11.7685 11.8988 11.8679 11.7753C11.9673 11.6517 12.0135 11.4941 11.9966 11.3368C11.8757 10.2551 11.4611 9.22657 10.7972 8.3614C10.1333 7.49623 9.24519 6.82705 8.22805 6.42559ZM5.99106 5.99984C5.51404 5.99984 5.04773 5.85916 4.6511 5.5956C4.25448 5.33204 3.94534 4.95742 3.7628 4.51913C3.58025 4.08084 3.53249 3.59856 3.62555 3.13327C3.71861 2.66799 3.94832 2.2406 4.28562 1.90514C4.62292 1.56969 5.05268 1.34124 5.52053 1.24869C5.98838 1.15614 6.47332 1.20364 6.91403 1.38519C7.35474 1.56673 7.73142 1.87417 7.99644 2.26862C8.26146 2.66307 8.40291 3.12682 8.40291 3.60122C8.40291 4.23737 8.1488 4.84747 7.69649 5.2973C7.24418 5.74713 6.63072 5.99984 5.99106 5.99984Z" fill="black"/>
                    </svg>
                    Кабинет партнера
                </div>
                <div className="publicate-modal__new">
                    Новый подарок
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M16.7243 18.0002V7.80029H2.27441V18.0002H16.7243Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.5 18.0002V7.80029" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.7243 18H2.27441" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.9998 4.3999H1V7.79987H17.9998V4.3999Z" stroke="black" strokeLinejoin="round"/>
                        <path d="M6.10059 1L9.50055 4.39996L12.9005 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </Modal>
            <div className="pl-bottom-button-container">
                <SmartButton 
                    color="red"
                    onClick={handleMainButtonClick}
                    disabled={
                            (step === 1 && isCompletedFirstStep) ||
                           (step === 2 && isCompletedSecondStep    === true)
                            ? false 
                            : true
                    }
                >{step === 2 ? tr('Button.Publicate') : ''}{step === 1 ? tr('Button.Next') : ''}</SmartButton>
            </div>
        </div>
    )
};

export default CreatePromo;
