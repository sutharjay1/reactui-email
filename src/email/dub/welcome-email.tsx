import {
  Body,
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

export default function DubWelcomeEmail() {
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
                brand: "#0a0a0a",
                muted: "#fafafa",
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
        <Body className="font-brand font-sans">
          <Container className="mx-auto my-[20px] px-4 py-5">
            <Section className="mt-2 flex w-full flex-col items-center justify-center">
              <Img
                src="https://res.cloudinary.com/sutharjay/image/upload/v1739369064/me/projects/reactui-email/dub-co.png"
                width="50"
                height="50"
                alt="Framer"
                className="mx-0 my-0 rounded-[8px]"
              />
            </Section>
            <Section className="mt-4">
              <Heading className="mx-0 mb-8 mt-2 p-0 text-lg font-normal"></Heading>
              <Text className="text-center text-[32px] font-bold leading-[4rem] text-primary">
                Welcome to Dub
              </Text>
            </Section>
            <Section className="mt-8">
              <Img
                src="https://res.cloudinary.com/sutharjay/image/upload/v1739369363/me/projects/reactui-email/j21e5x4vpafavcqy0mtw.png"
                alt="Framer Academy"
                className="w-full cursor-pointer rounded-[8px]"
              />
            </Section>
            <Section className="mt-4">
              <Text className="text-[16px] leading-6 text-primary/80">Thanks for signing up!</Text>

              <Text className="text-[16px] leading-6 text-primary/80">
                {
                  " My name is Steven, and I'm the creator of Dub - the open-source Bitly alternative.  I'm excited to have you on board!"
                }
              </Text>

              <Text className="mb-4 text-[16px] font-semibold text-primary/80">
                Here are a few things you can do:
              </Text>
              <ul className="list-disc pl-6">
                <li className="text-[14px] leading-6 text-primary/80">
                  Create a custom{" "}
                  <Link href="https://dub.sh" className="text-blue-500">
                    Dub.sh short link
                  </Link>
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  Create a new{" "}
                  <Link href="https://dub.sh/project" className="text-blue-500">
                    project
                  </Link>{" "}
                  and add your custom domain
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  Star the repo on{" "}
                  <Link href="https://github.com/steven-tey/dub" className="text-blue-500">
                    GitHub
                  </Link>
                </li>
                <li className="text-[14px] leading-6 text-primary/80">
                  Follow us on{" "}
                  <Link href="https://twitter.com/dubdotsh" className="text-blue-500">
                    Twitter
                  </Link>
                </li>
              </ul>

              <Text className="text-[14px] leading-6 text-primary/80">
                {"Let me know if you have any questions or feedback. I'm always happy to help!"}
              </Text>
              <Text className="mt-4 text-[14px] leading-6 text-primary/80">Steven from Dub</Text>
            </Section>
            <Hr className="mx-0 my-[14px] h-[1px] w-full border border-solid border-muted-foreground" />
            <Section>
              <Text className="text-[14px] leading-6 text-primary/80">
                © 2023 Dub.sh{" "}
                <Link href="https://dub.sh/unsubscribe" className="text-primary/60 underline">
                  Unsubscribe
                </Link>
              </Text>
              <Text className="text-[14px] leading-6 text-primary/80">
                {
                  "If you have any feedback or questions about this email, simply reply to it. I'd love to hear from you!"
                }
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
