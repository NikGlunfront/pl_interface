import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCreatePromoStepPosition } from '../../store/slices/createPromo/createPromoSlice';

const createNavItems = [
    {id: 1, name: 'Профиль', step: 0},
    {id: 2, name: 'Информация', step: 1},
    {id: 3, name: 'Публикация', step: 2},
]

const CreateNav = ({
    step = 0
}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userCompany = useSelector(state => state.user.company)
    const createPromoData = useSelector(state => state.createPromo)
    const [isActiveCompany, setIsActiveCompany] = useState(false)
    const [isActivePromo, setIsActivePromo] = useState(false)

    useEffect(() => {
        if (userCompany.name !== '' && userCompany.description !== '' && userCompany.icon !== '') {
            setIsActiveCompany(true)
        } else {
            setIsActiveCompany(false)
        }
    }, [userCompany])
    useEffect(() => {
        if (createPromoData.name !== '' 
            && createPromoData.shortDescription !== '' 
            && createPromoData.promoCats !== null
            && createPromoData.settings.giftsAmount !== 0
            && createPromoData.settings.date_end !== null
            && (createPromoData.adresses.length > 0 || createPromoData.delivery.list.length > 0)
        ) {
            setIsActivePromo(true)
        } else {
            setIsActivePromo(false)
        }
    }, [createPromoData])

    const handleNavClick = (id) => {
        switch (id) {
            case 1:
                if (step !== 0) {
                    navigate('/create-partner')
                    dispatch(setCreatePromoStepPosition(1))
                }
                break;
        
            case 2:
                if (step == 2) {
                    // navigate('/create-partner')
                    dispatch(setCreatePromoStepPosition(1))
                    console.log('check')
                } else {
                    if (step !== 1 && isActivePromo) {
                        navigate('/create-promo')
                        dispatch(setCreatePromoStepPosition(1))
                    }
                }
                
                break;
        
            case 3:
                
                break;
        
            default:
                break;
        }
    }


    return (
        <div className={'create-nav' + ` create-nav_${step}`}>
            {createNavItems.map(item => (
                <div 
                    key={item.id} 
                    className={"create-nav__item" + (step === item.step ? " _active" : '') + 
                        (item.step === 0 && isActiveCompany ? " _filled" : '') +
                        (item.step === 1 && isActivePromo ? " _filled" : '')
                    }
                    onClick={() => {handleNavClick(item.id)}}
                >
                    {item.step === 0 &&
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.22805 6.42559C8.81919 5.96306 9.25067 5.32878 9.46246 4.611C9.67425 3.89323 9.65582 3.12765 9.40973 2.42078C9.16364 1.71391 8.70213 1.1009 8.08941 0.667026C7.47669 0.233154 6.74322 0 5.99106 0C5.23889 0 4.50543 0.233154 3.8927 0.667026C3.27998 1.1009 2.81848 1.71391 2.57239 2.42078C2.3263 3.12765 2.30787 3.89323 2.51966 4.611C2.73145 5.32878 3.16293 5.96306 3.75407 6.42559C2.74113 6.82919 1.85732 7.49858 1.19684 8.36243C0.536353 9.22627 0.123966 10.2522 0.00363697 11.3308C-0.00507307 11.4095 0.00189835 11.4892 0.024153 11.5653C0.0464077 11.6413 0.0835099 11.7123 0.133341 11.7741C0.23398 11.8989 0.380358 11.9789 0.540274 11.9964C0.70019 12.0139 0.860543 11.9675 0.986059 11.8674C1.11158 11.7673 1.19197 11.6217 1.20956 11.4627C1.34196 10.2905 1.90399 9.20788 2.78825 8.42172C3.67252 7.63556 4.81703 7.20096 6.00312 7.20096C7.18921 7.20096 8.33372 7.63556 9.21798 8.42172C10.1022 9.20788 10.6643 10.2905 10.7967 11.4627C10.8131 11.61 10.8838 11.7461 10.9951 11.8447C11.1065 11.9432 11.2506 11.9973 11.3996 11.9964H11.466C11.624 11.9783 11.7685 11.8988 11.8679 11.7753C11.9673 11.6517 12.0135 11.4941 11.9966 11.3368C11.8757 10.2551 11.4611 9.22657 10.7972 8.3614C10.1333 7.49623 9.24519 6.82705 8.22805 6.42559ZM5.99106 5.99984C5.51404 5.99984 5.04773 5.85916 4.6511 5.5956C4.25448 5.33204 3.94534 4.95742 3.7628 4.51913C3.58025 4.08084 3.53249 3.59856 3.62555 3.13327C3.71861 2.66799 3.94832 2.2406 4.28562 1.90514C4.62292 1.56969 5.05268 1.34124 5.52053 1.24869C5.98838 1.15614 6.47332 1.20364 6.91403 1.38519C7.35474 1.56673 7.73142 1.87417 7.99644 2.26862C8.26146 2.66307 8.40291 3.12682 8.40291 3.60122C8.40291 4.23737 8.1488 4.84747 7.69649 5.2973C7.24418 5.74713 6.63072 5.99984 5.99106 5.99984Z" fill="white"/>
                        </svg>
                    }
                    {item.step === 1 &&
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 10.4933V2.11686C1 1.49979 1.49979 1 2.11686 1H7.79719C8.09315 1 8.37739 1.11783 8.5868 1.32724L10.7245 3.4649C10.9339 3.67431 11.0517 3.95855 11.0517 4.25452V10.4933C11.0517 11.1103 10.5519 11.6101 9.93485 11.6101H2.11686C1.49979 11.6101 1 11.1103 1 10.4933Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.0519 4.35073H9.37662C8.75956 4.35073 8.25977 3.85094 8.25977 3.23388V1.55859" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.79102 4.3505H5.4663" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.79102 6.5839H7.70001" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.79102 8.81828H7.70001" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    }
                    {item.step === 2 &&
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.56702 0.0241826C1.23089 0.13726 0.146518 1.23681 0.0258095 2.60102C-0.00860316 2.98993 -0.00860316 8.33528 0.0258095 8.72419C0.0857934 9.40201 0.356197 9.98636 0.834718 10.4721C1.31414 10.9589 1.9314 11.2465 2.6188 11.3035C3.01741 11.3366 8.31092 11.3366 8.70952 11.3035C9.39283 11.2469 9.99314 10.9716 10.4703 10.4962C10.9601 10.0082 11.242 9.40797 11.3025 8.72419C11.3369 8.33528 11.3369 2.98993 11.3025 2.60102C11.1796 1.21165 10.0991 0.136915 8.70952 0.0216668C8.343 -0.00870783 2.92971 -0.00648333 2.56702 0.0241826ZM9.04738 1.24465C9.60301 1.44771 10.0159 1.91789 10.1364 2.48479C10.1593 2.59254 10.1653 3.4398 10.1592 5.74205L10.151 8.85366L10.0797 9.04912C9.9061 9.52465 9.52539 9.90612 9.05188 10.079L8.85395 10.1513L5.72256 10.1583C2.27912 10.1661 2.46424 10.174 2.10923 10.0043C1.66584 9.79241 1.32896 9.38123 1.20548 8.90117C1.16773 8.75438 1.16394 8.40209 1.17024 5.60418L1.17728 2.47155L1.24862 2.27609C1.37066 1.94181 1.60368 1.63888 1.88674 1.44657C2.0623 1.32732 2.17006 1.27735 2.39496 1.21094C2.54347 1.16708 2.75841 1.16436 5.70387 1.16899L8.85395 1.17394L9.04738 1.24465ZM7.77932 3.42161C7.7124 3.43962 7.62624 3.4791 7.58783 3.50932C7.54942 3.53953 6.9634 4.23004 6.28558 5.04378C5.60775 5.85748 5.04654 6.52159 5.03841 6.51953C5.03026 6.51749 4.74355 6.26128 4.40125 5.95017C4.05897 5.63909 3.73584 5.35806 3.68321 5.3257C3.45995 5.18837 3.18169 5.23315 2.99427 5.43655C2.82504 5.62021 2.7911 5.84416 2.89826 6.07008C2.95324 6.18596 4.69219 7.78141 4.85584 7.8661C5.03748 7.96011 5.30934 7.92613 5.46873 7.78946C5.49956 7.76306 6.18072 6.95282 6.98241 5.98899C8.451 4.2234 8.4963 4.16294 8.4963 3.96777C8.4963 3.69721 8.27539 3.44939 7.99363 3.40384C7.94268 3.3956 7.84624 3.4036 7.77932 3.42161Z" fill="black"/>
                        </svg>
                    }
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default CreateNav;