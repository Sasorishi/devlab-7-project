import './App.css'

import React from 'react'
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import {useNavigate} from "react-router-dom";
import ToastComponent from './components/ToastComponent';

import Footer from './Footer';

function SignUp() {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const closeToast = () => {
        setError(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email) {
            console.error('Le nom d\'utilisateur (e-mail) ne peut pas être vide', email);
            return;
        }
        try {
            const signUpResponse = await Auth.signUp({
                username: email,
                password,
                attributes: {
                    family_name: lastname,
                    name: firstname,
                },
            });
            console.log('Réponse de l\'inscription:', signUpResponse);
            setIsSignedUp(true);
            navigate('/confirmsignup');
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            setError('Erreur lors de l\'inscription: ' + error.message);
            setTimeout(() => {
                closeToast();
            }, 2500);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Inscription
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="flex gap-x-5 justify-between">
                                <div>
                                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                    <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" onChange={(e) => setLastname(e.target.value)} required=""></input>
                                </div>
                                <div>
                                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                                    <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" onChange={(e) => setFirstname(e.target.value)} required=""></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={(e) => setEmail(e.target.value)}  // Ajoutez cette ligne
                                    required ></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPassword(e.target.value)}  required></input>
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer le mot de passe</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">J'accepte les <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Termes et Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">S'inscrire</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Vous avez déjà un compte ? <a href="/signin" className="font-medium text-blue-500 hover:text-blue-700">Se connecter</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            { error && <ToastComponent message={error} onClose={closeToast} error={true} /> }
        </section>
    )
}

export default SignUp
