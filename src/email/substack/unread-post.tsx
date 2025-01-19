import { Card, CardContent } from "@/features/ui/card";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function SubstackUnreadPost() {
  return (
    <Html>
      <Head />
      <Preview>Substack Unread Post</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#ff6719",
                muted: "#eeeeee",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                  DEFAULT: "hsl(var(--card))",
                  foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                  DEFAULT: "hsl(var(--popover))",
                  foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                  DEFAULT: "hsl(var(--primary))",
                  foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                  DEFAULT: "hsl(var(--secondary))",
                  foreground: "hsl(var(--secondary-foreground))",
                },
                accent: {
                  DEFAULT: "hsl(var(--accent))",
                  foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                  DEFAULT: "hsl(var(--destructive))",
                  foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                  "1": "hsl(var(--chart-1))",
                  "2": "hsl(var(--chart-2))",
                  "3": "hsl(var(--chart-3))",
                  "4": "hsl(var(--chart-4))",
                  "5": "hsl(var(--chart-5))",
                },
              },
              borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 3.5px)",
                sm: "calc(var(--radius) - 4px)",
              },
            },
          },
        }}
      >
        <Body className="font-sans">
          <Container className="mx-auto px-4 py-5">
            <Section className="mt-8">
              <Link href="https://substack.com">
                <Img
                  src="https://res.cloudinary.com/sutharjay/image/upload/v1737300582/me/fyajxy7ya39uymibutjv.svg"
                  width="32"
                  height="32"
                  alt="Substack Logo"
                />
              </Link>
            </Section>

            <Section>
              <Text className="text-2xl font-bold text-primary/90">
                You have 2 unread posts from yesterday
              </Text>
            </Section>

            <Section className="mt-1">
              <Card className="rounded-xl ring-1">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Img
                      src="https://res.cloudinary.com/sutharjay/image/upload/v1737300582/me/fyajxy7ya39uymibutjv.svg"
                      width="32"
                      height="32"
                      alt="Substack Logo"
                    />
                    <Text className="text-sm capitalize text-primary/75">ON SUBSTACK</Text>
                  </div>

                  <Text className="text-xl font-bold text-primary/90">
                    &quot;Get a dose of sanity&quot;: How Dan Harris found success with live videos
                  </Text>

                  <Text className="text-sm leading-7 text-primary/75">
                    Dan Harris is a bestselling author, the host of the 10% Happier podcast, and a
                    former ABC news anchor. He went live with Substack CEO Chris Best yesterday to
                    share the creative ways he&apos;s been using live video in the Substack app, and
                    offered recommendation...
                  </Text>

                  <Text className="text-xs leading-4 text-primary/60">
                    378 Likes • 53 Comments • Substack Writers
                  </Text>

                  <Button
                    className="w-full rounded-lg bg-[#eeeeee] px-6 py-3 text-center text-[14px] font-medium text-zinc-950 no-underline dark:text-zinc-50"
                    href="https://www.framer.com/downloads/"
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-4 rounded-xl ring-1">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Img
                      src="https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb9abffb-bd2d-4fe4-a166-4f88de0a3cba_512x512.png"
                      width="28"
                      height="28"
                      className="rounded-full"
                      alt="Substack Logo"
                    />
                    <Text className="text-sm capitalize text-primary/75">
                      Javarevisited Newsletter
                    </Text>
                  </div>

                  <Text className="text-xl font-bold text-primary/90">
                    What is Single Point of Failure (SPOF) in System Design?
                  </Text>

                  <Text className="text-sm leading-7 text-primary/75">
                    Before we go on, can you do me a favor and share this post with other creators
                    and businesses who might benefit from it? It would mean a lot to me. Thank
                    you!...
                  </Text>

                  <Text className="text-xs leading-4 text-primary/60">
                    Preview • 7 Likes • javinpaul
                  </Text>

                  <Button
                    className="w-full rounded-lg bg-[#eeeeee] px-6 py-3 text-center text-[14px] font-medium text-zinc-950 no-underline dark:text-zinc-50"
                    href="https://www.framer.com/downloads/"
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Section>

            <Section className="mt-4">
              <Button
                className="bg-brand w-full rounded-lg px-6 py-3 text-center text-[14px] font-medium text-zinc-50 no-underline"
                href="https://substack.com"
              >
                Continue reading in inbox
              </Button>
            </Section>

            <Section className="mt-8 text-center font-light text-primary/50">
              <Text className="m-0 p-0 text-xs">@ 2025 Substack Inc.</Text>
              <Text className="m-0 p-0 text-xs">
                548 Market street PMB 72296, san Francisco, CA 94104
              </Text>
              <Link
                href="https://example.com/unsubscribe"
                className="m-0 p-0 text-xs text-primary/60 underline"
              >
                Unsubscribe
              </Link>

              <Section className="mx-auto mt-8 flex items-center justify-center">
                <Button className="text-brand flex w-fit items-center gap-2 rounded-lg border p-3 text-center text-[14px] font-medium no-underline">
                  Start writing
                </Button>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
