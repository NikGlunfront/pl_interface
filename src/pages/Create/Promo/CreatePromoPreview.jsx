import React, { useEffect, useState } from "react"
import InfoGroup from "../../../containers/InfoGroup";
import { useSelector } from "react-redux";
import PromoStats from "../../../components/Promo/ListPromoView/PromoStats";
import PromoPreview from "../../../components/Promo/PromoPreview";
import PromoTags from "../../../components/Promo/PromoView/PromoTags";
import PromoDescription from "../../../components/Promo/PromoView/PromoDescription";
import PromoAdress from "../../../components/Promo/PromoView/PromoAdress";
import PromoContacts from "../../../components/Promo/PromoView/PromoContacts";
import PromoGallery from "../../../components/Promo/PromoView/PromoGallery";
import { useTranslate } from "../../../hooks/useTranslate";

const CreatePromoPreview = ({
    name,
    description,
    location,
    locationReference,
    isRemote,
    step
}) => {
    const { tr } = useTranslate()
    const companyMeta = useSelector(state => state.user.company)
    const { images: promoImages } = useSelector(state => state.createPromo)
    const [promoData, setPromoData] = useState(null)
    useEffect(() => {
        setPromoData({
            img: [],
            amount_left:0,
            name: "",
            description:"",
            location:"",
            acts: {
                views:0,
                scs:0,
                wish:0,
            },
            brand_id:3,
            brand_name: companyMeta.name,
            brand_img: companyMeta.icon,
            brand_contacts: {
                phone: "79995553333",
                telegram: "https://tg.me/paymeg",
                whatsapp: "+79995553333",
                facebook: "facebook.com",
                website: "google.com"
            },
            brand_role:"Магазин электроники"
        })
    }, [])

    if (promoData === null) {
        return
    }

    return (
        <InfoGroup title={tr('Promo.InfoGroup.Title.Preview')} className={'pl-page-create-promo__preview'}>
            <div className={'pl-promo'}>
                <PromoPreview
                    amountLeft={promoData.amount_left}
                    companyImage={promoData.brand_img}
                    companyName={promoData.brand_name}
                    promoDescription={description}
                    promoImage={promoImages.map(({img_file}) => (img_file))}
                    promoLocation={tr(location) + (locationReference ? `, ${locationReference}` : '')}
                    promoName={name}
                    dateEnd={promoData.date_end}
                    inactive={promoData.inactive}
                    isRemote={isRemote}
                />
                <div className="list-item__info">
                    <PromoStats
                        acts={promoData.acts}
                    />
                    <div className="list-item__morebtn">{tr('Button.More')}</div>
                </div>
                {step === 2
                    ? <PromoContacts partner={{id: 'test', name: companyMeta.name}}
                        email={companyMeta.contacts.email ? companyMeta.contacts.email : ""}
                        tg={companyMeta.contacts.tg ? companyMeta.contacts.tg : ""}
                        phone={companyMeta.contacts.phone ? companyMeta.contacts.phone : ""}
                        instagram={companyMeta.contacts.instagram ? companyMeta.contacts.instagram : ""}
                        facebook={companyMeta.contacts.facebook ? companyMeta.contacts.facebook : ""}
                        whatsapp={companyMeta.contacts.whatsapp ? companyMeta.contacts.whatsapp : ""}
                        website={companyMeta.contacts.website ? companyMeta.contacts.website : ""}
                    />
                    : ""
                }
                {step === 2
                    ? <PromoAdress />
                    : ""
                }
                {step === 2
                    ? <PromoDescription>{description}</PromoDescription>
                    : ""
                }
                {step === 2
                    ? <PromoTags>{}</PromoTags>
                    : ""
                }
                {step === 2
                    ? <PromoGallery images={promoImages.map(({img_file}) => (img_file))} />
                    : ""
                }
            </div>
        </InfoGroup>
    )
};

export default CreatePromoPreview;
