import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { db } from '../API/firebase.config';

import { useNavigate } from 'react-router-dom';

import AuthActions from '../components/AuthActions';
import Input from '../components/utils/Input';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    function errorGenerator(code = '', message = '') {
        this.code = code;
        this.message = message;
    }
    errorGenerator.prototype = Error.prototype;

    let { name, email, password } = formData;

    const navigate = useNavigate();

    const handelChangeInputs = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));
    };
    let myErrors = [];
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            if (formData.name === '') {
                myErrors.push({
                    code: 1,
                    message: 'وارد کردن نام الزامی است.',
                });
            }
            if (formData.email === '') {
                myErrors.push({
                    code: 2,
                    message: 'وارد کردن ایمیل الزامی است.',
                });
            }
            const auth = await getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(auth.currentUser, {
                displayName: name,
            });

            const user = userCredential.user;
            const copyFormData = { ...formData };
            delete copyFormData.password;
            copyFormData.timestamp = serverTimestamp();
            await setDoc(doc(db, 'users', user.uid), copyFormData);
            toast.success('حساب کاربری شما ایجاد شد.');
            navigate('/');
        } catch (error) {
            myErrors.length > 0
                ? myErrors.map((error) => toast.error(error.message))
                : toast.error('خطا! دوباره تلاش کید.');
        } finally {
            setFormData({ name: '', email: '', password: '' });
            myErrors = [];
        }
    };
    console.log(formData);
    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold ">
                ایجاد حساب کاربری
            </h1>
            <div className="flex justify-center flex-wrap p-6 p-12 max-w-6xl mx-auto items-center ">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img
                        src="./images/reg-banner.jpg"
                        alt="logIn-banner"
                        className="w-full rounded-2xl"
                    />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:mr-12">
                    <form onSubmit={onSubmit}>
                        <Input
                            direction="ltr"
                            id="name"
                            placeholder="Full Name"
                            type="text"
                            onChange={handelChangeInputs}
                            value={name}
                        />
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
                                حساب کاربری دارید؟{' '}
                                <Link
                                    to="/sign-in"
                                    className="text-red-600 font-bold hover:text-red-700 transition duration-200 ease-in-out"
                                >
                                    ورود
                                </Link>
                            </p>
                        </div>
                        <AuthActions type="submit" label="ثبت نام" />
                    </form>
                </div>
            </div>
        </section>
    );
};
export default SignUp;
