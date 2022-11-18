import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const [editable, setEditable] = useState(false);

    const editNameHandler = () => {
        setEditable((prevState) => !prevState);
    };

    const [formData, setFormDate] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    });
    const { name, email } = formData;
    const logoutHandler = () => {
        auth.signOut();
        navigate('/');
    };

    return (
        <div>
            <>
                <section className="max-w-6xl flex flex-col justify-center items-center mx-auto">
                    <h1 className="text-3xl text-center mt-6 font-bold mb-6">
                        پروفایل من
                    </h1>
                    <div
                        dir="ltr"
                        className="w-full px-4 md:w-[50%] md:px-0 text-xl"
                    >
                        <form action="">
                            <div className="flex justify-center items-center w-full mb-6">
                                <label
                                    htmlFor="name"
                                    className="whitespace-nowrap text-md text-gray-500 py-2"
                                >
                                    نام کاربر
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 text-xl text-gray-600 bg-transparent border-transparent transition ease-in-out  border-b-[2px] border-b-gray-300 focus:border-b-orange-600 focus:outline-0 focus:border-transparent focus:ring-0"
                                    value={name}
                                    onChange={(e) =>
                                        setFormDate({ name: e.target.value })
                                    }
                                    disabled={editable ? false : true}
                                />
                            </div>
                            {/* <hr className="bg-gray-300 border-0 h-[1px]" /> */}
                            <div className="flex justify-center items-center w-full mb-6">
                                <label
                                    htmlFor="email"
                                    className="whitespace-nowrap text-md text-gray-500 py-2"
                                >
                                    ایمیل
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="w-full px-4 py-2 text-xl text-gray-600 bg-transparent border-transparent transition ease-in-out  border-b-[2px] border-b-gray-300 focus:border-b-orange-600 focus:outline-0 focus:border-transparent focus:ring-0"
                                    value={email}
                                    disabled
                                />
                            </div>
                            <div
                                className="flex justify-between items-center mb-6"
                                dir="rtl"
                            >
                                <p className="text-[14px] text-gray-600">
                                    آیا می خواهد نام خود را تغییر دهید؟
                                    <span
                                        className="bg-blue-600 px-3 py-1 mr-1 rounded-md text-white text-lg cursor-pointer hover:bg-blue-800 text-lg transition ease-in-out duration-200"
                                        onClick={editNameHandler}
                                    >
                                        {editable ? 'اعمال تغییرات' : 'ویرایش'}
                                    </span>
                                </p>
                                <p
                                    className="text-red-600 hover:text-red-800 cursor-pointer transition ease-in-out duration-200 text-bold"
                                    onClick={logoutHandler}
                                >
                                    خروج
                                </p>
                            </div>
                        </form>
                    </div>
                </section>
            </>
        </div>
    );
};
export default Profile;
