import { Card, CardContent } from "@/components/ui/card";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function SubstackNewsletterRecommendation() {
  return (
    <Html>
      <Head />
      <Preview>Substack Newsletter Recommendation</Preview>
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
                base: "#1a1a1a",
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
            <Section>
              <Text className="text-2xl font-bold text-primary/90">
                Javarevisited Newsletter recommended System Design Newsletter
              </Text>
            </Section>

            <Section className="mt-1">
              <Img
                src="https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb9abffb-bd2d-4fe4-a166-4f88de0a3cba_512x512.png"
                width="32"
                height="32"
                className="rounded-lg"
              />

              <Text className="m-0 mt-4 p-0 text-sm text-primary/90">
                <span className="font-semibold">javinpaul</span> of{" "}
                <span className="font-semibold">Javarevisited Newsletter</span> recommended{" "}
                <span className="font-semibold">System Design Newsletter</span>:
              </Text>
              <Text className="m-0 mb-4 p-0 text-sm italic text-primary/90">
                &quot;One of the best newsletter to learn System Design concepts in depth&quot;
              </Text>
            </Section>

            <Section className="mt-1">
              <Card className="rounded-xl border-none bg-secondary">
                <CardContent className="p-4">
                  <Img
                    src="https://substackcdn.com/image/fetch/w_264,c_limit,f_webp,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe4642e5a-0027-404b-ae07-0ca0e4960741_432x432.png"
                    width="48"
                    height="48"
                    className="mix-blend-multiply"
                    alt="Substack Logo"
                  />

                  <Text className="m-0 mt-2 p-0 text-base font-bold text-primary/90">
                    <span className="font-semibold">System Design Newsletter</span> by{" "}
                    <span className="font-semibold">Aniket Singh</span>
                  </Text>

                  <Text className="m-0 p-0 text-sm text-primary/75">
                    I simplify complex system design concepts, delivering one well-researched
                    article weekly to help you become a better software engineer.
                  </Text>
                </CardContent>
              </Card>
            </Section>

            <Section className="mt-4">
              <Button
                className="bg-brand w-full rounded-lg px-6 py-3 text-center text-[14px] font-medium text-zinc-50 no-underline"
                href="https://substack.com"
              >
                Subscribe to System Design Newsletter
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

              <Section className="mx-auto mb-4 mt-8 flex items-center justify-center">
                <Row className="space-x-2">
                  <Column>
                    <Button className="mx-1 flex w-fit cursor-pointer items-center gap-2 rounded-lg border bg-zinc-950 p-3 text-center text-[14px] font-medium text-zinc-50 no-underline">
                      Get the app
                    </Button>
                  </Column>
                  <Column>
                    <Button className="text-brand mx-1 flex w-fit cursor-pointer items-center gap-2 rounded-lg border p-1 text-center text-[14px] font-medium no-underline">
                      <Row>
                        <Column>
                          <Img
                            src="https://res.cloudinary.com/sutharjay/image/upload/v1737300582/me/fyajxy7ya39uymibutjv.svg"
                            width="32"
                            height="32"
                            alt="Substack Logo"
                          />
                        </Column>
                        <Column>Start writing</Column>
                      </Row>
                    </Button>
                  </Column>
                </Row>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
