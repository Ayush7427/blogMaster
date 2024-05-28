import React from "react";
import { PostForm ,Container } from "../components";

export default function AddPost() {
    return (
            <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>

        // <section className="w-full min-h-screen md:py-12 px-10 pt-7 pb-10 max-md:px-4 bg-slate-50">
        //     <PostForm />
        // </section>
    )
}