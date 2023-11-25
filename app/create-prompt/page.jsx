"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Form from "@components/Form";

const CreatePrompt = (props) => {
  const { data: session } = useSession();
  const [initialData, setInitialData] = useState(props.initialData || {});
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const fetchInitialData = async () => {
    try {
      const response = await fetch("/api/prompt/new");
      const data = await response.json();
      setInitialData(data);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  };

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        // Use window.location to navigate
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch initial data when the component mounts
  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
      initialData={initialData}
    />
  );
};

export default CreatePrompt;

