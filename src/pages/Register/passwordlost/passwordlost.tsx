
import { useRef, useState } from "react";

import cls from "./passwordlost.module.scss"



const Passwordlost = () => {

        const [email, setEmail] = useState<boolean>(false);
        const [code,  setCode]  = useState<boolean>(false);

        const nametRef = useRef<HTMLInputElement>(null);
        const emailRef = useRef<HTMLInputElement>(null);
        const paswordRef = useRef<HTMLInputElement>(null);


        

        const emailCheek = () => {
                setEmail(!email)
        }
        const codeCheek = () => {
                setCode(!code)
        }


        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault(); // formani reload bo'lishidan saqlaydi

                const name = nametRef.current?.value;
                const email = emailRef.current?.value;
                const pasword = paswordRef.current?.value;

                console.log(name, email, pasword);
        };

        return <>
                <div className={cls.wraper}>


                        <div className={cls.wrapper_form}>


                                <form onSubmit={handleSubmit} className={cls.form}>
                                        <h3>
                                                Reset Password
                                        </h3>

                                        <div className={cls.full_name}>
                                                <label htmlFor="" className={cls.label}>
                                                        Email
                                                </label>
                                                <div>

                                                        <input ref={emailRef} type="email" placeholder="Enter Your Email" />
                                                        <button onClick={emailCheek} className={cls.btn}>cheek</button>
                                                </div>

                                        </div>


                                        {email && <div className={cls.full_name}>
                                                <label htmlFor="" className={cls.label}>
                                                        Code
                                                </label>
                                                <div>
                                                        <input ref={emailRef} type="email" placeholder="Enter the code sent to your email" />

                                                        <button onClick={codeCheek} className={cls.btn}>code</button>
                                                </div>

                                        </div>}

                                        {email && code && <div>

                                                <div className={cls.full_name}>
                                                        <label htmlFor="" className={cls.label}>
                                                                New Password
                                                        </label>

                                                        <input ref={paswordRef} type="password" placeholder="Password" />
                                                </div> <br />
                                                <div className={cls.full_name}>
                                                        <label htmlFor="" className={cls.label}>
                                                                Enter password                                                               </label>

                                                        <input ref={paswordRef} type="password" placeholder=" Password" />
                                                </div>

                                        </div>}


                                        <div>
                                                <input className={cls.submit} type="submit" value="Login" />

                                                
                                        </div>
                                </form>


                        </div>
                </div>
        </>
}

export default Passwordlost