import React from "react";
import {Link} from "react-router-dom"

export default function HeaderCont() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                           <span className="hidden text-base  tracking-wide text-center text-gray-700 my-7 sm:block ">Welcome to BlogMaster, your ultimate companion for seamless blogging. Whether you're a seasoned writer or a newbie, BlogMaster provides an intuitive, powerful platform to share your stories, insights, and creativity with the world.</span>
                        
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <div className="text-center text-xl text-gray-600  py-10 font-medium">User-Friendly Interface ,  Rich Text Editor</div>
        </div>
    );
}
