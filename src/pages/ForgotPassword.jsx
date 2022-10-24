import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import AuthActions from '../components/AuthActions';
import Input from '../components/utils/Input';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handelChangeInputs = (event) => {
        setEmail(event.target.value);
    };

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold ">
                فراموشی رمز عبور
            </h1>
            <div className="flex justify-center flex-wrap p-6 p-12 max-w-6xl mx-auto items-center ">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img
                        src="./images/forgot-banner.jpg"
                        alt="logIn-banner"
                        className="w-full rounded-2xl"
                    />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:mr-12">
                    <form>
                        <Input
                            direction="ltr"
                            id="email"
                            placeholder="Email Address"
                            type="email"
                            onChange={handelChangeInputs}
                            value={email}
                        />

                        <div className="block md:flex justify-between mb-6 text-sm sm:text-lg">
                            <p className="text-gray-500 mb-2 md:mb-0">
                                حساب کاربری ندارید؟{' '}
                                <Link
                                    to="/sign-un"
                                    className="text-red-600 font-bold hover:text-red-700 transition duration-200 ease-in-out"
                                >
                                    ثبت نام
                                </Link>
                            </p>
                        </div>
                    </form>

                    <AuthActions type="submit" label="ارسال رمز بازیابی" />
                </div>
            </div>
        </section>
    );
};
export default ForgotPassword;
