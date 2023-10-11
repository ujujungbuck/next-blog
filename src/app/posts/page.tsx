import React from "react";
import Link from "next/link";

async function getPost() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/postboard/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

const PostPage = async () => {
  const posts = await getPost();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </ul>
    </div>
  );
};

export default PostPage;

const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <div>
        <h3>{title}</h3>
      </div>
      <p>{created}</p>
    </Link>
  );
};
