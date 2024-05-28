// import React from 'react'

// function Logo({}) {
//   return (
//     <a className=" bg-none bg-[#1a1a25] border-gray-300 w-[100px] max-md:text-base text-3xl" href='/'>
//       <h1 className="font-semibold font-sans text-white">Blog
//       <span className='text-[#f189ff] font-[600] font-inter'>App</span>
//       </h1>
//     </a>
//   )
// }

// export default Logo

import { Link } from "react-router-dom"

export default function Logo({ width = "10px", className = "md:text-3xl text-xl " }) {
  return (
    <Link
      to="/"
      className={`py-2 px-5 rounded-full bg-none font-[900] border-gray-300 w-[${width}] ${className}`}
    >
      <h2 className="font-lato text-green-500 flex gap-1 ">
        Blog <span className="text-gray-700 font-[200] font-inter">Master</span>
      </h2>
    </Link>
  );
}