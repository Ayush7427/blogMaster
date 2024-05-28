import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import { RiLogoutCircleLine } from "react-icons/ri"
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
// import { resetPost } from "../../store/postSlice";


function LogoutBtn() {
    const userData = useSelector((state) => state.auth.userData);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {

        setLoading(true)
        const loadingToast = toast.loading("Logout...")

        authService.logout().then(() => {
            toast.success("Logout Successful!", { id: loadingToast });
            dispatch(logout())
            navigate("/login")
        })
            .catch((error) => {
                toast.error(error.message, { id: loadingToast });
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        // <button
        //     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        //     onClick={logoutHandler}
        // >Logout</button>

        <button
        className="flex items-center hover:opacity-70 disabled:opacity-30 gap-1 text-red-500  text-base"
        onClick={logoutHandler}
        disabled={loading}
      >
        <RiLogoutCircleLine />
        <span className="font-inter">Logout</span>
      </button>
    )
}

export default LogoutBtn