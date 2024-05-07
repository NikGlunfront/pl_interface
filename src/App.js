import { createRef, useEffect } from 'react';
import './App.scss';
import { useTelegram } from './hooks/useTelegram';
import { ScrollRestoration, useLocation, useNavigate, useOutlet} from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import PromosPage from './pages/Promos/PromosMainPage';
import PromoPage from './pages/Promos/PromoPage';
import Wishlist from './pages/Wishlist/Wishlist';
import MyGifts from './pages/MyGifts/MyGifts';
import ScrollTopRoutes from './containers/ScrollTopRoutes';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Footer from './pages/Common/Footer';
import Header from './pages/Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getCats, getCatsNums, getCities, getCitiesNums, getTags, getTagsNums } from './store/slices/iniData/initDataSlice';
import PartnerPage from './pages/Partner/PartnerPage';
import { setDarkTheme } from './store/slices/pageSlice/pageSlice';
import ChatPage from './pages/Chat/ChatPage';
import ChatReviewPage from './pages/Chat/ChatReviewPage';
import CreatePartner from './pages/Create/CreatePartner';
import CreatePromo from './pages/Create/CreatePromo';
import { useTranslate } from './hooks/useTranslate';

const routes = [
    { path: '/', name: 'Home', element: <HomePage />, nodeRef: createRef() },
    { path: '/promos', name: 'PromosPage', element: <PromosPage />, nodeRef: createRef() },
    { path: '/promos/:id', name: 'PromoPage', element: <PromoPage />, nodeRef: createRef() },
    { path: '/wishlist', name: 'Wishlist', element: <Wishlist />, nodeRef: createRef() },
    { path: '/my-gifts', name: 'MyGifts', element: <MyGifts />, nodeRef: createRef() },
    { path: '/partners/:id', name: 'Partners', element: <PartnerPage />, nodeRef: createRef() },
    { path: '/create-promo', name: 'CreatePromo', element: <CreatePromo />, nodeRef: createRef() },
    { path: '/create-partner', name: 'CreatePartner', element: <CreatePartner />, nodeRef: createRef() },
    { path: '/chat/:brand_id/:promo_id', name: 'ChatPage', element: <ChatPage />, nodeRef: createRef() },
    { path: '/chat/review/:brand_id/:promo_id', name: 'ChatReviewPage', element: <ChatReviewPage />, nodeRef: createRef() },
]
  


function App() {
    const {tg} = useTelegram();
    const activeCity = useSelector(state => state.filters.activeCity)
    const pageMeta = useSelector(state => state.pageMeta)
    const pageTitle = pageMeta.title
    const isDarkTheme = pageMeta.darkTheme
    const dispatch = useDispatch()
    const location = useLocation()
    const currentOutlet = useOutlet()
    const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
    const navigate = useNavigate()
    const { tr } = useTranslate()

    function getInitialData() {
        dispatch(getCities())
        dispatch(getCitiesNums())
        dispatch(getCats())
        dispatch(getCatsNums())
        dispatch(getTags())
        dispatch(getTagsNums())
    }
    
    // useGetInitAppData()
    useEffect(() => {
        tg.ready()
        tg.expand()
        tg.enableClosingConfirmation()
        getInitialData()
        
        if (location.pathname !== '/' && !activeCity.id) {
            navigate('/')
        }
    }, [])

    const changeTheme = () => {
        dispatch(setDarkTheme(!isDarkTheme))
    }


    return (
        <div className={"App pl-app " + (isDarkTheme ? 'pl-app_darktheme' : '')}>
            {/* <div className="testbtn" onClick={changeTheme}></div> */}
            <ScrollTopRoutes />
            <div className='pl-app__wrapper'>
                {location.pathname !== '/' &&
                    <Header 
                        title={pageTitle} 
                        type={location.pathname === '/promos' ? 'filter' : ''}
                    />
                }
                <div className='pl-app__innercontainer'>
                    <SwitchTransition>
                        <CSSTransition
                            key={location.pathname}
                            nodeRef={nodeRef}
                            timeout={100}
                            classNames="pl-route-page"
                            unmountOnExit
                        >
                            {(state) => (
                            <div ref={nodeRef} className={"pl-route-page"}>
                                {currentOutlet}
                            </div>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
                </div>
                {location.pathname !== '/' &&
                    <Footer />
                }
            </div>
        </div>
    );
}

export default App;
