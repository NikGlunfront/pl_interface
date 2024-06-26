import React from 'react';

const AccountPromoGlobalStat = ({
    statsList
}) => {
    return (
        <div className='account-promo-stats__globalstat'>
            <div className="account-promo-stats__total">
                <div className="account-promo-stats__stars">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.06436 0.934739C9.46172 -0.297373 11.2049 -0.297373 11.6023 0.934738L13.0127 5.30811C13.1907 5.8599 13.7048 6.23345 14.2846 6.23219L18.8798 6.22214C20.1744 6.21931 20.7131 7.87722 19.6641 8.63587L15.9406 11.3287C15.4708 11.6685 15.2744 12.2729 15.4548 12.8239L16.8843 17.1911C17.2871 18.4214 15.8768 19.4461 14.8311 18.6828L11.1194 15.9737C10.6511 15.6319 10.0156 15.6319 9.54726 15.9737L5.8356 18.6828C4.78991 19.4461 3.37961 18.4214 3.78236 17.1911L5.21189 12.8239C5.39226 12.2729 5.19588 11.6685 4.72608 11.3287L1.0026 8.63587C-0.0464113 7.87722 0.492274 6.21931 1.78687 6.22214L6.38204 6.23219C6.96182 6.23345 7.47597 5.8599 7.65393 5.30811L9.06436 0.934739Z" fill="#F7AC2A"/>
                    </svg>
                    4.5
                </div>
                <div className="account-promo-stats__reviews">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0469 0.759425C6.13392 1.18561 2.87643 4.17517 2.20074 7.9848C1.92602 9.53637 2.06709 11.0265 2.52851 12.3728C2.98038 13.6951 3.08963 15.132 2.55927 16.4252C1.93238 17.9549 1 18.4175 1 18.4175C1 18.4175 2.99947 19.0667 5.41369 18.2987C6.537 17.9403 7.72501 17.8559 8.86954 18.1445C10.1085 18.4561 11.4503 18.5155 12.843 18.2477C16.6892 17.5089 19.6688 14.2828 20.0496 10.4502C20.6086 4.81914 15.794 0.13317 10.0469 0.759425Z" stroke="#8A8A8A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40212 8.56592C6.8869 8.56592 6.46875 8.97669 6.46875 9.48282C6.46875 9.98896 6.8869 10.3997 7.40212 10.3997C7.91733 10.3997 8.33548 9.98896 8.33548 9.48282C8.33548 8.97669 7.91733 8.56592 7.40212 8.56592ZM11.5134 8.56592C10.9982 8.56592 10.5801 8.97669 10.5801 9.48282C10.5801 9.98896 10.9982 10.3997 11.5134 10.3997C12.0287 10.3997 12.4468 9.98896 12.4468 9.48282C12.4468 8.97669 12.0287 8.56592 11.5134 8.56592ZM14.6953 9.48282C14.6953 8.97669 15.1135 8.56592 15.6287 8.56592C16.1439 8.56592 16.562 8.97669 16.562 9.48282C16.562 9.98896 16.1439 10.3997 15.6287 10.3997C15.1135 10.3997 14.6953 9.98896 14.6953 9.48282Z" fill="#8A8A8A"/>
                    </svg>
                    25 отзывов
                </div>
                <div className="account-promo-stats__percent">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5547 6.14831H17.3695V1.3335" stroke="#8A8A8A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 10.0002C1 5.21327 4.88074 1.3335 9.66667 1.3335C12.8444 1.3335 15.6216 3.04276 17.1306 5.59172" stroke="#8A8A8A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.77734 13.8517H1.96253V18.6665" stroke="#8A8A8A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.332 9.99984C18.332 14.7867 14.4513 18.6665 9.66536 18.6665C6.48759 18.6665 3.7104 16.9572 2.20144 14.4083" stroke="#8A8A8A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    25%
                </div>
            </div>
            <ul>
                <li>
                    Общие данные
                    <div>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="black"/>
                    <path d="M7 3.5V8.61111L9.88889 10.0556" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                        <div>45 дней</div>
                    </div>
                </li>
                <li>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="black"/>
                        <path d="M8.06077 2V3.54642H7.27182V2H8.06077ZM8.03757 11.5586V13H7.24862V11.5586H8.03757ZM10.0796 9.69125C10.0796 9.40336 9.99963 9.15438 9.83978 8.9443C9.68508 8.73033 9.4221 8.53775 9.05083 8.36658C8.68471 8.19151 8.18453 8.02034 7.55028 7.85305C6.90055 7.69355 6.33849 7.51264 5.86409 7.31034C5.39484 7.10805 5.03131 6.85517 4.77348 6.55172C4.52081 6.24439 4.39448 5.85924 4.39448 5.39629C4.39448 4.94111 4.52597 4.54624 4.78895 4.21167C5.05709 3.8771 5.4361 3.62034 5.92597 3.44138C6.41584 3.25853 6.99079 3.16711 7.65083 3.16711C8.16133 3.16711 8.61768 3.22352 9.01989 3.33634C9.42726 3.44916 9.77017 3.61839 10.0486 3.84403C10.3322 4.06578 10.5488 4.34005 10.6983 4.66684C10.8479 4.98974 10.9227 5.36322 10.9227 5.78727H10.0022C10.0022 5.49938 9.95064 5.23484 9.84751 4.99363C9.74954 4.75243 9.6 4.54235 9.3989 4.3634C9.19779 4.18055 8.95028 4.0405 8.65635 3.94324C8.36759 3.84209 8.03241 3.79151 7.65083 3.79151C7.11971 3.79151 6.6814 3.86348 6.33591 4.00743C5.99042 4.15137 5.73518 4.34394 5.57017 4.58515C5.40516 4.82635 5.32265 5.09089 5.32265 5.37878C5.32265 5.66278 5.39227 5.91176 5.53149 6.12573C5.67072 6.3397 5.92339 6.53422 6.2895 6.70928C6.65562 6.88046 7.18158 7.05358 7.8674 7.22865C8.51713 7.38815 9.07403 7.56905 9.53812 7.77135C10.0074 7.97365 10.3683 8.22653 10.621 8.52997C10.8737 8.82953 11 9.21273 11 9.67958C11 10.1503 10.8582 10.553 10.5746 10.8875C10.291 11.2182 9.89392 11.4711 9.38343 11.6462C8.87293 11.8212 8.27735 11.9088 7.59669 11.9088C7.15838 11.9088 6.72523 11.866 6.29724 11.7804C5.86925 11.6909 5.4825 11.5469 5.13702 11.3485C4.79153 11.1501 4.51565 10.8875 4.30939 10.5607C4.10313 10.2301 4 9.82352 4 9.34111H4.92044C4.92044 9.71848 5.00037 10.0317 5.16022 10.2806C5.32007 10.5296 5.52891 10.728 5.78674 10.8759C6.04972 11.0237 6.33849 11.1287 6.65304 11.191C6.96759 11.2532 7.28214 11.2844 7.59669 11.2844C8.12265 11.2844 8.56869 11.2143 8.93481 11.0743C9.30608 10.9303 9.58969 10.7378 9.78564 10.4966C9.98158 10.2515 10.0796 9.98302 10.0796 9.69125Z" fill="white" stroke="white" strokeWidth="0.3"/>
                    </svg>
                    Расход
                    <div>
                        $248
                    </div>
                </li>
                <li>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 6.1806 14.6593 4.94077 14.0611 3.8637L9.37963 9.3254L9.07476 9.68107L8.7 9.4L5.08001 6.68501L1.11725 11.4403C2.43893 13.5767 4.80325 15 7.5 15ZM0.615516 10.4804C0.219511 9.56685 0 8.55906 0 7.5C0 3.35786 3.35786 0 7.5 0C9.9492 0 12.1242 1.17398 13.493 2.98992L8.92524 8.31893L5.3 5.6L4.91999 5.31499L4.61589 5.67991L0.615516 10.4804Z" fill="black"/>
                    </svg>
                    Средняя стоимость заказа
                    <div>
                        $2.15
                    </div>
                </li>
                <li>
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 6.5C17 6.5 14.6 12 9 12C3.4 12 1 6.5 1 6.5C1 6.5 3.4 1 9 1C14.6 1 17 6.5 17 6.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3996 6.49923C11.3996 7.80116 10.3252 8.85638 8.99961 8.85638C7.67401 8.85638 6.59961 7.80116 6.59961 6.49923C6.59961 5.1973 7.67401 4.14209 8.99961 4.14209C10.3252 4.14209 11.3996 5.1973 11.3996 6.49923Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Просмотры
                    <div>
                        992
                        <span>5</span>
                    </div>
                </li>
                <li>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="black"/>
                    <path d="M10.5031 4.19922L6.58446 9.79922L4.20312 7.31033" stroke="black" strokeLinecap="round"/>
                    </svg>
                    Заявки
                    <div>
                        236
                        <span>5</span>
                    </div>
                </li>
                <li>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 8.77756H1V6.44423C1 5.58478 1.69611 4.88867 2.55555 4.88867H13.4444C14.3039 4.88867 15 5.58478 15 6.44423V8.77756Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.8865 15H4.10872C2.81994 15 1.77539 13.9555 1.77539 12.6667V8.77783H14.2198V12.6667C14.2198 13.9555 13.1753 15 11.8865 15Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4.5V8" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 4.88872C8 4.88872 8.85244 1.99462 10.3442 1.24173C12.0048 0.403285 13.6062 1.89817 12.0048 3.39384C11.2037 4.14128 9.60222 4.88872 8 4.88872Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99867 4.88872C7.99867 4.88872 7.14622 1.99462 5.65445 1.24173C3.99389 0.403285 2.39245 1.89817 3.99389 3.39384C4.795 4.14128 6.39645 4.88872 7.99867 4.88872Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Заказы
                    <div>
                        79
                        <span>9</span>
                    </div>
                </li>
                <li>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.00012 13C8.00012 13 2.79495 9.71182 1.36616 6.56049C-0.542758 2.35146 5.51239 -1.48891 8.00012 3.03646C10.4879 -1.48891 16.5422 2.35146 14.6341 6.56049C13.2053 9.71182 8.00012 13 8.00012 13Z" stroke="#00C900" fill='#00C900' strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    В избранном
                    <div>
                        79
                        <span>5</span>
                    </div>
                </li>
                <li>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5C16 12.6421 12.6421 16 8.5 16Z" stroke="#FF3526" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.34375 3.34375L13.6562 13.6562" stroke="#FF3526" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Не интересует
                    <div>
                        23
                        <span>5</span>
                    </div>
                </li>
                <li>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3316 7.10133L6.69422 3.46311C6.86726 3.3517 7.064 3.26519 7.28444 3.20356C7.50489 3.14193 7.75496 3.11111 8.03467 3.11111C8.77185 3.11111 9.39467 3.3683 9.90311 3.88267C10.4121 4.39704 10.6667 5.02874 10.6667 5.77778C10.6667 6.02311 10.6332 6.27022 10.5662 6.51911C10.4987 6.768 10.4204 6.96207 10.3316 7.10133ZM2.84089 12.8756C3.63082 12.309 4.44119 11.8735 5.272 11.5689C6.10282 11.2637 7.01215 11.1111 8 11.1111C8.69926 11.1111 9.33659 11.1964 9.912 11.3671C10.4874 11.5378 10.9594 11.7135 11.328 11.8942L7.86844 8.43467C7.16089 8.37956 6.576 8.12385 6.11378 7.66756C5.65156 7.21126 5.39882 6.62933 5.35556 5.92178L2.70311 3.26844C2.1603 3.87585 1.72237 4.57482 1.38933 5.36533C1.0557 6.15526 0.88889 7.03348 0.88889 8C0.88889 8.98785 1.06459 9.88415 1.416 10.6889C1.76741 11.4936 2.24237 12.2225 2.84089 12.8756ZM13.3609 12.6631C13.8575 12.0557 14.2735 11.3683 14.6089 10.6009C14.9437 9.83348 15.1111 8.96652 15.1111 8C15.1111 6.02963 14.4187 4.3517 13.0338 2.96622C11.6489 1.58074 9.97096 0.888296 8 0.888889C7.09037 0.888889 6.24059 1.04504 5.45067 1.35733C4.66015 1.66963 3.95556 2.09689 3.33689 2.63911L13.3609 12.6631ZM8 16C6.8877 16 5.84474 15.7923 4.87111 15.3769C3.89748 14.9615 3.05008 14.3926 2.32889 13.6702C1.6077 12.9479 1.03911 12.1004 0.623112 11.128C0.207112 10.1556 -0.000591328 9.11289 1.26442e-06 8C1.26442e-06 6.88415 0.207705 5.84059 0.623112 4.86933C1.03852 3.89748 1.60741 3.05067 2.32978 2.32889C3.05215 1.60711 3.89956 1.03852 4.872 0.623111C5.84445 0.207704 6.88711 0 8 0C9.11585 0 10.1594 0.207704 11.1307 0.623111C12.1025 1.03852 12.9493 1.60741 13.6711 2.32978C14.3929 3.05215 14.9615 3.89867 15.3769 4.86933C15.7923 5.84 16 6.88356 16 8C16 9.1123 15.7923 10.1553 15.3769 11.1289C14.9615 12.1025 14.3926 12.9499 13.6702 13.6711C12.9479 14.3923 12.1013 14.9609 11.1307 15.3769C10.16 15.7929 9.11644 16.0006 8 16ZM8 15.1111C8.83081 15.1111 9.6397 14.9621 10.4267 14.664C11.2148 14.3659 11.909 13.9793 12.5093 13.504C11.9316 13.0406 11.232 12.6741 10.4107 12.4044C9.58933 12.1348 8.78578 12 8 12C7.21422 12 6.42489 12.1262 5.632 12.3787C4.83911 12.6311 4.12533 13.0062 3.49067 13.504C4.09156 13.9793 4.78548 14.3659 5.57244 14.664C6.35941 14.9621 7.16859 15.1111 8 15.1111Z" fill="#FF3526"/>
                    </svg>
                    Отказ от всех предложений
                    <div>
                        9
                        <span>5</span>
                    </div>
                </li>
                <li>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="7.5" fill="#FF3526" stroke="#FF3526"/>
                    <rect x="4" y="7" width="9" height="3" fill="white"/>
                    </svg>
                    Жалобы
                    <div>
                        5
                        <span>5</span>
                        <div>
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.70713 2.32023L11.0001 6L12 5.14294L6 0L5.50006 0.428528L0 5.14294L0.999884 6L5.29287 2.32023L6 1.80919L6.70713 2.32023Z" fill="black"></path></svg>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AccountPromoGlobalStat;