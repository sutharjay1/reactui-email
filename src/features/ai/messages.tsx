import { Button } from "@/components/ui/button";
import { Message, MessageAction, MessageActions, MessageContent } from "@/components/ui/message";
import { cn } from "@/lib/utils";
import { Dislike, DislikeSolid, Like, LikeSolid } from "@mynaui/icons-react";
import { useEffect, useState } from "react";
import CopyButton from "../global/copy-button";

type UserMessage = {
  id: string;
  type: "user";
  message: string;
};

type AssistantMessage = {
  id: string;
  type: "assistant";
  message: string;
  liked: boolean | null;
  disliked: boolean | null;
};

type Message = UserMessage | AssistantMessage;

const Messages = () => {
  const [mockData, setMockData] = useState<Message[]>([]);
  const [liked] = useState<boolean | null>(null);
  const [disliked] = useState<boolean | null>(null);

  useEffect(() => {
    setMockData([
      {
        id: "1",
        type: "user",
        message: "Hello, how are you?",
      },
      {
        id: "2",
        type: "assistant",
        message: "I'm good, thank you!",
        liked: null,
        disliked: null,
      },
      {
        id: "3",
        type: "user",
        message: "What is the weather in Tokyo?",
      },
      {
        id: "4",
        type: "assistant",
        message: `## Weather in Tokyo

Currently in Tokyo, it's **sunny** with a temperature of *25°C*.

### Weekly Forecast
- Monday: Sunny, 26°C
- Tuesday: Partly Cloudy, 24°C
- Wednesday: Rainy, 22°C
- Thursday: Thunderstorms, 21°C
- Friday: Clearing, 23°C

\`\`\`
function getWeatherEmoji(condition) {
  switch(condition) {
    case "sunny": return "☀️";
    case "cloudy": return "☁️";
    case "rainy": return "🌧️";
    default: return "❓";
  }
}
\`\`\``,
        liked: null,
        disliked: null,
      },
      {
        id: "5",
        type: "user",
        message: "Can you help me draft an email?",
      },
      {
        id: "6",
        type: "assistant",
        message: `# Email Template

## Professional Introduction

Dear [Recipient Name],

I hope this email finds you well. I am writing to discuss [brief topic description].

## Key Points
1. First important point with **emphasis**
2. Second point with *italicized details*
3. Final consideration

Please let me know if you have any questions or require further information.

Best regards,
[Your Name]`,
        liked: null,
        disliked: null,
      },
    ]);
  }, []);

  const renderMessage = (message: Message) => {
    const handleLike = () => {
      if (message.type === "assistant") {
        setMockData((prev) =>
          prev.map((item) =>
            item.id === message.id && item.type === "assistant"
              ? { ...item, liked: !item.liked }
              : item,
          ),
        );
      }
    };

    const handleDislike = () => {
      if (message.type === "assistant") {
        setMockData((prev) =>
          prev.map((item) =>
            item.id === message.id && item.type === "assistant"
              ? { ...item, disliked: !item.disliked }
              : item,
          ),
        );
      }
    };

    switch (message.type) {
      case "user":
        return (
          <Message className="flex flex-col gap-2 pb-5">
            <MessageContent
              className={cn(
                "rounded-3xl bg-primary/10 p-3 py-2.5 text-[0.9rem] font-normal text-primary",
                "ml-auto max-w-fit",
              )}
            >
              {message.message}
            </MessageContent>
            <MessageActions className="gap-1 self-end">
              <MessageAction tooltip="Copy to clipboard">
                <CopyButton componentSource={message.message} />
              </MessageAction>
            </MessageActions>
          </Message>
        );
      case "assistant":
        return (
          <Message className="flex flex-col gap-2 pb-5">
            <MessageContent markdown className="mr-auto max-w-xl">
              {message.message}
            </MessageContent>

            <MessageActions className="gap-1 self-start">
              <MessageAction tooltip="Copy to clipboard">
                <CopyButton componentSource={message.message} />
              </MessageAction>

              <MessageAction tooltip="Helpful">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground transition-all ease-in-out hover:bg-transparent hover:text-foreground disabled:opacity-100"
                  onClick={handleLike}
                >
                  {liked ? <LikeSolid className="size-4" /> : <Like className="size-4" />}
                </Button>
              </MessageAction>

              <MessageAction tooltip="Not helpful">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground transition-all ease-in-out hover:bg-transparent hover:text-foreground disabled:opacity-100"
                  onClick={handleDislike}
                >
                  {disliked ? <DislikeSolid className="size-4" /> : <Dislike className="size-4" />}
                </Button>
              </MessageAction>
            </MessageActions>
          </Message>
        );
    }
  };

  return (
    <main className="mb-16 h-[calc(100vh-15rem)] w-full overflow-y-auto">
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col gap-4">
        {mockData.map((item) => (
          <div key={item.id}>{renderMessage(item)}</div>
        ))}
      </div>
    </main>
  );
};

export default Messages;
