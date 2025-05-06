"use client";

import { MessageInput } from "@/features/ai/message-input";
import Messages from "@/features/ai/messages";
import { useAcceptPrompt } from "@/hooks/use-accept-prompt";

const AIPage = () => {
  const { prompt } = useAcceptPrompt();

  return (
    <main className="relative flex min-h-[calc(100vh-72px)] flex-1 flex-col">
      <div className="flex h-full flex-1 flex-col items-center justify-center">
        <Messages />
        <div className="mx-auto w-full max-w-3xl overflow-y-auto">
          <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-3xl">
            <MessageInput prompt={prompt} />
          </div>

          <div className="z-50 bg-gradient-to-b from-transparent to-red-500" />
        </div>
      </div>
    </main>
  );
};

export default AIPage;
