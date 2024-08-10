"use client";

import { useState } from "react";

const ChatbotPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className="flex justify-between items-center py-8 px-10 bg-ClayCreek text-white">
                <div className="flex px-4 py-3 rounded-full bg-white overflow-hidden w-1/2 ">
                    <input
                        type="text"
                        placeholder="Search for previous conversations..."
                        className="w-full outline-none bg-transparent text-gray-600 text-sm"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                </div>
                <div className="flex flex-col gap-3">
                    <button
                        id="dropdownDefaultButton"
                        onClick={toggleDropdown}
                        className="text-white bg-Masala font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        Switch Language
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdown" className={`z-10 ${isDropdownOpen ? "block" : "hidden"} absolute top-20 bg-Masala divide-y divide-gray-100 rounded-lg shadow w-44`}>
                        <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">language 1</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">language 2</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">language 3</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">language 4</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <img src="/user.svg" />
            </header>
            <div className="h-0.5 w-full bg-white"></div>
            <section className="flex h-[calc(100vh-4rem)] overflow-hidden">
                <article className="flex-2 w-1/5 text-white flex flex-col gap-10 py-10 items-center bg-ClayCreek h-full">
                    <h1 className=""><b>Verda</b> CHATBOT</h1>
                    <div className="h-0.5 w-full bg-white"></div>
                    <div>
                        <h2 className="text-center mb-4 font-bold">Yesterday</h2>
                        <ul>
                            <li className="flex gap-2 mb-4"><img src="/iconmessage.svg" />Platform Marketplace 101</li>
                            <li className="flex gap-2"><img src="/iconmessage.svg" />Platform Marketplace 101</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-center mb-4 font-bold">Last week</h2>
                        <ul>
                            <li className="flex gap-2 mb-4"><img src="/iconmessage.svg" />Platform Marketplace 101</li>
                            <li className="flex gap-2"><img src="/iconmessage.svg" />Platform Marketplace 101</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-center mb-4 font-bold">Last Month</h2>
                        <ul>
                            <li className="flex gap-2 mb-4"><img src="/iconmessage.svg" />Platform Marketplace 101</li>
                            <li className="flex gap-2"><img src="/iconmessage.svg" />Platform Marketplace 101</li>
                        </ul>
                    </div>

                </article>
                <article className="flex flex-1 flex-col justify-center gap-20 bg-Cararra px-36 pt-20 h-full">
                    <div className="flex gap-3 justify-end">
                        <div>
                            <p>The advantages of Artificial Intelligence</p>
                        </div>
                        <img src="/user.svg" />
                    </div>
                    <div className="flex gap-3 justify-start">
                        <img className="slef-start" src="/chatbot.svg" />
                        <div>
                            <p>Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI:

                                Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.
                                Decision-making: AI systems can analyze vast amounts of data, identify patterns, and make informed decisions based on that analysis. This ability is particularly useful in complex scenarios where humans may struggle to process large datasets or where quick and accurate decisions are crucial.</p>
                        </div>

                    </div>
                    <div className="flex w-full self-center">
                        <input type="text" className="w-full h-9 rounded px-5" placeholder="text ..."/>
                        <button className="bg-Masala px-6 py-2 rounded-r-lg">
                            <img className="w-4 h-4" src="/Vector.svg" />
                        </button>
                    </div>
                </article>
            </section>
        </>
    );
};

export default ChatbotPage;
