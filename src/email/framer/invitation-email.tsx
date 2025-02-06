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

export default function FramerInvitationEmail() {
  return (
    <Html>
      <Head />
      <Preview>
        Reminder: Jay has invited you to collaborate on the My Workspace team in Framer
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
                brand: "#0099ff",
                base: "#181818",
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
              <Heading className="mx-0 mb-8 mt-2 p-0 text-[18px] font-normal">Hey there,</Heading>
              <Text className="text-[18px] leading-6 text-primary">
                Jay has invited you to join the My Workspace workspace in{" "}
                <Link
                  href="https://www.framer.com/academy/courses/fundamentals"
                  className="text-primary/75 underline"
                >
                  Framer
                </Link>
                . Please accept the invite before it expires.{" "}
              </Text>
            </Section>

            <Section className="mt-4">
              <Button
                className="bg-brand rounded-[8px] px-[24px] py-[12px] text-center text-[14px] font-medium text-white no-underline"
                href="https://www.framer.com/academy/courses/fundamentals"
              >
                Accept Invite
              </Button>
            </Section>

            <Section className="mt-6">
              <Text className="m-0 mb-2 text-[16px]">Have fun,</Text>
              <Text className="m-0 text-[16px]">✌️Framer</Text>
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
