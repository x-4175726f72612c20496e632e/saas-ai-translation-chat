"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useToast } from "./ui/use-toast";
import { useSubscriptionStore } from "@/store/store";

function CreateChatButton({isLarge}: {isLarge?: boolean}) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const subscription   = useSubscriptionStore((state) => state.subscription);

    const createNewChat = async() => {
      // all the logic here...

      router.push(`/chat/${chatId}`);//${chatId}
    }

    if (isLarge)
    return (
      <div>
        <Button variant={"default"} onClick={createNewChat}>
          {loading ? <LoadingSpinner /> : "Create a New Chat"}
        </Button>
      </div> 
      
      )
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon />
    </Button>
  );
}
export default CreateChatButton;
