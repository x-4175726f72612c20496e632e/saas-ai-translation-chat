"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";

function CreateChatButton() {
  const router = useRouter();
  
    const createNewChat = async() => {
      // all the logic here...

      router.push(`/chat/abc`);//${chatId}
    }
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon />
    </Button>
  );
}
export default CreateChatButton;