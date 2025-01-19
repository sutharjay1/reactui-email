import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface WelcomeToFramerOneProps {
  username?: string;
}

export default function WelcomeToFramerOne({ username = "Jay" }: WelcomeToFramerOneProps) {
  return (
    <Html>
      <Head />
      <Preview>Get started with our Fundamentals course and discover the power of Framer.</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#212121",
                muted: "#738A94",
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
            <Section className="mt-4">
              <Img
                src="https://d3b9kr64nievew.cloudfront.net/cm1rki22e0174akkvdbsg2yzi/cm1rkyfp8000l1sulf3ko6p6v.png"
                width="50"
                height="50"
                alt="Framer"
                className="mx-0 my-0"
              />
            </Section>

            <Section className="mt-4">
              <Heading className="mx-0 mb-8 mt-2 p-0 text-lg font-normal">
                Hey {username}, welcome to Framer!
              </Heading>
              <Text className="text-[14px] leading-6 text-primary/75">
                We&apos;re thrilled you chose us to build your website. To get started, we recommend
                watching our Framer Academy{" "}
                <Link
                  href="https://www.framer.com/academy/courses/fundamentals"
                  className="text-primary/75 underline"
                >
                  Fundamentals course
                </Link>
                . This will help you get up and running quickly, especially if you&apos;re
                transitioning from Figma or Sketch.
              </Text>
            </Section>

            <Section className="mt-8">
              <Img
                src="https://d3b9kr64nievew.cloudfront.net/cm1rki22e0174akkvdbsg2yzi/cm1rucu6q0142tbx2o3qu05nh.jpg"
                alt="Framer Academy"
                className="w-full cursor-pointer rounded-2xl"
              />
            </Section>

            <Section className="mt-8">
              <Heading className="mx-0 mb-2 p-0 text-[16px] font-normal">
                Why watch the Fundamentals course?
              </Heading>
              <ul className="list-disc pl-6">
                <li className="text-[14px] leading-6 text-primary/75">
                  Quick start: Get your first site live in minutes.
                </li>
                <li className="text-[14px] leading-6 text-primary/75">
                  Easy transition: Perfect for designers moving from Figma or Sketch.
                </li>
                <li className="text-[14px] leading-6 text-primary/75">
                  Expert tips: Learn best practices from the pros.
                </li>
              </ul>
            </Section>

            <Section className="mt-8">
              <Button
                className="rounded-lg bg-[#0099ff] px-6 py-3 text-center text-[14px] font-medium text-white no-underline"
                href="https://www.framer.com/academy/courses/fundamentals"
              >
                Watch Fundamentals Course
              </Button>
            </Section>

            <Section className="mt-8">
              <Text className="text-[14px] leading-6 text-primary/75">
                We hope these tutorials help you settle in during your first day with Framer.
                Tomorrow, we&lsquo;ll showcase fantastic{" "}
                <Link
                  href="https://www.framer.com/marketplace/"
                  className="text-primary/75 underline"
                >
                  Framer Templates
                </Link>{" "}
                to create sites with ease!
              </Text>
              <Text className="text-[14px] leading-6">✌️ Framer</Text>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            <Section>
              <Text className="text-[12px] leading-6 text-primary/75">
                You are receiving this email because you opted-in to receive updates from Framer
                <br />
                Framer, Rozengracht 207B 1016 LZ Amsterdam Netherlands
                <br />
                <Link
                  href="https://example.com/unsubscribe"
                  className="font-semibold text-primary/60"
                >
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
