import './App.css'

import React, { useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
            const authenticatedUser = await Auth.currentAuthenticatedUser();
                setIsLogged(true);
                setUser(authenticatedUser);
            } catch (error) {
                setIsLogged(false);
                setUser(null);
            }
        };

        checkAuthStatus();

        const authListener = Hub.listen('auth', ({ payload: { event } }) => {
            if (event === 'signIn') {
                checkAuthStatus();
            } else if (event === 'signOut') {
                setIsLogged(false);
                setUser(null);
            }
        });

        return () => {
            console.log('Cleaning up effect');
            authListener();
            Hub.remove('auth');
        };
    }, [isLogged]);
    
    const handleSignOut = async () => {
        try {
          await Auth.signOut();
          setIsLogged(false);
          navigate('/');
        } catch (error) {
          console.error('Error signing out', error);
        }
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DevOps</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {!isLogged ? (
                            <>
                                <li>
                                    <a href="/signin" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Connexion</a>
                                </li>
                                <li>
                                    <a href="/signup" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inscription</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <a href="/profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Mon Profil</a>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Déconnexion</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
