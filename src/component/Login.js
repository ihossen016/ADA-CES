import { useRef } from "react";
import axios from "axios";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const userRef = useRef();
    const passRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = async e => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "https://ecommerce-mern-api.vercel.app/api/auth/login",
                {
                    username: userRef.current.value,
                    password: passRef.current.value,
                }
            );
            dispatch(login(res.data));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative py-16">
            <div className="container relative m-auto px-6 md:px-12 xl:px-40">
                <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
                        <div className="p-8 py-12 sm:p-16">
                            <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white text-center">
                                Login to Your Account
                            </h2>
                            <form className="space-y-8" onSubmit={loginHandler}>
                                <div className="space-y-2">
                                    <label className="text-black dark:text-white">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        ref={userRef}
                                        className="focus:outline-none block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-black transition duration-300 invalid:ring-1 invalid:ring-red-600 focus:ring-1 focus:ring-indigo-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-black dark:text-white">
                                            Password
                                        </label>
                                        <button
                                            className="-mr-2 p-2"
                                            type="reset"
                                        >
                                            <Link
                                                to="/forget-password"
                                                className="text-sm text-indigo-600"
                                            >
                                                Forgot your password?
                                            </Link>
                                        </button>
                                    </div>
                                    <input
                                        type="password"
                                        name="pwd"
                                        id="pwd"
                                        ref={passRef}
                                        className="focus:outline-none block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-black transition duration-300 invalid:ring-1 invalid:ring-red-600 focus:ring-1 focus:ring-indigo-600"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="relative flex h-11 mx-auto w-11/12 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-indigo-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                                >
                                    <span className="relative text-base font-semibold text-white dark:text-dark">
                                        Login
                                    </span>
                                </button>

                                <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                                    Don't have an account?
                                    <Link
                                        to="/signin"
                                        className="pl-1 text-indigo-600"
                                    >
                                        Sign up.
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
