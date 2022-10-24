import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
const Input = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const handelShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    const { type, id, value, onChange, placeholder, direction, inputIcon } =
        props;

    return (
        <>
            <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 mb-6 rounded transition ease-in-out "
                type={!showPassword ? type : 'text'}
                id={id}
                dir={direction}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {inputIcon && (
                <span
                    className="absolute right-4 top-4 text-xl cursor-pointer text-gray-400 hover:text-gray-700"
                    onClick={handelShowPassword}
                >
                    {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                </span>
            )}
        </>
    );
};
export default Input;
