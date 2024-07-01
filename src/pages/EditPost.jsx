import { Navigate, useNavigate, useParams } from "react-router";
import { useEffect,useState } from "react";
import { Container ,PostForm } from "../components";
import appwriteService from "../appwrite/config"

function EditPost() {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const Navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            Navigate("/")
        }
    },[slug,Navigate])

    return  post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
}

export default EditPost;