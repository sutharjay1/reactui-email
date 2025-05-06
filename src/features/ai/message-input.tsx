"use client";

import { Button } from "@/components/ui/button";
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ui/prompt-input";
import { useAcceptPrompt } from "@/hooks/use-accept-prompt";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowUp, Square } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  prompt: z.string().min(1),
});

type FormSchema = z.infer<typeof formSchema>;

export const MessageInput = ({ prompt }: { prompt: string }) => {
  const { setPrompt } = useAcceptPrompt();
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: prompt || "",
    },
  });

  const { mutate: acceptPrompt, isPending: isAcceptingPrompt } = useMutation({
    mutationKey: ["accept-prompt"],
    mutationFn: (data: FormSchema) => {
      setPrompt(data.prompt);
      router.push("/ai");
      return Promise.resolve();
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    acceptPrompt(data);
  });

  return (
    <>
      <PromptInput
        value={form.watch("prompt")}
        onValueChange={(value) => form.setValue("prompt", value)}
        isLoading={isAcceptingPrompt}
        onSubmit={handleSubmit}
        className="max-w-(--breakpoint-md) mb-6 w-full rounded-2xl bg-accent"
      >
        <PromptInputTextarea placeholder="Ask me anything..." />
        <PromptInputActions className="justify-end pt-2">
          <PromptInputAction tooltip={isAcceptingPrompt ? "Stop generation" : "Send message"}>
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 rounded-lg"
              onClick={handleSubmit}
            >
              {isAcceptingPrompt ? (
                <Square className="size-5 fill-current" />
              ) : (
                <ArrowUp className="size-5" />
              )}
            </Button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    </>
  );
};
