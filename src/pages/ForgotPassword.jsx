import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import AuthActions from '../components/AuthActions';

import Input from '../components/utils/Input';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handelChangeInputs = (event) => {
        setEmail(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            toast.success(` ${email} لینک بازیابی رمز عبور  شما به ارسال شد`);
        } catch (error) {
            toast.error('امکان ارسال کد بازیابی وجود ندارد');
        }
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
                    <form onSubmit={onSubmit}>
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
                                    to="/sign-up"
                                    className="text-red-600 font-bold hover:text-red-700 transition duration-200 ease-in-out"
                                >
                                    ثبت نام
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/sign-in"
                                    className="text-blue-600 font-bold hover:text-blue-700 transition duration-200 ease-in-out"
                                >
                                    ورود به حساب کاربری
                                </Link>
                            </p>
                        </div>
                        <AuthActions type="submit" label="ارسال رمز بازیابی" />
                    </form>
                </div>
            </div>
        </section>
    );
};
export default ForgotPassword;
