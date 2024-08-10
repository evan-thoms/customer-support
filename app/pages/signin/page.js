import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";


const SignIn = () => {
    return (
        <>
        <Header />
        <section className="flex bg-Cararra justify-center items-center gap-20 h-screen">
            <article className="py-20 flex flex-col gap-10 text-black">
                <div className="mb-6 ">
                    <h1 className="text-6xl text-bold mb-4">Sign in to</h1>
                    <h2 className="text-4xl text-bold px-3">Verda Your AI Support Bot</h2>
                </div>
                <div className="mb-6 flex">
                    <div>
                        <p className="mb-4">If you don’t have an account register</p>
                        <p className="px-3">You can <Link href="/pages/signup" className="text-red-500">Register here!</Link></p>
                    </div>
                    <img className="h-96" src="/signupin.svg" alt="character with a phone" />
                </div>
            </article>
            <article className="py-20 self-start">
                <form className="flex flex-col gap-4 mb-10">
                    <input className="w-96 px-4 h-11 mb-4 rounded" placeholder="Email" />
                    <input className="w-96 px-4 h-11 rounded" type="password" placeholder="Password" />
                    <div className="flex items-center mb-6 justify-between">
                        <div className="flex gap-2">
                            <input type="checkbox" id="rememberpwd" name="rememberpwd" />
                            <label for="scales">Remember me</label>
                        </div>
                        <Link href="/pages/forgotpassword" className="">Forgot password?</Link>
                    </div>

                    <button className="bg-Masala py-2 text-white rounded">Sign In</button>
                </form>

                <div className="flex gap-5 flex-col">

                    <p className="text-center">or continue with</p>


                    <button className="flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md py-2 text-sm font-medium text-gray-800 dark:text-white focus:outline-none">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
                            <title>Google-color</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                        <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path>
                                        <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path>
                                        <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path>
                                        <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span>Continue with Google</span>
                    </button>

                </div>

            </article>
        </section>
        <Footer />
        </>
        
    );
};

export default SignIn;