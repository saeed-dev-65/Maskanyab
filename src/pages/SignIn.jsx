import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Input from '../components/utils/Input';

import AuthActions from '../components/AuthActions';
const SignIn = () => {
    const [formData, setFormData] = useState({ email: '', passwors: '' });
    const { email, password } = formData;
    const handelChangeInputs = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));
    };

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold ">
                ورود به حساب کاربری
            </h1>
            <div className="flex justify-center flex-wrap p-6 p-12 max-w-6xl mx-auto items-center ">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img
                        src="./images/logIn-banner.jpg"
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
                        <div className="relative">
                            <Input
                                direction="ltr"
                                id="password"
                                placeholder="Password"
                                type="password"
                                onChange={handelChangeInputs}
                                value={password}
                                inputIcon={true}
                            />
                        </div>
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
                            <p className={'text-gray-500 text-md'}>
                                بازیابی {" "}
                                <Link
                                    className={
                                        'text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                                    }
                                    to="/forgot-password"
                                >
                                    رمز ورود
                                </Link>
                            </p>
                        </div>
                    </form>

                    <AuthActions type="submit" label="ورود" />
                </div>
            </div>
        </section>
    );
};
export default SignIn;
