"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

const SignIn = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
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
                        <h1 className="text-6xl text-bold mb-4">Sign in to</h1>
                        <h2 className="text-4xl text-bold px-3">Verda Your AI Support Bot</h2>
                    </div>
                    <div className="mb-6 flex">
                        <div>
                            <p className="mb-4">Don&apos;t have an account?</p>
                            <p className="px-3">You can <Link href="/pages/signup" className="text-red-500">Sign up here!</Link></p>
                        </div>
                        <img className="h-96" src="/signupin.svg" alt="character with a laptop" />
                    </div>
                </article>
                <article className="py-20 self-start">
                    <form className="flex flex-col gap-4 mb-10" onSubmit={handleSignIn}>
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
                        {error && <p className="text-red-500">{error}</p>}
                        <Link href="/pages/forgotpassword" className="text-black">Forgot Password?</Link>

                        <button className="bg-Masala py-2 text-white rounded">Sign In</button>
                    </form>
                </article>
            </section>
            <Footer />
        </>
    );
};

export default SignIn;
