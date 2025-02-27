import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function SoftgenWelcomeEmail() {
  return (
    <Html>
      <Head />
      <Preview>
        Welcome to Softgen - Your AI Web App Developer. Build web apps without coding.
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
        <Body className="font-sans">
          <Container className="mx-auto px-4 py-5">
            <Section className="mt-8">
              <Link href="https://softgen.ai">
                <Img
                  src="https://res.cloudinary.com/sutharjay/image/upload/v1740686249/me/projects/reactui-email/logo/softgen-light.svg"
                  width="50"
                  height="50"
                  alt="Softgen Logo"
                  className="hidden dark:flex"
                />
                <Img
                  src="https://res.cloudinary.com/sutharjay/image/upload/v1740686249/me/projects/reactui-email/logo/softgen-dark.svg"
                  width="50"
                  height="50"
                  alt="Softgen Logo"
                  className="flex dark:hidden"
                />
              </Link>
            </Section>

            <Section className="mt-8">
              <Text className="text-xl font-bold leading-tight">Welcome to Softgen!</Text>
            </Section>

            <Section className="mt-2">
              <Text className="text-base">Hey there 👋,</Text>
              <Text className="text-base">
                Thanks for joining Softgen! We&apos;re excited to help you transform your ideas into
                reality. Softgen is your{" "}
                <span className="text-base font-bold">AI Web App Developer</span>. Simply describe
                your vision, give instructions, and build full-stack web apps - no coding required.
              </Text>
            </Section>

            <Section className="mt-4 text-center">
              <table
                style={{
                  border: "1px solid rgb(39 39 42 / 0.2)",
                  borderRadius: "8px",
                  borderCollapse: "collapse",
                  display: "flex",
                  justifyContent: "center",
                  width: "fit-content",
                  alignItems: "center",
                }}
              >
                <tr>
                  <td>
                    <Button
                      className="mx-auto flex w-fit items-center justify-center rounded-[8px] bg-white px-[24px] py-[12px] text-center text-[14px] font-semibold text-zinc-900"
                      href="https://softgen.ai/dashboard"
                    >
                      Start Building Your App →
                    </Button>
                  </td>
                </tr>
              </table>
            </Section>

            <Hr className="mb-6 mt-8 border-gray-200" />

            <Section className="text-left text-sm text-primary/80">
              <Text className="m-0 p-0 font-medium">From,</Text>
              <Text className="m-0 p-0 font-bold">Team Softgen</Text>
              <Text className="m-0 p-0">Softgen – a Kortix AI Corp Product</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
