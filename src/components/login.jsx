import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
// login ko bolne ka naya tarika
import { login as authLogin } from "../store/authSlice"
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);

    const login = async (data) => {
        setLoading(true)
        setError("")
        try {
            const session = await authService.login(data)
            const loadingToast = toast.loading("Login...")
            
            if (session) {
                const userData = await authService.getCurrentUser()
                
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate("/")
                    toast.success("Login Successful!" , {id: loadingToast})
                }
            }

        } catch (error) {
            toast.error(error.message)
            setError(error.message)
        }
        finally {
            setLoading(false);
          }

        //   useEffect(() => {
        //     if (error) {
        //       toast.error(error);
        //     }
        //   }, [setError, error]);
    }

    return (
        // <div className='flex items-center justify-center w-full'>
        //     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        //         <div className="mb-2 flex justify-center">
        //             <span className="inline-block w-full max-w-[100px]">
        //                 <Logo width="100%" />
        //             </span>
        //         </div>
        //         <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        //         <p className="mt-2 text-center text-base text-black/60">
        //             Don&apos;t have any account?&nbsp;
        //             <Link
        //                 to="/signup"
        //                 className="font-medium text-primary transition-all duration-200 hover:underline"
        //             >
        //                 Sign Up
        //             </Link>
        //         </p>
                
        //         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        //         <form onSubmit={handleSubmit(login)} className='mt-8'>
        //             <div className="space-y-5">
        //                 <Input
        //                     label="Email: "
        //                     placeholder="Enter your email"
        //                     type="email"
        //                     {...register("email", {
        //                         required: true,
        //                         validate: {
        //                             matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        //                                 "Email address must be a valid address",
        //                         }
        //                     })}
        //                 />

        //                 <Input
        //                     label="Password: "
        //                     placeholder="Enter your password"
        //                     type="password"
        //                     {...register("password", {
        //                         required: true
        //                     })
        //                     }
        //                 />

        //                 <Button
        //                     type="submit"
        //                     className="w-full"
        //                 >Sign in</Button>
                        
        //             </div>
        //         </form>
        //     </div>
        // </div>

        <div
        className={`w-full max-w-lg bg-[#e4e4ff77] backdrop-blur-sm rounded-xl md:p-10 max-md:py-10 px-4 border-[1px] shadow-sm flex flex-col gap-7 `}
    >
        <div>
            <h2 className="text-center text-2xl text-gray-900 font-nunito-sans font-bold leading-tight">
              
                Sign in to your account
            </h2>
            <p className="text-center text-base mt-2 font-open-sans text-red-700 ">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary font-mono transition-all duration-200 hover:underline text-black/60"
                >
                    Sign Up
                </Link>
            </p>
        </div>
        <form onSubmit={handleSubmit(login)} className="mt-0">
            <div className="space-y-7">
                <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) =>
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                        },
                    })}
                />
                <Input
                    label="Password: "
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", {
                        required: true,
                    })}
                />
                <Button type="submit" disabled={loading}>
                    {loading ? "processing..." : "Sign in"}
                </Button>
            </div>
        </form>
    </div>
    )
}

export default Login