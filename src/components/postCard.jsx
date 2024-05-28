import React from "react";
import appwriteService from "../appwrite/conf"
import { Link } from "react-router-dom"
import {  MdFavorite, MdShare} from "react-icons/md";
import { htmlToText } from "html-to-text";

function PostCard({ $id, title, featuredImage, content, status }) {

    return (
        <div className={`w-[450px] max-md:w-full rounded overflow-hidden flex flex-col gap-3 justify-between shadow-sm bg-white border-[1px] border-gray-300  `}>
            <Link to={`/post/${$id}`}>
                <div className="w-full md:h-[230px] h-auto overflow-hidden">
                    <img
                        className="w-full md:h-full"
                        src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    />
                </div>
                <div className="px-6 py-4">
                    <h1 className="font-bold text-xl capitalize  mb-2 flex justify-between font-sans">
                        {title}

                        <span className="text-red-700 lowercase font-mono shadow-xl bg-white rounded-lg">
                            {status}
                        </span>

                    </h1>
                    <p className="text-gray-700 capitalize text-base mt-4 line-clamp-2 font-serif">
                        {htmlToText(content)}
                    </p>
                </div>
            </Link>
            <div className="p-6 border-t-[2px] border-gray-300  flex justify-between items-center gap-3 ">

                <button className="icon-button text-2xl  drop-shadow-2xl text-red-500  cursor-pointer">
                    <MdFavorite />
                </button>

                <button className="icon-button text-2xl  drop-shadow-2xl text-gray-500 cursor-pointer">
                    <MdShare />
                </button>
            </div>
        </div>

    )
}

export default PostCard

