import React from "react"
import { useSelector } from "react-redux";

const BurgerItemIcon = ({
    icon,
    type = null
}) => {
    const { darkTheme: isDarkTheme, pageNotifications: nums } = useSelector(state => state.pageMeta)

    return (
        <>
            {type === 'partner'
                ?
                <div className="pl-burger-list__icon pl-burger-list__icon_partner">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0848 11.7803C16.1685 10.9323 16.9596 9.76943 17.3478 8.45351C17.7361 7.13759 17.7023 5.73403 17.2512 4.4381C16.8 3.14217 15.9539 2.01831 14.8306 1.22288C13.7073 0.42745 12.3626 0 10.9836 0C9.60463 0 8.25995 0.42745 7.13662 1.22288C6.0133 2.01831 5.1672 3.14217 4.71604 4.4381C4.26488 5.73403 4.23109 7.13759 4.61937 8.45351C5.00765 9.76943 5.7987 10.9323 6.88245 11.7803C5.02541 12.5202 3.40508 13.7474 2.1942 15.3311C0.983314 16.9148 0.227271 18.7956 0.00666779 20.7731C-0.00930062 20.9174 0.00348032 21.0635 0.0442806 21.203C0.0850808 21.3424 0.153101 21.4725 0.244459 21.5859C0.428964 21.8147 0.697323 21.9613 0.990502 21.9934C1.28368 22.0254 1.57766 21.9404 1.80778 21.7569C2.03789 21.5734 2.18528 21.3065 2.21753 21.0149C2.46027 18.8659 3.49064 16.8811 5.11179 15.4398C6.73294 13.9985 8.83122 13.2018 11.0057 13.2018C13.1802 13.2018 15.2785 13.9985 16.8996 15.4398C18.5208 16.8811 19.5512 18.8659 19.7939 21.0149C19.8239 21.2851 19.9536 21.5345 20.1577 21.7152C20.3618 21.8959 20.626 21.995 20.8993 21.9934H21.0209C21.3107 21.9602 21.5755 21.8145 21.7578 21.588C21.94 21.3615 22.0248 21.0725 21.9937 20.7841C21.7721 18.801 21.0119 16.9154 19.7948 15.3292C18.5777 13.7431 16.9495 12.5163 15.0848 11.7803ZM10.9836 10.9997C10.1091 10.9997 9.25417 10.7418 8.52703 10.2586C7.79988 9.7754 7.23313 9.08861 6.89846 8.28508C6.56379 7.48154 6.47623 6.59736 6.64684 5.74434C6.81745 4.89131 7.23858 4.10776 7.85697 3.49276C8.47536 2.87776 9.26324 2.45895 10.121 2.28927C10.9787 2.11959 11.8678 2.20668 12.6757 2.53951C13.4837 2.87234 14.1743 3.43598 14.6601 4.15914C15.146 4.8823 15.4053 5.7325 15.4053 6.60224C15.4053 7.76852 14.9395 8.88703 14.1102 9.71172C13.281 10.5364 12.1563 10.9997 10.9836 10.9997Z" fill={isDarkTheme ? "#78779A" : "black"} />
                    </svg>
                    <span>{nums.partner}</span>
                </div>
                : ''
            }
            {type === 'gifts'
                ?
                <div className="pl-burger-list__icon">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M25 14.3332H1V10.3332C1 8.85984 2.19333 7.6665 3.66666 7.6665H22.3333C23.8066 7.6665 25 8.85984 25 10.3332V14.3332Z" stroke={isDarkTheme ? "#78779A" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.6663 24.9997H6.333C4.12367 24.9997 2.33301 23.209 2.33301 20.9997V14.333H23.6663V20.9997C23.6663 23.209 21.8756 24.9997 19.6663 24.9997Z" stroke={isDarkTheme ? "#78779A" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 7C13 7 13 13 13 14.3335" stroke={isDarkTheme ? "#78779A" : "black"} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13 7.66638C13 7.66638 14.4613 2.70506 17.0187 1.41439C19.8653 -0.0229408 22.6107 2.53972 19.8653 5.10372C18.492 6.38505 15.7467 7.66638 13 7.66638Z" stroke={isDarkTheme ? "#78779A" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.9999 7.66638C12.9999 7.66638 11.5386 2.70506 8.98128 1.41439C6.13462 -0.0229408 3.38929 2.53972 6.13462 5.10372C7.50795 6.38505 10.2533 7.66638 12.9999 7.66638Z" stroke={isDarkTheme ? "#78779A" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{nums?.gifts}</span>
                </div>
                : ''
            }
            {type === 'wishlist'
                ?
                <div className="pl-burger-list__icon">
                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5002 23C13.5002 23 4.20527 16.9717 1.65386 11.1942C-1.75493 3.47767 9.05784 -3.563 13.5002 4.73351C17.9426 -3.563 28.7539 3.47767 25.3466 11.1942C22.7952 16.9717 13.5002 23 13.5002 23Z" stroke={isDarkTheme ? "#78779A" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{nums.wishlist}</span>
                </div>
                : ''
            }
            {type === 'support'
                ?
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.61538 13.0006V8.14543C5.6298 7.19108 5.8324 6.24895 6.21158 5.37302C6.59075 4.49709 7.13905 3.70459 7.82504 3.04092C8.51104 2.37725 9.32126 1.85546 10.2093 1.50544C11.0973 1.15542 12.0456 0.984056 13 1.00117C13.9544 0.984056 14.9027 1.15542 15.7907 1.50544C16.6787 1.85546 17.489 2.37725 18.175 3.04092C18.861 3.70459 19.4092 4.49709 19.7884 5.37302C20.1676 6.24895 20.3702 7.19108 20.3846 8.14543V13.0006M16.6923 22.6924C17.6716 22.6924 18.6107 22.3034 19.3032 21.611C19.9956 20.9186 20.3846 19.9795 20.3846 19.0003V14.8466M16.6923 22.6924C16.6923 23.3044 16.4492 23.8914 16.0164 24.3241C15.5836 24.7569 14.9967 25 14.3846 25H11.6154C11.0033 25 10.4164 24.7569 9.9836 24.3241C9.55082 23.8914 9.30769 23.3044 9.30769 22.6924C9.30769 22.0804 9.55082 21.4935 9.9836 21.0607C10.4164 20.628 11.0033 20.3848 11.6154 20.3848H14.3846C14.9967 20.3848 15.5836 20.628 16.0164 21.0607C16.4492 21.4935 16.6923 22.0804 16.6923 22.6924ZM2.84615 10.2315H4.69231C4.93712 10.2315 5.17191 10.3287 5.34502 10.5018C5.51813 10.6749 5.61538 10.9097 5.61538 11.1545V16.6927C5.61538 16.9375 5.51813 17.1723 5.34502 17.3454C5.17191 17.5185 4.93712 17.6157 4.69231 17.6157H2.84615C2.35652 17.6157 1.88695 17.4212 1.54073 17.075C1.1945 16.7288 1 16.2593 1 15.7697V12.0776C1 11.5879 1.1945 11.1184 1.54073 10.7722C1.88695 10.426 2.35652 10.2315 2.84615 10.2315ZM23.1538 17.6157H21.3077C21.0629 17.6157 20.8281 17.5185 20.655 17.3454C20.4819 17.1723 20.3846 16.9375 20.3846 16.6927V11.1545C20.3846 10.9097 20.4819 10.6749 20.655 10.5018C20.8281 10.3287 21.0629 10.2315 21.3077 10.2315H23.1538C23.6435 10.2315 24.1131 10.426 24.4593 10.7722C24.8055 11.1184 25 11.5879 25 12.0776V15.7697C25 16.2593 24.8055 16.7288 24.4593 17.075C24.1131 17.4212 23.6435 17.6157 23.1538 17.6157Z" stroke={isDarkTheme ? "#78779A" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                : ''
            }
        </>
    )
};

export default BurgerItemIcon;