import React, { useState } from "react"
import CreatePromoSteps from "./Promo/CreatePromoSteps";
import CreatePromoPreview from "./Promo/CreatePromoPreview";

const promoCreateSteps = [
    {id: 1, name: 'Превью'},
    {id: 2, name: 'Описание'},
    {id: 3, name: 'Настройки'},
]

const CreatePromo = ({
    
}) => {
    const [step, setStep] = useState(1)

    return (
        <div className={'pl-page-container pl-page-create-promo'}>
            <CreatePromoSteps 
                stepsData={promoCreateSteps}
                step={step}
            />
            {step === 1 || step === 2
                ? <CreatePromoPreview />
                : ""
            }
        </div>
    )
};

export default CreatePromo;
