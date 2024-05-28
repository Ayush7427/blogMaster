import React , {useState , useEffect} from "react";
import {PostForm , Loader , Message } from "../components";
import appwriteService from "../appwrite/conf"
import { useNavigate,  useParams } from 'react-router-dom';

export default function EditPost(){
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();


    // useEffect(() => {
    //     if (slug) {
    //         appwriteService.getPost(slug).then((post) => {
    //             if (post) {
    //                 setPosts(post)
    //             }
    //         })
    //     }
    //     else{
    //         navigate('/')
    //     }
    // } , [slug , navigate])

    useEffect(() => {
        if (slug) {
          (async () => {
            try {
              const res = await appwriteService.getPost(slug);
              setPosts(res);
            } catch (error) {
              setError(error);
            } finally {
              setLoading(false);
            }
          })();
        } else {
          navigate("/");
        }
      }, [slug, navigate]);

    // return post ? (
    //     <div className='py-8'>
    //         <Container>
    //             <PostForm post={post} />
    //         </Container>
    //     </div>
    //   ) : null

    return loading ? (
        <Loader />
      ) : (
        <section className="w-full min-h-screen md:py-12 px-10 pt-7 pb-10 max-md:px-4 bg-slate-50">
          {error ? (
            <div className="w-full px-3 pt-20 flex justify-center">
              <Message text={error?.message} />
            </div>
          ) : (
            <PostForm post={post} />
          )}
        </section>
      );
}