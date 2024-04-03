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

const promoCreateSteps = [
    {id: 1, name: 'CreatePromo.Steps.Preview'},
    {id: 2, name: 'CreatePromo.Steps.Description'},
    {id: 3, name: 'CreatePromo.Steps.Settings'},
]

const CreatePromo = ({
    
}) => {
    const dispatch = useDispatch()
    const { scrollTop } = useScroll()
    const { tr } = useTranslate()
    const createPromoData = useSelector(state => state.createPromo)
    const { lastStep: step, images: promoCreatedImages, delivery: deliveryState } = useSelector(state => state.createPromo)
    const { adress: companyAddresses } = useSelector(state => state.user.company)
    const [firstStepData, setFirstStepData] = useState(null)
    const [secondStepData, setSecondStepData] = useState(null)
    const [thirdStepData, setThirdStepData] = useState(null)
    const [isCompletedFirstStep, setIsCompletedFirstStep] = useState(false)
    const [isCompletedSecondStep, setIsCompletedSecondStep] = useState(false)
    const [isCompletedThirdStep, setIsCompletedThirdStep] = useState(false)

    useEffect(() => {console.log(firstStepData)}, [firstStepData])
    const getDataFirstStep = (data) => {
        setFirstStepData(data)
    }

    const getDataSecondStep = (data) => {
        setSecondStepData(data)
    }

    const handleComplFirstStep = (isCompleted) => {
        if (isCompleted && promoCreatedImages.length > 0) {
            setIsCompletedFirstStep(true)
        } else {
            setIsCompletedFirstStep(false)
        }
    }

    const handleMainButtonClick = () => {
        if (step === 3) {
            console.log(thirdStepData)
            dispatch(setCreatePromoSettings({
                giftsAmount: thirdStepData.gifts_amount,
                price_per_click: thirdStepData.price_per_click,
                date_end: thirdStepData.date_end,
                citiesToShowIn: thirdStepData.citiesToShowIn,
                catsToShowIn: thirdStepData.catsToShowIn,
            }))
            alert('Создание промо на БД')
        } 
        if (step === 1) {
            dispatch(setCreatePromoStepPosition(step + 1))
            dispatch(setCreatePromoFirstStep({
                name: firstStepData.name,
                shortDescription: firstStepData.shortDescription,
                location: firstStepData.city,
                locationRef: firstStepData.locationReference,
                isRemote: firstStepData.isRemote,
                adresses: firstStepData.addresses,
                delivery: firstStepData.delivery
            }))
        }
        if (step === 2) {
            dispatch(setCreatePromoStepPosition(step + 1))
            dispatch(setCreatePromoSecondStep({
                description: secondStepData.description,
                tags: secondStepData.tagsList
            }))
        }
        scrollTop()
    }

    return (
        <div className={'pl-page-container pl-page-create-promo'}>
            <CreatePromoSteps 
                stepsData={promoCreateSteps}
                step={step}
            />
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


            {step === 1 || step === 2
                ? <CreatePromoPreview 
                    name={firstStepData?.name ? firstStepData.name : ''}
                    description={firstStepData?.shortDescription ? firstStepData.shortDescription : ''}
                    locationString={firstStepData?.location}
                    isRemote={firstStepData?.is_remote}
                    step={step}
                    adresses={companyAddresses.length > 0 && firstStepData?.addresses.length > 0 ? companyAddresses.filter(item => firstStepData.addresses.includes(item.id)) : []}
                    delivery={deliveryState}
                    tags={secondStepData?.tagsList}
                    promoDescription={secondStepData?.description ? secondStepData.description : "" }
                />
                : ""
            }

            {step === 3
                ?   <CreatePromoSettings 
                        getData={setThirdStepData}
                        setIsCompleted={setIsCompletedThirdStep}
                    />
                : ""
            }
            <div className="pl-bottom-button-container">
                <SmartButton 
                    color="red"
                    onClick={handleMainButtonClick}
                    disabled={
                        (step === 1 && isCompletedFirstStep     === true)   ||
                        (step === 2 && isCompletedSecondStep    === true)  ||
                        (step === 3 && isCompletedThirdStep     === true)
                        ? false 
                        : true
                    }
                >{step === 3 ? tr('Button.Publicate') : tr('Button.Next')}</SmartButton>
            </div>
        </div>
    )
};

export default CreatePromo;
