import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/conf";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = async () => {
        const deleteToast = toast.loading("Post deletion")
        try {
            await appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage);
                    toast.success("Successfully deleted" , {id: deleteToast})
                    navigate("/");
                }
            });

        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false);
          }
    };

    return post ? (
        <div className="pt-3 flex flex-col items-center align-center mx-72 md:gap-7 gap-6 relative">
            <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post?.title}
                className="rounded-xl md:w-2/4 w-full "
            />

            <div className="w-full mb-6">
                <h1 className="md:text-5xl text-xl font-bold text-gray-800 text-center font-nunito-sans">
                    {post?.title}
                </h1>
            </div>

            {isAuthor && (
                <div className="">
                    <Link to={`/edit-post/${post.$id}`}>
                        <Button bgColor="bg-green-500" className="mr-3">
                            Edit
                        </Button>
                    </Link>
                    <Button bgColor="bg-red-500" onClick={deletePost}>
                        Delete
                    </Button>
                </div>
            )}

            <div className="browser-css self-start text-left post-content">
                {parse(post?.content)}
            </div>

        </div>
    ) : null;


}

