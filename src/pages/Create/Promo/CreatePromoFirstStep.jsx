import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { setIsContentHidden } from '../../../store/slices/pageSlice/pageSlice';
import CreatePromoImagesUpload from './CreatePromoImagesUpload';
import { useTranslate } from '../../../hooks/useTranslate';
import { useMetaData } from '../../../hooks/useMetaData';
import MultipleAdressPicker from '../../../components/Adress/MultipleAdressPicker';
import DeliveryFilter from '../../../components/Filters/DeliveryFilter/DeliveryFilter';
import CategorySelector from '../../../components/Selectors/CategorySelector/CategorySelector';
import Datepicker from '../../../components/UI/Datepicker/Datepicker';
import Modal from '../../../components/UI/Modal/Modal';
import CreateFilter from '../../../components/Filters/PromoFilters/CreateFilter';

const giftsVars = [
    {id:1, value: 1},
    {id:2, value: 10},
    {id:3, value: 25},
    {id:4, value: 50},
    {id:5, value: 100}
]

const CreatePromoFirstStep = ({
    getData,
    isCompletedFirstStep,
    completedData,
}) => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const { getLocationFromAddress, getLocationFromDeliveryItem, getCitiesFromAddressesString } = useMetaData()
    const { cities } = useSelector(state => state.iniData)
    const partnerAddresses = useSelector(state => state.user.company.adress)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [adressList, setAdressList] = useState([])
    const [deliveryList, setDeliveryList] = useState({list: [], description: ''})
    const [adressListVisible, setAdressListVisible] = useState(false)
    const langCode = useSelector(state => state.user.lang)
    const settingsState = useSelector(state => state.createPromo.settings)
    const [giftsAmount, setGiftsAmount] = useState(0)
    const [priceAmount, setPriceAmount] = useState(0)
    const [dateValue, setDateValue] = useState(null)
    const [isNoDate, setIsNoDate] = useState(false)
    const [citiesToShowIn, setCitiesToShowIn] = useState([])
    const [catsToShowIn, setCatsToShowIn] = useState([])
    const [giftsNum, setGiftsNum] = useState(0)
    const [isModalActive, setIsModalActive] = useState(false)

    useEffect(() => {
        if (completedData.name) {
            setName(completedData.name)
        }
        if (completedData.adresses) {
            setAdressList(completedData.adresses)
        }
        if (completedData.shortDescription) {
            setDescription(completedData.shortDescription)
        }
    }, []) 

    useEffect(() => {console.log(adressList)}, [adressList])

    const setGiftsNumber = (value) => {
        setGiftsNum(value)
        setIsModalActive(false)
    }

    const handleNameChange = (name) => {
        setName(name)
    }

    const handleDescrChange = (descr) => {
        setDescription(descr)
    }

    const updateAdressList = (id, oldState) => {
        let newList = adressList
        if (oldState === true) {
            newList = newList.filter(item => item !== id)
        } else {
            newList = [...newList, id]
        }
        setAdressList(newList)
    }

    const openFilterList = () => {
        setAdressListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const updateFilterData = (data = 0) => {
        setAdressListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    const getAdressByCityId = (id) => {
        return partnerAddresses.filter(item => item.city_id === id)
    }

    const validateFirstStepData = () => {
        if (name === '') {
            return false
        }
        if (description === '') {
            return false
        }
        if (adressList.length === 0 && deliveryList.list.length === 0) {
            return false
        }

        return true
    }

    const validatePromoSettings = () => {
        if (dateValue === null && !isNoDate) {
            return false
        }
        if (priceAmount === 0) {
            return false
        }
        if (giftsAmount === 0) {
            return false
        }
        if (catsToShowIn.length === 0) {
            return false
        }
        if (citiesToShowIn.length === 0) {
            return false
        }
        return true
    }


    useEffect(() => {
        let location = ''
        if (adressList.length > 0) {
            location = getLocationFromAddress(partnerAddresses.filter(item => item.id === adressList[0])[0])
        }
        if (adressList.length === 0 && deliveryList.list.length > 0) {
            location = getLocationFromDeliveryItem(deliveryList)
        }
        getData({
            name: name,
            shortDescription: description,
            addresses: adressList,
            location: location,
            delivery: deliveryList
        })
        isCompletedFirstStep(validateFirstStepData())
    }, [name, description, adressList, deliveryList])

    return (
        <div className='firststep-create-promo'>
            <CreatePromoImagesUpload completedImages={completedData.images} />
            <TextInput 
                placeholder={tr('CreatePromo.InputFields.PromoName')}
                handleChange={handleNameChange}
                iniValue={name}
                symbolNum={100}
            />
            <TextArea 
                placeholder={tr('CreatePromo.InputFields.Description')}
                handleChange={handleDescrChange}
                iniValue={description}
                symbolNum={1000}
            />
            {/* <CategorySelector 
                    callbackCategory={setCatsToShowIn}
                    withIcon={true}
                    stateData={settingsState.catsToShowIn}
            /> */}
            <div className="firststep-create-promo__city">
                <CreateFilter />
            </div>
            <div className="firststep-create-promo__city">
                <div className={"firststep-create-promo__filter" + (adressList.length > 0 ? " _picked" : '')} onClick={openFilterList}>
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6.83333C13 11.8333 7 16 7 16C7 16 1 11.8333 1 6.83333C1 3.61167 3.68629 1 7 1C10.3137 1 13 3.61167 13 6.83333Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 8.105 8.105 9 7 9C5.895 9 5 8.105 5 7C5 5.895 5.895 5 7 5C8.105 5 9 5.895 9 7Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <span>{adressList.length > 0 ? getCitiesFromAddressesString(partnerAddresses.filter(item => adressList.includes(item.id))) : tr('Promo.InfoGroup.Title.Adress')}</span>
                    {adressList.length > 0 && (partnerAddresses.length - adressList.length !== 0) &&
                        <div className="promo-create-filter-more">еще {partnerAddresses.length - adressList.length}</div>
                    }
                </div>
                <MultipleAdressPicker 
                    activeAdressList={adressList}
                    adressList={partnerAddresses}
                    cities={cities}
                    closeList={updateFilterData}
                    listVisible={adressListVisible}
                    updateAdressList={updateAdressList}
                />
            </div>
            <DeliveryFilter  callbackDelivery={setDeliveryList} />
            <div className="settings-create-promo">
                <div className={"firststep-create-promo__filter gifts-amount" + (giftsNum > 0 ? " _picked" : '')} onClick={() => setIsModalActive(true)}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8.04373H1V5.87706C1 5.07901 1.64639 4.43262 2.44444 4.43262H12.5556C13.3536 4.43262 14 5.07901 14 5.87706V8.04373Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1115 13.8207H3.88932C2.6926 13.8207 1.72266 12.8508 1.72266 11.6541V8.04297H13.2782V11.6541C13.2782 12.8508 12.3083 13.8207 11.1115 13.8207Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5 4.0708C7.5 4.0708 7.5 7.3208 7.5 8.04312" stroke="#E10001" stroke-linecap="square" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 4.43176C7.5 4.43176 8.29156 1.74437 9.67678 1.04526C11.2187 0.266707 12.7058 1.65482 11.2187 3.04365C10.4748 3.73771 8.98778 4.43176 7.5 4.43176Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49932 4.43176C7.49932 4.43176 6.70777 1.74437 5.32255 1.04526C3.7806 0.266707 2.29355 1.65482 3.7806 3.04365C4.52449 3.73771 6.01155 4.43176 7.49932 4.43176Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{tr('Количество подарков')}</span>
                    {giftsNum > 0 &&
                        <div className="promo-create-filter-more" style={{fontWeight:500}}>{giftsNum}</div>
                    }
                </div>
                <Modal
                    className={'gifts-popup'}
                    isActive={isModalActive}
                    setActive={setIsModalActive}
                >
                    <div className="gifts-popup__title">Количество подарков</div>
                    <div className="gifts-popup__list">
                        {giftsVars.map(item  => (
                            <div className="gifts-popup__item" onClick={() => setGiftsNumber(item.value)}>{item.value}</div>
                        ))}
                        <div className="gifts-popup__item _other"><svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2.10975C0 1.51952 0.16972 1.02348 0.50916 0.621622C0.860305 0.207207 1.36361 0 2.01908 0C2.67455 0 3.17201 0.207207 3.51145 0.621622C3.8626 1.02348 4.03817 1.51952 4.03817 2.10975C4.03817 2.68741 3.8626 3.17718 3.51145 3.57903C3.17201 3.98089 2.67455 4.18182 2.01908 4.18182C1.36361 4.18182 0.860305 3.98089 0.50916 3.57903C0.16972 3.17718 0 2.68741 0 2.10975Z" fill="black"/>
<path d="M9.48092 2.10975C9.48092 1.51952 9.65064 1.02348 9.99008 0.621622C10.3412 0.207207 10.8445 0 11.5 0C12.1555 0 12.6529 0.207207 12.9924 0.621622C13.3435 1.02348 13.5191 1.51952 13.5191 2.10975C13.5191 2.68741 13.3435 3.17718 12.9924 3.57903C12.6529 3.98089 12.1555 4.18182 11.5 4.18182C10.8445 4.18182 10.3412 3.98089 9.99008 3.57903C9.65064 3.17718 9.48092 2.68741 9.48092 2.10975Z" fill="black"/>
<path d="M18.9618 2.10975C18.9618 1.51952 19.1316 1.02348 19.471 0.621622C19.8221 0.207207 20.3254 0 20.9809 0C21.6364 0 22.1338 0.207207 22.4733 0.621622C22.8244 1.02348 23 1.51952 23 2.10975C23 2.68741 22.8244 3.17718 22.4733 3.57903C22.1338 3.98089 21.6364 4.18182 20.9809 4.18182C20.3254 4.18182 19.8221 3.98089 19.471 3.57903C19.1316 3.17718 18.9618 2.68741 18.9618 2.10975Z" fill="black"/>
<path d="M0 10.4735C0 9.88329 0.16972 9.38725 0.50916 8.98539C0.860305 8.57098 1.36361 8.36377 2.01908 8.36377C2.67455 8.36377 3.17201 8.57098 3.51145 8.98539C3.8626 9.38725 4.03817 9.88329 4.03817 10.4735C4.03817 11.0512 3.8626 11.5409 3.51145 11.9428C3.17201 12.3447 2.67455 12.5456 2.01908 12.5456C1.36361 12.5456 0.860305 12.3447 0.50916 11.9428C0.16972 11.5409 0 11.0512 0 10.4735Z" fill="black"/>
<path d="M9.48092 10.4735C9.48092 9.88329 9.65064 9.38725 9.99008 8.98539C10.3412 8.57098 10.8445 8.36377 11.5 8.36377C12.1555 8.36377 12.6529 8.57098 12.9924 8.98539C13.3435 9.38725 13.5191 9.88329 13.5191 10.4735C13.5191 11.0512 13.3435 11.5409 12.9924 11.9428C12.6529 12.3447 12.1555 12.5456 11.5 12.5456C10.8445 12.5456 10.3412 12.3447 9.99008 11.9428C9.65064 11.5409 9.48092 11.0512 9.48092 10.4735Z" fill="black"/>
<path d="M18.9618 10.4735C18.9618 9.88329 19.1316 9.38725 19.471 8.98539C19.8221 8.57098 20.3254 8.36377 20.9809 8.36377C21.6364 8.36377 22.1338 8.57098 22.4733 8.98539C22.8244 9.38725 23 9.88329 23 10.4735C23 11.0512 22.8244 11.5409 22.4733 11.9428C22.1338 12.3447 21.6364 12.5456 20.9809 12.5456C20.3254 12.5456 19.8221 12.3447 19.471 11.9428C19.1316 11.5409 18.9618 11.0512 18.9618 10.4735Z" fill="black"/>
<path d="M0 18.8368C0 18.2466 0.16972 17.7505 0.50916 17.3487C0.860305 16.9343 1.36361 16.7271 2.01908 16.7271C2.67455 16.7271 3.17201 16.9343 3.51145 17.3487C3.8626 17.7505 4.03817 18.2466 4.03817 18.8368C4.03817 19.4145 3.8626 19.9042 3.51145 20.3061C3.17201 20.7079 2.67455 20.9089 2.01908 20.9089C1.36361 20.9089 0.860305 20.7079 0.50916 20.3061C0.16972 19.9042 0 19.4145 0 18.8368Z" fill="black"/>
<path d="M9.48092 18.8368C9.48092 18.2466 9.65064 17.7505 9.99008 17.3487C10.3412 16.9343 10.8445 16.7271 11.5 16.7271C12.1555 16.7271 12.6529 16.9343 12.9924 17.3487C13.3435 17.7505 13.5191 18.2466 13.5191 18.8368C13.5191 19.4145 13.3435 19.9042 12.9924 20.3061C12.6529 20.7079 12.1555 20.9089 11.5 20.9089C10.8445 20.9089 10.3412 20.7079 9.99008 20.3061C9.65064 19.9042 9.48092 19.4145 9.48092 18.8368Z" fill="black"/>
<path d="M18.9618 18.8368C18.9618 18.2466 19.1316 17.7505 19.471 17.3487C19.8221 16.9343 20.3254 16.7271 20.9809 16.7271C21.6364 16.7271 22.1338 16.9343 22.4733 17.3487C22.8244 17.7505 23 18.2466 23 18.8368C23 19.4145 22.8244 19.9042 22.4733 20.3061C22.1338 20.7079 21.6364 20.9089 20.9809 20.9089C20.3254 20.9089 19.8221 20.7079 19.471 20.3061C19.1316 19.9042 18.9618 19.4145 18.9618 18.8368Z" fill="black"/>
</svg></div>
                    </div>
                </Modal>
                <Datepicker
                    localeLang={langCode}
                    onChange={setDateValue}
                    value={dateValue}
                    iniValue={dateValue}
                    title={'Page.Title.DateEnd'}
                />
            </div>
            <div className="preview-btn-promo">Предпросмотр</div>
        </div>
    );
};

export default CreatePromoFirstStep;