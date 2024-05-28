import React, { useState, useEffect } from 'react'
import authService from '../appwrite/auth.js'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import toast from "react-hot-toast";



function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)

  const create = async (data) => {
    setLoading(true)
    setError("")
    try {
      const userData = await authService.createAccount(data)
      const loadingToast = toast.loading("Signup...")

      if (userData) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(login(userData));
        toast.success("Your account has been created successfully", { id: loadingToast })
        navigate("/")
      }

    } catch (error) {
      toast.error(error.message)
      setError(error.message)
    }
    finally {
      setLoading(false)
    }

    useEffect(() => {
      if (error) {
        toast.error(error);
      }
    }, [setError, error]);
  }

  return (
    <div  className={`w-full max-w-lg bg-[#e4e4ff77] backdrop-blur-sm rounded-xl md:p-10 max-md:py-10 px-4 border-[1px] shadow-sm flex flex-col gap-7`}>
       <div>
        <h2 className="text-center text-2xl text-gray-900 font-nunito-sans font-bold leading-tight">
          Sign up to create account
          </h2>
        <p className="text-center text-base mt-2 font-open-sans  text-red-700">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all text-black/60 duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
        </div>

        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      

    </div>
  )
}

export default Signup