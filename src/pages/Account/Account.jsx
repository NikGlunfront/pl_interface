import React from 'react';
import AccountContent from './AccountContent';
import AccountNav from '../../components/Account/AccountNav.jsx/AccountNav';

const Account = () => {
    return (
        <div className='pl-page-container account-page'>
            <AccountNav currentContentId={2} />
            <AccountContent />
        </div>
    );
};

export default Account;