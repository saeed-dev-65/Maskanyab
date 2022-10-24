import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import ButtonBlock from './utils/ButtonBlock';
const AuthActions = (props) => {
    return (
        <>
            <ButtonBlock
                btnColor="bg-blue-600 hover:bg-blue-800"
                type={props.type}
                label={props.label}
            />
            <div className="flex items-center my-4 before:border-t  before:flex-1   before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                <p className="text-center font-semibold mx-4 text-gray-500">
                    یا
                </p>
            </div>
            <ButtonBlock
                btnColor="bg-red-600 hover:bg-red-800"
                type={'submit'}
                label={'ورود با حساب گوگل'}
                icon={<FcGoogle />}
            />
        </>
    );
};
export default AuthActions;
