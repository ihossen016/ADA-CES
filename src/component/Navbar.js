import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/userSlice";
const Navbar = ({ isAdmin, isChild, isModerator, isParent }) => {
    const { currentUser } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <input
                type="checkbox"
                name="hbr"
                id="hbr"
                className="hbr peer"
                hidden
                aria-hidden="true"
            />
            <nav className="fixed py-2 z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
                <div className="xl:container m-auto px-6 md:px-12">
                    <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                        <div className="w-full flex justify-between lg:w-auto">
                            <NavLink
                                to="/"
                                aria-label="logo"
                                className="flex space-x-2 items-center"
                            >
                                <span className="text-2xl font-bold text-indigo-600 dark:text-white">
                                    ADA
                                </span>
                            </NavLink>
                            <label className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <div
                                    aria-hidden="true"
                                    className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                                ></div>
                                <div
                                    aria-hidden="true"
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                                ></div>
                            </label>
                        </div>

                        {currentUser && isAdmin && (
                            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-md lg:flex lg:space-y-0">
                                        <li>
                                            <NavLink
                                                to="/"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Dashboard</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/info"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Personal Details</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/profile"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Profile</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/notification"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Notification</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/login"
                                                onClick={logoutHandler}
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Logout</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {currentUser && isModerator && (
                            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-md lg:flex lg:space-y-0">
                                        <li>
                                            <NavLink
                                                to="/"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Dashboard</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/moderator-info"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Personal Details</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/moderator-profile"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Profile</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/moderator-notification"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Notification</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/login"
                                                onClick={logoutHandler}
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Logout</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {currentUser && isParent && (
                            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-md lg:flex lg:space-y-0">
                                        <li>
                                            <NavLink
                                                to="/"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Dashboard</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/parent-info"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Personal Details</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/parent-profile"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Profile</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/parent-notification"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Notification</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/login"
                                                onClick={logoutHandler}
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Logout</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {currentUser && isChild && (
                            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-md lg:flex lg:space-y-0">
                                        <li>
                                            <NavLink
                                                to="/"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Dashboard</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/child-info"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Personal Details</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/child-profile"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Profile</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/child-notification"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Notification</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/login"
                                                onClick={logoutHandler}
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Logout</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {!currentUser && (
                            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-md lg:flex lg:space-y-0">
                                        <li>
                                            <NavLink
                                                to="/login"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Login</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/signin"
                                                className="block md:px-4 transition hover:text-indigo-600 dark:hover:text-primaryLight"
                                            >
                                                <span>Sign Up</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
