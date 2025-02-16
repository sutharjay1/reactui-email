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

export default function VerificationEmail() {
  return (
    <Html>
      <Head />
      <Preview>Verify your email to start using Supabase!</Preview>

      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              fontFamily: {
                sans: ["var(--font-sans)"],
              },
              colors: {
                brand: "#34B27B",
                muted: "#4B5563",
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
          <Container className="mx-auto my-[20px] px-4 py-5">
            <Section className="mt-2">
              <Link href="https://supabase.com">
                <Img
                  src="https://res.cloudinary.com/sutharjay/image/upload/v1739700369/me/projects/reactui-email/logo/supabase.svg"
                  width="32"
                  height="32"
                  alt="Supabase Logo"
                />
              </Link>
            </Section>

            <Section className="mt-8">
              <Text className="text-2xl font-bold">
                Confirm your email address to start building with Supabase
              </Text>
            </Section>

            <Section className="mt-4">
              <Text className="text-base">
                You can start building with Supabase right away once you&apos;ve confirmed that{" "}
                <Link href="https://supabase.com" className="text-brand">
                  sutharjay@proton.me
                </Link>{" "}
                is your email. Click the button below to confirm.
              </Text>
            </Section>

            <Section className="mt-4 text-center">
              <table
                style={{
                  border: "1px solid rgb(39 39 42 / 0.2)",
                  borderRadius: "4px",
                  borderCollapse: "collapse",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                }}
              >
                <tr>
                  <td>
                    <Button
                      className="bg-brand flex w-fit items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-semibold text-white"
                      href="https://supabase.com"
                    >
                      Confirm Email Address
                    </Button>
                  </td>
                </tr>
              </table>
            </Section>

            <Section className="mt-4">
              <Text className="text-sm text-primary/60">
                If you didn&apos;t request for this, you can safely ignore this email.
              </Text>

              <Text className="text-[0.75rem]">
                Supabase Inc, 3500 S. DuPont Highway, Kent 19901, Dover, Delaware, USA
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
