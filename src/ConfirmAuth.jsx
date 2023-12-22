import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import {useNavigate} from "react-router-dom";

function ConfirmSignUp() {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    const navigate = useNavigate(); // Initialisation de useNavigate


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await Auth.confirmSignUp(email, code);
            setConfirmed(true);
            navigate('/profile');
            // Redirigez l'utilisateur ou affichez un message de succès
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Confirmation de l'inscription
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setCode(e.target.value)} placeholder="123456" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirmer</button>
                        </form>
                        {error && <p>{error}</p>}
                        {confirmed && <p>Inscription confirmée !</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConfirmSignUp;
