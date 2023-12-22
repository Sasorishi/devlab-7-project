import React from 'react';

function Update() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Modification du profil</h2>
                    <form onSubmit={handleSubmit}>
                        {user ? (
                            <>
                                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                               htmlFor="file_input">Avatar</label>
                                        <input
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-2"
                                            id="file_input" type="file" onChange={handleFileInput}
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="lastname"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                        <input type="text" name="lastname" id="lastname"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               defaultValue={user.attributes.family_name}
                                               onChange={(e) => setFamily_name(e.target.value)}/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="firstname"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                                        <input type="text" name="firstname" id="firstname"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               defaultValue={user.attributes.name}
                                               onChange={(e) => setName(e.target.value)}
                                               placeholder="Type product name"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="text" name="name" id="email"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               defaultValue={user.attributes.email}
                                               onChange={(e) => setEmail(e.target.value)}
                                               placeholder="Type product name" required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="password"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ancien Mot
                                            de passe</label>
                                        <input type="password" name="name" id="oldpassword"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               defaultValue="••••••••" placeholder="Type product name"
                                               onChange={(e) => setOldPassword(e.target.value)}
                                               />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="password"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Nouveau Mot
                                            de passe</label>
                                        <input type="password" name="name" id="newpassword"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               defaultValue="••••••••" placeholder="Type product name"
                                               onChange={(e) => setNewPassword(e.target.value)}
                                               />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Chargement...</p>
                        )}
                        <div className="flex items-center space-x-4">
                            <button type="submit"
                                    className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4">
                                Modifier
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Update