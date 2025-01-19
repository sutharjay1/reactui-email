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

interface WelcomeToFramerTwoProps {
  username?: string;
}

export default function WelcomeToFramerTwo({ username = "Jay" }: WelcomeToFramerTwoProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Download Framer for Mac or Windows and enjoy a smoother, more seamless experience.
      </Preview>
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
                src="https://d3b9kr64nievew.cloudfront.net/cm1rocldn025zsgcy9suq2qbj/cm1rogugg02roub1vlgmhb4sy.png"
                width="50"
                height="50"
                alt="Framer"
                className="mx-0 my-0"
              />
            </Section>

            <Section className="mt-4">
              <Heading className="mx-0 mb-8 mt-2 p-0 text-lg font-normal">
                Hey {username}, are you building Framer sites from your browser?
              </Heading>
              <Text className="text-[14px] leading-[24px] text-primary/75">
                For a smoother, more seamless experience, grab the Framer app for{" "}
                <Link
                  href="https://www.framer.com/downloads/"
                  className="text-primary/75 underline"
                >
                  Mac or Windows
                </Link>
                . Enjoy faster performance and additional features that make designing sites even
                easier.
              </Text>
            </Section>

            <Section className="mt-8">
              <Img
                src="https://d3b9kr64nievew.cloudfront.net/cm1rocldn025zsgcy9suq2qbj/cm1ruf7x7011lblkcdecne9h8.jpg"
                alt="Framer Desktop Apps"
                className="w-full rounded-2xl"
              />
            </Section>

            <Section className="mt-8">
              <Heading className="mx-0 mb-4 p-0 text-[16px] font-normal text-primary/75">
                Why download the Framer app?
              </Heading>
              <ul className="mt-4 list-disc pl-6">
                <li className="text-[14px] leading-6 text-primary/75">
                  Faster performance: Experience quicker load times and smoother interactions.
                </li>
                <li className="text-[14px] leading-6 text-primary/75">
                  Enhanced features: Access features available only on the desktop app.
                </li>
                <li className="text-[14px] leading-6 text-primary/75">
                  Improved workflow: Streamline your design process with advanced tools.
                </li>
              </ul>
            </Section>

            <Section className="mt-8">
              <Button
                className="rounded-lg bg-[#0099ff] px-6 py-3 text-center text-[14px] font-medium text-white no-underline"
                href="https://www.framer.com/downloads/"
              >
                Download Framer app
              </Button>
            </Section>

            <Section className="mt-4">
              <Text className="text-[14px] leading-6 text-primary/75">
                Tomorrow, we&#39;ll show you how to easily turn your static Figma designs into
                dynamic websites using the{" "}
                <Link
                  href="https://www.framer.com/figma-to-html/"
                  className="text-primary/75 underline"
                >
                  free plugin
                </Link>
                .
              </Text>
              <Text className="text-[14px] leading-6 text-primary/75">✌️ Framer</Text>
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
