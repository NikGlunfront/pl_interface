import React, { createRef } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import PromosPage from './pages/Promos/PromosMainPage';
import PromoPage from './pages/Promos/PromoPage';
import Wishlist from './pages/Wishlist/Wishlist';
import MyGifts from './pages/MyGifts/MyGifts';
import CreatePromo from './pages/Promos/CreatePromo';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PartnerPage from './pages/Partner/PartnerPage';
import ChatPage from './pages/Chat/ChatPage';
import ChatReviewPage from './pages/Chat/ChatReviewPage';
import CreatePartner from './pages/Create/CreatePartner';

const routes = [
    { path: '/', name: 'Home', element: <HomePage />, nodeRef: createRef() },
    { path: '/promos', name: 'PromosPage', element: <PromosPage />, nodeRef: createRef() },
    { path: '/promos/:id', name: 'PromoPage', element: <PromoPage />, nodeRef: createRef() },
    { path: '/wishlist', name: 'Wishlist', element: <Wishlist />, nodeRef: createRef() },
    { path: '/my-gifts', name: 'MyGifts', element: <MyGifts />, nodeRef: createRef() },
    { path: '/partners/:id', name: 'Partners', element: <PartnerPage />, nodeRef: createRef() },
    { path: '/create-promo', name: 'CreatePromo', element: <CreatePromo />, nodeRef: createRef() },
    { path: '/create-partner', name: 'CreatePartner', element: <CreatePartner />, nodeRef: createRef() },
    { path: '/chat/:brand_id/:promo_id', name: 'CreatePromo', element: <ChatPage />, nodeRef: createRef() },
    { path: '/chat/review/:brand_id/:promo_id', name: 'ChatReviewPage', element: <ChatReviewPage />, nodeRef: createRef() },
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: routes.map((route) => ({
        index: route.path === '/',
        path: route.path === '/' ? undefined : route.path,
        element: route.element,
        })),
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
