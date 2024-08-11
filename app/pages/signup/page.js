"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

const SignUp = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/pages/chatbotpage");
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
                        <h1 className="text-6xl text-bold mb-4">Sign up to</h1>
                        <h2 className="text-4xl text-bold px-3">Verda Your AI Support Bot</h2>
                    </div>
                    <div className="mb-6 flex">
                        <div>
                            <p className="mb-4">If you already have an account</p>
                            <p className="px-3">You can <Link href="/pages/signin" className="text-red-500">Login here!</Link></p>
                        </div>
                        <img className="h-96" src="/signupin.svg" alt="character with a phone" />
                    </div>
                </article>
                <article className="py-20 self-start">
                    <form className="flex flex-col gap-4 mb-10" onSubmit={handleSignUp}>
                        <input
                            className="w-96 px-4 h-11 mb-4 rounded"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            className="w-96 px-4 h-11 mb-4 rounded"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            className="w-96 px-4 h-11 mb-4 rounded"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="w-96 px-4 h-11 rounded mb-4"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            className="w-96 px-4 h-11 rounded mb-2"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <button className="bg-Masala py-2 text-white rounded">Sign Up</button>
                    </form>
                </article>
            </section>
            <Footer />
        </>
    );
};

export default SignUp;
