import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStatus } from '../hooks/useAuthStatus';

const Header = () => {
    const [pageStatus, setPageStatus] = useState('ورود');

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            user ? setPageStatus('پروفایل') : setPageStatus('ورود');
        });
    }, [auth]);

    const location = useLocation();
    const navigate = useNavigate();
    function activeLink(link) {
        if (link === location.pathname) {
            return true;
        }
    }
    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-40">
            <header
                className={
                    'flex justify-between items-center px-3 max-w-6xl mx-auto'
                }
            >
                <div>
                    <img
                        src="./images/logo.svg"
                        className="h-8 cursor-pointer"
                        alt="Maskan-Yab logo"
                        draggable={false}
                        onClick={() => navigate('/')}
                    />
                </div>
                <nav>
                    <ul className="flex space-x-10 rtl:space-x-reverse">
                        <li
                            className={`cursor-pointer text-sm font-semibold text-gray-400 py-3 border-b-[3px] border-transparent ${
                                activeLink('/')
                                    ? 'text-black border-red-500'
                                    : ''
                            }`}
                            onClick={() => navigate('/')}
                        >
                            صفحه اصلی
                        </li>
                        <li
                            className={`cursor-pointer text-sm font-semibold text-gray-400 py-3 border-b-[3px] border-transparent ${
                                activeLink('/offers')
                                    ? 'text-black border-red-500'
                                    : ''
                            }`}
                            onClick={() => navigate('/offers')}
                        >
                            پیشنهادها
                        </li>
                        <li
                            className={`cursor-pointer text-sm font-semibold text-gray-400 py-3 border-b-[3px] border-transparent ${
                                activeLink('/sign-in') || activeLink('/profile')
                                    ? 'text-black border-red-500'
                                    : ''
                            }`}
                            onClick={() => navigate('/profile')}
                        >
                            {pageStatus}
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};
export default Header;
