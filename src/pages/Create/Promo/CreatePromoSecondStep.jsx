import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import { useSelector } from 'react-redux';
import { useTranslate } from '../../../hooks/useTranslate';
import TagsSelector from '../../../components/Selectors/TagsSelector/TagsSelector';

const CreatePromoSecondStep = ({
    getData,
    isCompletedSecondStep
}) => {
    const { description: promoDescription, tags: tagsState } = useSelector(state => state.createPromo)
    const { tr } = useTranslate()
    const [descr, setDescr] = useState('')
    const [selectedTags, setSelectedTags] = useState([])
    
    useEffect(() => {
        if (promoDescription) {
            setDescr(promoDescription)
        }
        if (tagsState.length > 0) {
            setSelectedTags([...tagsState])
        }
    }, [])

    const handleDescrChange = (descr) => {
        setDescr(descr)
    }

    const validateSecondStepData = () => {
        if (descr === '') {
            return false
        }

        return true
    }

    useEffect(() => {
        getData({
            description: descr,
            tagsList: selectedTags
        })
        isCompletedSecondStep(validateSecondStepData())
    }, [descr, selectedTags])

    useEffect(() => {console.log(selectedTags)}, [selectedTags])

    return (
        <div className='step-create-promo'>
            <TextArea 
                placeholder={tr('CreatePromo.InputFields.Description')}
                handleChange={handleDescrChange}
                iniValue={descr}
            />
            <TagsSelector handleSelectorData={setSelectedTags} />
        </div>
    );
};

export default CreatePromoSecondStep;