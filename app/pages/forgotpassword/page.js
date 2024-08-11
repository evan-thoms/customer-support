"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent!");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Header />
            <section className="flex bg-Cararra justify-center items-center gap-20 h-screen">
                <article className="py-20 flex flex-col gap-10 text-black">
                    <div className="mb-6">
                        <h1 className="text-6xl text-bold mb-4">Reset Your Password</h1>
                        <h2 className="text-4xl text-bold px-3">Verda Your AI Support Bot</h2>
                    </div>
                    <div className="mb-6 flex">
                        <div>
                            <p className="mb-4">Remembered your password?</p>
                            <p className="px-3">You can <Link href="/pages/signin" className="text-red-500">Sign in here!</Link></p>
                        </div>
                        <img className="h-96" src="/signupin.svg" alt="character thinking" />
                    </div>
                </article>
                <article className="py-20 self-start">
                    <form className="flex flex-col gap-4 mb-10" onSubmit={handleForgotPassword}>
                        <input
                            className="w-96 px-4 h-11 mb-4 rounded"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {message && <p className="text-green-500">{message}</p>}
                        {error && <p className="text-red-500">{error}</p>}
                        <button className="bg-Masala py-2 text-white rounded">Reset Password</button>
                    </form>
                </article>
            </section>
            <Footer />
        </>
    );
};

export default ForgotPassword;
