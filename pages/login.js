import React, {useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";


const Provider = new GoogleAuthProvider();
const LoginForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const loginHandler = async () => {
        if (!email || !password) return;
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("An error occured", error);
        }
    };
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, Provider);
        } catch (error) {
            console.error("An error occured", error);
        }
    };
    return (
        <main className="flex lg:h-[100vh]">
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="p-8 w-[600px]">
                    <h1 className="text-6xl font-semibold">Login</h1>
                    <p className="mt-6 ml-1">
                        Don't have an account ?{" "}
                        <span className="underline cursor-pointer hover:text-blue-400">
                            Sign Up
                        </span>
                    </p>

                    <div className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group">
                        <FcGoogle size={22} />
                        <span className="font-medium text-black group-hover:text-white"
                        onClick={signInWithGoogle}
                        >
                            Login with Google
                        </span>
                    </div>
                    <form>
                    <div className="flex flex-col pl-1 mt-10">
                        <label>Email</label>
                        <input
                            type="email"
                            className="p-4 font-medium border-b border-black outline-0 focus-within:border-blue-400"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col pl-1 mt-10">
                        <label>Password</label>
                        <input
                            type="password"
                            className="p-4 font-medium border-b border-black outline-0 focus-within:border-blue-400"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
                    onClick={signInWithEmailAndPassword}>
                        Sign in
                    </button>
                    </form>
                </div>
            </div>
            <div
                className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
                style={{
                    backgroundImage: "url('/login-banner.jpg')",
                }}
            ></div>
        </main>
    );
};

export default LoginForm;
