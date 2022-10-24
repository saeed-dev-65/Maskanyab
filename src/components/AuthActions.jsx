import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import ButtonBlock from './utils/ButtonBlock';
const AuthBTN = (props) => {
    return (
        <ButtonBlock
            btnColor="bg-red-600 hover:bg-red-800"
            type={'submit'}
            label={'ورود با حساب گوگل'}
            icon={<FcGoogle />}
        />
    );
};
export default AuthBTN;
