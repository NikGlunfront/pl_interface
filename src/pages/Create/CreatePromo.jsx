import React, { useState } from "react"
import CreatePromoSteps from "./Promo/CreatePromoSteps";
import CreatePromoPreview from "./Promo/CreatePromoPreview";
import CreatePromoFirstStep from "./Promo/CreatePromoFirstStep";
import SmartButton from "../../components/UI/SmartButton/SmartButton";

const promoCreateSteps = [
    {id: 1, name: 'Превью'},
    {id: 2, name: 'Описание'},
    {id: 3, name: 'Настройки'},
]

const CreatePromo = ({
    
}) => {
    const [step, setStep] = useState(1)
    const [firstStepData, setFirstStepData] = useState(null)

    const getDataFirstStep = (data) => {
        setFirstStepData(data)
    }

    const handleMainButtonClick = () => {

    }

    return (
        <div className={'pl-page-container pl-page-create-promo'}>
            <CreatePromoSteps 
                stepsData={promoCreateSteps}
                step={step}
            />
            <CreatePromoFirstStep 
                getData={getDataFirstStep}
            />


            {step === 1 || step === 2
                ? <CreatePromoPreview 
                    name={firstStepData?.name ? firstStepData.name : ''}
                    description={firstStepData?.description ? firstStepData.description : ''}
                    location={firstStepData?.city?.name ? firstStepData.city.name : ''} 
                    locationReference={firstStepData?.locationReference ? firstStepData.locationReference : ""}
                    isRemote={firstStepData?.is_remote}
                />
                : ""
            }
            <div className="pl-bottom-button-container">
                <SmartButton 
                    color="red"
                    onClick={handleMainButtonClick}
                    disabled={true}
                >Далее</SmartButton>
            </div>
        </div>
    )
};

export default CreatePromo;
