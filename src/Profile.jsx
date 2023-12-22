import './App.css'
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import ToastComponent from "./components/ToastComponent";


function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    console.log(user);
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => setUser(user))
            .catch(err => {
                console.error(err);
                setError('Erreur lors du chargement des données de l’utilisateur.');
            });
    }, []);

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <ToastComponent />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white max-w-md mx-auto md:max-w-2xl min-w-0 break-words rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                {user ? (
                    <>
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center">
                                <div className="relative">
                                    <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                                </div>
                            </div>
                            <div className="w-full text-center mt-20">
                                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                    <div className="p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700 text-gray-900 dark:text-white">3,360</span>
                                        <span className="text-sm text-slate-400">Photos</span>
                                    </div>
                                    <div className="p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700 text-gray-900 dark:text-white">2,454</span>
                                        <span className="text-sm text-slate-400">Followers</span>
                                    </div>

                                    <div className="p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700 text-gray-900 dark:text-white">564</span>
                                        <span className="text-sm text-slate-400">Following</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 text-gray-900 dark:text-white">Email : {user.attributes.email}</h3>
                            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
                            </div>
                        </div>
                        <div className="mt-6 py-6 border-t border-slate-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4">
                                    <p className="font-light leading-relaxed text-slate-600 mb-4 text-gray-900 dark:text-white">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="/update" className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mb-8">Modifier</a>
                        </div>
                    </div>
                    </>
                 ) : (
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Chargement...</span>
                    </div>
                 )}
            </div>
          </div>
    </section>
  )
}

export default Profile