import React, { useState, useEffect } from "react";
import { Container, PostCard, Message, Loader } from "../components";
import appwriteService from "../appwrite/conf"
import HeaderCont from "../components/headerContainer/headerCont";


export default function Home() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <>
                <Message text="No Post Available on Server. Please Login..." />
                <HeaderCont />

            </>
        )
    }
    else {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex justify-between gap-24 flex-col'>
                        {posts.map((post) => (
                            <div key={post.$id} className='flex align-center justify-center'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
}