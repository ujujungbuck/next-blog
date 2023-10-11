"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter;
  const hadleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`http://127.0.0.1:8090/api/collections/postboard/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });
    setTitle("");
    router.refresh();
  };

  return (
    <form onSubmit={hadleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
