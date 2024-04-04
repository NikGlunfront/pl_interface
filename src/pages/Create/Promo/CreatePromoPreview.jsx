import React, { useEffect, useState } from "react"
import InfoGroup from "../../../containers/InfoGroup";
import { useSelector } from "react-redux";
import PromoStats from "../../../components/Promo/ListPromoView/PromoStats";
import PromoPreview from "../../../components/Promo/PromoPreview";
import PromoDescription from "../../../components/Promo/PromoView/PromoDescription";
import PromoContacts from "../../../components/Promo/PromoView/PromoContacts";
import PromoGallery from "../../../components/Promo/PromoView/PromoGallery";
import { useTranslate } from "../../../hooks/useTranslate";
import PromoTags from "../../../components/Promo/PromoView/PromoTags";
import PromoAdress from "../../../components/Promo/PromoView/PromoAdress";
import PromoDelivery from "../../../components/Promo/PromoView/PromoDelivery";
import { useMetaData } from "../../../hooks/useMetaData";

const CreatePromoPreview = ({
    name,
    description,
    adresses,
    delivery,
    promoDescription,
    step,
    tags
}) => {
    const { tr } = useTranslate()
    const companyMeta = useSelector(state => state.user.company)
    const promoData = useSelector(state => state.createPromo)
    const { images: promoImages,} = useSelector(state => state.createPromo)
    const { getLocationFromAddress, getLocationFromDeliveryItem } = useMetaData()
    const [locationString, setLocationString] = useState('test')

    useEffect(() => {
        console.log({adresses: adresses, delivery: delivery})
        if (adresses.length > 0 || (delivery && delivery.list.length > 0)) {
            if (adresses.length === 0) {
                setLocationString(getLocationFromDeliveryItem(delivery))
            } else {
                console.log('tets')
                setLocationString(getLocationFromAddress(adresses[0]))
            }
        } else {
            setLocationString('')
        }
    }, [adresses, delivery])

    useEffect(() => {
        console.log(locationString)
    }, [locationString])

    if (promoData === null) {
        return
    }

    return (
        <InfoGroup title={tr('Promo.InfoGroup.Title.Preview')} className={'pl-page-create-promo__preview'}>
            <div className={'pl-promo'}>
                <PromoPreview
                    promoDescription={description}
                    promoImage={promoImages.map(({img_file}) => (img_file))}
                    promoLocation={locationString}
                    promoName={name}
                    isDeliveryLocation={adresses.length === 0 ? true : false}
                />
                <div className="list-item__info">
                    <PromoStats
                        acts={promoData.acts}
                    />
                    <div className="list-item__morebtn">{tr('Button.More')}</div>
                </div>
                {step === 2
                    ? <PromoContacts partner={{id: 'test', name: companyMeta.name}}
                        email={companyMeta.contacts.email ? companyMeta.contacts.email : null}
                        tg={companyMeta.contacts.tg ? companyMeta.contacts.tg : null}
                        phone={companyMeta.contacts.phone ? companyMeta.contacts.phone : null}
                        instagram={companyMeta.contacts.instagram ? companyMeta.contacts.instagram : null}
                        facebook={companyMeta.contacts.facebook ? companyMeta.contacts.facebook : null}
                        whatsapp={companyMeta.contacts.whatsapp ? companyMeta.contacts.whatsapp : null}
                        website={companyMeta.contacts.website ? companyMeta.contacts.website : null}
                        rating={0}
                        reviewCount={0}
                    />
                    : ""
                }
                {step === 2
                    ?   
                    <>
                        <PromoAdress adresses={adresses} /> 
                        <PromoDelivery  delivery={delivery} /> 
                        <PromoDescription isSkeleton={promoDescription ? false : true}>{promoDescription}</PromoDescription>
                        <PromoTags tags={tags}></PromoTags>
                        <PromoGallery images={promoImages.map(({img_file}) => (img_file))} />
                    </>
                    : ""
                }
            </div>
        </InfoGroup>
    )
};

export default CreatePromoPreview;
