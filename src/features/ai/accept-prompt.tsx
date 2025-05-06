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
import {
  CreditCardSolid,
  EditSolid,
  EnvelopeSolid,
  InboxSolid,
  StarSolid,
} from "@mynaui/icons-react";
import { useMutation } from "@tanstack/react-query";
import { ArrowUp, MailIcon, Square } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  prompt: z.string().min(1),
});

type FormSchema = z.infer<typeof formSchema>;

export const AcceptPrompt = () => {
  const { setPrompt } = useAcceptPrompt();
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
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
        className="max-w-(--breakpoint-md) w-full rounded-2xl bg-accent pb-2.5"
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

      <div className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
        {[
          { icon: <StarSolid className="size-4" />, label: "Welcome" },
          { icon: <EnvelopeSolid className="size-4" />, label: "Newsletter" },
          { icon: <InboxSolid className="size-4" />, label: "Promotional" },
          { icon: <MailIcon className="size-4" />, label: "Transactional" },
          { icon: <CreditCardSolid className="size-4" />, label: "Billing" },
          { icon: <EditSolid className="size-4" />, label: "Custom" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-border p-2 px-3"
            onClick={() => {
              form.setValue("prompt", item.label);
            }}
          >
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
};
