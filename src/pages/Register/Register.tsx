
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';


import cls from "./Register.module.scss"
import GoogleAuth from "../../components/YourLoginComponent/YourLoginComponent";
import useLogin from "../../module/auth/hook/useList";



const Register = () => {
        const { doLogin, loading, error } = useLogin();

        const [login, setLogin] = useState<boolean>(false);
        const [reg, setReg] = useState<boolean>(true);
        //  const navigator = 
        const nametRef = useRef<HTMLInputElement>(null);
        const emailRef = useRef<HTMLInputElement>(null);
        const paswordRef = useRef<HTMLInputElement>(null);
        const navigate = useNavigate();

        const cheek = (prop: string) => {
                if (prop == "Sign") {
                        setLogin(false)
                        setReg(true)
                } else {
                        setLogin(true)
                        setReg(false)
                }
        }




        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault(); // formani reload bo'lishidan saqlaydi

                const name = nametRef.current?.value;
                const email = emailRef.current?.value;
                const pasword = paswordRef.current?.value;

                console.log( email, pasword);
                doLogin(email, pasword);
                if (email=="admin" && pasword== "admin" ) {
                        localStorage.setItem("tokenn", true)
                        console.log();
                        navigate("/admin")
                }


        };

        const handleLoginTest = async () => {
                fetch('https://dummyjson.com/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({

                                username: 'emilys',
                                password: 'emilyspass',
                                expiresInMins: 30, // optional, defaults to 60
                        }),
                        credentials: 'include' // Include cookies (e.g., accessToken) in the request
                })
                        .then(res => res.json())
                        .then(console.log);
        };




        return <>
                <div className={cls.wraper}>


                        <div className={cls.wrapper_form}>
                                <div className={cls.tab}>
                                        <div onClick={() => cheek("Sign")} className={login ? cls.sign : cls.truee}>Sign In</div>
                                        <div onClick={() => cheek("Register")} className={reg ? cls.Register : cls.truee}>Register</div>
                                </div>

                                <form onSubmit={handleSubmit} className={cls.form}>
                                        <h3>
                                                Register
                                        </h3>

                                        {
                                                login && <div className={cls.full_name}>
                                                        <label htmlFor="" className={cls.label}>
                                                                Full Name
                                                        </label>

                                                        <input ref={nametRef} type="text" placeholder="Enter Your Name" />
                                                </div>
                                        }


                                        <div className={cls.full_name}>
                                                <label htmlFor="" className={cls.label}>
                                                        Email
                                                </label>

                                                <input ref={emailRef} type="text" placeholder="Enter Your Email" />
                                        </div>
                                        <div>

                                                <div className={cls.full_name}>
                                                        <label htmlFor="" className={cls.label}>
                                                                Password
                                                        </label>

                                                        <input ref={paswordRef} type="text" placeholder="Enter Your Password" />
                                                </div>
                                                {
                                                        reg && <p onClick={() => navigate("/passwordlost")} className={cls.nopas}>Password recovery</p>
                                                }

                                        </div>


                                        <div>
                                                <input className={cls.submit} type="submit" value={reg ? "Login" : "Sign Up"} />

                                                <div className={cls.logotib}>
                                                        {/* <img src={img}width={80}  alt="" /> orqali ro'yxatdan o'ting */}
                                                </div><GoogleAuth />
                                                <div onClick={handleLoginTest}></div>
                                        </div>
                                </form>


                        </div>


                </div>
        </>
}

export default Register