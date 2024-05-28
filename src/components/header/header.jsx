import React from "react";
import { Container, Logo, LogoutBtn } from "../index"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaHome, FaListUl, FaPlus } from "react-icons/fa";


function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        // <header className=' bg-[#1a1a25]'>
        //     <Container>
        //         <nav className='flex'>
        //             <div className='mr-4'>
        //                 <Link to='/'>
        //                     <Logo width='70px' />

        //                 </Link>
        //             </div>
        //             <ul className='flex ml-auto'>
        //                 {navItems.map((item) => 
        //                     item.active ? (
        //                         <li key={item.name}>
        //                             <button
        //                                 onClick={() => navigate(item.slug)}
        //                                 className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        //                             >{item.name}</button>
        //                         </li>
        //                     ) : null
        //                 )}
        //                 {authStatus && (
        //                     <li>
        //                         <LogoutBtn />
        //                     </li>
        //                 )}
        //             </ul>
        //         </nav>
        //     </Container>
        // </header>

        <header className="md:py-3.5 py-2.5 md:px-10 px-2 overflow-x-hidden shadow-sm border-b-[1px] border-b-gray-100 bg-white  sticky top-0 z-50 w-screen">
            <nav className="flex justify-between items-center w-full overflow-hidden">
                <Logo className="max-md:text-base text-3xl" />

                <div
                    className={`
                ${authStatus
                            ? "max-md:fixed max-md:bottom-0 max-md:w-full max-md:flex max-md:justify-center max-md:p-3"
                            : ""
                        } bg-none
              `}
                >
                    <ul
                        className={`flex h-fit gap-[2px] overflow-hidden shadow-sm border-[1px] dark:border-[2px] border-gray-300  rounded-full  bg-gray-300`}
                    >
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <NavLink to={`${item.slug}`}>
                                        {({ isActive, isPending }) => (
                                            <button
                                                className={`flex items-center gap-2 ${authStatus
                                                        ? "md:px-3.5 px-3 max-sm:px-2.5 md:py-1.5 py-2"
                                                        : "md:px-3 px-2.5 py-1.5"
                                                    }  text-center ${isActive
                                                        ? "bg-[#f4f4ff]  text-[#C04000] "
                                                        : "bg-white  text-gray-900 "
                                                    } font-nunito-sans md:text-lg text-base font-[500] duration-200 hover:bg-gray-50 hover:shadow-sm  `}
                                            >
                                                {item.icon ? <item.icon /> : null} {item.name}
                                            </button>
                                        )}
                                    </NavLink>
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>
                <div
                    className={`${authStatus
                            ? "flex md:gap-12 gap-3"
                            : "max-md:absolute max-md:right-[-100%]"
                        } `}
                >

                    {authStatus && <LogoutBtn />}
                </div>
            </nav>
        </header>
    )
}

export default Header