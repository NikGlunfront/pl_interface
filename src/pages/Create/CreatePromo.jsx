import React, { useEffect, useState } from "react"
import CreatePromoSteps from "./Promo/CreatePromoSteps";
import CreatePromoPreview from "./Promo/CreatePromoPreview";
import CreatePromoFirstStep from "./Promo/CreatePromoFirstStep";
import SmartButton from "../../components/UI/SmartButton/SmartButton";
import CreatePromoSecondStep from "./Promo/CreatePromoSecondStep";
import { useDispatch, useSelector } from "react-redux";
import { setCreatePromoFirstStep, setCreatePromoStepPosition } from "../../store/slices/createPromo/createPromoSlice";

const promoCreateSteps = [
    {id: 1, name: 'CreatePromo.Steps.Preview'},
    {id: 2, name: 'CreatePromo.Steps.Description'},
    {id: 3, name: 'CreatePromo.Steps.Settings'},
]

const CreatePromo = ({
    
}) => {
    const dispatch = useDispatch()
    const createPromoData = useSelector(state => state.createPromo)
    const { lastStep: step } = useSelector(state => state.createPromo)
    const { images: promoCreatedImages } = useSelector(state => state.createPromo)
    const [firstStepData, setFirstStepData] = useState(null)
    const [isCompletedFirstStep, setIsCompletedFirstStep] = useState(false)

    const getDataFirstStep = (data) => {
        setFirstStepData(data)
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
            alert('Создание промо на БД')
        } 
        if (step === 1) {
            dispatch(setCreatePromoStepPosition(step + 1))
            dispatch(setCreatePromoFirstStep({
                name: firstStepData.name,
                shortDescription: firstStepData.shortDescription,
                location: firstStepData.city,
                locationRef: firstStepData.locationReference,
                isRemote: firstStepData.isRemote
            }))
        }
        if (step === 2) {
            dispatch(setCreatePromoStepPosition(step + 1))
        }
    }

    useEffect(() => {
        console.log(isCompletedFirstStep)
    }, [isCompletedFirstStep])

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
                    // getData={getDataFirstStep}
                />
                : ""
            }


            {step === 1 || step === 2
                ? <CreatePromoPreview 
                    name={firstStepData?.name ? firstStepData.name : ''}
                    description={firstStepData?.shortDescription ? firstStepData.shortDescription : ''}
                    location={firstStepData?.city?.name ? firstStepData.city.name : ''} 
                    locationReference={firstStepData?.locationReference ? firstStepData.locationReference : ""}
                    isRemote={firstStepData?.is_remote}
                    step={step}
                />
                : ""
            }
            <div className="pl-bottom-button-container">
                <SmartButton 
                    color="red"
                    onClick={handleMainButtonClick}
                    disabled={(step === 1 && isCompletedFirstStep === true) ? false : true}
                >Далее</SmartButton>
            </div>
        </div>
    )
};

export default CreatePromo;
