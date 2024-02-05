import React from "react"
import InfoGroup from "../../../containers/InfoGroup";
import PromoTopper from "../../../components/Promo/PromoView/PromoIntro";
import PromoContacts from "../../../components/Promo/PromoView/PromoContacts";
import PromoAdress from "../../../components/Promo/PromoView/PromoAdress";
import PromoDescription from "../../../components/Promo/PromoView/PromoDescription";
import PromoTags from "../../../components/Promo/PromoView/PromoTags";
import PromoGallery from "../../../components/Promo/PromoView/PromoGallery";

const CreatePromoPreview = ({
    
}) => {

    return (
        <InfoGroup title={'Превью'} className={'pl-page-create-promo__preview'}>
            {/* <PromoTopper promoData={promoData} />  */}
            {/* <PromoContacts partner={partnerData} /> */}
            {/* <PromoAdress /> */}
            {/* <PromoDescription>{promoData.description}</PromoDescription> */}
            {/* <PromoTags>{promoData.tags}</PromoTags> */}
            {/* <PromoGallery /> */}
        </InfoGroup>
    )
};

export default CreatePromoPreview;
