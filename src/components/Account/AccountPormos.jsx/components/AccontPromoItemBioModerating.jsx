import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Modal from "../../../UI/Modal/Modal";
import { useSelector } from "react-redux";

const AccontPromoItemBioModerating = ({
    name = '',
    description = '',
    location = [],
    delivery = [],
    isDeliveryLocation = false
}) => {
    const locationPath = useLocation()
    const [isDisplayedActions,  setIsDisplayedActions] = useState(true)
    const [isModalActive, setIsModalActive] = useState(false)
    const { title: pageTitle } = useSelector(state => state.pageMeta)

    return (
        <>
            <div className={"pl-promo__title " + (name.length === 0 ? 'pl-promo__title_skeleton' : '') + (isDisplayedActions ? " _with_actions" : '') + " pl-promo__description"}>
                <span dangerouslySetInnerHTML={{ __html: description }} />
                {isDisplayedActions
                    ?
                    <>
                        <div className="pl-promo__actions" onClick={() => setIsModalActive(true)}><span></span></div>
                        <Modal
                            className={'promo-actions-modal'}
                            isActive={isModalActive}
                            setActive={setIsModalActive}
                        >
                            <ul>
                                <li>
                                    <div>
                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.98766 4.13798L10.9584 3.16828L7.08606 0L3.21372 3.16828L4.17898 4.1421L6.39003 2.29111L6.38113 11.6156L7.7503 11.617L7.7592 2.26706L9.98766 4.13798ZM1.25 6.98479C1.25 6.70865 1.47386 6.48479 1.75 6.48479H4.97437V5.48479H1.75C0.921573 5.48479 0.25 6.15637 0.25 6.98479V16.2498C0.25 17.0782 0.921575 17.7498 1.75 17.7498H12.4231C13.2515 17.7498 13.9231 17.0782 13.9231 16.2498V6.98479C13.9231 6.15637 13.2515 5.48479 12.4231 5.48479H9.19874V6.48479H12.4231C12.6993 6.48479 12.9231 6.70865 12.9231 6.98479V16.2498C12.9231 16.5259 12.6993 16.7498 12.4231 16.7498H1.75C1.47386 16.7498 1.25 16.5259 1.25 16.2498V6.98479Z" fill="black"/>
</svg>
                                        Поделиться
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.50013 14.0005C8.50013 14.0005 2.92316 10.4383 1.39232 7.02435C-0.652956 2.46457 5.8347 -1.69583 8.50013 3.20665C11.1656 -1.69583 17.6523 2.46457 15.6079 7.02435C14.0771 10.4383 8.50013 14.0005 8.50013 14.0005Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                                        Добавить в избранное
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5C16 12.6421 12.6421 16 8.5 16Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.34375 3.34375L13.6562 13.6562" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                                        Не интересует
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3316 7.10133L6.69422 3.46311C6.86726 3.3517 7.064 3.26518 7.28444 3.20356C7.50489 3.14193 7.75496 3.11111 8.03467 3.11111C8.77185 3.11111 9.39467 3.3683 9.90311 3.88267C10.4121 4.39704 10.6667 5.02874 10.6667 5.77778C10.6667 6.02311 10.6332 6.27022 10.5662 6.51911C10.4987 6.768 10.4204 6.96207 10.3316 7.10133ZM2.84089 12.8756C3.63082 12.309 4.44119 11.8735 5.272 11.5689C6.10282 11.2637 7.01215 11.1111 8 11.1111C8.69926 11.1111 9.33659 11.1964 9.912 11.3671C10.4874 11.5378 10.9594 11.7135 11.328 11.8942L7.86844 8.43467C7.16089 8.37955 6.576 8.12385 6.11378 7.66755C5.65156 7.21126 5.39882 6.62933 5.35556 5.92178L2.70311 3.26844C2.1603 3.87585 1.72237 4.57481 1.38933 5.36533C1.05571 6.15526 0.88889 7.03348 0.88889 8C0.88889 8.98785 1.06459 9.88415 1.416 10.6889C1.76741 11.4936 2.24237 12.2225 2.84089 12.8756ZM13.3609 12.6631C13.8575 12.0557 14.2735 11.3683 14.6089 10.6009C14.9437 9.83348 15.1111 8.96652 15.1111 8C15.1111 6.02963 14.4187 4.3517 13.0338 2.96622C11.6489 1.58074 9.97096 0.888296 8 0.888889C7.09037 0.888889 6.24059 1.04504 5.45067 1.35733C4.66015 1.66963 3.95556 2.09689 3.33689 2.63911L13.3609 12.6631ZM8 16C6.8877 16 5.84474 15.7923 4.87111 15.3769C3.89748 14.9615 3.05007 14.3926 2.32889 13.6702C1.6077 12.9479 1.03911 12.1004 0.623112 11.128C0.207112 10.1556 -0.000591328 9.11289 1.26442e-06 8C1.26442e-06 6.88415 0.207705 5.84059 0.623112 4.86933C1.03852 3.89748 1.60741 3.05067 2.32978 2.32889C3.05215 1.60711 3.89956 1.03852 4.872 0.623111C5.84444 0.207704 6.88711 0 8 0C9.11585 0 10.1594 0.207704 11.1307 0.623111C12.1025 1.03852 12.9493 1.60741 13.6711 2.32978C14.3929 3.05215 14.9615 3.89867 15.3769 4.86933C15.7923 5.84 16 6.88355 16 8C16 9.1123 15.7923 10.1553 15.3769 11.1289C14.9615 12.1025 14.3926 12.9499 13.6702 13.6711C12.9479 14.3923 12.1013 14.9609 11.1307 15.3769C10.16 15.7929 9.11644 16.0006 8 16ZM8 15.1111C8.83081 15.1111 9.6397 14.9621 10.4267 14.664C11.2148 14.3659 11.909 13.9793 12.5093 13.504C11.9316 13.0406 11.232 12.6741 10.4107 12.4044C9.58933 12.1348 8.78578 12 8 12C7.21422 12 6.42489 12.1262 5.632 12.3787C4.83911 12.6311 4.12533 13.0062 3.49067 13.504C4.09156 13.9793 4.78548 14.3659 5.57244 14.664C6.35941 14.9621 7.16859 15.1111 8 15.1111Z" fill="black"/>
</svg>
                                        Не показывать подарки от этого партнёра
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 14V0H6.08554L6.424 1.80645H11V9.03226H6.60677L6.26831 7.22581H0.846154V14H0ZM7.31923 8.12903H10.1538V2.70968H5.71154L5.37308 0.903226H0.846154V6.32258H6.98077L7.31923 8.12903Z" fill="black"/>
                                        </svg>
                                        Пожаловаться
                                    </div>
                                </li>
                            </ul>
                        </Modal>
                    </>
                    :
                    <></>
                }
            </div>
            <div 
                className={"pl-moderate-promo__location "}
            >
                <div className="pl-moderate-promo__locationrow">
                    <div className="pl-moderate-promo__addresses">
                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.4 6.05556C11.4 10.3889 6.2 14 6.2 14C6.2 14 1 10.3889 1 6.05556C1 3.26344 3.32811 1 6.2 1C9.07189 1 11.4 3.26344 11.4 6.05556Z" stroke="#E10001" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.93151 6.19964C7.93151 7.15731 7.15584 7.93298 6.19818 7.93298C5.24051 7.93298 4.46484 7.15731 4.46484 6.19964C4.46484 5.24198 5.24051 4.46631 6.19818 4.46631C7.15584 4.46631 7.93151 5.24198 7.93151 6.19964Z" stroke="#E10001" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        25 адресов
                    </div>
                    <div className="pl-moderate-promo__delivery">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.4 10.5333H1.86667C1.38827 10.5333 1 10.1451 1 9.66667V2.73333C1 1.77567 1.77567 1 2.73333 1H9.66667C10.6243 1 11.4 1.77567 11.4 2.73333V10.5333Z" stroke="#E10001" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.4671 10.5335H11.4004V4.4668H14.8671L17.4671 7.0668V10.5335Z" stroke="#E10001" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 12C16 13.105 15.105 14 14 14C12.895 14 12 13.105 12 12C12 10.895 12.895 10 14 10C15.105 10 16 10.895 16 12Z" fill="white" stroke="#E10001" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 13.105 5.105 14 4 14C2.895 14 2 13.105 2 12C2 10.895 2.895 10 4 10C5.105 10 6 10.895 6 12Z" fill="white" stroke="#E10001" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        25 городов
                    </div>
                </div>
            </div>
        </>
    )
};

export default AccontPromoItemBioModerating;
