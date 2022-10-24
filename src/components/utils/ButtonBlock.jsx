import React from 'react';
const ButtonBlock = (props) => {
    const { type, btnColor, label, icon, onClick } = props;

    return (
        <button
            type={type}
            className={`w-full text-white font-bold px-7 py-3 transition duration-150 ease-in-out rounded shadow-md hover:shadow-lg ${btnColor} ${
                icon ? 'flex justify-center items-center' : ''
            }`}
            onClick={onClick}
        >
            <span>{label}</span>
            {icon && (
                <span className="text-2xl mr-2 bg-white rounded-full">
                    {icon}
                </span>
            )}
        </button>
    );
};
export default ButtonBlock;
