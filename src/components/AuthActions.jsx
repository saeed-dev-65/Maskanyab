import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../API/firebase.config';
import ButtonBlock from './utils/ButtonBlock';

const AuthActions = (props) => {
    const navigate = useNavigate();
    async function onGoogleClick() {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
            }
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error('امکان ثبت نام با حساب کاربری گوگل وجود ندارد.');
        }
    }

    return (
        <>
            <ButtonBlock
                btnProps="bg-blue-600 hover:bg-blue-800"
                type={props.type}
                label={props.label}
            />
            <div className="flex items-center my-4 before:border-t  before:flex-1   before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                <p className="text-center font-semibold mx-4 text-gray-500">
                    یا
                </p>
            </div>
            <ButtonBlock
                btnProps="bg-red-600 hover:bg-red-800 "
                type={'button'}
                label={'ورود با حساب گوگل'}
                icon={<FcGoogle />}
                onClick={onGoogleClick}
            />
        </>
    );
};
export default AuthActions;
