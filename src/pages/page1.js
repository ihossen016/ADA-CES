import React from "react";

const Page1 = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto py-10">
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Personal Information
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Use a permanent address where you can
                                    receive mail.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    for="first_name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    id="first_name"
                                                    autocomplete="given-name"
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border outline-none p-2 border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    for="last_name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    id="last_name"
                                                    autocomplete="family-name"
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border outline-none p-2 border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    for="email_address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email_address"
                                                    id="email_address"
                                                    autocomplete="email"
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border outline-none p-2 border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    for="country"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Country / Region
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autocomplete="country"
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                                                >
                                                    <option>
                                                        United States
                                                    </option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6">
                                                <label
                                                    for="street_address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Street address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street_address"
                                                    id="street_address"
                                                    autocomplete="street-address"
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border outline-none p-2 border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label
                                                    for="city"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border outline-none p-2 border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label
                                                    for="state"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    State / Province
                                                </label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    id="state"
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border outline-none p-2 border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label
                                                    for="postal_code"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    ZIP / Postal
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal_code"
                                                    id="postal_code"
                                                    autocomplete="postal-code"
                                                    className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm border outline-none p-2 border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
