import appwriteService from "../appwrite/config";
import { useState, useEffect } from "react";
import { PostCard, Container } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
