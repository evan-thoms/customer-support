"use client";

import { useState, useEffect, useRef } from "react";

const ChatbotPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const chatContainerRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSend = async () => {
        if (userInput.trim() === '') return;

        const newMessage = { sender: 'user', text: userInput };
        setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);

        try {
            console.log("NEW MESSAGE: ", newMessage)
            const response = await fetch('/api/dialogflow', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userInput }),
            });
            const data = await response.json();

            const botMessage = { sender: 'bot', text: data.response };
            console.log("BOTMESSAGE: ", botMessage)
            setChatHistory((prevChatHistory) => [...prevChatHistory, botMessage]);

        } catch (error) {
            console.error("Error fetching chatbot response:", error);
        }

        setUserInput('');
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
            });
        }
    }, [chatHistory]);

    return (
        <div className="h-max">
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
                <div className="relative flex flex-col gap-3">
                    <button
                        id="dropdownDefaultButton"
                        onClick={toggleDropdown}
                        className="text-white bg-Masala font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Language 1</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Language 2</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Language 3</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Language 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="/user.svg" />
            </header>
            <div className="h-0.5 w-full bg-white"></div>
            <section className="flex h-[calc(100vh-6.9rem)] overflow-hidden">
                <article className="flex-2 w-1/5 text-white flex flex-col gap-10 py-10 items-center bg-ClayCreek h-100">
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

                <article className="flex flex-1 flex-col justify-between gap-10 bg-Cararra px-36 pt-20">
                    <div className="flex-1 overflow-y-auto flex flex-col gap-7" ref={chatContainerRef}>
                    {chatHistory.map((message, index) => (
                        <div
                            key={index}
                            className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {message.sender === 'bot' && <img className="self-start" src="/chatbot.svg" />}
                            <div>
                                <p>{message.text}</p>
                            </div>
                            {message.sender === 'user' && <img src="/user.svg" />}
                        </div>
                    ))}
                    </div>
                    <div className="flex w-full self-center pb-10">
                        <input
                            type="text"
                            className="w-full h-9 rounded px-5"
                            placeholder="Type a message..."
                            value={userInput}
                            onChange={handleInputChange}
                        />
                        <button className="bg-Masala px-6 py-2 rounded-r-lg" onClick={handleSend}>
                            <img className="w-4 h-4" src="/Vector.svg" />
                        </button>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default ChatbotPage;