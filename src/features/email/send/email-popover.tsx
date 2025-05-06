"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "@mynaui/icons-react";
import { useMutation } from "@tanstack/react-query";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loading from "@/components/ui/loading";
import { errorToast, successToast } from "@/features/global/toast";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { emailTrigger } from "./email-trigger";

const formSchema = z.object({
  to: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
});

type FormSchema = z.infer<typeof formSchema>;

interface EmailSendPopoverProps {
  html: string;
  label: string;
  brand: string;
}

export function EmailSendPopover({ html, label, brand }: EmailSendPopoverProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "",
      subject: `Testing ${brand.charAt(0).toUpperCase().concat(brand.slice(1))} - ${label}`,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormSchema) => {
      return emailTrigger({
        subject: data.subject,
        template: <div dangerouslySetInnerHTML={{ __html: html }} />,
        to: data.to,
      });
    },
    onSuccess: () => {
      successToast("Email sent successfully");
      setOpen(false);
      form.reset();
    },
    onError: () => {
      errorToast("Failed to send email", {
        description: "There was an error sending your email. Please try again.",
      });
    },
  });

  return (
    <div className={cn("flex items-center justify-between gap-4")}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Send className="mr-2 h-4 w-4" />
            <p className="text-base text-primary/75 hover:text-primary">Send</p>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="mx-auto w-full max-w-3xl p-6 pt-0">
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <h1 className="text-xl font-extrabold tracking-tight text-foreground">
                Send Test Email
              </h1>
              <p className="text-base text-primary">Send a test email to verify the template.</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutate(data))} className="space-y-4">
                <FormField
                  control={form.control}
                  name="to"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipient</FormLabel>
                      <FormControl>
                        <Input placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    Powered by{" "}
                    <Link
                      href="https://www.useplunk.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline underline-offset-4 hover:text-primary"
                    >
                      Plunk
                    </Link>
                  </p>
                  <Button type="submit" disabled={isPending} className="flex items-center gap-2">
                    {isPending ? (
                      <>
                        <Loading className="h-4 w-4 text-background" />
                        Sending...
                      </>
                    ) : (
                      "Send"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
