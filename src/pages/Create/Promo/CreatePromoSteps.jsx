import React from "react"
import { useTranslate } from "../../../hooks/useTranslate";

const CreatePromoSteps = ({
    stepsData,
    step
}) => {
    const { tr } = useTranslate()

    return (
        <div className="steps-pl-page-create-promo">
            <div className={"steps-pl-page-create-promo__progress " + `steps-pl-page-create-promo__progress_${step}`}></div>
            <div className="steps-pl-page-create-promo__row">
                {stepsData.map(step => (
                    <div className="steps-pl-page-create-promo__item" key={step.id}>
                        <div></div>
                        <span>{tr(step.name)}</span>
                    </div>
                ))}

            </div>
        </div>
    )
};

export default CreatePromoSteps;
